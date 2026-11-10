import 'server-only';
import xmlrpc from 'xmlrpc';

// Lazy a propósito: nada de esto corre al importar el módulo. Next evalúa los
// módulos de una ruta en "Collecting page data" durante el build; si una env
// var faltara ahí, un `new URL(...)` a nivel de módulo tiraría abajo todo el
// build en vez de fallar solo cuando efectivamente se llama a odooExecute.
function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name} (configuración de Odoo)`);
  }
  return value;
}

type OdooClients = {
  commonClient: xmlrpc.Client;
  objectClient: xmlrpc.Client;
  db: string;
  username: string;
  apiKey: string;
};

let clients: OdooClients | null = null;

function getClients(): OdooClients {
  if (clients) return clients;

  const ODOO_URL = requiredEnv('ODOO_URL');
  const db = requiredEnv('ODOO_DB');
  const username = requiredEnv('ODOO_USERNAME');
  const apiKey = requiredEnv('ODOO_API_KEY');

  const { hostname } = new URL(ODOO_URL);

  clients = {
    commonClient: xmlrpc.createSecureClient({
      host: hostname,
      port: 443,
      path: '/xmlrpc/2/common',
    }),
    objectClient: xmlrpc.createSecureClient({
      host: hostname,
      port: 443,
      path: '/xmlrpc/2/object',
    }),
    db,
    username,
    apiKey,
  };

  return clients;
}

let cachedUid: number | null = null;

function authenticate(): Promise<number> {
  if (cachedUid) return Promise.resolve(cachedUid);

  const { commonClient, db, username, apiKey } = getClients();

  return new Promise((resolve, reject) => {
    commonClient.methodCall('authenticate', [db, username, apiKey, {}], (err, uid) => {
      if (err) return reject(err);
      cachedUid = uid as number;
      resolve(uid as number);
    });
  });
}

export async function odooExecute<T = any>(
  model: string,
  method: string,
  args: any[] = [],
  kwargs: Record<string, any> = {}
): Promise<T> {
  const uid = await authenticate();
  const { objectClient, db, apiKey } = getClients();

  return new Promise((resolve, reject) => {
    objectClient.methodCall(
      'execute_kw',
      [db, uid, apiKey, model, method, args, kwargs],
      (err, result) => (err ? reject(err) : resolve(result as T))
    );
  });
}
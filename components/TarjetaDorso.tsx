'use client';

import { useFlipCard } from '@/components/FlipCard';
import { Empleado } from '@/types';

type TarjetaDorsoProps = {
  empleado: Empleado;
  qrSvg: string;
};

const TarjetaDorso = ({ empleado, qrSvg }: TarjetaDorsoProps) => {
  const { toggleFlip } = useFlipCard();

  return (
    <div className="h-full rounded-3xl bg-primary-green/60 backdrop-blur-sm px-8 py-6 short:py-4 text-center flex flex-col items-center justify-center gap-4 short:gap-3">
      <div
        className="w-44 h-44 short:w-36 short:h-36 rounded-2xl bg-white p-3 shadow-lg [&_svg]:w-full [&_svg]:h-full"
        role="img"
        aria-label={`Código QR para agendar a ${empleado.nombre}`}
        dangerouslySetInnerHTML={{ __html: qrSvg }}
      />
      <p style={{ fontFamily: 'Poppins' }} className="text-white text-sm leading-5">
        Escaneá con la cámara para agendar a{' '}
        <span className="font-semibold whitespace-nowrap">{empleado.nombre}</span>
      </p>
      <button
        type="button"
        onClick={toggleFlip}
        className="font-jakarta text-sm text-white underline underline-offset-4 hover:opacity-80 cursor-pointer"
      >
        Volver
      </button>
    </div>
  );
};

export default TarjetaDorso;

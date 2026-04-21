import { MetadataRoute } from "next";

const BASE_URL = "https://reynosobienesraices.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/desarrollos`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/citadino`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/el-cauce`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/maruyama`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/ladera-norte`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/los-arreboles`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/campo-nuevo`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/desarrollos/campo-nuevo-3`,
      lastModified: new Date("2026-04-21T16:58:12+00:00"),
      priority: 0.8,
    },
  ];
}

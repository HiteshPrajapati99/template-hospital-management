/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: "production" | "devlopment";
  readonly VITE_API_URL: string;
  readonly VITE_MAP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

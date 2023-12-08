/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SHOW_COPY_RESOURCE_PERMALINK: "true" | "false"
    readonly VITE_ADMIN_ROOT: string
    readonly VITE_SCHEMA_DOCUMENTATION_URL: string
    readonly VITE_SCHEMA_VALIDATA_URL: string
    readonly VITE_TITLE: string
    readonly VITE_ONLY_LOCALES: string
    readonly VITE_DEFAULT_LANG: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
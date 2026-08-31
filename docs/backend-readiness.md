# Preparación para backend

La UI consume el contexto de aplicación y servicios de dominio; no accede directamente a `localStorage`. La persistencia está aislada y versionada con migración defensiva desde v1. `Repository<T>` y `SettingsRepository<T>` definen el contrato mínimo sustituible por adaptadores Supabase.

## Pendiente exclusivo de backend

- Autenticación, autorización y espacios multiusuario.
- Persistencia remota, concurrencia y auditoría.
- Numeración/comprobantes fiscales ARCA e importación histórica individual.
- Transacciones atómicas para Invoice + origen y Payment + estados derivados.
- Validaciones de integridad referencial en base de datos.

No se implementaron APIs, Supabase, bancos, IA, notificaciones ni tracking de horas.

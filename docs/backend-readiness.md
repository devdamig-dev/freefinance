# Preparación para Supabase

## Estado actual

La demo usa un estado semilla y persiste el agregado completo bajo `nexo-freelance-os-v1` en `localStorage`. El acceso está encapsulado por el proveedor; los componentes no leen storage. `src/data/repository.ts` define el contrato genérico y su implementación local. La importación ARCA, la clasificación del Inbox y el matching son simulados/locales; no hay autenticación, conciliación bancaria, funciones fiscales ni IA remota.

## Esquema sugerido

Tablas: `workspaces`, `profiles`, `clients`, `recurring_services`, `projects`, `project_stages`, `quotes`, `quote_stages`, `express_jobs`, `invoices`, `credit_notes`, `payments`, `inbox_items`, `monthly_targets`, `expected_revenue_items`, `insights` y `activity_log`. Todas deben incluir `id uuid`, `workspace_id uuid`, `created_at`, `updated_at`; importes como `numeric(18,2)` nullable cuando corresponda.

Claves foráneas siguen las relaciones del modelo. Índices: `(workspace_id, status)`, fechas/meses previstos, `client_id`, `invoice_id`, y único `(workspace_id, external_invoice_id)` para evitar dobles importaciones. Las etapas requieren orden estable.

## Sustitución de repositories

Crear adaptadores `SupabaseClientRepository`, `SupabaseProjectRepository`, `SupabaseQuoteRepository`, `SupabaseInvoiceRepository`, `SupabasePaymentRepository` e Inbox/Express/Recurring equivalentes que implementen los mismos contratos. Inyectarlos en un proveedor; los componentes y servicios puros permanecen intactos. Conviene migrar las mutaciones multi-entidad (convertir presupuesto y facturar etapa) a funciones SQL transaccionales.

## Migraciones y seguridad

1. Crear enums, tablas, restricciones e índices.
2. Cargar workspace, perfil y semillas normalizadas.
3. Recalcular expectativas en una función idempotente por mes.
4. Importar el snapshot local con validación de IDs y totales.
5. Activar RLS en todas las tablas: el usuario sólo accede a workspaces cuya membresía esté activa. Policies separadas para `select`, `insert`, `update`, `delete`; service role sólo para importación.
6. Agregar auditoría, timestamps por trigger y pruebas de aislamiento entre workspaces.

Antes del backend se debe validar con uso real: vocabulario de estados, regla exacta del piso para recurrencias variables, tratamiento impositivo de notas de crédito, edición posterior a facturar, zonas horarias, moneda y política de borrado/archivo.

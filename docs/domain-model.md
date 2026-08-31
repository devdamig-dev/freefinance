# Modelo de dominio

El agregado local contiene `Client`, `RecurringService`, `Project` (con `ProjectStage`), `Quote` (con plan de cobro), `ExpressJob`, `ManualExpectedIncome`, `Invoice`, `Payment`, `CreditNote`, `InboxItem`, `MonthlyRevenueSnapshot` y `AppSettings`.

`description` o notas están disponibles en todos los registros con contexto económico. Los registros operativos prefieren `archived`, `active` o estados de cancelación a eliminación destructiva.

## Datos históricos

`MonthlyRevenueSnapshot` representa únicamente resúmenes agregados (`month`, `amount`, `source`). No tiene `clientId` y no puede alimentar perfiles ni concentración. Invoice siempre representa un comprobante individual.

## Invariantes

- Una fuente sólo admite una factura activa por `(origin, originId)`.
- Una etapa `facturada` tiene `invoiceId`; sólo pasa a `cobrada` al cobrar por completo su Invoice.
- Un Quote con `convertedProjectId` deja de participar del forecast.
- Importes `null` permanecen visibles como pendientes y nunca se convierten silenciosamente en ingreso cero.
- CreditNote reduce facturación neta, no bruta.

# Remediación profunda de QA

## Problemas y soluciones

| Problema | Solución aplicada | Archivos |
| --- | --- | --- |
| Los totales históricos estaban representados como facturas de clientes inventadas. | Se eliminaron las facturas y pagos consolidados. Los importes confirmados viven en `MonthlyRevenueSnapshot` y sólo alimentan análisis agregado. | `src/data/seed.ts`, `src/domain/types.ts`, `src/domain/services.ts` |
| Cálculos financieros y fechas estaban escritos en componentes. | Se incorporaron selectores de YTD, promedio, recurrencia, neto, cobrado, saldo y comparación, junto con `selectedPeriod`. | `src/domain/services.ts`, `src/components/app-provider.tsx` |
| Express no ingresaba al forecast y quotes de otros períodos sí. | El generador incluye Express y manuales; el forecast exige un mes y filtra por cierre/primera etapa. | `src/domain/services.ts` |
| Quote convertido y Project podían duplicarse. | `convertedProjectId` excluye el quote y el proyecto conserva `sourceQuoteId`. | `src/domain/services.ts`, `src/components/app-shell.tsx` |
| La facturación podía repetirse y desincronizar etapas. | Un servicio central valida la unicidad `(origin, originId)` y sincroniza etapa/express al crear factura y cobrarla. | `src/domain/services.ts`, `src/components/app-shell.tsx` |
| Configuración, buscador, filtros e Inbox tenían acciones decorativas. | La configuración persiste, Command Palette navega, filtros cambian la lista e Inbox guarda la conversión. | `src/components/app-shell.tsx`, `src/components/app-provider.tsx` |
| Faltaban crédito, vencimiento y pagos parciales robustos. | Se agregaron `CreditNote`, `dueDate`, cálculo bruto/neto y validación de sobrepago. | `src/domain/types.ts`, `src/domain/services.ts` |

## Límites actuales

La persistencia sigue siendo local y versionada en `nexo-freelance-os-v2`. La importación fiscal, autenticación, sincronización multiusuario, numeración fiscal y confirmación explícita de sobrepagos quedan para backend. Los snapshots históricos no permiten concentración por cliente: la interfaz lo indica en vez de inventar una distribución.

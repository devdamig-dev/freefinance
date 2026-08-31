# Flujos del producto

## Presupuesto → proyecto → cobro

1. Se crea un presupuesto con cliente, importe, probabilidad y etapas opcionales.
2. `Aprobar` cambia su estado comercial sin crear todavía ingreso real.
3. `Convertir en proyecto` crea una sola vez el proyecto y sus etapas calculadas por porcentaje.
4. Una etapa con importe definido pasa a `Lista para facturar` y aparece en Facturación.
5. Generar factura vincula su `invoiceId`; registrar un pago cambia la factura a parcial o cobrada.

## Recurrente → ingreso esperado → factura → cobro

Un servicio activo genera una expectativa mensual. Los variables sin estimación quedan en revisión. La acción Facturar crea el control interno; un pago posterior liquida total o parcialmente la factura.

## Express → factura → cobro

El formulario rápido crea un trabajo confirmado. Desde la misma lista puede generarse la factura y desde Facturación o Cobros se registra el pago.

## Inbox → entidad económica

La captura crea un ítem sin clasificación. Reglas por palabras sugieren idea, presupuesto o express. Convertir abre el formulario de destino con el texto precargado; archivar lo saca de la bandeja.

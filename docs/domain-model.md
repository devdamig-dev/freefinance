# Modelo de dominio

Nexo Freelance OS separa deliberadamente lo **esperado**, lo **facturado** y lo **cobrado**. Un valor desconocido se guarda como `null`; nunca se convierte en cero.

## Entidades y relaciones

- `Client` es la contraparte y puede ser recurrente, de proyectos o híbrida.
- `RecurringService` pertenece a un cliente y genera un `ExpectedRevenueItem` mensual, pero no una factura.
- `Project` pertenece a un cliente y contiene `ProjectStage`. Una etapa puede vincularse opcionalmente con una factura.
- `Quote` contiene `QuoteStage`. Al aprobar y convertir, produce un proyecto y etapas preservando cliente, descripción, importe, porcentajes, meses y notas.
- `ExpressJob` captura trabajos puntuales y puede originar una factura.
- `Invoice` tiene un origen explícito y un estado de cobro independiente. `Payment` pertenece a una factura y permite cobros parciales.
- `InboxItem` comienza sin clasificar y se transforma en una entidad comercial sin comportarse como tarea.
- `ExpectedRevenueItem` es una proyección derivada; `RevenueForecast` agrega piso, probable y potencial.
- `Insight` es la salida tipada y reemplazable del motor determinístico.

Los estados comercial (`QuoteStatus`), financiero de etapa (`StageStatus`) y de cobro (`Invoice.status`) no comparten un enum.

## Servicios puros

`src/domain/services.ts` concentra generación de expectativas, pronóstico mensual/anual, concentración, patrones recurrentes, insights, ponderación y matching. No depende de React, navegador ni almacenamiento y se prueba con Vitest.

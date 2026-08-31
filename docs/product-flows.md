# Flujos de producto

```text
QUOTE → APPROVED → PROJECT → PROJECT STAGE → EXPECTED REVENUE → INVOICE → PAYMENT
RECURRING SERVICE → EXPECTED REVENUE → INVOICE → PAYMENT
EXPRESS JOB → EXPECTED REVENUE → INVOICE → PAYMENT
```

El control mensual calcula Piso, Probable y Potencial para `selectedPeriod`. Facturado y Cobrado se derivan de Invoice y Payment del período. Al convertir un Quote, éste queda vinculado, no vuelve a convertirse ni aporta al pipeline; sus etapas pasan a ser las fuentes económicas.

Inbox conserva el texto original como descripción del registro convertido y almacena entidad, id y fecha de conversión.

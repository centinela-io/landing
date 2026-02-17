# Centinela Landing Page - Arquitectura de Contenido v2

> **Principio rector**: El diferenciador de Centinela NO es "pregunta lo que sea" (eso cualquiera lo replica).
> El diferenciador es la **Capa de Conocimiento** — la infraestructura que captura, preserva y activa el conocimiento institucional de la empresa.
> Concepto central: **Soberanía Cognitiva**.

---

## Posicionamiento Estratégico

### El marco de Nadella (Davos 2026)

> *"If you're not able to embed the tacit knowledge of the firm in a set of weights in a model that you control, by definition you have no sovereignty."*
> — Satya Nadella, CEO Microsoft, Davos 2026

> *"If you are not capturing the intelligence of your organization within your own infrastructure, you are effectively a tenant in your own industry."*

**Traducción a Centinela**: Las empresas que solo usan APIs de IA externas están **filtrando su valor empresarial**. Centinela construye una capa de conocimiento PROPIA para cada empresa — sus datos, su lógica, sus relaciones, su contexto. Eso no se replica.

### Propuesta de valor (una línea)

**ES**: *Centinela construye la capa de conocimiento de tu empresa — conecta tus datos, captura tu lógica de negocio y te da soberanía sobre tu inteligencia organizacional.*

**EN**: *Centinela builds your company's knowledge layer — connects your data, captures your business logic, and gives you sovereignty over your organizational intelligence.*

### Tres pilares del mensaje

| Pilar | Concepto | Por qué importa |
|-------|----------|-----------------|
| **Soberanía Cognitiva** | Tu empresa controla su propio conocimiento, no depende de APIs externas | Nadella: "a tenant in your own industry" |
| **Knowledge Layer** | Infraestructura de grafos de contexto que entiende relaciones y lógica de negocio | No es un chatbot — es memoria institucional |
| **Verticales concretas** | Casos de uso reales por departamento con resultados medibles | Prueba de que funciona, no promesas genéricas |

---

## Arquitectura Sección por Sección

---

### 1. NAVBAR
**Propósito**: Navegación + credibilidad

| Elemento | Contenido |
|----------|-----------|
| Logo | Centinela (logo actual, NO abusar del ícono pastilla — usar solo aquí y footer) |
| Links | Producto · Knowledge Layer · Verticales · Seguridad · Precios |
| Acciones | Toggle tema (dark/light) · Idioma (EN/ES) · **"Solicitar Demo"** (CTA) |

**Nota de diseño**: Mantener glassmorphism actual. Funciona bien.

---

### 2. HERO
**Propósito**: Primera impresión. Comunicar QUÉ es Centinela y POR QUÉ es diferente.

**Mensaje central**: NO "todos tus datos, una conversación". SÍ: la infraestructura de conocimiento que le da soberanía cognitiva a tu empresa.

| Elemento | ES | EN |
|----------|----|----|
| Badge | `Soberanía cognitiva para tu empresa` | `Cognitive sovereignty for your company` |
| H1 línea 1 | `Tu conocimiento.` | `Your knowledge.` |
| H1 línea 2 (gradient) | `Tu ventaja competitiva.` | `Your competitive edge.` |
| Descripción | `Centinela construye la capa de conocimiento de tu organización — conecta tus sistemas, captura tu lógica de negocio y convierte datos dispersos en inteligencia accionable. Sin depender de APIs externas.` | `Centinela builds your organization's knowledge layer — connects your systems, captures your business logic, and turns scattered data into actionable intelligence. No external API dependency.` |
| CTA primario | `Ver cómo funciona` | `See how it works` |
| CTA secundario | `Solicitar demo` | `Request demo` |

**Loop (3 pasos)**:

| Paso | ES | EN | Ícono |
|------|----|----|-------|
| 1 | Conectar | Connect | Check circle |
| 2 | Modelar | Model | Target/crosshair |
| 3 | Decidir | Decide | Centinela logo |

> **Nota**: "Decidir" no "Responder". El valor no es la respuesta, es que la empresa pueda tomar decisiones con su propio conocimiento.

**Trust signals**: Mantener los que hay (logos de empresas). Agregar si hay más.

**Componentes visuales a mantener**: Graph background animado, badge con pulse dot, gradientes en texto, botones con shine animation.

**Logo**: Usar el ícono de Centinela SOLO en el paso 3 del loop y en el navbar. No repetir en toda la landing.

---

### 3. PROBLEM SECTION
**Propósito**: Generar identificación. "Esto me pasa a mí."

**Enfoque**: No hablar de datos dispersos (genérico). Hablar de **conocimiento que se pierde**.

| Elemento | ES | EN |
|----------|----|----|
| Label | `El costo oculto` | `The hidden cost` |
| Headline | `Tu empresa sabe más de lo que puede usar` | `Your company knows more than it can use` |
| Pregunta | `¿Qué pasaría si el conocimiento acumulado de tu organización estuviera a una pregunta de distancia?` | `What if your organization's accumulated knowledge was one question away?` |
| CTA | `Construye tu capa de conocimiento →` | `Build your knowledge layer →` |

**4 cards de problemas concretos**:

| # | ES | EN | Ícono |
|---|----|----|-------|
| 1 | El conocimiento vive en la cabeza de 3 personas | Critical knowledge lives in 3 people's heads | Brain/users |
| 2 | Cada nuevo empleado parte de cero | Every new employee starts from zero | User-plus |
| 3 | Las decisiones se toman con datos incompletos | Decisions are made with incomplete data | Alert-triangle |
| 4 | La lógica de negocio no está documentada | Business logic isn't documented | File-x |

**Componentes visuales**: Mantener estructura 2 columnas (texto izq + cards der), nodos animados de fondo, pulse dots.

---

### 4. TRUSTED BY
**Propósito**: Prueba social

Mantener diseño actual (logos circulares con quote). Agregar logos cuando haya más clientes.

---

### 5. DEMO SECTION — VERTICALES (Casos de Uso)
**Propósito**: Mostrar resultados CONCRETOS por departamento. Es el "proof point".

> **Este es el corazón de la landing.** Aquí se demuestra que Centinela no es genérico — entiende verticales específicas.

**Estructura**:
- Header con título + subtítulo
- **Tabs de verticales** (arriba) — el usuario clickea y cambia el caso de uso
- **Mockup de chat** (abajo) — muestra pregunta + respuesta real de Centinela
- Sidebar del mockup restaurada (la versión anterior que gustó)
- Métricas abajo del mockup

| Elemento | ES | EN |
|----------|----|----|
| Título | `Conocimiento activado por vertical` | `Knowledge activated by vertical` |
| Subtítulo | `Cada departamento tiene su propia capa de conocimiento. Mira cómo Centinela responde con contexto real de tu empresa.` | `Every department has its own knowledge layer. See how Centinela responds with real context from your company.` |

**5 Verticales (tabs)**:

#### Tab 1: Contabilidad & Reconciliaciones
| Elemento | ES | EN |
|----------|----|----|
| Pregunta | `¿Cuántas facturas sin conciliar tenemos este mes?` | `How many unreconciled invoices do we have this month?` |
| Respuesta intro | `Estado de conciliación del mes:` | `This month's reconciliation status:` |
| Dato 1 | `247 facturas pendientes de conciliación` | `247 invoices pending reconciliation` |
| Dato 2 | `89% match automático — 220 facturas conciliadas` | `89% automatic match — 220 invoices reconciled` |
| Dato 3 | `27 requieren revisión manual (top 3 diferencias abajo)` | `27 require manual review (top 3 differences below)` |
| Dato 4 (alerta) | `$125K en facturas con más de 30 días` | `$125K in invoices older than 30 days` |
| Recomendación | `Los 27 casos manuales se concentran en 3 proveedores. Recomiendo agendar sesión de revisión con cuentas por pagar esta semana.` | `The 27 manual cases are concentrated in 3 suppliers. I recommend scheduling a review session with accounts payable this week.` |

#### Tab 2: Revenue Intelligence
| Elemento | ES | EN |
|----------|----|----|
| Pregunta | `¿Cuál es el revenue forecast para Q2 vs presupuesto?` | `What's the revenue forecast for Q2 vs budget?` |
| Respuesta intro | `Análisis de revenue para Q2:` | `Q2 revenue analysis:` |
| Dato 1 | `Forecast Q2: $3.2M (+8% vs presupuesto)` | `Q2 Forecast: $3.2M (+8% vs budget)` |
| Dato 2 | `Riesgo: 3 cuentas grandes sin renovar ($480K)` | `Risk: 3 large accounts pending renewal ($480K)` |
| Dato 3 | `Pipeline ponderado: $4.1M (78% confianza)` | `Weighted pipeline: $4.1M (78% confidence)` |
| Dato 4 | `Mejor canal: Enterprise directo (+23% vs año anterior)` | `Best channel: Enterprise direct (+23% vs last year)` |
| Recomendación | `Las 3 renovaciones pendientes representan 15% del forecast. Priorizar contacto antes de fin de mes.` | `The 3 pending renewals represent 15% of the forecast. Prioritize contact before end of month.` |

#### Tab 3: Compliance & Normativa
| Elemento | ES | EN |
|----------|----|----|
| Pregunta | `¿Estamos al día con las declaraciones tributarias?` | `Are we up to date with tax filings?` |
| Respuesta intro | `Estado de cumplimiento tributario:` | `Tax compliance status:` |
| Dato 1 | `IVA: Presentado y al día` | `VAT: Filed and up to date` |
| Dato 2 (alerta) | `Retención en la fuente: Pendiente Feb (vence 20 Feb)` | `Withholding tax: February pending (due Feb 20)` |
| Dato 3 | `Renta: Próxima fecha Mar 15` | `Income tax: Next deadline March 15` |
| Dato 4 (alerta) | `2 alertas activas: impuesto municipal + actualización normativa` | `2 active alerts: municipal tax + regulatory update` |
| Recomendación | `La retención de febrero vence en 4 días. Soportes listos. ¿Genero el reporte de presentación?` | `February withholding filing is 4 days away. Documents ready. Should I generate the filing report?` |

#### Tab 4: Operaciones
| Elemento | ES | EN |
|----------|----|----|
| Pregunta | `¿Cuál es el estado del cierre de enero?` | `What's the status of January's close?` |
| Respuesta intro | `Progreso del cierre de enero:` | `January close progress:` |
| Dato 1 | `87% completado (13 de 15 tareas listas)` | `87% completed (13 of 15 tasks done)` |
| Dato 2 (alerta) | `Pendiente: conciliación bancaria ($45K diferencia)` | `Pending: bank reconciliation ($45K difference)` |
| Dato 3 | `Pendiente: provisiones de cartera y ajustes cambiarios` | `Pending: portfolio provisions and FX adjustments` |
| Dato 4 (alerta) | `Bloqueado: esperando 3 facturas de proveedores` | `Blocked: waiting for 3 supplier invoices` |
| Recomendación | `La diferencia de $45K se rastreó a 2 transacciones del 28 enero. Verificar con tesorería.` | `The $45K difference traces to 2 transactions from Jan 28. Verify with treasury.` |

#### Tab 5: Marketing Digital (NUEVO)
| Elemento | ES | EN |
|----------|----|----|
| Pregunta | `¿Cómo está el rendimiento de las campañas de este mes y dónde debería reasignar presupuesto?` | `How are this month's campaigns performing and where should I reallocate budget?` |
| Respuesta intro | `Análisis de campañas activas:` | `Active campaign analysis:` |
| Dato 1 | `Google Ads: ROAS 4.2x (arriba del target 3.5x) — $12K invertidos` | `Google Ads: ROAS 4.2x (above 3.5x target) — $12K spent` |
| Dato 2 | `Meta Ads: ROAS 1.8x (abajo del target) — audiencia "lookalike profesionales" saturada` | `Meta Ads: ROAS 1.8x (below target) — "lookalike professionals" audience saturated` |
| Dato 3 | `LinkedIn: CPA $45 pero leads de mayor calidad (32% tasa cierre vs 12% Meta)` | `LinkedIn: CPA $45 but highest quality leads (32% close rate vs 12% Meta)` |
| Dato 4 (alerta) | `Oportunidad: $3K de Meta → LinkedIn generaría ~67 leads adicionales de alto valor` | `Opportunity: $3K from Meta → LinkedIn would generate ~67 additional high-value leads` |
| Recomendación | `Recomiendo reasignar $3K de Meta a LinkedIn esta semana. La audiencia lookalike se agotó. En LinkedIn el costo por lead es mayor pero el valor por cierre es 3x. ¿Ejecuto la reasignación?` | `I recommend reallocating $3K from Meta to LinkedIn this week. The lookalike audience is exhausted. LinkedIn CPL is higher but close value is 3x. Should I execute the reallocation?` |

**Componentes visuales**:
- Tabs como pills/botones redondeados con ícono + texto
- Mockup de browser (dots rojos/amarillos/verdes, URL bar)
- Sidebar restaurada (Ask Centinela, Data Graph, Connected Sources, Insights, Query Log)
- Chat con avatares, findings con íconos, recommendation box
- Métricas debajo (3 cards)

---

### 6. KNOWLEDGE LAYER SECTION
**Propósito**: Explicar el CÓMO y el POR QUÉ del diferenciador. Esta es la sección más importante para el posicionamiento.

| Elemento | ES | EN |
|----------|----|----|
| Badge | `Infraestructura de Conocimiento` | `Knowledge Infrastructure` |
| Título | `Capa de Conocimiento.` | `Knowledge Layer.` |
| Título highlight | `Grafos de Contexto.` | `Context Graphs.` |
| Subtítulo | `No es un chatbot que responde preguntas. Es infraestructura que captura, preserva y activa el conocimiento de tu empresa — la lógica, relaciones y razonamiento detrás de cada decisión. Tu soberanía cognitiva.` | `Not a chatbot that answers questions. It's infrastructure that captures, preserves, and activates your company's knowledge — the logic, relationships, and reasoning behind every decision. Your cognitive sovereignty.` |

**3 Capas (visual izquierda)**:

| Capa | ES | EN | Color |
|------|----|----|-------|
| Data Layer | Todas tus fuentes, unificadas | All your sources, unified | Indigo |
| Context Graph | Relaciones y lógica de negocio | Relationships & business logic | Cyan |
| Agent Skills | Especializados por vertical | Specialized by vertical | Green |

**4 Agent Skills (grid derecha)**:

| Skill | ES Desc | EN Desc | Color | Ejemplo ES | Ejemplo EN |
|-------|---------|---------|-------|------------|------------|
| Revenue Intelligence | Forecast, pipeline, análisis de cuentas, tendencias | Forecast, pipeline, account analysis, trends | Indigo | "¿Cuál es el forecast de Q2 vs presupuesto?" | "What's the Q2 forecast vs budget?" |
| Contabilidad & Reconciliaciones | Cierres, conciliaciones, provisiones, reportes | Closes, reconciliations, provisions, reporting | Teal | "Muéstrame facturas sin conciliar" | "Show me unreconciled invoices" |
| Operaciones & Supply Chain | Inventario, cadena de suministro, eficiencia | Inventory, supply chain, efficiency | Cyan | "¿Cuál es la rotación de inventario?" | "What's our inventory turnover?" |
| Compliance & Normativa | Declaraciones, auditorías, alertas regulatorias | Filings, audits, regulatory alerts | Amber | "¿Estamos al día en declaraciones?" | "Are we up to date on filings?" |

**Quote**:

| ES | EN |
|----|----|
| `"No es solo analytics. Es memoria institucional. Es soberanía cognitiva."` | `"Not just analytics. Institutional memory. Cognitive sovereignty."` |

**Componentes visuales**: Mantener diseño actual — visualización circular de datos con íconos orbitando, hub central pulsante, grid de skill cards con colores por categoría.

---

### 7. STATS / IMPACTO
**Propósito**: Números que prueban el valor.

**4 métricas**:

| # | Valor | ES | EN | Ícono |
|---|-------|----|----|-------|
| 1 | `85%` | Menos tiempo en cierres contables | Less time on accounting closes | Rayo/lightning |
| 2 | `90%` | Reconciliación automática de facturas | Automatic invoice reconciliation | Reloj/check |
| 3 | `3 sem` | A producción | To production | Calendario |
| 4 | `24/7` | Monitoreo de compliance | Compliance monitoring | Escudo/shield |

**Componentes visuales**: Mantener cards premium actuales con glow, mini-gráficos SVG, animación de conteo.

---

### 8. PIPELINE / JOURNEY (How It Works)
**Propósito**: Paso a paso de cómo funciona. Ya está bien. Mantener.

4 pasos scrollytelling:
1. **Conectamos tus sistemas** — +400 conectores
2. **Modelamos tu información** — limpieza, transformación, modelo unificado
3. **Grafo de conocimiento** — relaciones, entidades, KPIs, trazabilidad
4. **IA que entiende tu negocio** — contexto, terminología, métricas clave

**Finale**: "El resultado: decisiones con contexto" (no "respuestas instantáneas")

---

### 9. CONNECTORS SHOWCASE
**Propósito**: Visual de +400 conectores

Mantener diseño actual (anillo circular con logos orbitando, hub central de Centinela).

**Nota de logo**: Aquí SÍ usar el ícono de Centinela en el hub central — es funcional, muestra Centinela como centro de conexiones. Minimizar el uso del ícono pastilla en OTRAS partes.

---

### 10. SECURITY SECTION
**Propósito**: Credibilidad enterprise. Fundamental para compliance.

Mantener tal cual. Funciona perfecto:
- SOC 2, ISO 27001, GDPR, HIPAA
- Features: cifrado, zero data retention, control de acceso, auditoría
- CTA: "Hablar con equipo de seguridad"

---

### 11. COMPARISON (Tradicional vs Centinela)
**Propósito**: Contraste directo.

**Reframing**: No "old way vs new way" genérico. Comparar **BI tradicional / APIs genéricas de IA vs Knowledge Layer propio**.

| # | Tradicional / APIs genéricas | Con Centinela |
|---|------------------------------|---------------|
| 1 | Dashboards fijos que nadie actualiza | Conocimiento vivo que se actualiza solo |
| 2 | Datos sin contexto de negocio | Grafos que entienden TU lógica |
| 3 | Conocimiento que se va cuando la gente se va | Memoria institucional que se preserva |
| 4 | Dependencia de APIs externas (filtras tu valor) | Soberanía sobre tu conocimiento |
| 5 | Respuestas genéricas sin tu contexto | Respuestas con el contexto de tu empresa |

---

### 12. TESTIMONIALS
**Propósito**: Prueba social con métricas.

Mantener estructura actual (cards con quote + métricas). Ajustar quotes para mencionar **conocimiento** y **capa de conocimiento**, no solo "respuestas rápidas".

Ejemplo ajustado:
> *"Antes el conocimiento de la operación vivía en la cabeza de 3 personas. Ahora está en Centinela y cualquiera del equipo puede consultar con contexto completo."*

---

### 13. VIDEO DEMO
**Propósito**: Demo visual

Mantener placeholder. Cuando haya video, ponerlo aquí.

---

### 14. PRICING
**Propósito**: Transparencia + conversión.

**Estructura**: Toggle anual/mensual + 3 tiers + tabla desglosada

#### Toggle
- **Mensual** / **Anual** (con badge de descuento: "Ahorra X%")

#### 3 Tiers

| | Essential | Growth | Enterprise |
|-|-----------|--------|------------|
| **Precio mensual** | $3,500/mes | $5,000/mes | Contactar ventas |
| **Precio anual** | TBD (con descuento) | TBD (con descuento) | Contactar ventas |
| **Tagline ES** | Conexión de datos self-service | Soporte completo y mejora continua | Automatización completa y acciones |
| **Tagline EN** | Self-service data connection | Full support & continuous improvement | Full automation & system actions |
| **CTA** | Comenzar | Comenzar | Contactar ventas |
| **Badge** | — | Más Popular | — |

#### Tabla desglosada de features

| Feature | Essential | Growth | Enterprise |
|---------|-----------|--------|------------|
| **Conectores** | +400 conectores de datos | +400 conectores de datos | +400 conectores + custom |
| **Consultas** | Lenguaje natural | Lenguaje natural | Lenguaje natural |
| **Knowledge Layer** | Básico | Avanzado (grafos de contexto) | Completo (grafos + agent skills) |
| **Dashboards** | Acceso básico | Visualizaciones automáticas | Visualizaciones + reportes custom |
| **Verticales** | 1 vertical | Hasta 3 verticales | Ilimitadas |
| **Soporte** | Documentación | Equipo dedicado | Soporte prioritario 24/7 |
| **Reuniones** | — | Reuniones semanales de estrategia | Reuniones + roadmap dedicado |
| **Mejoras** | — | Mejoras incrementales | Mejoras + desarrollo custom |
| **Acciones en sistemas** | — | — | Escritura en sistemas (crear facturas, actualizar CRM, etc.) |
| **Workflows** | — | — | Automatización de flujos custom |
| **Alertas** | Básicas | Configurables | Alertas + triggers automáticos |
| **Usuarios** | Hasta 5 | Hasta 20 | Ilimitados |
| **Integraciones custom** | — | — | Incluidas |
| **SLA** | — | 99.5% | 99.9% |
| **Seguridad** | Estándar | SOC 2 | SOC 2 + custom configs |
| **Onboarding** | Self-service | Guiado (3 semanas) | White-glove (dedicado) |

---

### 15. FAQ
**Propósito**: Resolver objeciones.

Mantener preguntas actuales. Agregar:

| Pregunta | Respuesta |
|----------|-----------|
| ¿Qué es la "capa de conocimiento"? | Es la infraestructura que captura y organiza no solo tus datos, sino la lógica de negocio, relaciones entre entidades y contexto de tu empresa. Es como la "memoria institucional" de tu organización, accesible para todos. |
| ¿En qué se diferencia de un chatbot con IA? | Un chatbot usa modelos genéricos. Centinela construye un modelo de conocimiento PROPIO de tu empresa — entiende tu terminología, tus métricas, tus relaciones de negocio. Es la diferencia entre preguntarle a un extraño y preguntarle a alguien que lleva 10 años en tu empresa. |
| ¿Mis datos alimentan modelos de terceros? | No. Tu conocimiento se queda en tu infraestructura. Ofrecemos Zero Data Retention. Tu soberanía cognitiva es nuestra prioridad. |

---

### 16. CTA FINAL
**Propósito**: Última llamada a la acción.

| Elemento | ES | EN |
|----------|----|----|
| Título | `¿Listo para construir tu capa de conocimiento?` | `Ready to build your knowledge layer?` |
| Descripción | `Deja de depender de datos dispersos y APIs genéricas. Construye la soberanía cognitiva de tu empresa.` | `Stop depending on scattered data and generic APIs. Build your company's cognitive sovereignty.` |
| CTA primario | `Solicitar demo` | `Request demo` |
| CTA secundario | `Hablemos` | `Let's talk` |

---

### 17. FOOTER
Mantener estructura actual. 4 columnas.

**Uso del logo**: Solo aquí y en el navbar. No repetir el ícono pastilla en otras secciones.

---

## Misión (About Page)

> **Principio**: Aspiracional, a 10-20 años.

### Propuesta

**ES**:
> *Creemos que el conocimiento acumulado de una empresa es su activo más valioso — y el más desperdiciado. Nuestra misión es que cada organización tenga soberanía sobre su propia inteligencia: que su lógica de negocio, sus decisiones y su conocimiento institucional estén capturados, preservados y accesibles para todos, para siempre.*

**EN**:
> *We believe a company's accumulated knowledge is its most valuable asset — and its most wasted one. Our mission is for every organization to have sovereignty over its own intelligence: its business logic, decisions, and institutional knowledge captured, preserved, and accessible to everyone, forever.*

---

## Notas de Diseño

### Mantener del diseño actual
- Paleta de colores (indigo/cyan/dark)
- Glassmorphism en navbar
- Font Inter
- Animaciones de scroll reveal
- Cards con hover lift
- Gradient text
- Dark/light mode toggle
- Mockup de browser para demo
- Visualización circular de conectores
- Grid de stats premium

### Cambiar
- **Logo pastilla**: minimizar uso. Solo navbar, footer, y hub de conectores
- **Fuente**: evaluar si Inter sigue o probar alternativa (feedback dice "mejor fuente" en la nueva — verificar cuál era)
- **Demo section**: restaurar sidebar del mockup (la versión anterior que gustó)
- **Message tone**: de "pregunta lo que sea" a "soberanía cognitiva / knowledge layer"

### No tocar
- Pipeline/Journey (funciona bien)
- Security section (perfecto para compliance)
- Estructura responsive
- Animaciones existentes

---

## Flujo de Implementación Sugerido

1. **Primero**: Aprobar este documento con el equipo
2. **Segundo**: Definir el copy final de cada sección (iterar con Jam)
3. **Tercero**: Implementar cambios de messaging (i18n.js)
4. **Cuarto**: Implementar cambios estructurales (HTML — demo tabs, pricing table, comparison reframe)
5. **Quinto**: Ajustes de diseño (logo usage, font, detalles visuales)
6. **Sexto**: QA visual + responsive + idiomas

---

---

## Análisis Competitivo: Centinela vs Tellius

### Quién es Tellius
- **Funding**: $36M levantados, valoración ~$41-67M
- **Clientes**: Novartis, PepsiCo, eBay, P&G, Bayer, AbbVie (enterprise pharma/CPG)
- **Posicionamiento**: *"The Agentic Analytics Platform for Enterprise Data"*
- **Precio**: Custom (enterprise sales), free trial de 30 días, 2 tiers (Premium y Enterprise)

### Cómo se posiciona Tellius

| Aspecto | Tellius | Observaciones |
|---------|---------|---------------|
| **Hero** | "The AI Platform for Your Company's Data and Knowledge" | Genérico. Podrían ser 50 empresas |
| **Claim** | "Any Person. Any Data. Any Question." | Exactamente lo que Jam dice que NO hacer — "pregunta lo que sea" |
| **Core** | Agentic Analytics — AI agents que automatizan workflows | Fuerte en agentes, pero enfocado en analytics |
| **Verticales** | Sales, Finance, Data & Analytics, Supply Chain, Marketing | 5 verticales bien definidas |
| **Diferenciador técnico** | "Chat-based AI fails for 78% of queries" — ellos van más allá del chat | Inteligente: se posicionan CONTRA chatbots genéricos |
| **Arquitectura** | 3 capas: Application → Intelligence → Knowledge Layer | Usan el concepto de "Knowledge Layer" también |
| **Métricas** | 16x faster, 185+ hrs freed/user, 92% automated, 97% recommend | Métricas fuertes con case studies reales |
| **Target** | Enterprise (Pharma, CPG, Financial Services) | Mercado arriba, pricing enterprise |

### Las 3 capas de Tellius (su arquitectura)

```
┌─────────────────────────────┐
│  Application Layer          │  ← Conversational UI, Agentic Apps
├─────────────────────────────┤
│  Intelligence Layer         │  ← GenAI engine, contextual search
├─────────────────────────────┤
│  Knowledge Layer            │  ← Semantic layer, AutoML
└─────────────────────────────┘
```

### Dónde Tellius es FUERTE (y Centinela debe aprender)

1. **Case studies con números reales**: Novo Nordisk 88% time savings, PepsiCo 12x faster, eBay 3x faster. No son métricas inventadas — son clientes reales con resultados medidos.
2. **Social proof masivo**: Logos de Fortune 500 en el hero. Eso genera confianza inmediata.
3. **Verticales bien definidas**: Cada vertical tiene su propia página con outcomes específicos (Sales: "Crush Quota", Finance: "Free Up Finance", etc.).
4. **"Agentic" como diferenciador**: No solo responde preguntas — los agentes ACTÚAN. Esto es forward-looking.
5. **Claim estadístico contra chatbots**: "Chat-based AI fails for 78% of queries" es concreto y memorable.
6. **Free trial**: Baja la barrera de entrada. "Start for Free" + 30 días.

### Dónde Tellius es DÉBIL (oportunidad para Centinela)

1. **Messaging genérico**: "Any Person. Any Data. Any Question." es exactamente lo que el equipo de Centinela quiere evitar. Es commodity.
2. **Sin concepto de soberanía**: No hablan de ownership del conocimiento, no mencionan el riesgo de depender de APIs externas. Es un gran vacío.
3. **Knowledge Layer superficial**: Lo mencionan como capa técnica (semantic layer + AutoML), pero NO lo posicionan como el core value prop. Para ellos es plomería, no el producto.
4. **Pricing opaco**: "Custom" en ambos tiers. No hay transparencia. Centinela con precios visibles ($3,500/$5,000) genera más confianza en mid-market.
5. **Target solo enterprise grande**: Pharma, CPG, Financial Services. No juegan en mid-market LATAM. El mercado de Centinela tiene menos competencia.
6. **No hablan de memoria institucional**: No abordan el problema de que el conocimiento se va cuando la gente se va. Esto es un differentiator emocional fuerte.
7. **Sin dark mode / diseño moderno**: La landing de Tellius es clean pero estándar (fondo claro, purple gradient). Centinela con su dark mode premium se ve más tech-forward.
8. **No LATAM focus**: Todo en inglés, pricing en USD enterprise. No entienden el contexto regulatorio colombiano/LATAM (DIAN, retención en la fuente, etc.).

### Mapa de posicionamiento

```
                    GENERIC MESSAGE
                         ↑
                         │
           Tellius ●     │
           "Any question" │
                         │
   ANALYTICS ────────────┼──────────── KNOWLEDGE
   (dashboards,          │            (grafos, soberanía,
    reports, charts)     │             memoria institucional)
                         │
                         │     ● Centinela
                         │     "Soberanía cognitiva"
                         │
                         ↓
                  SPECIFIC USE CASES
```

**Centinela debe vivir en el cuadrante inferior-derecho**: Mensaje ESPECÍFICO por vertical + posicionamiento en KNOWLEDGE (no analytics).

### Implications para la Arquitectura de Centinela

| Lo que Tellius hace | Lo que Centinela debe hacer DIFERENTE |
|---------------------|---------------------------------------|
| "Any Person. Any Data. Any Question." | **"Tu conocimiento. Tu ventaja competitiva."** — Específico, ownership |
| Knowledge Layer = capa técnica invisible | **Knowledge Layer = el PRODUCTO principal**, el hero |
| Agentic analytics (dashboards + agentes) | **Soberanía cognitiva** (tu empresa controla su inteligencia) |
| Case studies de Fortune 500 | **Case studies de mid-market LATAM** con contexto local |
| Precio opaco ("Custom") | **Precio transparente** ($3,500 / $5,000 / Enterprise) |
| Verticales: Sales, Finance, Supply Chain, Marketing, Data | **Verticales: Contabilidad, Revenue, Compliance, Ops, Marketing Digital** — más específico |
| "Get answers faster" | **"Tu empresa sabe más de lo que puede usar"** — el problema es el conocimiento perdido, no la velocidad |
| Free trial genérico | **Demo personalizada con datos del cliente** — más high-touch, más valor percibido |

### Lo que Centinela debe COPIAR (sin vergüenza)

1. **Claim estadístico memorable**: Tellius dice "78% of chat queries fail". Centinela necesita SU propio stat killer. Ejemplo: *"El 70% del conocimiento de una empresa vive en la cabeza de personas que eventualmente se van"* o similar.
2. **Verticales con outcomes en el headline**: "Crush Quota" (Sales), "Free Up Finance" (Finance). Cada vertical de Centinela necesita un headline de outcome así de directo.
3. **Case studies con métricas**: Cuando Centinela tenga Ocati funcionando, necesita el case study con números reales (X% reducción, $Y ahorro, etc.).
4. **Arquitectura visual de 3 capas**: El diagrama de capas de Tellius es bueno. Centinela debe mostrar SU stack de forma visual similar pero con los nombres correctos (Data Layer → Context Graph → Agent Skills).

### Headlines sugeridos por vertical (copiando el estilo Tellius pero con enfoque Centinela)

| Vertical | Tellius style | Centinela (propuesta) |
|----------|--------------|----------------------|
| Contabilidad | "Free Up Finance" | **"Cierra en días, no semanas"** |
| Revenue | "Crush Quota" | **"Forecast con el contexto que tu CRM no tiene"** |
| Compliance | (no tienen) | **"Compliance en piloto automático"** |
| Operaciones | "AI-Driven Supply Chain" | **"Cada decisión operativa, informada"** |
| Marketing Digital | "Supercharge Marketing" | **"Tu IA sabe dónde invertir antes que tú"** |

---

### Resumen ejecutivo: Centinela vs Tellius

| | Tellius | Centinela (propuesta) |
|-|---------|----------------------|
| **Posicionamiento** | Agentic Analytics Platform | Knowledge Layer + Soberanía Cognitiva |
| **Mensaje core** | "Any question, any data" (genérico) | "Tu conocimiento, tu ventaja" (ownership) |
| **Target** | Enterprise Fortune 500 | Mid-market + Enterprise LATAM-first |
| **Pricing** | Opaco, enterprise sales | Transparente ($3.5K/$5K/Enterprise) |
| **Diferenciador** | AI agents + 78% chat failure stat | Soberanía cognitiva + memoria institucional |
| **Debilidad** | Commodity message, sin ownership story | Pocos case studies (por ahora) |
| **Fortaleza** | Logos fuertes, métricas probadas | Concepto único (Nadella Davos framework), LATAM context, pricing claro |

**Bottom line**: Tellius juega el juego de "analytics más rápido". Centinela puede jugar un juego completamente diferente: **"tu empresa controla su propia inteligencia"**. Eso no se replica con un feature — es un posicionamiento estratégico.

---

*Documento generado el 2026-02-16. Basado en feedback del equipo + framework de Nadella/Fink (Davos 2026) + análisis competitivo de Tellius.com.*

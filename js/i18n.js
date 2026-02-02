/**
 * Centinela - Internationalization (i18n) Module
 * Supports: English (en), Spanish (es)
 *
 * Positioning: Conversational Analytics - All your data in one conversation
 */

const translations = {
    en: {
        // Navigation
        nav: {
            product: "Product",
            knowledgeLayer: "Knowledge Layer",
            features: "Features",
            security: "Security",
            about: "About",
            pricing: "Pricing",
            requestDemo: "Request Demo"
        },

        // Hero Section - CONVERSATIONAL ANALYTICS
        hero: {
            badge: "Conversational Analytics",
            titleLine1: "All your data.",
            titleLine2: "One conversation.",
            description: "Connect your ERP, CRM, databases, and spreadsheets. Ask questions in natural language. Get real-time insights without writing SQL or waiting for reports.",
            ctaPrimary: "Connect Your Data",
            ctaSecondary: "See How It Works",
            loopCapture: "Connect",
            loopEmbed: "Analyze",
            loopOwn: "Answer"
        },

        // The Problem Section - Data Fragmentation
        problem: {
            sectionLabel: "The Challenge",
            headline: "Your data lives in too many places",
            point1: "In your ERP system",
            point2: "Spread across CRM records",
            point3: "Hidden in spreadsheets",
            point4: "Lost in emails and chat",
            question: "What if you could query ALL your data sources with a single conversation?",
            ctaText: "Unify your data →"
        },

        // Trusted Section
        trusted: {
            label: "Trusted by data-driven companies"
        },

        // Demo Section
        demo: {
            title: "Ask anything. Get answers.",
            subtitle: "Your ERP, CRM, databases, and spreadsheets—all connected, all queryable, all in one conversation.",
            browserUrl: "app.centinela.ai",
            sidebarAsk: "Ask Centinela",
            sidebarGraph: "Data Graph",
            sidebarSources: "Connected Sources",
            sidebarInsights: "Insights",
            sidebarHistory: "Query Log",
            userQuestion: "What's our current inventory status for organic goldenberries?",
            aiResponse: "Here's what I found across your systems:",
            aiResponseDetail1: "Organic Goldenberries: 12,450 kg available",
            aiResponseDetail2: "Location: Bogota Warehouse A (marked as priority in your ERP)",
            aiResponseDetail3: "Certification: USDA Organic, Fair Trade verified",
            aiResponseDetail4: "Alert: 2,100 kg expiring in 14 days",
            aiRecommendation: "Based on your sales history: EU clients typically accept short shelf-life inventory. Consider prioritizing shipment to that region.",
            inputPlaceholder: "Ask anything about your data...",
            inputButton: "Ask",
            metricKnowledge: "Data Points Indexed",
            metricSources: "Sources Connected",
            metricDecisions: "Questions Answered"
        },

        // Stats Section - VALUE METRICS
        stats: {
            stat1Value: "10x",
            stat1Label: "Faster answers to complex questions",
            stat2Value: "400+",
            stat2Label: "Data connectors available",
            stat3Value: "1",
            stat3Label: "Place to query all your data",
            stat4Value: "3wk",
            stat4Label: "To full deployment"
        },

        // Features Section - THE DATA STACK
        features: {
            title: "How It Works",
            subtitle: "All your data sources, unified and queryable",
            feature1Title: "Connect Everything",
            feature1Desc: "ERPs, CRMs, databases, spreadsheets, APIs—connect every data source your business uses. +400 connectors available.",
            feature1Item1: "+400 pre-built connectors",
            feature1Item2: "Custom integrations for any API",
            feature1Item3: "Real-time sync with your sources",
            feature2Title: "Unify Your Data",
            feature2Desc: "We transform and normalize data from all your sources into a unified model. No more data silos.",
            feature2Item1: "Automatic data transformation",
            feature2Item2: "Relationships mapped across systems",
            feature2Item3: "Single source of truth",
            feature3Title: "Ask in Natural Language",
            feature3Desc: "No SQL required. No dashboards to learn. Just ask questions in plain English or Spanish and get instant answers.",
            feature3Item1: "Natural language queries",
            feature3Item2: "Answers cite data sources",
            feature3Item3: "Works in any language",
            feature4Title: "Real-Time Insights",
            feature4Desc: "Get answers in seconds, not days. No more waiting for reports or exporting data to spreadsheets.",
            feature4Item1: "Instant query results",
            feature4Item2: "Always up-to-date data",
            feature4Item3: "Automated alerts and triggers",
            connectors: "Connectors"
        },

        // Connectors Showcase
        connectors: {
            title: "+400 connectors available",
            subtitle: "We connect with any data source you use"
        },

        // Knowledge Layer Section - AGENT SKILLS
        knowledgeLayer: {
            badge: "Knowledge Infrastructure",
            title: "Knowledge Layer.",
            titleHighlight: "Context Graphs.",
            subtitle: "Infrastructure that captures, preserves, and activates your business knowledge. Not just data—the logic, relationships, and reasoning behind every decision.",
            // Knowledge Layers
            layer1Title: "Data Layer",
            layer1Desc: "All your sources, unified",
            layer2Title: "Context Graph",
            layer2Desc: "Relationships & business logic",
            layer3Title: "Agent Skills",
            layer3Desc: "Specialized by vertical",
            // Agent Skills
            skillsTitle: "Agent Skills",
            skillsCount: "+50 skills",
            skill1Title: "Finance",
            skill1Desc: "Cash flow, forecasting, financial modeling",
            skill1Ex: "\"Project cash flow for next quarter\"",
            skill2Title: "Marketing",
            skill2Desc: "Campaign analysis, attribution, ROI",
            skill2Ex: "\"Which campaigns drove conversions?\"",
            skill3Title: "Operations",
            skill3Desc: "Process optimization, capacity planning",
            skill3Ex: "\"Identify bottlenecks in production\"",
            skill4Title: "Data Analysis",
            skill4Desc: "KPIs, trends, anomaly detection",
            skill4Ex: "\"Why did revenue spike last week?\"",
            skill5Title: "Logistics",
            skill5Desc: "Inventory, shipping, supply chain",
            skill5Ex: "\"Optimize delivery routes for EU\"",
            skill6Title: "Strategy",
            skill6Desc: "Market sizing, competitive analysis",
            skill6Ex: "\"Analyze market opportunity in LATAM\"",
            skill7Title: "Accounting",
            skill7Desc: "Reconciliation, reporting, compliance",
            skill7Ex: "\"Reconcile accounts for Q3 close\"",
            skill8Title: "HR & Admin",
            skill8Desc: "Team metrics, resource planning",
            skill8Ex: "\"Analyze hiring needs for Q4\"",
            // Quote & CTA
            quote: "Not just analytics. Institutional memory.",
            cta: "See it in action"
        },

        // Pipeline Section (legacy)
        pipeline: {
            title: "The Data Journey",
            subtitle: "From scattered sources to unified intelligence",
            step1Badge: "Step 1",
            step2Badge: "Step 2",
            step3Badge: "Step 3",
            step4Badge: "Step 4",
            hubConnectors: "+400 Connectors",
            stage1Title: "Your Systems",
            stage1Desc: "ERPs, CRMs, DBs",
            stage2Title: "Connect",
            stage2Desc: "Extract & sync",
            stage3Title: "Model",
            stage3Desc: "Transform & clean",
            stage4Title: "Document",
            stage4Desc: "Catalog & lineage",
            stage5Title: "AI Layer",
            stage5Desc: "Understand context",
            stage6Title: "Interact",
            stage6Desc: "Chat & visualize",
            output1Title: "Natural Language Q&A",
            output1Desc: "Ask anything, get instant answers",
            output2Title: "Auto Dashboards",
            output2Desc: "Visual insights, always up to date"
        },

        // Journey Scrollytelling Section
        journey: {
            stage1Title: "We connect your systems",
            stage1Story: "\"I have data in SAP, HubSpot, spreadsheets... how do I unify them?\"",
            stage1Desc: "We automatically connect to all your data sources. ERP, CRM, databases, files. +400 connectors available, or we build custom integrations for you.",
            seeConnectors: "See available connectors",
            stage2Title: "We model your information",
            stage2Story: "\"My data is messy, with duplicates and different formats...\"",
            stage2Desc: "We clean, transform and structure all your information into a unified model. We eliminate duplicates, standardize formats and create relationships between your data.",
            stage3Title: "Knowledge Graph",
            stage3Story: "\"Nobody knows what each field means or where it comes from...\"",
            stage3Desc: "We create a knowledge graph that understands relationships between your data: metrics, entities, KPIs. Complete traceability and context.",
            stage4Title: "AI that understands your business",
            stage4Story: "\"I want to ask questions without knowing SQL or depending on technicians...\"",
            stage4Desc: "Our AI layer learns your company's context: terminology, key metrics, relationships between areas. It understands when you ask \"how are sales going?\" what data it needs to query.",
            finaleTitle: "The result: instant answers",
            finaleSubtitle: "Ask whatever you want, get answers with real data",
            output1Title: "Ask in plain English",
            output1Desc: "\"How much did we sell last month vs last year?\" — answer in seconds, with data from all your sources.",
            output2Title: "Automatic dashboards",
            output2Desc: "Visualizations generated on the fly based on what you ask. Always updated, no manual configuration.",
            cta: "I want to see a demo",
            ctaNote: "No commitment · Setup in 3 weeks"
        },

        // Comparison Section - TRADITIONAL vs CENTINELA
        comparison: {
            title: "A New Way to Access Your Data",
            subtitle: "From scattered information to unified intelligence",
            traditionalTitle: "The Old Way",
            centinelaTitle: "With Centinela",
            traditional1: "Search 5 systems to find one answer",
            traditional2: "Export data, merge spreadsheets manually",
            traditional3: "Wait days for custom reports",
            traditional4: "Data silos with no connection",
            traditional5: "Questions limited by dashboard design",
            centinela1: "One question, complete answer",
            centinela2: "All your sources, instantly connected",
            centinela3: "Real-time insights, no waiting",
            centinela4: "Data unified across all systems",
            centinela5: "Ask anything in natural language"
        },

        // How it Works Section
        how: {
            title: "From Silos to Insights",
            subtitle: "Three steps to unified analytics",
            step1Title: "Connect",
            step1Desc: "We plug into your systems—ERP, CRM, databases, spreadsheets. +400 connectors available, or we build custom integrations.",
            step2Title: "Unify",
            step2Desc: "Your data is transformed and normalized into a single unified model. No more exporting and merging spreadsheets.",
            step3Title: "Query",
            step3Desc: "Ask questions in natural language. Get instant answers with data from all your connected sources."
        },

        // Testimonials Section
        testimonials: {
            title: "Results That Matter",
            subtitle: "See how companies are transforming their data access",
            testimonial1Role: "Operations Director",
            testimonial1Company: "Ocati - Exotic Fruit Exporter",
            testimonial1Quote: "We used to spend hours pulling data from different systems. Now we just ask Centinela and get answers in seconds. Our team can focus on decisions, not data hunting.",
            testimonial1Metric1Value: "15+",
            testimonial1Metric1Label: "Systems Connected",
            testimonial1Metric2Value: "3 weeks",
            testimonial1Metric2Label: "To Full Deployment",
            testimonial1Metric3Value: "85%",
            testimonial1Metric3Label: "Faster Reports",
            testimonial2Role: "CFO",
            testimonial2Company: "Regional Bank",
            testimonial2Quote: "Reports that took 3 days to compile now take 30 seconds. We just ask in plain language and get the data we need.",
            testimonial2Metric1Value: "30 sec",
            testimonial2Metric1Label: "Average Query Time",
            testimonial2Metric2Value: "15+",
            testimonial2Metric2Label: "Data Sources",
            testimonial2Metric3Value: "24/7",
            testimonial2Metric3Label: "Data Access"
        },

        // Resources Section
        resources: {
            title: "Learn More",
            subtitle: "Explore conversational analytics",
            resource1Tag: "Guide",
            resource1Title: "The Data Unification Playbook",
            resource1Desc: "How leading companies are breaking down data silos and enabling self-service analytics.",
            resource2Tag: "Whitepaper",
            resource2Title: "Natural Language Analytics",
            resource2Desc: "Why asking questions in plain language is the future of business intelligence.",
            resource3Tag: "Case Study",
            resource3Title: "From 15 Systems to 1 Conversation",
            resource3Desc: "How Ocati unified their data and reduced reporting time by 85%."
        },

        // CTA Section
        cta: {
            title: "Ready to unify your data?",
            description: "Stop hunting through systems. Stop waiting for reports. Connect your data sources and start asking questions today.",
            btnPrimary: "Connect Your Data",
            btnSecondary: "Talk to Us"
        },

        // Security Section
        security: {
            badge: "Enterprise Security",
            title: "Your data security is our priority",
            subtitle: "Certified infrastructure with the highest industry standards. Your data is protected with multiple layers of security and regulatory compliance.",
            soc2Desc: "Security controls independently audited by certified CPA firms",
            iso27001Desc: "Internationally certified information security management system",
            gdprDesc: "Full compliance with the European General Data Protection Regulation",
            hipaaDesc: "Configuration available for health data with BAA (Business Associate Agreement)",
            verified: "Verified",
            compliant: "Compliant",
            available: "Available",
            featuresTitle: "Protection at every layer",
            featuresDesc: "Our infrastructure implements multiple levels of security to ensure your data is always protected.",
            feature1Title: "End-to-end encryption",
            feature1Desc: "TLS 1.3 in transit and AES-256 at rest for all your data",
            feature2Title: "Optional Zero Data Retention",
            feature2Desc: "Your queries are not stored. No persistence of sensitive data",
            feature3Title: "Granular access control",
            feature3Desc: "SSO, MFA and role-based permissions for every user in your organization",
            feature4Title: "Complete audit trail",
            feature4Desc: "Detailed logs of all actions and queries for compliance",
            trustTitle: "Do you have specific security requirements?",
            trustDesc: "Our team can provide SOC 2 reports, penetration tests and custom configurations.",
            trustCta: "Talk to security team"
        },

        // Video Demo Section
        videoDemo: {
            title: "See Centinela in action",
            subtitle: "Discover how we transform scattered data into instant answers",
            placeholder: "Video coming soon"
        },

        // FAQ Section
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about Centinela",
            q1: "How long does implementation take?",
            a1: "Typical implementation takes 3 weeks. This includes connecting to your data sources, information modeling, and knowledge graph configuration. Companies with fewer systems can be ready in less time.",
            q2: "Is my data secure?",
            a2: "Absolutely. We hold SOC 2 Type II, ISO 27001 certifications, GDPR and HIPAA compliance. Your data is encrypted in transit (TLS 1.3) and at rest (AES-256). We offer Zero Data Retention for sensitive queries.",
            q3: "What if you don't have my connector?",
            a3: "We have 400+ pre-built connectors for ERPs, CRMs, databases, and popular applications. If you need one we don't have, we develop it as part of your implementation at no additional cost.",
            q4: "Do I need technical knowledge to use it?",
            a4: "No. Centinela is designed for business users. Just type your question in English (or Spanish) and get answers. No SQL, Python, or any technical language required.",
            q5: "How does it compare to traditional BI tools?",
            a5: "BI tools require predefined dashboards and technical knowledge. With Centinela, anyone can ask any question without being limited to what someone designed previously. It's the difference between searching a fixed menu and having a chef who cooks whatever you ask."
        },

        // Pricing Preview
        pricingPreview: {
            title: "Plans tailored to your company",
            subtitle: "From startups to large corporations, we have the perfect plan for you.",
            highlight1: "No hidden costs",
            highlight2: "Free trial",
            highlight3: "Cancel anytime",
            cta: "View plans and pricing"
        },

        // Footer
        footer: {
            description: "Centinela connects all your data sources and lets you query them in natural language. No SQL required. No more data silos.",
            product: "Product",
            features: "Features",
            howItWorks: "How it Works",
            pricing: "Pricing",
            security: "Security",
            company: "Company",
            about: "About",
            careers: "Careers",
            contact: "Contact",
            partners: "Partners",
            resources: "Resources",
            documentation: "Documentation",
            blog: "Blog",
            caseStudies: "Case Studies",
            support: "Support",
            copy: "All rights reserved."
        },

        // About Page
        about: {
            pageTitle: "About Centinela",
            pageSubtitle: "We're building the bridge between your data and your decisions.",
            missionTitle: "Our Mission",
            missionText: "Every company has valuable data locked in silos. We're making it accessible to everyone through natural language.",
            storyTitle: "Why We Exist",
            storyText1: "We watched companies struggle to get simple answers because their data lived in too many places. Teams spent days pulling reports that should take minutes.",
            storyText2: "Centinela changes that. We connect all your data sources and let anyone ask questions in plain language. No SQL. No waiting. Just answers.",
            teamTitle: "Built by Data Engineers",
            teamText: "Our team has built data pipelines and analytics platforms. We know the pain of data silos firsthand, and we built Centinela to solve it.",
            valuesTitle: "Our Values",
            value1Title: "Data Should Flow",
            value1Desc: "Information locked in silos doesn't help anyone make better decisions.",
            value2Title: "Simplicity Wins",
            value2Desc: "If you need SQL to get answers, we've failed. Just ask.",
            value3Title: "Real-Time Matters",
            value3Desc: "Yesterday's data leads to yesterday's decisions. We keep you current.",
            value4Title: "Connect Everything",
            value4Desc: "+400 connectors and counting. If you use it, we can connect it."
        },

        // Contact Page
        contact: {
            pageTitle: "Let's Talk",
            pageSubtitle: "Curious how conversational analytics could work for your business? Let's explore together.",
            formTitle: "Start the conversation",
            labelName: "Full Name",
            labelEmail: "Work Email",
            labelCompany: "Company",
            labelSize: "Company Size",
            labelMessage: "What data questions do you wish were easier to answer?",
            placeholderName: "John Smith",
            placeholderEmail: "john@company.com",
            placeholderCompany: "Acme Inc.",
            placeholderMessage: "Tell us about the reports that take too long to create...",
            sizeSelect: "Select company size",
            sizeSmall: "1-50 employees",
            sizeMedium: "51-200 employees",
            sizeLarge: "201-1000 employees",
            sizeEnterprise: "1000+ employees",
            submit: "Request Demo",
            infoTitle: "Other ways to reach us",
            infoSubtitle: "We're here to help.",
            emailTitle: "Email",
            emailValue: "hello@centinela.ai",
            scheduleTitle: "Schedule",
            scheduleValue: "30-min call to explore your use case",
            locationTitle: "Location",
            locationValue: "Bogota, Colombia"
        },

        // Pricing Page
        pricing: {
            title: "Simple, Transparent Pricing",
            subtitle: "Choose the plan that fits your business. All plans include access to +400 data connectors.",
            perMonth: "/month",
            popular: "Most Popular",
            getStarted: "Get Started",
            contactSales: "Contact Sales",

            essentialName: "Essential",
            essentialTagline: "Self-service data connection",
            essentialNote: "Connect and query on your own",

            growthName: "Growth",
            growthTagline: "Full support & continuous improvement",
            growthNote: "Everything you need to scale",

            enterpriseName: "Enterprise",
            enterpriseTagline: "Full automation & system actions",
            enterpriseNote: "Complete data automation",

            feature400: "+400 data connectors",
            featureNL: "Natural language queries",
            featureDashboard: "Basic dashboard access",
            featureNoSupport: "No dedicated support",
            featureNoMeetings: "No strategy meetings",
            featureNoAutomations: "No automations",
            featureAutoViz: "Automatic visualizations",
            featureSupport: "Dedicated support team",
            featureMeetings: "Weekly strategy meetings",
            featureImprovements: "Incremental improvements",
            featureNoActions: "No system actions",
            featureEverything: "Everything in Growth",
            featureActions: "System actions & automations",
            featureWorkflows: "Custom workflow automation",
            featureAlerts: "Automated alerts & triggers",
            featurePriority: "Priority support (24/7)",
            featureCustom: "Custom integrations",

            faqTitle: "Frequently Asked Questions",
            faq1Q: "What are system actions?",
            faq1A: "System actions allow Centinela to not just read your data, but also write back to your systems. Create invoices, update CRM records, send notifications—all through natural language commands.",
            faq2Q: "Can I upgrade my plan later?",
            faq2A: "Yes! You can upgrade at any time and only pay the difference. Your data and configurations will transfer seamlessly.",
            faq3Q: "What's included in dedicated support?",
            faq3A: "Dedicated support includes weekly strategy meetings, direct Slack/Teams access to our team, custom training, and priority response times.",
            faq4Q: "How long does setup take?",
            faq4A: "Most companies are up and running within 3 weeks. Complex Enterprise deployments may take 4-6 weeks depending on the number of integrations.",

            ctaTitle: "Ready to unify your data?",
            ctaSubtitle: "Start with a free consultation. We'll analyze your data landscape and recommend the best approach.",
            ctaButton: "Schedule a Call"
        }
    },

    es: {
        // Navigation
        nav: {
            product: "Producto",
            knowledgeLayer: "Capa de Conocimiento",
            features: "Características",
            security: "Seguridad",
            about: "Nosotros",
            pricing: "Precios",
            requestDemo: "Solicitar Demo"
        },

        // Hero Section - CONVERSATIONAL ANALYTICS
        hero: {
            badge: "Analytics Conversacional",
            titleLine1: "Todos tus datos.",
            titleLine2: "Una conversación.",
            description: "Conecta tu ERP, CRM, bases de datos y hojas de cálculo. Haz preguntas en lenguaje natural. Obtén insights en tiempo real sin escribir SQL ni esperar reportes.",
            ctaPrimary: "Conecta tus Datos",
            ctaSecondary: "Ver Cómo Funciona",
            loopCapture: "Conectar",
            loopEmbed: "Analizar",
            loopOwn: "Responder"
        },

        // The Problem Section - Data Fragmentation
        problem: {
            sectionLabel: "El Desafío",
            headline: "Tu información vive en demasiados lugares",
            point1: "En tu sistema ERP",
            point2: "Dispersa en registros del CRM",
            point3: "Oculta en hojas de cálculo",
            point4: "Perdida en emails y chats",
            question: "¿Y si pudieras consultar TODAS tus fuentes de datos en una sola conversación?",
            ctaText: "Unifica tus datos →"
        },

        // Trusted Section
        trusted: {
            label: "Empresas data-driven confían en nosotros"
        },

        // Demo Section
        demo: {
            title: "Pregunta lo que sea. Obtén respuestas.",
            subtitle: "Tu ERP, CRM, bases de datos y hojas de cálculo—todo conectado, todo consultable, todo en una conversación.",
            browserUrl: "app.centinela.ai",
            sidebarAsk: "Preguntar a Centinela",
            sidebarGraph: "Grafo de Datos",
            sidebarSources: "Fuentes Conectadas",
            sidebarInsights: "Insights",
            sidebarHistory: "Log de Consultas",
            userQuestion: "¿Cuál es el estado actual del inventario de uchuvas orgánicas?",
            aiResponse: "Esto es lo que encontré en tus sistemas:",
            aiResponseDetail1: "Uchuvas Orgánicas: 12,450 kg disponibles",
            aiResponseDetail2: "Ubicación: Bodega Bogotá A (marcada como prioridad en tu ERP)",
            aiResponseDetail3: "Certificación: USDA Organic, Fair Trade verificada",
            aiResponseDetail4: "Alerta: 2,100 kg vencen en 14 días",
            aiRecommendation: "Basado en tu historial de ventas: Los clientes EU típicamente aceptan inventario con vida útil corta. Considera priorizar envíos a esa región.",
            inputPlaceholder: "Pregunta lo que sea sobre tus datos...",
            inputButton: "Preguntar",
            metricKnowledge: "Datos Indexados",
            metricSources: "Fuentes Conectadas",
            metricDecisions: "Preguntas Respondidas"
        },

        // Stats Section - VALUE METRICS
        stats: {
            stat1Value: "10x",
            stat1Label: "Respuestas más rápidas a preguntas complejas",
            stat2Value: "400+",
            stat2Label: "Conectores de datos disponibles",
            stat3Value: "1",
            stat3Label: "Lugar para consultar todos tus datos",
            stat4Value: "3sem",
            stat4Label: "Para despliegue completo"
        },

        // Features Section - THE DATA STACK
        features: {
            title: "Cómo Funciona",
            subtitle: "Todas tus fuentes de datos, unificadas y consultables",
            feature1Title: "Conecta Todo",
            feature1Desc: "ERPs, CRMs, bases de datos, hojas de cálculo, APIs—conecta cada fuente de datos que tu empresa usa. +400 conectores disponibles.",
            feature1Item1: "+400 conectores pre-construidos",
            feature1Item2: "Integraciones custom para cualquier API",
            feature1Item3: "Sincronización en tiempo real",
            feature2Title: "Unifica tus Datos",
            feature2Desc: "Transformamos y normalizamos datos de todas tus fuentes en un modelo unificado. No más silos de datos.",
            feature2Item1: "Transformación automática de datos",
            feature2Item2: "Relaciones mapeadas entre sistemas",
            feature2Item3: "Una sola fuente de verdad",
            feature3Title: "Pregunta en Lenguaje Natural",
            feature3Desc: "Sin SQL. Sin dashboards que aprender. Solo pregunta en español o inglés y obtén respuestas instantáneas.",
            feature3Item1: "Consultas en lenguaje natural",
            feature3Item2: "Respuestas citan fuentes de datos",
            feature3Item3: "Funciona en cualquier idioma",
            feature4Title: "Insights en Tiempo Real",
            feature4Desc: "Obtén respuestas en segundos, no días. Sin más esperas por reportes ni exportación manual de datos.",
            feature4Item1: "Resultados instantáneos",
            feature4Item2: "Datos siempre actualizados",
            feature4Item3: "Alertas y triggers automáticos",
            connectors: "Conectores"
        },

        // Connectors Showcase
        connectors: {
            title: "+400 conectores disponibles",
            subtitle: "Conectamos con cualquier fuente de datos que uses"
        },

        // Knowledge Layer Section - AGENT SKILLS
        knowledgeLayer: {
            badge: "Infraestructura de Conocimiento",
            title: "Capa de Conocimiento.",
            titleHighlight: "Grafos de Contexto.",
            subtitle: "Infraestructura que captura, preserva y activa el conocimiento de tu negocio. No solo datos—la lógica, relaciones y razonamiento detrás de cada decisión.",
            // Capas de Conocimiento
            layer1Title: "Capa de Datos",
            layer1Desc: "Todas tus fuentes, unificadas",
            layer2Title: "Grafo de Contexto",
            layer2Desc: "Relaciones y lógica de negocio",
            layer3Title: "Skills de Agentes",
            layer3Desc: "Especializados por vertical",
            // Agent Skills
            skillsTitle: "Skills de Agentes",
            skillsCount: "+50 skills",
            skill1Title: "Finanzas",
            skill1Desc: "Flujo de caja, proyecciones, modelado financiero",
            skill1Ex: "\"Proyecta el flujo de caja del próximo trimestre\"",
            skill2Title: "Marketing",
            skill2Desc: "Análisis de campañas, atribución, ROI",
            skill2Ex: "\"¿Qué campañas generaron conversiones?\"",
            skill3Title: "Operaciones",
            skill3Desc: "Optimización de procesos, planificación de capacidad",
            skill3Ex: "\"Identifica cuellos de botella en producción\"",
            skill4Title: "Análisis de Datos",
            skill4Desc: "KPIs, tendencias, detección de anomalías",
            skill4Ex: "\"¿Por qué subieron los ingresos la semana pasada?\"",
            skill5Title: "Logística",
            skill5Desc: "Inventario, envíos, cadena de suministro",
            skill5Ex: "\"Optimiza rutas de entrega para UE\"",
            skill6Title: "Estrategia",
            skill6Desc: "Dimensionamiento de mercado, análisis competitivo",
            skill6Ex: "\"Analiza oportunidad de mercado en LATAM\"",
            skill7Title: "Contabilidad",
            skill7Desc: "Conciliación, reportes, cumplimiento",
            skill7Ex: "\"Concilia cuentas para cierre de Q3\"",
            skill8Title: "RRHH y Admin",
            skill8Desc: "Métricas de equipo, planificación de recursos",
            skill8Ex: "\"Analiza necesidades de contratación para Q4\"",
            // Quote & CTA
            quote: "No es solo analytics. Memoria institucional.",
            cta: "Verlo en acción"
        },

        // Pipeline Section (legacy)
        pipeline: {
            title: "El Viaje de los Datos",
            subtitle: "De fuentes dispersas a inteligencia unificada",
            step1Badge: "Paso 1",
            step2Badge: "Paso 2",
            step3Badge: "Paso 3",
            step4Badge: "Paso 4",
            hubConnectors: "+400 Conectores",
            stage1Title: "Tus Sistemas",
            stage1Desc: "ERPs, CRMs, BDs",
            stage2Title: "Conectar",
            stage2Desc: "Extraer y sincronizar",
            stage3Title: "Modelar",
            stage3Desc: "Transformar y limpiar",
            stage4Title: "Documentar",
            stage4Desc: "Catálogo y linaje",
            stage5Title: "Capa IA",
            stage5Desc: "Entender contexto",
            stage6Title: "Interactuar",
            stage6Desc: "Chat y visualizar",
            output1Title: "Q&A en Lenguaje Natural",
            output1Desc: "Pregunta lo que sea, respuestas al instante",
            output2Title: "Dashboards Automáticos",
            output2Desc: "Insights visuales, siempre actualizados"
        },

        // Journey Scrollytelling Section
        journey: {
            stage1Title: "Conectamos tus sistemas",
            stage1Story: "\"Tengo datos en SAP, HubSpot, hojas de cálculo... ¿cómo los uno?\"",
            stage1Desc: "Nos conectamos automáticamente a todas tus fuentes de datos. ERP, CRM, bases de datos, archivos. +400 conectores disponibles, o creamos integraciones custom para ti.",
            seeConnectors: "Ver conectores disponibles",
            stage2Title: "Modelamos tu información",
            stage2Story: "\"Mis datos están sucios, con duplicados y formatos diferentes...\"",
            stage2Desc: "Limpiamos, transformamos y estructuramos toda tu información en un modelo unificado. Eliminamos duplicados, estandarizamos formatos y creamos relaciones entre tus datos.",
            stage3Title: "Grafo de conocimiento",
            stage3Story: "\"Nadie sabe qué significa cada campo o de dónde viene...\"",
            stage3Desc: "Creamos un grafo de conocimiento que entiende las relaciones entre tus datos: métricas, entidades, KPIs. Trazabilidad completa y contexto.",
            stage4Title: "IA que entiende tu negocio",
            stage4Story: "\"Quiero preguntar cosas sin saber SQL ni depender de técnicos...\"",
            stage4Desc: "Nuestra capa de IA aprende el contexto de tu empresa: terminología, métricas clave, relaciones entre áreas. Entiende cuando preguntas \"¿cómo van las ventas?\" qué datos necesita consultar.",
            finaleTitle: "El resultado: respuestas instantáneas",
            finaleSubtitle: "Pregunta lo que quieras, obtén respuestas con datos reales",
            output1Title: "Pregunta en español",
            output1Desc: "\"¿Cuánto vendimos el mes pasado vs el año anterior?\" — respuesta en segundos, con datos de todas tus fuentes.",
            output2Title: "Dashboards automáticos",
            output2Desc: "Visualizaciones que se generan al vuelo según lo que preguntas. Siempre actualizadas, sin configuración manual.",
            cta: "Quiero ver una demo",
            ctaNote: "Sin compromiso · Configuración en 3 semanas"
        },

        // Comparison Section - TRADITIONAL vs CENTINELA
        comparison: {
            title: "Una Nueva Forma de Acceder a tus Datos",
            subtitle: "De información dispersa a inteligencia unificada",
            traditionalTitle: "La Forma Antigua",
            centinelaTitle: "Con Centinela",
            traditional1: "Buscar en 5 sistemas para encontrar una respuesta",
            traditional2: "Exportar datos, unir hojas de cálculo manualmente",
            traditional3: "Esperar días por reportes personalizados",
            traditional4: "Silos de datos sin conexión",
            traditional5: "Preguntas limitadas por el diseño del dashboard",
            centinela1: "Una pregunta, respuesta completa",
            centinela2: "Todas tus fuentes, conectadas al instante",
            centinela3: "Insights en tiempo real, sin esperas",
            centinela4: "Datos unificados en todos tus sistemas",
            centinela5: "Pregunta lo que sea en lenguaje natural"
        },

        // How it Works Section
        how: {
            title: "De Silos a Insights",
            subtitle: "Tres pasos hacia analytics unificado",
            step1Title: "Conectar",
            step1Desc: "Nos conectamos a tus sistemas—ERP, CRM, bases de datos, hojas de cálculo. +400 conectores disponibles o creamos integraciones custom.",
            step2Title: "Unificar",
            step2Desc: "Tus datos se transforman y normalizan en un modelo unificado. No más exportar y unir hojas de cálculo.",
            step3Title: "Consultar",
            step3Desc: "Haz preguntas en lenguaje natural. Obtén respuestas instantáneas con datos de todas tus fuentes conectadas."
        },

        // Testimonials Section
        testimonials: {
            title: "Resultados que Importan",
            subtitle: "Mira cómo las empresas están transformando su acceso a datos",
            testimonial1Role: "Director de Operaciones",
            testimonial1Company: "Ocati - Exportador de Frutas Exóticas",
            testimonial1Quote: "Antes pasábamos horas extrayendo datos de diferentes sistemas. Ahora solo preguntamos a Centinela y obtenemos respuestas en segundos. Nuestro equipo se enfoca en decisiones, no en buscar datos.",
            testimonial1Metric1Value: "15+",
            testimonial1Metric1Label: "Sistemas Conectados",
            testimonial1Metric2Value: "3 semanas",
            testimonial1Metric2Label: "Para Despliegue",
            testimonial1Metric3Value: "85%",
            testimonial1Metric3Label: "Reportes Más Rápidos",
            testimonial2Role: "CFO",
            testimonial2Company: "Banco Regional",
            testimonial2Quote: "Reportes que tomaban 3 días en compilar ahora toman 30 segundos. Solo preguntamos en lenguaje natural y obtenemos los datos que necesitamos.",
            testimonial2Metric1Value: "30 seg",
            testimonial2Metric1Label: "Tiempo Promedio de Consulta",
            testimonial2Metric2Value: "15+",
            testimonial2Metric2Label: "Fuentes de Datos",
            testimonial2Metric3Value: "24/7",
            testimonial2Metric3Label: "Acceso a Datos"
        },

        // Resources Section
        resources: {
            title: "Aprende Más",
            subtitle: "Explora analytics conversacional",
            resource1Tag: "Guía",
            resource1Title: "El Playbook de Unificación de Datos",
            resource1Desc: "Cómo empresas líderes están rompiendo silos de datos y habilitando analytics de autoservicio.",
            resource2Tag: "Whitepaper",
            resource2Title: "Analytics en Lenguaje Natural",
            resource2Desc: "Por qué preguntar en lenguaje natural es el futuro del business intelligence.",
            resource3Tag: "Caso de Estudio",
            resource3Title: "De 15 Sistemas a 1 Conversación",
            resource3Desc: "Cómo Ocati unificó sus datos y redujo el tiempo de reportes en 85%."
        },

        // CTA Section
        cta: {
            title: "¿Listo para unificar tus datos?",
            description: "Deja de buscar en sistemas. Deja de esperar reportes. Conecta tus fuentes de datos y empieza a hacer preguntas hoy.",
            btnPrimary: "Conecta tus Datos",
            btnSecondary: "Hablemos"
        },

        // Security Section
        security: {
            badge: "Seguridad Enterprise",
            title: "La seguridad de tus datos es nuestra prioridad",
            subtitle: "Infraestructura certificada con los más altos estándares de la industria. Tus datos están protegidos con múltiples capas de seguridad y cumplimiento normativo.",
            soc2Desc: "Controles de seguridad auditados independientemente por firmas CPA certificadas",
            iso27001Desc: "Sistema de gestión de seguridad de la información certificado internacionalmente",
            gdprDesc: "Cumplimiento total con el Reglamento General de Protección de Datos europeo",
            hipaaDesc: "Configuración disponible para datos de salud con BAA (Business Associate Agreement)",
            verified: "Verificado",
            compliant: "Cumple",
            available: "Disponible",
            featuresTitle: "Protección en cada capa",
            featuresDesc: "Nuestra infraestructura implementa múltiples niveles de seguridad para garantizar que tus datos estén siempre protegidos.",
            feature1Title: "Cifrado de extremo a extremo",
            feature1Desc: "TLS 1.3 en tránsito y AES-256 en reposo para todos tus datos",
            feature2Title: "Zero Data Retention opcional",
            feature2Desc: "Tus consultas no se almacenan. Sin persistencia de datos sensibles",
            feature3Title: "Control de acceso granular",
            feature3Desc: "SSO, MFA y permisos por rol para cada usuario de tu organización",
            feature4Title: "Auditoría completa",
            feature4Desc: "Logs detallados de todas las acciones y consultas para compliance",
            trustTitle: "¿Tienes requisitos específicos de seguridad?",
            trustDesc: "Nuestro equipo puede proporcionarte reportes SOC 2, penetration tests y configuraciones personalizadas.",
            trustCta: "Hablar con seguridad"
        },

        // Video Demo Section
        videoDemo: {
            title: "Mira Centinela en acción",
            subtitle: "Descubre cómo transformamos datos dispersos en respuestas instantáneas",
            placeholder: "Video próximamente"
        },

        // FAQ Section
        faq: {
            title: "Preguntas frecuentes",
            subtitle: "Todo lo que necesitas saber sobre Centinela",
            q1: "¿Cuánto tiempo toma la implementación?",
            a1: "La implementación típica toma 3 semanas. Esto incluye la conexión a tus fuentes de datos, modelado de información y configuración del grafo de conocimiento. Empresas con menos sistemas pueden estar listas en menos tiempo.",
            q2: "¿Mis datos están seguros?",
            a2: "Absolutamente. Contamos con certificaciones SOC 2 Type II, ISO 27001, cumplimiento GDPR y HIPAA. Tus datos se cifran en tránsito (TLS 1.3) y en reposo (AES-256). Ofrecemos Zero Data Retention para consultas sensibles.",
            q3: "¿Qué pasa si no tienen mi conector?",
            a3: "Tenemos +400 conectores pre-construidos para ERPs, CRMs, bases de datos y aplicaciones populares. Si necesitas uno que no tenemos, lo desarrollamos como parte de tu implementación sin costo adicional.",
            q4: "¿Necesito conocimientos técnicos para usarlo?",
            a4: "No. Centinela está diseñado para usuarios de negocio. Solo escribe tu pregunta en español (o inglés) y obtén respuestas. No necesitas saber SQL, Python ni ningún lenguaje técnico.",
            q5: "¿Cómo se compara con herramientas de BI tradicionales?",
            a5: "Las herramientas de BI requieren dashboards predefinidos y conocimiento técnico. Con Centinela, cualquier persona puede hacer cualquier pregunta sin limitarse a lo que alguien diseñó previamente. Es la diferencia entre buscar en un menú fijo y tener un chef que cocina lo que pidas."
        },

        // Pricing Preview
        pricingPreview: {
            title: "Planes adaptados a tu empresa",
            subtitle: "Desde startups hasta grandes corporaciones, tenemos el plan perfecto para ti.",
            highlight1: "Sin costos ocultos",
            highlight2: "Prueba gratuita",
            highlight3: "Cancela cuando quieras",
            cta: "Ver planes y precios"
        },

        // Footer
        footer: {
            description: "Centinela conecta todas tus fuentes de datos y te permite consultarlas en lenguaje natural. Sin SQL. Sin más silos de datos.",
            product: "Producto",
            features: "Características",
            howItWorks: "Cómo Funciona",
            pricing: "Precios",
            security: "Seguridad",
            company: "Empresa",
            about: "Nosotros",
            careers: "Carreras",
            contact: "Contacto",
            partners: "Partners",
            resources: "Recursos",
            documentation: "Documentación",
            blog: "Blog",
            caseStudies: "Casos de Estudio",
            support: "Soporte",
            copy: "Todos los derechos reservados."
        },

        // About Page
        about: {
            pageTitle: "Sobre Centinela",
            pageSubtitle: "Estamos construyendo el puente entre tus datos y tus decisiones.",
            missionTitle: "Nuestra Misión",
            missionText: "Cada empresa tiene datos valiosos encerrados en silos. Los estamos haciendo accesibles para todos a través de lenguaje natural.",
            storyTitle: "Por Qué Existimos",
            storyText1: "Vimos empresas luchar para obtener respuestas simples porque sus datos vivían en demasiados lugares. Equipos pasaban días creando reportes que deberían tomar minutos.",
            storyText2: "Centinela cambia eso. Conectamos todas tus fuentes de datos y dejamos que cualquiera pregunte en lenguaje natural. Sin SQL. Sin esperas. Solo respuestas.",
            teamTitle: "Construido por Ingenieros de Datos",
            teamText: "Nuestro equipo ha construido pipelines de datos y plataformas de analytics. Conocemos el dolor de los silos de datos de primera mano, y construimos Centinela para resolverlo.",
            valuesTitle: "Nuestros Valores",
            value1Title: "Los Datos Deben Fluir",
            value1Desc: "Información encerrada en silos no ayuda a nadie a tomar mejores decisiones.",
            value2Title: "La Simplicidad Gana",
            value2Desc: "Si necesitas SQL para obtener respuestas, hemos fallado. Solo pregunta.",
            value3Title: "El Tiempo Real Importa",
            value3Desc: "Datos de ayer llevan a decisiones de ayer. Te mantenemos actualizado.",
            value4Title: "Conecta Todo",
            value4Desc: "+400 conectores y contando. Si lo usas, podemos conectarlo."
        },

        // Contact Page
        contact: {
            pageTitle: "Hablemos",
            pageSubtitle: "¿Curioso sobre cómo analytics conversacional podría funcionar para tu negocio? Exploremos juntos.",
            formTitle: "Inicia la conversación",
            labelName: "Nombre Completo",
            labelEmail: "Email Corporativo",
            labelCompany: "Empresa",
            labelSize: "Tamaño de Empresa",
            labelMessage: "¿Qué preguntas de datos desearías que fueran más fáciles de responder?",
            placeholderName: "Carlos García",
            placeholderEmail: "carlos@empresa.com",
            placeholderCompany: "Acme S.A.",
            placeholderMessage: "Cuéntanos sobre los reportes que toman demasiado tiempo en crearse...",
            sizeSelect: "Selecciona tamaño de empresa",
            sizeSmall: "1-50 empleados",
            sizeMedium: "51-200 empleados",
            sizeLarge: "201-1000 empleados",
            sizeEnterprise: "1000+ empleados",
            submit: "Solicitar Demo",
            infoTitle: "Otras formas de contactarnos",
            infoSubtitle: "Estamos aquí para ayudar.",
            emailTitle: "Email",
            emailValue: "hola@centinela.ai",
            scheduleTitle: "Agendar",
            scheduleValue: "Llamada de 30 min para explorar tu caso de uso",
            locationTitle: "Ubicación",
            locationValue: "Bogotá, Colombia"
        },

        // Pricing Page
        pricing: {
            title: "Precios Simples y Transparentes",
            subtitle: "Elige el plan que se ajuste a tu negocio. Todos los planes incluyen acceso a +400 conectores de datos.",
            perMonth: "/mes",
            popular: "Más Popular",
            getStarted: "Comenzar",
            contactSales: "Contactar Ventas",

            essentialName: "Essential",
            essentialTagline: "Conexión de datos self-service",
            essentialNote: "Conecta y consulta por tu cuenta",

            growthName: "Growth",
            growthTagline: "Soporte completo y mejora continua",
            growthNote: "Todo lo que necesitas para escalar",

            enterpriseName: "Enterprise",
            enterpriseTagline: "Automatización completa y acciones",
            enterpriseNote: "Automatización total de datos",

            feature400: "+400 conectores de datos",
            featureNL: "Consultas en lenguaje natural",
            featureDashboard: "Acceso básico a dashboards",
            featureNoSupport: "Sin soporte dedicado",
            featureNoMeetings: "Sin reuniones estratégicas",
            featureNoAutomations: "Sin automatizaciones",
            featureAutoViz: "Visualizaciones automáticas",
            featureSupport: "Equipo de soporte dedicado",
            featureMeetings: "Reuniones semanales de estrategia",
            featureImprovements: "Mejoras incrementales",
            featureNoActions: "Sin acciones en sistemas",
            featureEverything: "Todo en Growth",
            featureActions: "Acciones y automatizaciones",
            featureWorkflows: "Automatización de flujos custom",
            featureAlerts: "Alertas y triggers automáticos",
            featurePriority: "Soporte prioritario (24/7)",
            featureCustom: "Integraciones personalizadas",

            faqTitle: "Preguntas Frecuentes",
            faq1Q: "¿Qué son las acciones en sistemas?",
            faq1A: "Las acciones permiten que Centinela no solo lea tus datos, sino también escriba en tus sistemas. Crea facturas, actualiza registros de CRM, envía notificaciones—todo con comandos en lenguaje natural.",
            faq2Q: "¿Puedo actualizar mi plan después?",
            faq2A: "¡Sí! Puedes actualizar en cualquier momento y solo pagar la diferencia. Tus datos y configuraciones se transfieren sin problemas.",
            faq3Q: "¿Qué incluye el soporte dedicado?",
            faq3A: "El soporte dedicado incluye reuniones semanales de estrategia, acceso directo por Slack/Teams a nuestro equipo, capacitación personalizada y tiempos de respuesta prioritarios.",
            faq4Q: "¿Cuánto tiempo toma la implementación?",
            faq4A: "La mayoría de las empresas están operando en 3 semanas. Despliegues Enterprise complejos pueden tomar 4-6 semanas dependiendo del número de integraciones.",

            ctaTitle: "¿Listo para unificar tus datos?",
            ctaSubtitle: "Comienza con una consulta gratuita. Analizaremos tu panorama de datos y recomendaremos el mejor enfoque.",
            ctaButton: "Agendar Llamada"
        }
    }
};

// Language management
let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangButtons();
}

function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            el.textContent = translation;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        if (translation) {
            el.placeholder = translation;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const translation = t(key);
        if (translation) {
            el.innerHTML = translation;
        }
    });
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLangButtons();

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
});

// Export for external use
window.i18n = { setLanguage, t, applyTranslations };

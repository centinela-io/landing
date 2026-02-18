/**
 * Centinela - Internationalization (i18n) Module
 * Supports: English (en), Spanish (es)
 *
 * Positioning: Cognitive Sovereignty — Knowledge Layer for your organization
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

        // Hero Section - COGNITIVE SOVEREIGNTY
        hero: {
            badge: "Cognitive sovereignty for your company",
            titleLine1: "Your knowledge.",
            titleLine2: "Your competitive edge.",
            description: "The infrastructure for organizational intelligence — purpose-built for regulated industries. Centinela connects your systems, captures your business logic, performs analysis, executes actions, and automates complete workflows.",
            ctaPrimary: "See how it works",
            ctaSecondary: "Request demo",
            loopCapture: "Connect",
            loopEmbed: "Explore",
            loopOwn: "Act"
        },

        // The Problem Section - Knowledge Loss
        problem: {
            sectionLabel: "The hidden cost",
            headline: "Critical knowledge scattered across systems and people",
            point1: "Critical knowledge lives in 3 people's heads",
            point2: "Every new employee starts from zero",
            point3: "Decisions are made with incomplete data",
            point4: "Business logic isn't documented",
            question: "Your organization's accumulated knowledge, one question away.",
            ctaText: "Build your knowledge layer →"
        },

        // Trusted Section
        trusted: {
            label: "Trusted by data-driven companies"
        },

        // Demo Section - Knowledge by Vertical
        demo: {
            title: "Knowledge activated by vertical",
            subtitle: "Every department has its own knowledge layer. See how Centinela responds with real context from your company.",
            // Tab labels
            tab1: "Reconciliation",
            tab2: "Revenue Intelligence",
            tab3: "Compliance",
            tab4: "Operations",
            tab5: "Marketing Digital",
            // Use case 1: Reconciliations
            uc1Question: "How many unreconciled invoices do we have this month?",
            uc1Response: "Here's the reconciliation status for this month:",
            uc1Detail1: "247 invoices pending reconciliation",
            uc1Detail2: "89% automatic match — 220 invoices reconciled",
            uc1Detail3: "27 require manual review (top 3 differences listed below)",
            uc1Detail4: "Alert: $125K in invoices older than 30 days",
            uc1Recommendation: "The 27 manual cases are concentrated in 3 suppliers. I recommend scheduling a review session with the accounts payable team this week.",
            // Use case 2: Revenue Intelligence
            uc2Question: "What's the revenue forecast for Q2 vs budget?",
            uc2Response: "Here's the Q2 revenue analysis:",
            uc2Detail1: "Q2 Forecast: $3.2M (+8% vs budget)",
            uc2Detail2: "Risk: 3 large accounts pending renewal ($480K)",
            uc2Detail3: "Weighted pipeline: $4.1M (78% confidence)",
            uc2Detail4: "Best channel: Enterprise direct (+23% vs last year)",
            uc2Recommendation: "The 3 pending renewals represent 15% of the forecast. I recommend prioritizing contact with these accounts before end of month.",
            // Use case 3: Compliance
            uc3Question: "Are we up to date with tax filings?",
            uc3Response: "Current tax compliance status:",
            uc3Detail1: "VAT: Filed and up to date",
            uc3Detail2: "Withholding tax: February filing pending (due Feb 20)",
            uc3Detail3: "Income tax: Next deadline March 15",
            uc3Detail4: "2 active alerts: municipal tax + regulatory update",
            uc3Recommendation: "The February withholding tax filing is 4 days away. All supporting documents are ready in the system. Should I generate the filing report?",
            // Use case 4: Operations
            uc4Question: "What's the status of January's close?",
            uc4Response: "January close progress:",
            uc4Detail1: "87% completed (13 of 15 tasks done)",
            uc4Detail2: "Pending: bank reconciliation ($45K difference)",
            uc4Detail3: "Pending: portfolio provisions and FX adjustments",
            uc4Detail4: "Blocked: waiting for 3 supplier invoices",
            uc4Recommendation: "The $45K difference traces to 2 transactions from Jan 28. Verify with treasury.",
            // Use case 5: Marketing Digital
            uc5Question: "How are this month's campaigns performing and where should I reallocate budget?",
            uc5Response: "Active campaign analysis:",
            uc5Detail1: "Google Ads: ROAS 4.2x (above 3.5x target) — $12K spent",
            uc5Detail2: "Meta Ads: ROAS 1.8x (below target) — \"lookalike professionals\" audience saturated",
            uc5Detail3: "LinkedIn: CPA $45 but highest quality leads (32% close rate vs 12% Meta)",
            uc5Detail4: "Opportunity: $3K from Meta → LinkedIn would generate ~67 additional high-value leads",
            uc5Recommendation: "I recommend reallocating $3K from Meta to LinkedIn this week. The lookalike audience is exhausted. LinkedIn CPL is higher but close value is 3x. Should I execute the reallocation?",
            // Use case 6: Agroindustry
            tab6: "Agroindustry",
            uc6Question: "Which suppliers have residuality alerts this month?",
            uc6Response: "Supplier residuality analysis for this month:",
            uc6Detail1: "3 suppliers with active alerts — 2 exceed EU MRL thresholds",
            uc6Detail2: "Supplier Finca El Roble: chlorpyrifos 0.08 mg/kg (limit: 0.01 mg/kg)",
            uc6Detail3: "Supplier reliability score impacted: 92% → 74%",
            uc6Detail4: "Action executed: Restrictive block applied on Odoo. Quality team notified via WhatsApp",
            uc6Recommendation: "I recommend prioritizing a technical visit to Finca El Roble this week. Last visit was 45 days ago. I can add it to the automated visit calendar.",
            browserUrl: "app.centinela.ai",
            inputPlaceholder: "Ask anything about your data...",
            inputButton: "Ask"
        },

        // Stats Section - CONCRETE RESULTS
        stats: {
            stat1Value: "85%",
            stat1Label: "Less time on accounting closes",
            stat2Value: "90%",
            stat2Label: "Automatic invoice reconciliation rate",
            stat3Value: "3wk",
            stat3Label: "To production deployment",
            stat4Value: "24/7",
            stat4Label: "Compliance monitoring"
        },

        // Centinela Acts Section - DIFFERENTIATOR
        acts: {
            badge: "Beyond Q&A",
            title: "Centinela analyzes, decides, and",
            titleHighlight: "acts.",
            subtitle: "Scale your enterprise with software before headcount. Proactive alerts, automated reports, and restrictive actions on your systems — augmenting performance without growing your team.",
            act1Title: "Proactive Alerts",
            act1Desc: "Multi-channel notifications (WhatsApp, email, SMS) with the information you need before you ask for it.",
            act1Example: "Monday 7am via WhatsApp: 'You have 3 supplier invoices pending approval for $125K. 2 exceed the 30-day term. Shall I flag them?'",
            act2Title: "Restrictive Actions",
            act2Desc: "Automatically blocks, restricts or flags transactions in your ERP when business rules are violated.",
            act2Example: "Supplier #4523 blocked in Odoo: residuality detected above EU threshold. Quality team notified via WhatsApp.",
            act3Title: "Automated Outputs",
            act3Desc: "Generates reports, PDFs, financial statements, and scorecards ready for decision-making.",
            act3Example: "Credit study for Client XYZ generated: Risk B+, recommended limit $450K. PDF sent to credit committee."
        },

        // Features Section - THE DATA STACK
        features: {
            title: "How It Works",
            subtitle: "Empower anyone to uncover insights, automate workflows, and drive actions with AI",
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

        // Real Integrations Section
        integrations: {
            title: "Your existing applications, integrated with AI",
            subtitle: "Centinela seamlessly integrates with all your enterprise data sources, eliminating the need to navigate multiple systems.",
            cat1: "ERPs & Accounting",
            cat2: "Operations & CRM",
            cat3: "Communication & Alerts",
            cat4: "Specialized"
        },

        // Knowledge Layer Section - AGENT SKILLS
        knowledgeLayer: {
            badge: "Knowledge Infrastructure",
            title: "Knowledge Layer.",
            titleHighlight: "Context Graphs.",
            subtitle: "One platform, with your entire knowledge base. Context graphs, decision infrastructure, and agent evaluation that capture, preserve, and activate your company's intelligence. Your cognitive sovereignty.",
            // Knowledge Layers
            layer1Title: "Data Layer",
            layer1Desc: "All your sources, unified",
            layer2Title: "Context Graph",
            layer2Desc: "Relationships & business logic",
            layer3Title: "Agent Skills",
            layer3Desc: "Specialized by vertical",
            // Agent Skills - Focused on 4 use cases
            skillsTitle: "Agent Skills",
            skillsCount: "Specialized agents",
            skill1Title: "Revenue Intelligence",
            skill1Desc: "Forecast, pipeline, account analysis, revenue trends",
            skill1Ex: "\"What's the revenue forecast for Q2 vs budget?\"",
            skill2Title: "Accounting & Reconciliation",
            skill2Desc: "Closes, reconciliation, provisions, financial reporting",
            skill2Ex: "\"Show me unreconciled invoices this month\"",
            skill3Title: "Operations",
            skill3Desc: "Inventory, supply chain, efficiency, capacity planning",
            skill3Ex: "\"What's our current inventory turnover rate?\"",
            skill4Title: "Compliance & Regulatory",
            skill4Desc: "Tax filings, audits, alerts, regulatory monitoring",
            skill4Ex: "\"Are we up to date on tax filings?\"",
            // Quote & CTA
            quote: "Institutional memory. Cognitive sovereignty. Your competitive edge.",
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
            stage1Story: "SAP, HubSpot, spreadsheets — all unified",
            stage1Desc: "We automatically connect to all your data sources. ERP, CRM, databases, files. +400 connectors available, or we build custom integrations for you.",
            seeConnectors: "See available connectors",
            stage2Title: "We model your information",
            stage2Story: "Clean, structured, deduplicated data",
            stage2Desc: "We clean, transform and structure all your information into a unified model. We eliminate duplicates, standardize formats and create relationships between your data.",
            stage3Title: "Knowledge Graph",
            stage3Story: "Traceability and context for every field",
            stage3Desc: "We create a knowledge graph that understands relationships between your data: metrics, entities, KPIs. Complete traceability and context.",
            stage4Title: "AI that understands your business",
            stage4Story: "Natural language — no SQL, no technicians needed",
            stage4Desc: "Like a new team member, Centinela's memory management system incorporates your business SOPs, enterprise objectives, and strategic initiatives. It understands your terminology, metrics, and relationships.",
            finaleTitle: "The result: decisions with context",
            finaleSubtitle: "One platform, with your entire knowledge base — activated and accessible to everyone",
            output1Title: "Ask in plain English",
            output1Desc: "\"How much did we sell last month vs last year?\" — answer in seconds, with data from all your sources.",
            output2Title: "Automatic dashboards",
            output2Desc: "Visualizations generated on the fly based on what you ask. Always updated, no manual configuration.",
            cta: "I want to see a demo",
            ctaNote: "No commitment · Setup in 3 weeks"
        },

        // Comparison Section - Traditional BI / Generic APIs vs Knowledge Layer
        comparison: {
            title: "Traditional BI vs Knowledge Layer",
            subtitle: "The difference isn't speed — it's sovereignty",
            traditionalTitle: "Traditional BI / Generic APIs",
            centinelaTitle: "With Centinela",
            traditional1: "Fixed dashboards nobody updates",
            traditional2: "Data without business context",
            traditional3: "Knowledge leaves when people leave",
            traditional4: "Dependency on external APIs (you leak your value)",
            traditional5: "Generic answers without your context",
            traditional6: "Manual processes — someone has to do it",
            centinela1: "Living knowledge that updates itself",
            centinela2: "Graphs that understand YOUR logic",
            centinela3: "Institutional memory that's preserved",
            centinela4: "Sovereignty over your knowledge",
            centinela5: "Answers with your company's context",
            centinela6: "Automated actions — Centinela does it for you"
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

        // How We Work Section - SERVICE MODEL
        howWeWork: {
            badge: "Our Process",
            title: "How we work",
            subtitle: "Purpose-built for regulated industries. A strategic implementation tailored to your organization — from diagnostic to continuous support.",
            step1Title: "Diagnostic",
            step1Desc: "We map your systems, processes and critical knowledge. We identify where knowledge is lost and where the highest-impact automations are.",
            step1Tag: "Week 1",
            step2Title: "Implementation",
            step2Desc: "We connect your systems, build the knowledge graph and deploy the first use cases. Your team sees results from day one.",
            step2Tag: "Weeks 2-3",
            step3Title: "Prioritized Backlog",
            step3Desc: "Together we define a backlog of automation projects. Each sprint delivers new capabilities: bots, workflows, reports, alerts.",
            step3Tag: "Ongoing",
            step4Title: "Continuous Support",
            step4Desc: "Ongoing accompaniment, model optimization, knowledge transfer. Your team gains sovereignty — not dependency.",
            step4Tag: "Always"
        },

        // Testimonials Section
        testimonials: {
            title: "Real Results from Real Companies",
            subtitle: "How our clients transformed their operations with Centinela",
            testimonial1Role: "Operations Director",
            testimonial1Company: "Hotel Group — Medellín",
            testimonial1Quote: "Before Centinela, monthly close took us 2 weeks and involved 4 people pulling data from ERP, PMS and spreadsheets. Now it takes 3 days. But what changed everything is that every Monday, each department head arrives and already has their pending items, approvals and alerts ready — without asking anyone.",
            testimonial1Metric1Value: "12",
            testimonial1Metric1Label: "Systems Connected",
            testimonial1Metric2Value: "85%",
            testimonial1Metric2Label: "Reduction in Close Time",
            testimonial1Metric3Value: "23",
            testimonial1Metric3Label: "Automated Workflows",
            testimonial2Role: "Quality & Traceability Director",
            testimonial2Company: "Agricultural Exporter — Colombia",
            testimonial2Quote: "Centinela doesn't just answer questions — it acts. When it detects that a supplier exceeds residuality limits, it automatically blocks them in Odoo and alerts the quality team via WhatsApp. That level of proactive control would have been impossible manually with 200+ suppliers.",
            testimonial2Metric1Value: "4",
            testimonial2Metric1Label: "Systems Integrated",
            testimonial2Metric2Value: "90%",
            testimonial2Metric2Label: "Risk Reduction",
            testimonial2Metric3Value: "200+",
            testimonial2Metric3Label: "Suppliers Monitored 24/7"
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
            title: "Invite Centinela to your team",
            description: "Centinela manages complex analysis and operational workflows — including finance, audit, compliance, and operations. Build your company's cognitive sovereignty.",
            btnPrimary: "Request demo",
            btnSecondary: "Let's talk"
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
            // AI Security - Pangea
            aiBadge: "AI Security",
            aiTitle: "Native security for AI agents",
            aiSubtitle: "Real-time protection against AI-specific threats. Enterprise-grade guardrails that block attacks, prevent data leakage, and ensure every interaction with your agents is secure.",
            poweredBy: "Powered by",
            aiThreat1Title: "Prompt Injection",
            aiThreat1Desc: "Automatic detection and blocking of prompt manipulation attempts and jailbreaks in real time.",
            aiThreat2Title: "Data Leakage",
            aiThreat2Desc: "Sensitive data and PII leakage prevention. Automatic redaction, masking, and format-preserving encryption.",
            aiThreat3Title: "AI Guardrails",
            aiThreat3Desc: "Enterprise-grade guardrails for AI agents and applications. Governance, topic alignment, and content controls.",
            aiThreat4Title: "Audit Trail",
            aiThreat4Desc: "All actions logged and cited for transparency. Complete history available for auditing and forensic analysis.",
            aiStat1: "Attack techniques detected",
            aiStat2: "Detection accuracy",
            aiStat3: "Guardrails latency",
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
            a5: "BI tools require predefined dashboards and technical knowledge. With Centinela, anyone can ask any question without being limited to what someone designed previously. It's the difference between searching a fixed menu and having a chef who cooks whatever you ask.",
            q6: "What is the \"knowledge layer\"?",
            a6: "It's the infrastructure that captures and organizes not just your data, but your business logic, relationships between entities, and your company's context. It's like your organization's \"institutional memory\", accessible to everyone.",
            q7: "How is this different from an AI chatbot?",
            a7: "A chatbot uses generic models. Centinela builds a knowledge model SPECIFIC to your company — it understands your terminology, your metrics, your business relationships. It's the difference between asking a stranger and asking someone who's been at your company for 10 years.",
            q8: "Does my data feed third-party models?",
            a8: "No. Your knowledge stays in your infrastructure. We offer Zero Data Retention. Your cognitive sovereignty is our priority.",
            q9: "What can Centinela automate in my day-to-day?",
            a9: "Our goal is that every Monday, each person on your team logs in and finds everything ready: what they need to know, what to approve or reject to move forward with high-impact work. Everything else — gathering data, generating reports, monitoring compliance — Centinela handles automatically."
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
            description: "We build the knowledge infrastructure that gives companies sovereignty over their own intelligence. Every decision, informed. Every process, automated.",
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
            heroBadge: "The Organizational Brain",
            heroTitle1: "We are ",
            heroTitle2: "Centinela",
            pageSubtitle: "We build the knowledge infrastructure that gives companies sovereignty over their own intelligence.",
            whatWeDoBadge: "What we build",
            whatWeDoTitle: "The Knowledge Layer for your organization",
            whatWeDoText1: "Centinela is a next-gen knowledge infrastructure, purpose-built for regulated industries. It connects your systems, captures your business logic, performs analysis, executes actions, and automates complete workflows.",
            whatWeDoText2: "Like a new team member, Centinela incorporates user preferences, business SOPs, enterprise objectives, and strategic initiatives. Our mission is for every organization to have sovereignty over its own intelligence.",
            whoWeServeBadge: "Verticals",
            whoWeServeTitle: "Who we serve",
            whoWeServeSubtitle: "We work with companies that generate critical knowledge and can't afford to lose it.",
            vertical1Title: "Agroindustry",
            vertical1Desc: "Traceability, residuality, supplier management, quality control, and export compliance.",
            vertical2Title: "Hospitality",
            vertical2Desc: "Multi-property operations, revenue management, guest analytics, and automated closing.",
            vertical3Title: "Finance & Accounting",
            vertical3Desc: "Reconciliations, closes, compliance, tax filings, and financial reporting.",
            vertical4Title: "Operations",
            vertical4Desc: "Inventory, supply chain, efficiency metrics, and cross-system automation.",
            approachBadge: "Our principles",
            approachSubtitle: "The convictions that guide every decision we make.",
            valuesTitle: "Our Principles",
            value1Title: "Cognitive Sovereignty",
            value1Desc: "Your company should own its intelligence. Not rent it from an API. Not lose it when people leave.",
            value2Title: "Knowledge Over Answers",
            value2Desc: "Answers are easy to replicate. A knowledge layer that understands your business logic is not.",
            value3Title: "Context Is Everything",
            value3Desc: "Data without business context is noise. We build graphs that understand YOUR logic, YOUR relationships, YOUR metrics.",
            value4Title: "Institutional Memory",
            value4Desc: "Every decision, every pattern, every insight your company generates should be captured and accessible — forever.",
            teamBadge: "Our team",
            teamSectionTitle: "Built by Knowledge Engineers",
            teamText1: "We saw how critical business knowledge was locked inside people's heads, lost in spreadsheets, or scattered across disconnected systems. When someone left, years of institutional knowledge went with them.",
            teamText2: "Centinela is the answer: a knowledge layer that captures, preserves, and activates the intelligence your company has built over years — so it never depends on a single person or a single system again.",
            teamCardTitle: "Data infrastructure & AI for Latin America",
            teamCardText: "Our team has built data infrastructure and AI systems for enterprises across Latin America. We understand the pain of knowledge loss firsthand, and we built Centinela to solve it.",
            teamLocation: "Medellín, Colombia",
            teamRegion: "Serving all of Latin America"
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
            emailValue: "admin@centinela.io",
            scheduleTitle: "Schedule",
            scheduleValue: "30-min call to explore your use case",
            locationTitle: "Location",
            locationValue: "Medellín, Colombia",
            scheduleBtn: "Book now",
            successMessage: "Message sent!",
            errorMessage: "Error sending. Try again."
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

            ctaTitle: "Ready to build your knowledge layer?",
            ctaSubtitle: "Start with a free consultation. We'll analyze your data landscape and recommend the best approach.",
            ctaButton: "Schedule a Call",

            // Inline pricing section (landing page)
            toggleMonthly: "Monthly",
            toggleAnnual: "Annual",
            saveBadge: "Save 15%",
            essentialPrice: "$3,500",
            growthPrice: "$5,000",
            enterprisePrice: "Custom",

            // Feature table
            tableTitle: "Compare plans in detail",
            rowConnectors: "Connectors",
            rowQueries: "Queries",
            rowKnowledgeLayer: "Knowledge Layer",
            rowDashboards: "Dashboards",
            rowVerticals: "Verticals",
            rowSupport: "Support",
            rowMeetings: "Meetings",
            rowImprovements: "Improvements",
            rowActions: "System actions",
            rowWorkflows: "Workflows",
            rowAlerts: "Alerts",
            rowUsers: "Users",
            rowCustomIntegrations: "Custom integrations",
            rowSLA: "SLA",
            rowSecurity: "Security",
            rowOnboarding: "Onboarding",

            // Essential values
            essConnectors: "Up to 5 syncs",
            essQueries: "Up to 200 queries/month",
            essKnowledge: "Basic",
            essDashboards: "Basic access",
            essVerticals: "1 vertical",
            essSupport: "Documentation",
            essMeetings: "—",
            essImprovements: "—",
            essActions: "—",
            essWorkflows: "—",
            essAlerts: "Basic",
            essUsers: "Up to 5",
            essCustom: "—",
            essSLA: "—",
            essSecurity: "Standard",
            essOnboarding: "Self-service",

            // Growth values
            groConnectors: "Up to 15 syncs",
            groQueries: "Unlimited queries",
            groKnowledge: "Advanced (context graphs)",
            groDashboards: "Automatic visualizations",
            groVerticals: "Up to 3 verticals",
            groSupport: "Dedicated team",
            groMeetings: "Weekly strategy meetings",
            groImprovements: "Incremental improvements",
            groActions: "—",
            groWorkflows: "—",
            groAlerts: "Configurable",
            groUsers: "Up to 20",
            groCustom: "—",
            groSLA: "99.5%",
            groSecurity: "SOC 2",
            groOnboarding: "Guided (3 weeks)",

            // Enterprise values
            entConnectors: "Unlimited + custom",
            entQueries: "Unlimited queries",
            entKnowledge: "Complete (graphs + agent skills)",
            entDashboards: "Visualizations + custom reports",
            entVerticals: "Unlimited",
            entSupport: "Priority 24/7",
            entMeetings: "Meetings + dedicated roadmap",
            entImprovements: "Improvements + custom development",
            entActions: "Write to systems (invoices, CRM, etc.)",
            entWorkflows: "Custom workflow automation",
            entAlerts: "Alerts + automatic triggers",
            entUsers: "Unlimited",
            entCustom: "Included",
            entSLA: "99.9%",
            entSecurity: "SOC 2 + custom configs",
            entOnboarding: "White-glove (dedicated)"
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

        // Hero Section - SOBERANÍA COGNITIVA
        hero: {
            badge: "Soberanía cognitiva para tu empresa",
            titleLine1: "Tu conocimiento.",
            titleLine2: "Tu ventaja competitiva.",
            description: "La infraestructura para la inteligencia organizacional — diseñada para industrias reguladas. Centinela conecta tus sistemas, captura tu lógica de negocio, realiza análisis, ejecuta acciones y automatiza workflows completos.",
            ctaPrimary: "Ver cómo funciona",
            ctaSecondary: "Solicitar demo",
            loopCapture: "Conecta",
            loopEmbed: "Explora",
            loopOwn: "Actúa"
        },

        // The Problem Section - Pérdida de conocimiento
        problem: {
            sectionLabel: "El costo oculto",
            headline: "Conocimiento crítico disperso entre sistemas y personas",
            point1: "El conocimiento vive en la cabeza de 3 personas",
            point2: "Cada nuevo empleado parte de cero",
            point3: "Las decisiones se toman con datos incompletos",
            point4: "La lógica de negocio no está documentada",
            question: "El conocimiento acumulado de tu organización, a una pregunta de distancia.",
            ctaText: "Construye tu capa de conocimiento →"
        },

        // Trusted Section
        trusted: {
            label: "Empresas data-driven confían en nosotros"
        },

        // Demo Section - Conocimiento por Vertical
        demo: {
            title: "Conocimiento activado por vertical",
            subtitle: "Cada departamento tiene su propia capa de conocimiento. Mira cómo Centinela responde con contexto real de tu empresa.",
            // Tab labels
            tab1: "Conciliaciones",
            tab2: "Revenue Intelligence",
            tab3: "Compliance",
            tab4: "Operaciones",
            tab5: "Marketing Digital",
            // Caso 1: Reconciliaciones
            uc1Question: "¿Cuántas facturas sin conciliar tenemos este mes?",
            uc1Response: "Este es el estado de conciliación del mes:",
            uc1Detail1: "247 facturas pendientes de conciliación",
            uc1Detail2: "89% match automático — 220 facturas conciliadas",
            uc1Detail3: "27 requieren revisión manual (top 3 diferencias listadas abajo)",
            uc1Detail4: "Alerta: $125K en facturas con más de 30 días",
            uc1Recommendation: "Los 27 casos manuales se concentran en 3 proveedores. Recomiendo agendar sesión de revisión con el equipo de cuentas por pagar esta semana.",
            // Caso 2: Revenue Intelligence
            uc2Question: "¿Cuál es el revenue forecast para Q2 vs presupuesto?",
            uc2Response: "Este es el análisis de revenue para Q2:",
            uc2Detail1: "Forecast Q2: $3.2M (+8% vs presupuesto)",
            uc2Detail2: "Riesgo: 3 cuentas grandes sin renovar ($480K)",
            uc2Detail3: "Pipeline ponderado: $4.1M (78% confianza)",
            uc2Detail4: "Mejor canal: Enterprise directo (+23% vs año anterior)",
            uc2Recommendation: "Las 3 renovaciones pendientes representan 15% del forecast. Recomiendo priorizar contacto con estas cuentas antes de fin de mes.",
            // Caso 3: Compliance
            uc3Question: "¿Estamos al día con las declaraciones tributarias?",
            uc3Response: "Estado actual de cumplimiento tributario:",
            uc3Detail1: "IVA: Presentado y al día",
            uc3Detail2: "Retención en la fuente: Pendiente Feb (vence 20 Feb)",
            uc3Detail3: "Renta: Próxima fecha Mar 15",
            uc3Detail4: "2 alertas activas: impuesto municipal + actualización normativa",
            uc3Recommendation: "La retención de febrero vence en 4 días. Todos los soportes están listos en el sistema. ¿Genero el reporte de presentación?",
            // Caso 4: Operaciones
            uc4Question: "¿Cuál es el estado del cierre de enero?",
            uc4Response: "Progreso del cierre de enero:",
            uc4Detail1: "87% completado (13 de 15 tareas listas)",
            uc4Detail2: "Pendiente: conciliación bancaria ($45K diferencia)",
            uc4Detail3: "Pendiente: provisiones de cartera y ajustes cambiarios",
            uc4Detail4: "Bloqueado: esperando 3 facturas de proveedores",
            uc4Recommendation: "La diferencia de $45K se rastreó a 2 transacciones del 28 enero. Verificar con tesorería.",
            // Caso 5: Marketing Digital
            uc5Question: "¿Cómo está el rendimiento de las campañas de este mes y dónde debería reasignar presupuesto?",
            uc5Response: "Análisis de campañas activas:",
            uc5Detail1: "Google Ads: ROAS 4.2x (arriba del target 3.5x) — $12K invertidos",
            uc5Detail2: "Meta Ads: ROAS 1.8x (abajo del target) — audiencia \"lookalike profesionales\" saturada",
            uc5Detail3: "LinkedIn: CPA $45 pero leads de mayor calidad (32% tasa cierre vs 12% Meta)",
            uc5Detail4: "Oportunidad: $3K de Meta → LinkedIn generaría ~67 leads adicionales de alto valor",
            uc5Recommendation: "Recomiendo reasignar $3K de Meta a LinkedIn esta semana. La audiencia lookalike se agotó. En LinkedIn el costo por lead es mayor pero el valor por cierre es 3x. ¿Ejecuto la reasignación?",
            // Caso 6: Agroindustria
            tab6: "Agroindustria",
            uc6Question: "¿Qué proveedores tienen alertas de residualidad este mes?",
            uc6Response: "Análisis de residualidad de proveedores este mes:",
            uc6Detail1: "3 proveedores con alertas activas — 2 superan umbrales MRL de la UE",
            uc6Detail2: "Proveedor Finca El Roble: clorpirifós 0.08 mg/kg (límite: 0.01 mg/kg)",
            uc6Detail3: "Score de confiabilidad del proveedor impactado: 92% → 74%",
            uc6Detail4: "Acción ejecutada: Bloqueo restrictivo aplicado en Odoo. Equipo de calidad notificado por WhatsApp",
            uc6Recommendation: "Recomiendo priorizar visita técnica a Finca El Roble esta semana. Última visita hace 45 días. Puedo agregarla al calendario automatizado de visitas.",
            browserUrl: "app.centinela.ai",
            inputPlaceholder: "Pregunta lo que sea sobre tus datos...",
            inputButton: "Preguntar"
        },

        // Stats Section - RESULTADOS CONCRETOS
        stats: {
            stat1Value: "85%",
            stat1Label: "Menos tiempo en cierres contables",
            stat2Value: "90%",
            stat2Label: "Conciliación automática de facturas",
            stat3Value: "3sem",
            stat3Label: "A producción",
            stat4Value: "24/7",
            stat4Label: "Monitoreo de compliance"
        },

        // Sección Centinela Actúa - DIFERENCIADOR
        acts: {
            badge: "Más allá de preguntas",
            title: "Centinela analiza, decide y",
            titleHighlight: "actúa.",
            subtitle: "Escala tu empresa con software antes que con headcount. Alertas proactivas, reportes automatizados y acciones restrictivas sobre tus sistemas — más rendimiento sin crecer el equipo.",
            act1Title: "Alertas Proactivas",
            act1Desc: "Notificaciones multicanal (WhatsApp, email, SMS) con la información que necesitas antes de que la pidas.",
            act1Example: "Lunes 7am por WhatsApp: 'Tienes 3 facturas de proveedores pendientes de aprobación por $125K. 2 superan el plazo de 30 días. ¿Las marco?'",
            act2Title: "Acciones Restrictivas",
            act2Desc: "Bloquea, restringe o marca transacciones automáticamente en tu ERP cuando se violan reglas de negocio.",
            act2Example: "Proveedor #4523 bloqueado en Odoo: residualidad detectada sobre umbral UE. Equipo de calidad notificado por WhatsApp.",
            act3Title: "Outputs Automatizados",
            act3Desc: "Genera reportes, PDFs, estados financieros y scorecards listos para toma de decisiones.",
            act3Example: "Estudio de crédito para Cliente XYZ generado: Riesgo B+, límite recomendado $450K. PDF enviado al comité de crédito."
        },

        // Features Section - THE DATA STACK
        features: {
            title: "Cómo Funciona",
            subtitle: "Empodera a cualquiera para descubrir insights, automatizar workflows y ejecutar acciones con IA",
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

        // Sección Integraciones Reales
        integrations: {
            title: "Tus aplicaciones actuales, integradas con IA",
            subtitle: "Centinela se integra con todas tus fuentes de datos empresariales, eliminando la necesidad de navegar múltiples sistemas.",
            cat1: "ERPs y Contabilidad",
            cat2: "Operaciones y CRM",
            cat3: "Comunicación y Alertas",
            cat4: "Especializadas"
        },

        // Knowledge Layer Section - AGENT SKILLS
        knowledgeLayer: {
            badge: "Infraestructura de Conocimiento",
            title: "Capa de Conocimiento.",
            titleHighlight: "Grafos de Contexto.",
            subtitle: "Una plataforma, con toda tu base de conocimiento. Grafos de contexto, infraestructura de decisión y evaluación de agentes que capturan, preservan y activan la inteligencia de tu empresa. Tu soberanía cognitiva.",
            // Capas de Conocimiento
            layer1Title: "Capa de Datos",
            layer1Desc: "Todas tus fuentes, unificadas",
            layer2Title: "Grafo de Contexto",
            layer2Desc: "Relaciones y lógica de negocio",
            layer3Title: "Skills de Agentes",
            layer3Desc: "Especializados por vertical",
            // Agent Skills - 4 casos de uso enfocados
            skillsTitle: "Skills de Agentes",
            skillsCount: "Agentes especializados",
            skill1Title: "Revenue Intelligence",
            skill1Desc: "Forecast, pipeline, análisis de cuentas, tendencias de ingresos",
            skill1Ex: "\"¿Cuál es el revenue forecast para Q2 vs presupuesto?\"",
            skill2Title: "Contabilidad & Conciliaciones",
            skill2Desc: "Cierres, conciliaciones, provisiones, reportes financieros",
            skill2Ex: "\"Muéstrame facturas sin conciliar este mes\"",
            skill3Title: "Operaciones",
            skill3Desc: "Inventario, cadena de suministro, eficiencia, planificación",
            skill3Ex: "\"¿Cuál es nuestra rotación de inventario actual?\"",
            skill4Title: "Compliance & Normativa",
            skill4Desc: "Declaraciones, auditorías, alertas, monitoreo regulatorio",
            skill4Ex: "\"¿Estamos al día con las declaraciones tributarias?\"",
            // Quote & CTA
            quote: "Memoria institucional. Soberanía cognitiva. Tu ventaja competitiva.",
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
            stage1Story: "SAP, HubSpot, hojas de cálculo — todo unificado",
            stage1Desc: "Nos conectamos automáticamente a todas tus fuentes de datos. ERP, CRM, bases de datos, archivos. +400 conectores disponibles, o creamos integraciones custom para ti.",
            seeConnectors: "Ver conectores disponibles",
            stage2Title: "Modelamos tu información",
            stage2Story: "Datos limpios, estructurados, deduplicados",
            stage2Desc: "Limpiamos, transformamos y estructuramos toda tu información en un modelo unificado. Eliminamos duplicados, estandarizamos formatos y creamos relaciones entre tus datos.",
            stage3Title: "Grafo de conocimiento",
            stage3Story: "Trazabilidad y contexto para cada campo",
            stage3Desc: "Creamos un grafo de conocimiento que entiende las relaciones entre tus datos: métricas, entidades, KPIs. Trazabilidad completa y contexto.",
            stage4Title: "IA que entiende tu negocio",
            stage4Story: "Lenguaje natural — sin SQL, sin depender de técnicos",
            stage4Desc: "Como un nuevo miembro del equipo, el sistema de memoria de Centinela incorpora los SOPs de tu negocio, objetivos empresariales e iniciativas estratégicas. Entiende tu terminología, métricas y relaciones.",
            finaleTitle: "El resultado: decisiones con contexto",
            finaleSubtitle: "Una plataforma, con toda tu base de conocimiento — activada y accesible para todos",
            output1Title: "Pregunta en español",
            output1Desc: "\"¿Cuánto vendimos el mes pasado vs el año anterior?\" — respuesta en segundos, con datos de todas tus fuentes.",
            output2Title: "Dashboards automáticos",
            output2Desc: "Visualizaciones que se generan al vuelo según lo que preguntas. Siempre actualizadas, sin configuración manual.",
            cta: "Quiero ver una demo",
            ctaNote: "Sin compromiso · Configuración en 3 semanas"
        },

        // Comparison Section - BI tradicional / APIs genéricas vs Knowledge Layer
        comparison: {
            title: "BI Tradicional vs Knowledge Layer",
            subtitle: "La diferencia no es velocidad — es soberanía",
            traditionalTitle: "BI Tradicional / APIs genéricas",
            centinelaTitle: "Con Centinela",
            traditional1: "Dashboards fijos que nadie actualiza",
            traditional2: "Datos sin contexto de negocio",
            traditional3: "Conocimiento que se va cuando la gente se va",
            traditional4: "Dependencia de APIs externas (filtras tu valor)",
            traditional5: "Respuestas genéricas sin tu contexto",
            traditional6: "Procesos manuales — alguien lo tiene que hacer",
            centinela1: "Conocimiento vivo que se actualiza solo",
            centinela2: "Grafos que entienden TU lógica",
            centinela3: "Memoria institucional que se preserva",
            centinela4: "Soberanía sobre tu conocimiento",
            centinela5: "Respuestas con el contexto de tu empresa",
            centinela6: "Acciones automatizadas — Centinela lo hace por ti"
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

        // Sección Cómo Trabajamos - MODELO DE SERVICIO
        howWeWork: {
            badge: "Nuestro Proceso",
            title: "Cómo trabajamos",
            subtitle: "Diseñado para industrias reguladas. Una implementación estratégica adaptada a tu organización — desde diagnóstico hasta soporte continuo.",
            step1Title: "Diagnóstico",
            step1Desc: "Mapeamos tus sistemas, procesos y conocimiento crítico. Identificamos dónde se pierde conocimiento y dónde están las automatizaciones de mayor impacto.",
            step1Tag: "Semana 1",
            step2Title: "Implementación",
            step2Desc: "Conectamos tus sistemas, construimos el grafo de conocimiento y desplegamos los primeros casos de uso. Tu equipo ve resultados desde el día uno.",
            step2Tag: "Semanas 2-3",
            step3Title: "Backlog Priorizado",
            step3Desc: "Juntos definimos un backlog de proyectos de automatización. Cada sprint entrega nuevas capacidades: bots, workflows, reportes, alertas.",
            step3Tag: "Continuo",
            step4Title: "Soporte Continuo",
            step4Desc: "Acompañamiento permanente, optimización de modelos, transferencia de conocimiento. Tu equipo gana soberanía — no dependencia.",
            step4Tag: "Siempre"
        },

        // Testimonials Section
        testimonials: {
            title: "Resultados reales de empresas reales",
            subtitle: "Cómo nuestros clientes transformaron sus operaciones con Centinela",
            testimonial1Role: "Directora de Operaciones",
            testimonial1Company: "Grupo Hotelero — Medellín",
            testimonial1Quote: "Antes de Centinela, el cierre mensual nos tomaba 2 semanas e involucraba 4 personas sacando datos de ERP, PMS y hojas de cálculo. Ahora toma 3 días. Pero lo que realmente lo cambió todo es que cada lunes, cada jefe de área llega y ya tiene sus pendientes, aprobaciones y alertas listas — sin preguntarle a nadie.",
            testimonial1Metric1Value: "12",
            testimonial1Metric1Label: "Sistemas Conectados",
            testimonial1Metric2Value: "85%",
            testimonial1Metric2Label: "Reducción en Tiempo de Cierre",
            testimonial1Metric3Value: "23",
            testimonial1Metric3Label: "Workflows Automatizados",
            testimonial2Role: "Director de Calidad y Trazabilidad",
            testimonial2Company: "Exportadora Agrícola — Colombia",
            testimonial2Quote: "Centinela no solo responde preguntas — actúa. Cuando detecta que un proveedor supera los límites de residualidad, automáticamente lo bloquea en Odoo y alerta al equipo de calidad por WhatsApp. Ese nivel de control proactivo habría sido imposible manualmente con 200+ proveedores.",
            testimonial2Metric1Value: "4",
            testimonial2Metric1Label: "Sistemas Integrados",
            testimonial2Metric2Value: "90%",
            testimonial2Metric2Label: "Reducción de Riesgo",
            testimonial2Metric3Value: "200+",
            testimonial2Metric3Label: "Proveedores Monitoreados 24/7"
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
            title: "Invita a Centinela a tu equipo",
            description: "Centinela gestiona análisis complejos y workflows operacionales — incluyendo finanzas, auditoría, compliance y operaciones. Construye la soberanía cognitiva de tu empresa.",
            btnPrimary: "Solicitar demo",
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
            // Seguridad IA - Pangea
            aiBadge: "Seguridad IA",
            aiTitle: "Seguridad nativa para agentes de IA",
            aiSubtitle: "Protección en tiempo real contra amenazas específicas de IA. Guardrails enterprise-grade que bloquean ataques, previenen fuga de datos y aseguran que cada interacción con tus agentes sea segura.",
            poweredBy: "Powered by",
            aiThreat1Title: "Prompt Injection",
            aiThreat1Desc: "Detección y bloqueo automático de intentos de manipulación de prompts y jailbreaks en tiempo real.",
            aiThreat2Title: "Data Leakage",
            aiThreat2Desc: "Prevención de fuga de datos sensibles y PII. Redacción, enmascaramiento y cifrado con preservación de formato.",
            aiThreat3Title: "AI Guardrails",
            aiThreat3Desc: "Guardrails enterprise-grade para agentes y aplicaciones de IA. Control de gobernanza, tópicos y contenido.",
            aiThreat4Title: "Audit Trail",
            aiThreat4Desc: "Todas las acciones registradas y citadas para transparencia. Historial completo disponible para auditoría y análisis forense.",
            aiStat1: "Técnicas de ataque detectadas",
            aiStat2: "Precisión de detección",
            aiStat3: "Latencia de guardrails",
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
            a5: "Las herramientas de BI requieren dashboards predefinidos y conocimiento técnico. Con Centinela, cualquier persona puede hacer cualquier pregunta sin limitarse a lo que alguien diseñó previamente. Es la diferencia entre buscar en un menú fijo y tener un chef que cocina lo que pidas.",
            q6: "¿Qué es la \"capa de conocimiento\"?",
            a6: "Es la infraestructura que captura y organiza no solo tus datos, sino la lógica de negocio, relaciones entre entidades y contexto de tu empresa. Es como la \"memoria institucional\" de tu organización, accesible para todos.",
            q7: "¿En qué se diferencia de un chatbot con IA?",
            a7: "Un chatbot usa modelos genéricos. Centinela construye un modelo de conocimiento PROPIO de tu empresa — entiende tu terminología, tus métricas, tus relaciones de negocio. Es la diferencia entre preguntarle a un extraño y preguntarle a alguien que lleva 10 años en tu empresa.",
            q8: "¿Mis datos alimentan modelos de terceros?",
            a8: "No. Tu conocimiento se queda en tu infraestructura. Ofrecemos Zero Data Retention. Tu soberanía cognitiva es nuestra prioridad.",
            q9: "¿Qué puede automatizar Centinela en mi día a día?",
            a9: "Nuestra meta es que cada lunes, cada persona de tu equipo inicie sesión y tenga todo listo: qué debe saber, qué aprobar o rechazar para continuar con su trabajo de alto impacto. Todo lo demás — recopilar datos, generar reportes, monitorear compliance — lo hace Centinela automáticamente."
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
            description: "Construimos la infraestructura de conocimiento que le da a las empresas soberanía sobre su propia inteligencia. Cada decisión, informada. Cada proceso, automatizado.",
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
            heroBadge: "El Cerebro Organizacional",
            heroTitle1: "Somos ",
            heroTitle2: "Centinela",
            pageSubtitle: "Construimos la infraestructura de conocimiento que le da a las empresas soberanía sobre su propia inteligencia.",
            whatWeDoBadge: "Lo que construimos",
            whatWeDoTitle: "La Capa de Conocimiento para tu organización",
            whatWeDoText1: "Centinela es una infraestructura de conocimiento de nueva generación, diseñada para industrias reguladas. Conecta tus sistemas, captura tu lógica de negocio, realiza análisis, ejecuta acciones y automatiza workflows completos.",
            whatWeDoText2: "Como un nuevo miembro del equipo, Centinela incorpora las preferencias de usuario, SOPs de negocio, objetivos empresariales e iniciativas estratégicas. Nuestra misión es que cada organización tenga soberanía sobre su propia inteligencia.",
            whoWeServeBadge: "Verticales",
            whoWeServeTitle: "A quién servimos",
            whoWeServeSubtitle: "Trabajamos con empresas que generan conocimiento crítico y no pueden darse el lujo de perderlo.",
            vertical1Title: "Agroindustria",
            vertical1Desc: "Trazabilidad, residualidad, gestión de proveedores, control de calidad y cumplimiento de exportación.",
            vertical2Title: "Hotelería",
            vertical2Desc: "Operaciones multi-propiedad, revenue management, analytics de huéspedes y cierres automatizados.",
            vertical3Title: "Finanzas y Contabilidad",
            vertical3Desc: "Conciliaciones, cierres, compliance, declaraciones tributarias y reportes financieros.",
            vertical4Title: "Operaciones",
            vertical4Desc: "Inventario, cadena de suministro, métricas de eficiencia y automatización entre sistemas.",
            approachBadge: "Nuestros principios",
            approachSubtitle: "Las convicciones que guían cada decisión que tomamos.",
            valuesTitle: "Nuestros Principios",
            value1Title: "Soberanía Cognitiva",
            value1Desc: "Tu empresa debe ser dueña de su inteligencia. No rentarla de una API. No perderla cuando la gente se va.",
            value2Title: "Conocimiento Sobre Respuestas",
            value2Desc: "Las respuestas son fáciles de replicar. Una capa de conocimiento que entiende tu lógica de negocio, no.",
            value3Title: "El Contexto Es Todo",
            value3Desc: "Datos sin contexto de negocio son ruido. Construimos grafos que entienden TU lógica, TUS relaciones, TUS métricas.",
            value4Title: "Memoria Institucional",
            value4Desc: "Cada decisión, cada patrón, cada insight que tu empresa genera debe quedar capturado y accesible — para siempre.",
            teamBadge: "Nuestro equipo",
            teamSectionTitle: "Construido por Ingenieros de Conocimiento",
            teamText1: "Vimos cómo el conocimiento crítico de negocio estaba encerrado en la cabeza de las personas, perdido en hojas de cálculo, o disperso en sistemas desconectados. Cuando alguien se iba, años de conocimiento institucional se iban con esa persona.",
            teamText2: "Centinela es la respuesta: una capa de conocimiento que captura, preserva y activa la inteligencia que tu empresa ha construido durante años — para que nunca dependa de una sola persona ni de un solo sistema.",
            teamCardTitle: "Infraestructura de datos e IA para Latinoamérica",
            teamCardText: "Nuestro equipo ha construido infraestructura de datos y sistemas de IA para empresas en toda Latinoamérica. Conocemos el dolor de la pérdida de conocimiento de primera mano, y construimos Centinela para resolverlo.",
            teamLocation: "Medellín, Colombia",
            teamRegion: "Sirviendo a toda Latinoamérica"
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
            emailValue: "admin@centinela.io",
            scheduleTitle: "Agendar",
            scheduleValue: "Llamada de 30 min para explorar tu caso de uso",
            locationTitle: "Ubicación",
            locationValue: "Medellín, Colombia",
            scheduleBtn: "Agendar ahora",
            successMessage: "¡Mensaje enviado!",
            errorMessage: "Error al enviar. Intenta de nuevo."
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

            ctaTitle: "¿Listo para construir tu capa de conocimiento?",
            ctaSubtitle: "Comienza con una consulta gratuita. Analizaremos tu panorama de datos y recomendaremos el mejor enfoque.",
            ctaButton: "Agendar Llamada",

            // Inline pricing section (landing page)
            toggleMonthly: "Mensual",
            toggleAnnual: "Anual",
            saveBadge: "Ahorra 15%",
            essentialPrice: "$3,500",
            growthPrice: "$5,000",
            enterprisePrice: "A medida",

            // Feature table
            tableTitle: "Compara los planes en detalle",
            rowConnectors: "Conectores",
            rowQueries: "Consultas",
            rowKnowledgeLayer: "Knowledge Layer",
            rowDashboards: "Dashboards",
            rowVerticals: "Verticales",
            rowSupport: "Soporte",
            rowMeetings: "Reuniones",
            rowImprovements: "Mejoras",
            rowActions: "Acciones en sistemas",
            rowWorkflows: "Workflows",
            rowAlerts: "Alertas",
            rowUsers: "Usuarios",
            rowCustomIntegrations: "Integraciones custom",
            rowSLA: "SLA",
            rowSecurity: "Seguridad",
            rowOnboarding: "Onboarding",

            // Essential values
            essConnectors: "Hasta 5 sincronizaciones",
            essQueries: "Hasta 200 consultas/mes",
            essKnowledge: "Básico",
            essDashboards: "Acceso básico",
            essVerticals: "1 vertical",
            essSupport: "Documentación",
            essMeetings: "—",
            essImprovements: "—",
            essActions: "—",
            essWorkflows: "—",
            essAlerts: "Básicas",
            essUsers: "Hasta 5",
            essCustom: "—",
            essSLA: "—",
            essSecurity: "Estándar",
            essOnboarding: "Self-service",

            // Growth values
            groConnectors: "Hasta 15 sincronizaciones",
            groQueries: "Consultas ilimitadas",
            groKnowledge: "Avanzado (grafos de contexto)",
            groDashboards: "Visualizaciones automáticas",
            groVerticals: "Hasta 3 verticales",
            groSupport: "Equipo dedicado",
            groMeetings: "Reuniones semanales de estrategia",
            groImprovements: "Mejoras incrementales",
            groActions: "—",
            groWorkflows: "—",
            groAlerts: "Configurables",
            groUsers: "Hasta 20",
            groCustom: "—",
            groSLA: "99.5%",
            groSecurity: "SOC 2",
            groOnboarding: "Guiado (3 semanas)",

            // Enterprise values
            entConnectors: "Ilimitadas + custom",
            entQueries: "Consultas ilimitadas",
            entKnowledge: "Completo (grafos + agent skills)",
            entDashboards: "Visualizaciones + reportes custom",
            entVerticals: "Ilimitadas",
            entSupport: "Prioritario 24/7",
            entMeetings: "Reuniones + roadmap dedicado",
            entImprovements: "Mejoras + desarrollo custom",
            entActions: "Escritura en sistemas (facturas, CRM, etc.)",
            entWorkflows: "Automatización de flujos custom",
            entAlerts: "Alertas + triggers automáticos",
            entUsers: "Ilimitados",
            entCustom: "Incluidas",
            entSLA: "99.9%",
            entSecurity: "SOC 2 + configs custom",
            entOnboarding: "White-glove (dedicado)"
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

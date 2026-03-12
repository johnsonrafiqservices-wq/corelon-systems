// Service Detail Page - Dynamic Content Loader

const serviceData = {
    infrastructure: {
        tag: "Infrastructure",
        title: "IT Infrastructure",
        description: "Enterprise-grade infrastructure that scales with your business. From cloud migration to hybrid deployments, we architect resilient systems built for performance and security.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We design, build, and manage mission-critical IT infrastructure that powers modern enterprises. Our solutions span cloud platforms, on-premises data centers, and hybrid architectures, all optimized for reliability, scalability, and cost-efficiency.",
        features: [
            "Cloud migration & optimization (AWS, Azure, GCP)",
            "Hybrid & multi-cloud architecture",
            "Infrastructure as Code (Terraform, CloudFormation)",
            "24/7 monitoring & incident response",
            "Disaster recovery & business continuity",
            "Performance tuning & cost optimization"
        ],
        capabilities: [
            {
                icon: "fa-cloud",
                title: "Cloud Migration",
                description: "Seamless lift-and-shift or re-architecture to AWS, Azure, or GCP with zero downtime strategies."
            },
            {
                icon: "fa-server",
                title: "Hybrid Solutions",
                description: "Best-of-both-worlds architectures that balance on-prem control with cloud agility."
            },
            {
                icon: "fa-shield-halved",
                title: "Security & Compliance",
                description: "ISO 27001, SOC 2, GDPR-compliant infrastructure with defense-in-depth security."
            },
            {
                icon: "fa-chart-line",
                title: "Auto-Scaling",
                description: "Dynamic resource allocation that handles traffic spikes while minimizing costs."
            },
            {
                icon: "fa-life-ring",
                title: "24/7 Support",
                description: "Round-the-clock NOC monitoring, incident response, and SLA-backed uptime guarantees."
            },
            {
                icon: "fa-code",
                title: "Infrastructure as Code",
                description: "Version-controlled, repeatable deployments using Terraform, Ansible, and CI/CD pipelines."
            }
        ],
        techStack: [
            { icon: "fa-aws", name: "AWS" },
            { icon: "fa-microsoft", name: "Azure" },
            { icon: "fa-google", name: "GCP" },
            { icon: "fa-docker", name: "Docker" },
            { icon: "fas fa-dharmachakra", name: "Kubernetes" },
            { icon: "fas fa-code-branch", name: "Terraform" }
        ],
        process: [
            {
                step: "1",
                title: "Infrastructure Audit",
                description: "We assess your current setup, identify bottlenecks, and map dependencies."
            },
            {
                step: "2",
                title: "Architecture Design",
                description: "Tailored blueprints with cost estimates, security reviews, and scalability plans."
            },
            {
                step: "3",
                title: "Migration & Build",
                description: "Phased rollout with automated testing, rollback plans, and minimal disruption."
            },
            {
                step: "4",
                title: "Optimize & Monitor",
                description: "Continuous performance tuning, cost optimization, and 24/7 monitoring."
            }
        ],
        faqs: [
            {
                question: "How long does a typical cloud migration take?",
                answer: "Migration timelines vary based on complexity. A small workload (10-20 servers) typically takes 4-6 weeks, while enterprise migrations (200+ servers) can take 3-6 months. We provide detailed project plans with milestones during the discovery phase."
            },
            {
                question: "Do you support multi-cloud strategies?",
                answer: "Yes. We architect multi-cloud and hybrid solutions that leverage the strengths of AWS, Azure, and GCP while avoiding vendor lock-in. Our Infrastructure as Code approach makes multi-cloud management seamless."
            },
            {
                question: "What happens if something goes wrong during migration?",
                answer: "Every migration includes comprehensive rollback procedures and zero-downtime strategies. We conduct thorough testing in staging environments and maintain your existing infrastructure until the new environment is fully validated."
            },
            {
                question: "Do you provide ongoing support after deployment?",
                answer: "Absolutely. We offer 24/7 managed services with SLA-backed response times, proactive monitoring, security patching, and regular optimization reviews to ensure your infrastructure stays performant and cost-effective."
            }
        ]
    },
    systems: {
        tag: "Development",
        title: "Systems Development",
        description: "Custom software that solves real business problems. We build enterprise applications, APIs, and backend systems engineered for scale, security, and maintainability.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "From greenfield projects to legacy modernization, we deliver production-grade systems that integrate seamlessly with your existing tech stack. Our engineering teams follow agile methodologies, DevOps best practices, and rigorous code quality standards.",
        features: [
            "Custom enterprise applications",
            "RESTful & GraphQL API development",
            "Microservices architecture",
            "Legacy system modernization",
            "Database design & optimization",
            "CI/CD pipeline automation"
        ],
        capabilities: [
            {
                icon: "fa-laptop-code",
                title: "Enterprise Applications",
                description: "Scalable business systems built with modern frameworks and clean architecture principles."
            },
            {
                icon: "fa-plug",
                title: "API Development",
                description: "RESTful and GraphQL APIs with comprehensive documentation, versioning, and rate limiting."
            },
            {
                icon: "fa-cubes",
                title: "Microservices",
                description: "Distributed systems designed for resilience, independent scaling, and rapid deployment."
            },
            {
                icon: "fa-rotate",
                title: "Legacy Modernization",
                description: "Refactor monoliths into modern architectures without disrupting business operations."
            },
            {
                icon: "fa-database",
                title: "Database Engineering",
                description: "Optimized schemas, indexing strategies, and query performance tuning for SQL and NoSQL."
            },
            {
                icon: "fa-gears",
                title: "DevOps Integration",
                description: "Automated testing, CI/CD pipelines, and infrastructure provisioning for rapid iteration."
            }
        ],
        techStack: [
            { icon: "fa-node-js", name: "Node.js" },
            { icon: "fa-python", name: "Python" },
            { icon: "fa-java", name: "Java" },
            { icon: "fas fa-gem", name: ".NET" },
            { icon: "fas fa-database", name: "PostgreSQL" },
            { icon: "fa-docker", name: "Docker" }
        ],
        process: [
            {
                step: "1",
                title: "Requirements Gathering",
                description: "Deep-dive workshops to understand business logic, user workflows, and integration needs."
            },
            {
                step: "2",
                title: "Architecture & Design",
                description: "System design documents, database schemas, API contracts, and security specifications."
            },
            {
                step: "3",
                title: "Agile Development",
                description: "Two-week sprints with regular demos, automated testing, and continuous integration."
            },
            {
                step: "4",
                title: "Deployment & Support",
                description: "Production rollout, monitoring setup, documentation, and ongoing maintenance."
            }
        ],
        faqs: [
            {
                question: "What technologies do you specialize in?",
                answer: "We're platform-agnostic and select the best tech stack for your needs. Our core expertise includes Node.js, Python, Java, .NET, React, Angular, PostgreSQL, MongoDB, and cloud-native technologies like Docker and Kubernetes."
            },
            {
                question: "Can you work with our existing development team?",
                answer: "Yes. We frequently augment in-house teams or work in hybrid models. We adapt to your workflows, coding standards, and tooling while bringing DevOps and architectural best practices."
            },
            {
                question: "How do you ensure code quality?",
                answer: "We enforce peer code reviews, automated testing (unit, integration, E2E), static analysis, and maintain 80%+ test coverage. All code follows industry-standard style guides and is documented inline and in wikis."
            },
            {
                question: "What's your approach to legacy system modernization?",
                answer: "We use the strangler fig pattern: incrementally replace legacy components with modern services while keeping the system operational. This minimizes risk and allows for gradual migration without big-bang rewrites."
            }
        ]
    },
    mobile: {
        tag: "Mobile",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps that users love. From iOS and Android to progressive web apps, we build experiences optimized for performance and engagement.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We design and develop mobile applications that deliver exceptional user experiences across all devices. Whether you need a native iOS/Android app or a cross-platform solution, our team combines technical excellence with user-centric design.",
        features: [
            "Native iOS & Android development",
            "Cross-platform apps (React Native, Flutter)",
            "Progressive Web Apps (PWA)",
            "Mobile backend & API integration",
            "App Store optimization & deployment",
            "Push notifications & analytics"
        ],
        capabilities: [
            {
                icon: "fa-mobile-screen",
                title: "Native Development",
                description: "Swift/Kotlin apps that leverage platform-specific features for maximum performance."
            },
            {
                icon: "fa-layer-group",
                title: "Cross-Platform",
                description: "React Native and Flutter apps that share code while maintaining native feel."
            },
            {
                icon: "fa-bolt",
                title: "Performance Optimization",
                description: "Fast load times, smooth animations, and efficient battery/data usage."
            },
            {
                icon: "fa-lock",
                title: "Security & Privacy",
                description: "Encrypted data storage, secure authentication, and compliance with app store guidelines."
            },
            {
                icon: "fa-bell",
                title: "Push Notifications",
                description: "Targeted messaging with Firebase Cloud Messaging and Apple Push Notification Service."
            },
            {
                icon: "fa-chart-simple",
                title: "Analytics Integration",
                description: "User behavior tracking, crash reporting, and A/B testing frameworks."
            }
        ],
        techStack: [
            { icon: "fa-apple", name: "Swift" },
            { icon: "fa-android", name: "Kotlin" },
            { icon: "fa-react", name: "React Native" },
            { icon: "fas fa-wind", name: "Flutter" },
            { icon: "fas fa-fire", name: "Firebase" },
            { icon: "fa-node-js", name: "Node.js" }
        ],
        process: [
            {
                step: "1",
                title: "UX Research & Design",
                description: "User personas, wireframes, prototypes, and usability testing before development."
            },
            {
                step: "2",
                title: "Development Sprints",
                description: "Iterative builds with TestFlight/beta releases for stakeholder feedback."
            },
            {
                step: "3",
                title: "Testing & QA",
                description: "Automated tests, device compatibility checks, and performance profiling."
            },
            {
                step: "4",
                title: "App Store Launch",
                description: "Submission, review management, and post-launch monitoring with crash analytics."
            }
        ],
        faqs: [
            {
                question: "Should I build native or cross-platform?",
                answer: "Native (Swift/Kotlin) offers best performance and access to latest platform features, ideal for complex apps. Cross-platform (React Native/Flutter) reduces development time and cost for simpler apps. We'll recommend the best approach based on your requirements and budget."
            },
            {
                question: "How long does it take to build a mobile app?",
                answer: "A simple app (3-5 screens, basic features) takes 8-12 weeks. Medium complexity apps (10-15 screens, API integration, auth) take 3-4 months. Enterprise apps with complex features can take 6+ months. We provide detailed timelines after the discovery phase."
            },
            {
                question: "Do you handle App Store submissions?",
                answer: "Yes. We manage the entire submission process including app store optimization (ASO), screenshots, descriptions, and compliance with Apple and Google guidelines. We also handle updates and version management post-launch."
            },
            {
                question: "Can you integrate with our existing backend?",
                answer: "Absolutely. We integrate with any REST or GraphQL API. If you don't have a backend, we can build one using Node.js, Python, or serverless technologies like AWS Lambda and Firebase Functions."
            }
        ]
    },
    web: {
        tag: "Web",
        title: "Web Development",
        description: "Modern web applications built for speed, accessibility, and conversion. From marketing sites to complex web portals, we deliver pixel-perfect experiences that perform.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We build responsive, accessible, and performant web applications using modern frameworks and best practices. Whether you need a corporate website, e-commerce platform, or SaaS application, we deliver solutions that drive results.",
        features: [
            "Responsive website design & development",
            "Single-page applications (SPA)",
            "E-commerce platforms",
            "Content management systems (CMS)",
            "SEO optimization & performance",
            "Web accessibility (WCAG compliance)"
        ],
        capabilities: [
            {
                icon: "fa-palette",
                title: "UI/UX Design",
                description: "User-centered designs with modern aesthetics, intuitive navigation, and conversion optimization."
            },
            {
                icon: "fa-rocket",
                title: "Performance",
                description: "Sub-second load times, lazy loading, code splitting, and Core Web Vitals optimization."
            },
            {
                icon: "fa-mobile-alt",
                title: "Responsive Design",
                description: "Mobile-first approach ensuring perfect rendering across all devices and screen sizes."
            },
            {
                icon: "fa-search",
                title: "SEO Optimization",
                description: "Technical SEO, structured data, meta optimization, and search engine best practices."
            },
            {
                icon: "fa-universal-access",
                title: "Accessibility",
                description: "WCAG 2.1 AA compliance with keyboard navigation, screen reader support, and semantic HTML."
            },
            {
                icon: "fa-shopping-cart",
                title: "E-Commerce",
                description: "Secure payment integration, inventory management, and conversion-optimized checkout flows."
            }
        ],
        techStack: [
            { icon: "fa-react", name: "React" },
            { icon: "fa-angular", name: "Angular" },
            { icon: "fa-vuejs", name: "Vue.js" },
            { icon: "fa-node-js", name: "Next.js" },
            { icon: "fas fa-wind", name: "Tailwind" },
            { icon: "fa-wordpress", name: "WordPress" }
        ],
        process: [
            {
                step: "1",
                title: "Discovery & Strategy",
                description: "Competitor analysis, user research, sitemap planning, and content strategy."
            },
            {
                step: "2",
                title: "Design & Prototyping",
                description: "Wireframes, high-fidelity mockups, interactive prototypes, and design system creation."
            },
            {
                step: "3",
                title: "Development & Testing",
                description: "Component-based development, cross-browser testing, and accessibility audits."
            },
            {
                step: "4",
                title: "Launch & Optimization",
                description: "Deployment, analytics setup, performance monitoring, and A/B testing."
            }
        ],
        faqs: [
            {
                question: "What's the difference between a website and a web application?",
                answer: "Websites are primarily informational (corporate sites, blogs). Web applications are interactive tools with complex functionality (dashboards, SaaS platforms, portals). We build both, selecting the right architecture based on your needs."
            },
            {
                question: "Do you provide hosting and maintenance?",
                answer: "Yes. We offer managed hosting on AWS/Azure with automatic backups, security updates, uptime monitoring, and monthly performance reports. We also provide ongoing maintenance packages for content updates and feature additions."
            },
            {
                question: "How do you ensure my website is secure?",
                answer: "We implement SSL/TLS encryption, secure authentication, input validation, SQL injection prevention, XSS protection, and regular security audits. All code follows OWASP security guidelines."
            },
            {
                question: "Can you redesign our existing website?",
                answer: "Absolutely. We conduct a comprehensive audit of your current site, preserve SEO value through proper redirects, and migrate content while improving design, performance, and user experience."
            }
        ]
    },
    networking: {
        tag: "Network",
        title: "Networking",
        description: "Secure, high-performance networks that connect your business. From SD-WAN to zero-trust security, we design and manage enterprise networking infrastructure.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We architect and deploy enterprise-grade networking solutions that ensure reliable connectivity, robust security, and optimal performance. Our expertise spans traditional networking, SD-WAN, wireless infrastructure, and modern zero-trust architectures.",
        features: [
            "SD-WAN deployment & optimization",
            "Zero-trust network architecture",
            "Wireless network design (Wi-Fi 6/6E)",
            "VPN & secure remote access",
            "Network security & firewall management",
            "24/7 NOC monitoring & support"
        ],
        capabilities: [
            {
                icon: "fa-network-wired",
                title: "SD-WAN Solutions",
                description: "Software-defined networking that optimizes traffic routing and reduces WAN costs."
            },
            {
                icon: "fa-shield-halved",
                title: "Zero-Trust Security",
                description: "Identity-based access controls, micro-segmentation, and continuous verification."
            },
            {
                icon: "fa-wifi",
                title: "Wireless Infrastructure",
                description: "Enterprise Wi-Fi 6/6E deployments with seamless roaming and guest access."
            },
            {
                icon: "fa-user-shield",
                title: "VPN & Remote Access",
                description: "Secure remote connectivity with multi-factor authentication and split tunneling."
            },
            {
                icon: "fa-fire",
                title: "Firewall Management",
                description: "Next-gen firewalls with IPS/IDS, application control, and threat intelligence."
            },
            {
                icon: "fa-headset",
                title: "24/7 NOC Support",
                description: "Proactive monitoring, incident response, and performance optimization."
            }
        ],
        techStack: [
            { icon: "fas fa-network-wired", name: "Cisco" },
            { icon: "fas fa-shield", name: "Palo Alto" },
            { icon: "fas fa-wifi", name: "Aruba" },
            { icon: "fas fa-server", name: "Fortinet" },
            { icon: "fas fa-cloud", name: "Meraki" },
            { icon: "fas fa-lock", name: "Zscaler" }
        ],
        process: [
            {
                step: "1",
                title: "Network Assessment",
                description: "Audit current infrastructure, identify bottlenecks, and map traffic patterns."
            },
            {
                step: "2",
                title: "Design & Planning",
                description: "Network topology design, equipment selection, security policies, and migration plan."
            },
            {
                step: "3",
                title: "Implementation",
                description: "Phased rollout with minimal disruption, testing, and cutover procedures."
            },
            {
                step: "4",
                title: "Monitor & Optimize",
                description: "24/7 NOC monitoring, performance tuning, and regular security updates."
            }
        ],
        faqs: [
            {
                question: "What is SD-WAN and do I need it?",
                answer: "SD-WAN (Software-Defined Wide Area Network) intelligently routes traffic across multiple connections (MPLS, broadband, LTE) for better performance and lower costs. It's ideal if you have multiple branch offices or rely on cloud applications."
            },
            {
                question: "How does zero-trust networking work?",
                answer: "Zero-trust assumes no user or device is trustworthy by default. Every access request is verified based on identity, device health, and context. This prevents lateral movement and reduces breach impact."
            },
            {
                question: "Do you support multi-vendor environments?",
                answer: "Yes. We work with Cisco, Palo Alto, Fortinet, Aruba, Meraki, and other leading vendors. We can design hybrid solutions or help consolidate to a preferred platform."
            },
            {
                question: "What's included in your NOC monitoring?",
                answer: "24/7 monitoring of network devices, bandwidth utilization, security events, and performance metrics. We provide incident response, change management, and monthly health reports with SLA-backed response times."
            }
        ]
    },
    research: {
        tag: "Research",
        title: "Digital Research Implementation",
        description: "Turn research into production. We bridge the gap between academic prototypes and scalable systems, deploying ML models and research software in real-world environments.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We specialize in taking proof-of-concept research projects and transforming them into production-ready systems. Our team combines research expertise with software engineering rigor to deploy ML models, data pipelines, and experimental algorithms at scale.",
        features: [
            "ML model deployment & MLOps",
            "Research software engineering",
            "Data pipeline automation",
            "Experiment tracking & versioning",
            "Model monitoring & retraining",
            "Academic collaboration & consulting"
        ],
        capabilities: [
            {
                icon: "fa-brain",
                title: "ML Model Deployment",
                description: "Production pipelines for TensorFlow, PyTorch, and scikit-learn models with A/B testing."
            },
            {
                icon: "fa-flask",
                title: "Research Engineering",
                description: "Refactor research code into maintainable, tested, and documented production systems."
            },
            {
                icon: "fa-database",
                title: "Data Pipelines",
                description: "Automated ETL workflows for data collection, preprocessing, and feature engineering."
            },
            {
                icon: "fa-chart-line",
                title: "Experiment Tracking",
                description: "MLflow, Weights & Biases integration for reproducible experiments and model versioning."
            },
            {
                icon: "fa-gauge-high",
                title: "Model Monitoring",
                description: "Drift detection, performance tracking, and automated retraining pipelines."
            },
            {
                icon: "fa-graduation-cap",
                title: "Academic Partnerships",
                description: "Collaborate with research institutions to commercialize algorithms and publish findings."
            }
        ],
        techStack: [
            { icon: "fa-python", name: "Python" },
            { icon: "fas fa-brain", name: "TensorFlow" },
            { icon: "fas fa-fire", name: "PyTorch" },
            { icon: "fa-docker", name: "Docker" },
            { icon: "fas fa-dharmachakra", name: "Kubernetes" },
            { icon: "fa-aws", name: "SageMaker" }
        ],
        process: [
            {
                step: "1",
                title: "Research Audit",
                description: "Review research code, data requirements, and performance benchmarks."
            },
            {
                step: "2",
                title: "Production Design",
                description: "Architecture for scalable inference, data pipelines, and monitoring infrastructure."
            },
            {
                step: "3",
                title: "Engineering & Testing",
                description: "Refactor code, add tests, optimize performance, and validate against research results."
            },
            {
                step: "4",
                title: "Deploy & Monitor",
                description: "Production rollout with A/B testing, drift monitoring, and retraining automation."
            }
        ],
        faqs: [
            {
                question: "What's the difference between research code and production code?",
                answer: "Research code prioritizes experimentation and is often written in notebooks. Production code requires error handling, testing, monitoring, scalability, and maintainability. We bridge this gap by refactoring while preserving research accuracy."
            },
            {
                question: "Can you work with our research team?",
                answer: "Yes. We frequently partner with academic institutions and in-house research teams. We adapt to your workflows, provide engineering support, and help publish results while deploying commercial systems."
            },
            {
                question: "How do you handle model drift?",
                answer: "We implement monitoring dashboards that track prediction accuracy, input distribution shifts, and performance degradation. Automated alerts trigger retraining pipelines when drift exceeds thresholds."
            },
            {
                question: "Do you support on-premise ML deployments?",
                answer: "Yes. While we recommend cloud-based solutions for scalability, we deploy on-premise using Kubernetes, NVIDIA GPUs, and containerized inference servers for organizations with data sovereignty requirements."
            }
        ]
    },
    data: {
        tag: "Data",
        title: "Data Analysis & Statistics",
        description: "Turn raw data into actionable insights. We build BI dashboards, predictive models, data pipelines, and analytics platforms that drive smarter decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We help organizations unlock the value of their data through advanced analytics, business intelligence, and statistical modeling. From data warehousing to predictive analytics, we deliver insights that inform strategic decisions.",
        features: [
            "Business intelligence dashboards",
            "Predictive analytics & forecasting",
            "ETL pipelines & data warehousing",
            "Statistical modeling & reporting",
            "Data visualization & storytelling",
            "Big data processing & analytics"
        ],
        capabilities: [
            {
                icon: "fa-chart-pie",
                title: "BI Dashboards",
                description: "Interactive Tableau, Power BI, and custom dashboards with real-time data updates."
            },
            {
                icon: "fa-crystal-ball",
                title: "Predictive Analytics",
                description: "Forecasting models, churn prediction, demand planning, and risk assessment."
            },
            {
                icon: "fa-database",
                title: "Data Warehousing",
                description: "Snowflake, Redshift, and BigQuery implementations with optimized schemas."
            },
            {
                icon: "fa-chart-line",
                title: "Statistical Modeling",
                description: "Regression analysis, hypothesis testing, A/B testing, and causal inference."
            },
            {
                icon: "fa-eye",
                title: "Data Visualization",
                description: "Compelling visual narratives that communicate insights to non-technical stakeholders."
            },
            {
                icon: "fa-server",
                title: "Big Data Processing",
                description: "Spark, Hadoop, and distributed computing for petabyte-scale analytics."
            }
        ],
        techStack: [
            { icon: "fa-python", name: "Python" },
            { icon: "fas fa-r-project", name: "R" },
            { icon: "fas fa-chart-bar", name: "Tableau" },
            { icon: "fas fa-chart-simple", name: "Power BI" },
            { icon: "fas fa-snowflake", name: "Snowflake" },
            { icon: "fas fa-fire", name: "Spark" }
        ],
        process: [
            {
                step: "1",
                title: "Data Discovery",
                description: "Audit data sources, assess quality, and define key metrics and KPIs."
            },
            {
                step: "2",
                title: "Pipeline & Warehouse",
                description: "Build ETL workflows, design warehouse schemas, and establish data governance."
            },
            {
                step: "3",
                title: "Analysis & Modeling",
                description: "Statistical analysis, predictive modeling, and hypothesis testing."
            },
            {
                step: "4",
                title: "Visualization & Reporting",
                description: "Interactive dashboards, automated reports, and stakeholder training."
            }
        ],
        faqs: [
            {
                question: "What's the difference between BI and data analytics?",
                answer: "Business Intelligence (BI) focuses on descriptive analytics—what happened and why. Data Analytics includes predictive (what will happen) and prescriptive (what should we do) analysis. We provide both, tailored to your maturity level."
            },
            {
                question: "How do you ensure data quality?",
                answer: "We implement data validation rules, automated quality checks, anomaly detection, and data lineage tracking. Our ETL pipelines include error handling, logging, and reconciliation processes."
            },
            {
                question: "Can you work with our existing data warehouse?",
                answer: "Yes. We integrate with Snowflake, Redshift, BigQuery, Azure Synapse, and traditional databases. If you don't have a warehouse, we'll design and build one optimized for your analytics needs."
            },
            {
                question: "How long does it take to see results?",
                answer: "Quick wins like basic dashboards can be delivered in 2-4 weeks. Comprehensive analytics platforms with predictive models typically take 2-3 months. We prioritize high-impact metrics for early delivery."
            }
        ]
    },
    graphics: {
        tag: "Creative",
        title: "Graphic Design",
        description: "Compelling visuals that tell your story. From logos and marketing collateral to infographics and UI assets, we craft designs that resonate with your audience and reinforce your brand.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We create visual identities and marketing materials that capture attention and communicate your message effectively. Our design team combines creative excellence with strategic thinking to deliver graphics that drive engagement and conversions.",
        features: [
            "Logo design & brand identity",
            "Marketing collateral & print design",
            "Infographics & data visualization",
            "UI/UX visual assets",
            "Social media graphics",
            "Presentation design & templates"
        ],
        capabilities: [
            {
                icon: "fa-pen-nib",
                title: "Brand Identity",
                description: "Memorable logos, color palettes, typography systems, and comprehensive brand guidelines."
            },
            {
                icon: "fa-print",
                title: "Print Design",
                description: "Brochures, business cards, posters, packaging, and trade show materials."
            },
            {
                icon: "fa-chart-simple",
                title: "Infographics",
                description: "Data-driven visual storytelling that simplifies complex information."
            },
            {
                icon: "fa-mobile-screen",
                title: "Digital Assets",
                description: "UI components, icons, illustrations, and web graphics optimized for all devices."
            },
            {
                icon: "fa-share-nodes",
                title: "Social Media",
                description: "Platform-optimized graphics, templates, and animated content for engagement."
            },
            {
                icon: "fa-presentation-screen",
                title: "Presentations",
                description: "Professional slide decks with custom templates and visual hierarchy."
            }
        ],
        techStack: [
            { icon: "fas fa-palette", name: "Adobe CC" },
            { icon: "fas fa-pen-nib", name: "Illustrator" },
            { icon: "fas fa-image", name: "Photoshop" },
            { icon: "fas fa-vector-square", name: "Figma" },
            { icon: "fas fa-shapes", name: "Sketch" },
            { icon: "fas fa-film", name: "After Effects" }
        ],
        process: [
            {
                step: "1",
                title: "Discovery & Research",
                description: "Brand audit, competitor analysis, target audience research, and mood boarding."
            },
            {
                step: "2",
                title: "Concept Development",
                description: "Initial concepts, style exploration, and stakeholder feedback rounds."
            },
            {
                step: "3",
                title: "Design & Refinement",
                description: "High-fidelity designs, revisions, and final asset preparation."
            },
            {
                step: "4",
                title: "Delivery & Guidelines",
                description: "Asset handoff in all formats, brand guidelines, and usage documentation."
            }
        ],
        faqs: [
            {
                question: "What's included in a brand identity package?",
                answer: "A complete brand identity includes logo variations (primary, secondary, monochrome), color palette, typography system, brand guidelines document, and application examples. We provide files in vector (AI, SVG) and raster (PNG, JPG) formats."
            },
            {
                question: "Can you match our existing brand style?",
                answer: "Absolutely. We can work within your established brand guidelines or help refresh and modernize your visual identity while maintaining brand recognition."
            },
            {
                question: "How many revision rounds are included?",
                answer: "Our standard packages include 2-3 revision rounds. We present initial concepts, gather feedback, refine, and finalize. Additional revisions can be accommodated as needed."
            },
            {
                question: "Do you provide source files?",
                answer: "Yes. You receive all final assets in editable formats (AI, PSD, Figma) along with export-ready files (PNG, JPG, SVG, PDF) optimized for print and digital use."
            }
        ]
    },
    branding: {
        tag: "Brand",
        title: "Digital Branding",
        description: "Build a cohesive digital presence that stands out. We define your brand voice, visual language, and digital touchpoints to create consistent experiences across web, social, and mobile.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        overview: "We help organizations establish and maintain a strong digital brand presence. From strategy to execution, we create cohesive brand experiences that resonate with your audience and differentiate you from competitors.",
        features: [
            "Brand strategy & positioning",
            "Social media branding & templates",
            "Digital style guides & asset kits",
            "Online reputation management",
            "Content strategy & voice guidelines",
            "Brand monitoring & analytics"
        ],
        capabilities: [
            {
                icon: "fa-bullseye",
                title: "Brand Strategy",
                description: "Market positioning, value propositions, messaging frameworks, and competitive differentiation."
            },
            {
                icon: "fa-hashtag",
                title: "Social Media Branding",
                description: "Platform-specific visual systems, content templates, and engagement strategies."
            },
            {
                icon: "fa-book",
                title: "Digital Style Guides",
                description: "Comprehensive guidelines for web, email, social, and digital advertising consistency."
            },
            {
                icon: "fa-star",
                title: "Reputation Management",
                description: "Review monitoring, response strategies, and sentiment analysis across digital channels."
            },
            {
                icon: "fa-comment-dots",
                title: "Content Strategy",
                description: "Editorial calendars, tone of voice guidelines, and content pillars aligned with brand values."
            },
            {
                icon: "fa-chart-line",
                title: "Brand Analytics",
                description: "Track brand mentions, sentiment, share of voice, and engagement metrics."
            }
        ],
        techStack: [
            { icon: "fas fa-palette", name: "Figma" },
            { icon: "fas fa-share-nodes", name: "Hootsuite" },
            { icon: "fas fa-chart-bar", name: "Brandwatch" },
            { icon: "fas fa-google", name: "Analytics" },
            { icon: "fas fa-pen", name: "Canva" },
            { icon: "fas fa-envelope", name: "Mailchimp" }
        ],
        process: [
            {
                step: "1",
                title: "Brand Audit",
                description: "Assess current brand perception, digital touchpoints, and competitive landscape."
            },
            {
                step: "2",
                title: "Strategy Development",
                description: "Define positioning, messaging, visual identity, and channel strategies."
            },
            {
                step: "3",
                title: "Asset Creation",
                description: "Design templates, style guides, content frameworks, and brand toolkits."
            },
            {
                step: "4",
                title: "Implementation & Monitoring",
                description: "Rollout across channels, team training, and ongoing performance tracking."
            }
        ],
        faqs: [
            {
                question: "What's the difference between branding and marketing?",
                answer: "Branding defines who you are (identity, values, positioning). Marketing communicates that to your audience (campaigns, content, advertising). We focus on establishing a strong brand foundation that makes marketing more effective."
            },
            {
                question: "How long does a branding project take?",
                answer: "A comprehensive digital branding project typically takes 6-8 weeks: 2 weeks for research and strategy, 3-4 weeks for design and guidelines, and 1-2 weeks for implementation and training."
            },
            {
                question: "Can you rebrand our existing company?",
                answer: "Yes. We conduct a thorough audit of your current brand, identify what's working, and develop a refresh or complete rebrand strategy. We ensure smooth transitions with phased rollouts and stakeholder communication plans."
            },
            {
                question: "Do you provide ongoing brand management?",
                answer: "Absolutely. We offer retainer packages that include social media management, content creation, reputation monitoring, brand compliance audits, and quarterly performance reports."
            }
        ]
    }
};

// Get service from URL parameter
function getServiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('service') || 'infrastructure';
}

// Populate page content
function loadServiceContent() {
    const serviceKey = getServiceFromURL();
    const service = serviceData[serviceKey];

    console.log('Loading service:', serviceKey);
    console.log('Service data:', service);

    if (!service) {
        console.error('Service not found:', serviceKey);
        window.location.href = 'services.html';
        return;
    }

    // Update page title
    document.title = `${service.title} - Corelon Systems`;

    // Breadcrumb
    document.getElementById('breadcrumb-service').textContent = service.title;

    // Hero section
    document.getElementById('hero-tag').textContent = service.tag;
    document.getElementById('hero-title').textContent = service.title;
    document.getElementById('hero-description').textContent = service.description;

    // Overview section
    document.getElementById('overview-image').src = service.image;
    document.getElementById('overview-image').alt = service.title;
    document.getElementById('overview-text').textContent = service.overview;

    const featuresList = document.getElementById('overview-features');
    featuresList.innerHTML = service.features.map(feature => 
        `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
    ).join('');

    // Capabilities
    const capabilitiesGrid = document.getElementById('capabilities-grid');
    capabilitiesGrid.innerHTML = service.capabilities.map(cap => `
        <div class="capability-card reveal">
            <div class="capability-icon"><i class="fas ${cap.icon}"></i></div>
            <h3>${cap.title}</h3>
            <p>${cap.description}</p>
        </div>
    `).join('');

    // Tech Stack (if available)
    if (service.techStack && service.techStack.length > 0) {
        document.getElementById('tech-stack-section').style.display = 'block';
        const techStackGrid = document.getElementById('tech-stack-grid');
        techStackGrid.innerHTML = service.techStack.map(tech => `
            <div class="tech-item reveal">
                <i class="fab ${tech.icon}"></i>
                <span>${tech.name}</span>
            </div>
        `).join('');
    }

    // Process
    const processTimeline = document.getElementById('process-timeline');
    processTimeline.innerHTML = service.process.map(step => `
        <div class="process-item reveal">
            <div class="process-number">${step.step}</div>
            <div class="process-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');

    // FAQs
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = service.faqs.map((faq, index) => `
        <div class="faq-item reveal">
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    // CTA
    document.getElementById('cta-service').textContent = service.title.toLowerCase();

    // Reinitialize reveal animations
    if (typeof window.initScrollReveal === 'function') {
        setTimeout(() => {
            window.initScrollReveal();
        }, 100);
    }

    // Initialize FAQ accordions
    initFAQAccordion();
    
    console.log('Service content loaded successfully');
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQs
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Open clicked FAQ if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Load content when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadServiceContent);
} else {
    loadServiceContent();
}

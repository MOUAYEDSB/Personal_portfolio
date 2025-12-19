const projects = [
    {
        id: "healthcab",
        title: "HealthCab website",
        image: "./assets/projrt-1.webp",
        description: "HealthCab is your premier destination for reliable transportation services tailored to the healthcare sector. With a focus on safety, comfort, and efficiency, we ensure patients get to their appointments on time and with care.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Google Maps API"],
        features: [
            "Real-time ride tracking",
            "Patient scheduling system",
            "Driver dashboard",
            "Automated SMS notifications"
        ],
        github: "https://github.com/MOUAYEDSB/expert_medical_services",
        live: "https://github.com/"
    },
    {
        id: "portfolio3d",
        title: "RB PLOMBERIE",
        image: "./assets/plomb.png",
        description: "RB PLOMBERIE est votre partenaire de confiance pour des services de plomberie rapides, fiables et de haute qualité. Spécialisée dans l’installation, la réparation et la maintenance des systèmes de plomberie, l’entreprise s’engage à offrir des solutions durables, efficaces et adaptées aux besoins de chaque client. Grâce à une expertise technique solide, une intervention rapide et un service orienté satisfaction, RB PLOMBERIE garantit un travail soigné et conforme aux normes, à chaque étape du processus",
        technologies: ["Vite", "React (TSX)", "Tailwind CSS", "Nodemailer"],
        features: [
            "Service request form",
            "Interactive service catalog",
            "Email notifications",
            "Responsive mobile design"
        ],
        github: "https://github.com/MOUAYEDSB/plomberieRB-",
        live: "https://plomberierb-my4o.onrender.com/"
    },
    {
        id: "mjnshop",
        title: "MJN Shop Website",
        image: "./assets/test.png",
        description: "MJN est une plateforme e-commerce moderne dédiée à la vente d’accessoires, offrant une expérience d’achat en ligne fluide, rapide et sécurisée. Les utilisateurs peuvent parcourir un large catalogue de produits soigneusement sélectionnés, profiter d’une navigation intuitive et finaliser leurs achats grâce à un processus de paiement simple et entièrement sécurisé. Conçue pour allier performance, fiabilité et confort d’utilisation, ShopSmart met l’accent sur la satisfaction client et une expérience shopping optimisée de bout en bout.",
        technologies: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
        features: [
            "Secure payment processing",
            "Dynamic product catalog",
            "User authentication",
            "Order history tracking"
        ],
        github: "https://github.com/MOUAYEDSB/emart",
        live: "https://emart-nu-steel.vercel.app/"
    },
    {
        id: "graines",
        title: "Singra Training",
        image: "./assets/qui.png",
        description: `Singra Training est une plateforme e-learning avancée conçue pour digitaliser et centraliser la gestion de l’éducation. Elle propose des cours standards et des cours en direct via visioconférence, un système de messagerie interne, des annonces, des compétitions pédagogiques et la génération automatique de certificats.

La plateforme prend en charge plusieurs rôles (Étudiants, Professeurs, Personnel Administratif, Administrateurs et Visiteurs) avec des fonctionnalités adaptées à chacun : gestion des cours, planning, budget, suivi de progression et statistiques.

Elle intègre une authentification sécurisée basée sur JWT, une architecture événementielle avec RabbitMQ, un système de recommandation intelligent et un module de détection de concentration afin d’améliorer l’engagement et l’efficacité de l’apprentissage.`,
        technologies: [
            "React",
            "Tailwind CSS",
            "NextJS",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Stripe",
            "JWT",
            "RabbitMQ"
        ],
        features: [
            "Multi-role access control (RBAC)",
            "Live courses & video conferencing",
            "Automatic certificate generation",
            "Messaging & announcements system",
            "Smart recommendation system",
            "Secure payments with Stripe"
        ],
        github: "https://github.com/MOUAYEDSB/E-learning",
        live: "https://singra-training.iis-recette.duckdns.org:4443/"
    },
    {
        id: "fabrika",
        title: "Fabrika",
        image: "./assets/fabdetail.png",
        description: "Fabrika est une plateforme e-commerce complète dédiée à la vente de tissus d'ameublement et de décoration. Elle offre une expérience d'achat fluide et sécurisée, avec un catalogue riche, une gestion de panier intuitive et un processus de commande optimisé. L'application repose sur une architecture solide (DDD) et utilise des technologies de pointe pour garantir performance, sécurité (JWT, OTP) et scalabilité (Docker, AWS).",
        technologies: [
            "Next.js",
            "NestJS",
            "Node.js",
            "Redux",
            "Tailwind CSS",
            "PostgreSQL",
            "MongoDB",
            "Mongoose",
            "Docker",
            "AWS",
            "JWT",
            "OTP"
        ],
        features: [
            "Secure authentication (JWT & OTP)",
            "Advanced shopping cart system",
            "Domain-Driven Design (DDD) architecture",
            "RESTful APIs integration",
            "Cloud deployment on AWS"
        ],
        github: "https://github.com/",
        live: "https://fabrika-tissu.netlify.app/"
    },
    {
        id: "webrtc",
        title: "Real-Time Communication",
        image: "./assets/webrtc.png",
        description: "WebRTC and Socket.io project enables real-time, peer-to-peer communication, allowing users to seamlessly engage in video, audio, and data exchanges over the web.",
        technologies: ["WebRTC", "Socket.io", "Node.js", "Express", "HTML5"],
        features: [
            "HD Video calling",
            "Low latency audio",
            "Screen sharing capabilities",
            "Chat functionality"
        ],
        github: "https://github.com/MOUAYEDSB/WEBrtc",
        live: "https://github.com/MOUAYEDSB/WEBrtc"
    },
    {
        id: "trefle",
        title: "TREFLE Architecture",
        image: "./assets/projectwordpress.png",
        description: "This project is a fully functional and visually captivating WordPress website dedicated to showcasing the beauty and intricacy of architectural designs. It combines clean aesthetics with user-centric functionality.",
        technologies: ["WordPress", "PHP", "Custom CSS", "Elementor"],
        features: [
            "Custom theme development",
            "Portfolio filtering",
            "High-resolution image gallery",
            "Contact form integration"
        ],
        github: "https://github.com/",
        live: "https://github.com/"
    }
];

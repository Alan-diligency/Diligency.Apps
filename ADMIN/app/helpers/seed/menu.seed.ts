import { v4 as uuidv4 } from "uuid";
export const MENU_SEED = [
    {
        _key: uuidv4(),
        _id: "menu-agence",
        number: "0",
        key: "agence",
        name: {
            fr: "Agence",
            en: "Agency"
        },
        icon: "lucide:square-user",
        children: [
            {
                _key: uuidv4(),
                _id: "menu-agence-about",
                key: "a-propos",
                name: {
                    fr: "À propos",
                    en: "About"
                },
                icon: "lucide:info",
                description: {
                    fr: "Diligency est une agence digitale ancrée dans la rigueur et l’innovation. Nous concevons des solutions sur-mesure, fiables et intelligentes. ",
                    en: "Diligency is a digital agency built on rigor and innovation. We design custom, reliable and intelligent solutions."
                },
                children: [],
                link: "/agency/about"
            },
            {
                _key: uuidv4(),
                _id: "menu-agence-jobcarrier",
                key: "job-carriere",
                name: {
                    fr: "Job & Carrière",
                    en: "Careers"
                },
                icon: "lucide:briefcase",
                description: {
                    fr: "Rejoignez une équipe structurée, exigeante et bienveillante. Chez Diligency, chaque talent a un rôle concret et visible.",
                    en: "Join a structured, demanding and supportive team. At Diligency, every talent contributes to impactful and concrete projects."
                },
                children: [],
                link: "/agency/job-carrier"
            },
            {
                _key: uuidv4(),
                _id: "menu-agence-hub",
                key: "hub",
                name: {
                    fr: "Le Hub",
                    en: "The Hub"
                },
                icon: "lucide:network",
                description: {
                    fr: "Notre espace de veille et de réflexion. Suivez nos idées, nos analyses et les grandes tendances du digital.",
                    en: "Our space for insights and exploration. Discover our ideas, analyses, and the latest digital trends."
                },
                children: [],
                link: "/agency/hub"
            }
        ]
    },
    {
        _key: uuidv4(),
        _id: "menu-services",
        number: "1",
        key: "services",
        name: {
            fr: "Services",
            en: "Services"
        },
        icon: "lucide:square-terminal",
        children: [
            {
                _key: uuidv4(),
                _id: "menu-service-web-app",
                key: "web-app",
                name: {
                    fr: "Application web",
                    en: "Web Applications"
                },
                icon: "lucide:globe",
                description: {
                    fr: "CRM, tableaux de bord, marketplaces ou outils de gestion sur-mesure. Sécurité, fiabilité et évolutivité sont intégrées dès la conception.",
                    en: "Custom CRMs, dashboards, marketplaces, and business tools, security, scalability, and reliability built-in from day one."
                },
                children: [],
                link: "/service/web-app"
            },
            {
                _key: uuidv4(),
                _id: "menu-service-showcase",
                key: "sites-vitrines",
                name: {
                    fr: "Sites Vitrines",
                    en: "Showcase Websites"
                },
                icon: "lucide:layers",
                description: {
                    fr: "Des sites clairs, rapides et structurés pour valoriser votre image, améliorer votre visibilité et générer des prises de contact.",
                    en: "Clear, fast, and structured sites to enhance your image, increase visibility, and generate qualified leads."
                },
                children: [],
                link: "/service/web-show"
            },
            {
                _key: uuidv4(),
                _id: "menu-service-it-ia",
                key: "solutions-it-ia",
                name: {
                    fr: "Solutions IT / IA",
                    en: "IT / AI Solutions"
                },
                icon: "lucide:brain",
                description: {
                    fr: "Intelligence artificielle, automatisation, cloud et intégrations sur-mesure. Des outils pensés pour vos enjeux stratégiques, sans complexité inutile.",
                    en: "Artificial intelligence, automation, cloud, and custom integrations. Tools designed for your strategic goals without unnecessary complexity."
                },
                children: [],
                link: "/service/it-ia"
            }
        ]
    },
    {
        _key: uuidv4(),
        _id: "menu-contact",
        number: "3",
        key: "contact",
        name: {
            fr: "Contact",
            en: "Contact"
        },
        icon: "lucide:messages-square",
        children: [],
        link: "/contact"
    }
]

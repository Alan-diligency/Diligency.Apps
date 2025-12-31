import { v4 as uuidv4 } from "uuid";

export const HOME_SEED = [
    {
        _key: uuidv4(),
        page: "",
        slug: "home",
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Offrez-vous la diligence digitale",
                    en: "Experience digital diligence",
                }
            ],
            subtitle: [
                {
                    _key: uuidv4(),
                    fr: "Sites web & applications sur-mesure, pensés pour la performance, la clarté et vos objectifs.",
                    en: "Custom websites & applications, designed for performance, clarity, and your business goals.",
                }
            ],
            cta: [
                {
                    _key: uuidv4(),
                    type: "cta-tertiary",
                    text: {
                        fr: "Réservez un appel stratégique",
                        en: "Book a strategy call",
                    },
                    icon: "lucide:calendar",
                    link: "/contact"
                },
                {
                    _key: uuidv4(),
                    type: "cta-link",
                    text: {
                        fr: "Soumettre mon projet",
                        en: "Submit my project",
                    },
                    icon: "lucide:arrow-right",
                    link: "/application",
                    style: "text-secondary-500"
                }
            ],
            background: "/videos/hero.mp4"
        },
        blocks: [
            {
                _key: uuidv4(),
                template: "template-g",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Diligency n’est pas une simple agence.",
                        en: "Diligency is not just an agency."
                    },
                    {
                        _key: uuidv4(),
                        fr: "C’est une méthode.",
                        en: "It’s a method."
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Nous traduisons vos idées en solutions digitales robustes, épurées et pensées pour durer. Chaque projet est guidé par une compréhension fine de vos objectifs et une exécution rigoureuse. C’est ça, notre méthode. C’est ça, la diligence digitale.",
                        en: "We turn your ideas into robust, refined digital solutions built to last. Every project is guided by a sharp understanding of your goals and executed with disciplined precision. That’s our method.That’s digital diligence."
                    }
                ],
                items: [
                    "/images/storysets/collaboration-animate.svg",
                    "/images/storysets/collaboration-animate.svg",
                    "/images/storysets/collaboration-animate.svg"
                ]
            },
            {
                _key: uuidv4(),
                template: "template-h",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Nos expertises sur-mesure",
                        en: "Our tailor-made expertise"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Chez Diligency, chaque solution est conçue pour durer, évoluer et créer un vrai levier pour votre activité. Nous allions rigueur technique, design clair et impact concret.",
                        en: "At Diligency, every solution is designed to last, evolve, and become a real growth lever for your business. We combine technical rigor, clear design, and real-world impact."
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:layout-dashboard",
                        name: {
                            fr: "Applications web",
                            en: "Web Applications"
                        },
                        text: {
                            fr: "Développement de plateformes robustes, sécurisées et modulaires : portails clients, dashboards métier, SaaS sur-mesure. Pensées pour évoluer avec votre activité, et conçues pour vous rendre autonome.",
                            en: "Development of robust, secure, and modular platforms: client portals, business dashboards, and custom SaaS. Built to evolve with your business, and to give you full autonomy."
                        },
                        technos: ["Node.js", "Vue.js", "Express"],
                        link: "/home/expertise/scalable-web"
                    },
                    {
                        _key: uuidv4(),
                        icon: "lucide:monitor",
                        name: {
                            fr: "Site vitrine",
                            en: "Showcase Websites"
                        },
                        text: {
                            fr: "Création de sites clairs, rapides et fiables, pensés pour renforcer votre image et générer des prises de contact. Design professionnel, navigation fluide, structure optimisée pour le référencement.",
                            en: "Creation of clear, fast, and reliable websites to strengthen your brand and generate leads.Professional design, smooth navigation, and SEO optimized structure."
                        },
                        technos: ["WordPress", "Next.js", "PHP"],
                        link: "/home/expertise/showcase-web"
                    },
                    {
                        _key: uuidv4(),
                        icon: "lucide:workflow",
                        name: {
                            fr: "Intelligence Artificielle",
                            en: "Artificial Intelligence"
                        },
                        text: {
                            fr: "Intégration d’outils IA concrets : assistants, automatisations, génération de contenu, tri intelligent. L’IA devient un levier stratégique, sans complexité inutile.",
                            en: "Integration of practical AI tools: assistants, automations, content generation, intelligent sorting. AI becomes a strategic lever without the extra complexity."
                        },
                        technos: ["Node.js", "Zapier", "MongoDB"],
                        link: "/home/expertise/ai-solution"
                    },
                    {
                        _key: uuidv4(),
                        icon: "lucide:plug",
                        name: {
                            fr: "Maintenance & support",
                            en: "Maintenance & Support"
                        },
                        text: {
                            fr: "Suivi technique fiable, mises à jour, sécurité et support réactif. Vous restez concentré sur votre activité, on s’occupe du bon fonctionnement de vos outils.",
                            en: "Reliable technical monitoring, updates, security, and responsive support. You stay focused on your business, we keep your tools running smoothly."
                        },
                        technos: ["REST", "GraphQL", "PHP"],
                        link: "/home/expertise/it-support"
                    }
                ],
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:arrow-right",
                        text: {
                            fr: "Découvrir nos services ",
                            en: "Discover our services"
                        },
                        link: "/service/web-app"
                    }
                ]
            },
            {
                _key: uuidv4(),
                template: "template-i",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Deux niveaux de service",
                        en: "the same commitment to excellence."
                    },
                    {
                        _key: uuidv4(),
                        fr: "une même exigence.",
                        en: "Two service levels"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Choisissez l’accompagnement qui correspond à votre niveau de maturité digitale.",
                        en: "Choose the support that matches your level of digital maturity"
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        id: "essential",
                        icon: "lucide:heart-plus",
                        title: [
                            {
                                _key: uuidv4(),
                                fr: "Essentiel",
                                en: "Essential"
                            }
                        ],
                        price: "0",
                        features: {
                            type: "essential",
                            fr: [
                                "RDV de cadrage stratégique (objectifs, besoins, attentes)",
                                "Développement sur-mesure selon cahier des charges",
                                "Appel de passation & conseils d’usage en fin de projet",
                                "Livrable prêt à l’emploi avec documentation de base"
                            ],
                            en: [
                                "Strategic planning meeting (goals, needs, expectations)",
                                "Custom development according to specifications",
                                "Handover call & usage guidance at the end of the project",
                                "Ready-to-use deliverable with basic documentation"
                            ]
                        },
                        description: {
                            fr: "Une solution professionnelle, claire et efficace pour lancer votre projet dans les meilleures conditions.",
                            en: "A professional, clear, and effective solution to launch your project under the best conditions."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: "premium",
                        icon: "lucide:crown",
                        title: [
                            {
                                _key: uuidv4(),
                                fr: "Premium",
                                en: "Premium"
                            }
                        ],
                        price: "29",
                        features: {
                            type: "premium",
                            fr: [
                                "Tous les avantages de l’Offre Essentielle",
                                "10 heures de développement additionnel incluses",
                                "Support prioritaire 7j/7 pendant toute la phase projet ",
                                "Maintenance & correctifs inclus pendant 60 jours",
                                " Accompagnement renforcé à chaque étape"
                            ],
                            en: [
                                "All the benefits of the Essential Plan",
                                "10 additional development hours included",
                                "Priority support 7 days a week throughout the project phase",
                                "Maintenance & fixes included for 60 days",
                                "Enhanced support at every step"
                            ]
                        },
                        description: {
                            fr: "Une expérience complète, avec plus de confort, de temps et de réactivité.",
                            en: "A complete experience, with more comfort, time, and responsiveness."
                        }
                    }
                ]
            },
            {
                _key: uuidv4(),
                template: "template-j",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Le Hub",
                        en: "The Hub"
                    },
                    {
                        _key: uuidv4(),
                        fr: "Comprendre avant de commander",
                        en: "Understand before ordering"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Explorez nos articles, études de cas et démonstrations. Un espace conçu pour éclairer vos choix digitaux, sans jargon inutile.",
                        en: "Explore our articles, case studies, and demos. A space designed to guide your digital decisions without the jargon."
                    }
                ],
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:arrow-right",
                        link: "/article",
                        text: {
                            fr: "Lire les articles",
                            en: "Read articles"
                        },
                        type: "cta-link"
                    }
                ],
                action: "getArticleList",
                items: []
            }
        ],
        footer: [
            {
                _key: uuidv4(),
                type: "footer-c",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Et si on posait les bases de votre projet ?",
                        en: "How about we lay the foundations for your project?"
                    }
                ],
                text: {
                    fr: "En 30 minutes, nous vous aidons à clarifier vos objectifs, à valider la faisabilité et à structurer les premières étapes concrètes. Un cadrage utile pour avancer avec justesse, dès le départ.",
                    en: "In just 30 minutes, we help you clarify your goals, assess feasibility, and outline the first concrete steps. A useful framework to move forward with confidence right from the start."
                },
                cta: [
                    {
                        _key: uuidv4(),
                        type: "cta-secondary",
                        text: {
                            en: "Fill out the project form",
                            fr: "Remplir le formulaire projet"
                        },
                        icon: "lucide:pen",
                        link: "/contact"
                    }
                ],
                background: "/videos/calendar.webm"
            },
            {
                _key: uuidv4(),
                type: "footer-a",
                text: {
                    fr: "Diligency partenaire digital structuré, rapide dans l’exécution, engagé sur la qualité. Des solutions claires, durables et conçues pour vos enjeux.",
                    en: "Diligency a structured digital partner, fast in execution, committed to quality. Clear, durable solutions tailored to your real needs."
                },
                cta: [
                    {
                        _key: uuidv4(),
                        type: "cta-tertiary",
                        text: {
                            en: "Write us",
                            fr: "Écrivez-nous"
                        },
                        icon: "lucide:mail",
                        link: "/contact"
                    }
                ]
            }
        ]
    }
];

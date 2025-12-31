import { v4 as uuidv4 } from "uuid";
export const SERVICE_SEED = [
    {
        _key: uuidv4(),
        page: "service",
        slug: "web-app",
        hero: {
            "title": [
                {
                    "_key": uuidv4(),
                    "fr": "Applications Web & Plateformes métier.",
                    "en": "Web Applications & Business Platforms"
                },
                {
                    "_key": uuidv4(),
                    "fr": "Des outils solides, conçus pour vos usages réels.",
                    "en": "Robust tools, designed for your real-world operations."
                }
            ],
            "subtitle": [
                {
                    "_key": uuidv4(),
                    "fr": "Développement sur-mesure de CRM, dashboards, portails métier, systèmes de réservation ou marketplaces. Fiabilité, sécurité et évolutivité intégrées dès la conception.",
                    "en": "Custom development of CRMs, dashboards, client portals, booking systems or marketplaces. Reliability, security and scalability are built in from day one."
                }
            ],
            "image": "/images/hero/ecommerce.jpg",
            "cta": [
                {
                    "_key": uuidv4(),
                    "icon": "lucide:send",
                    "link": "/application",
                    "text": {
                        "fr": "Soumettre mon projet",
                        "en": "Apply my project"
                    },
                    "type": "cta-tertiary"
                }
            ]
        },
        "blocks": [
            {
                "template": "template-e",
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "Pourquoi une application web ?",
                        "en": "Why a Web Application?"
                    }
                ],
                "subtitle": [
                    {
                        _key: uuidv4(),
                        fr: "Quand un site vitrine ne suffit plus, c’est qu’il est temps de passer à une vraie application. Qu’il s’agisse de gérer des utilisateurs, automatiser vos processus ou centraliser vos données, nous concevons des plateformes sur-mesure, robustes, évolutives et pensées pour votre métier. Portail client, système de réservation, CRM ou marketplace : si votre besoin dépasse le simple affichage, nous le structurons comme une application à part entière.",
                        en: "When a showcase website is no longer enough, it’s time to move to a real application. Whether you need to manage users, automate processes or centralize data, we build custom robust platforms, scalable, and aligned with your operations. Client portals, booking systems, CRMs or marketplaces, if your need goes beyond simple display, we shape it as a full-featured application."
                    }
                ],
                "items": [
                    {
                        "_key": uuidv4(),
                        "title": [
                            {
                                "_key": uuidv4(),
                                "fr": "cas d'usage fréquents:",
                                "en": "Common use cases"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Marketplace B2B ou B2C",
                                    "en": "B2B or B2C Marketplace"
                                },
                                "icon": "lucide-briefcase-business"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Système de réservation intelligent",
                                    "en": "Smart Booking System"
                                },
                                "icon": "lucide-brain-circuit"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Portail client ou extranet sécurisé",
                                    "en": "Client Portal or Secure Extranet"
                                },
                                "icon": "lucide-globe-lock"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Applications SaaS ou interface de gestion",
                                    "en": "SaaS Applications or Management Interface"
                                },
                                "icon": "lucide-square-mouse-pointer"
                            }
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        "title": [
                            {
                                "_key": uuidv4(),
                                "fr": "Avantage concrets:",
                                "en": "Concrete advantages:"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Responsive (desktop & mobile)",
                                    "en": "Responsive (desktop & mobile)"
                                },
                                "icon": "lucide-monitor-smartphone"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Architecture scalable (React, Vue, Next.js, API-first)",
                                    "en": "Scalable architecture (React, Vue, Next.js, API-first)"
                                },
                                "icon": "lucide-scaling"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Sécurité by design (Authentification, Rôle, traçabilité)",
                                    "en": "Security by design (Authentication, Role, Traceability)"
                                },
                                "icon": "lucide-shield-ellipsis"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "UX optimisée pour l’usage réel et les objectifs métier",
                                    "en": "UX optimized for real use and business goals"
                                },
                                "icon": "lucide-target"
                            }
                        ]
                    }
                ]
            },
            {
                "_key": uuidv4(),
                "template": "template-e",
                "title": [
                    {
                        "fr": "Notre Méthode",
                        "en": "Our Method"
                    }
                ],
                "subtitle": [
                    {
                        "_key": uuidv4(),
                        "fr": "Notre approche combine agilité, exigence de fond et clarté de processus. Chaque projet avance dans un cadre structuré, où chaque étape sert la cohérence et la qualité finale. Notre méthode repose sur trois piliers pour garantir des livrables solides, lisibles et alignés sur vos enjeux.",
                        "en": "Our approach combines agility, rigorous foundations and process clarity. Each project moves forward within a structured framework, where every step reinforces consistency and final quality. Our method is built on three pillars to deliver solutions that are robust, readable, and aligned with your business goals."
                    }
                ],
                "items": [
                    {
                        "_key": uuidv4(),
                        "title": [
                            {
                                "_key": uuidv4(),
                                "fr": "Structuration & cadrage",
                                "en": "Common use cases"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Audit & cadrage fonctionnel",
                                    "en": "Functional scoping & audit"
                                },
                                "icon": "lucide-clipboard-check"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Architecture technique & stack adaptée",
                                    "en": "Technical architecture & adapted stack"
                                },
                                "icon": "lucide-circuit-board"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Test utilisateurs intégrés",
                                    "en": "ntegrated user testing"
                                },
                                "icon": "lucide-test-tubes"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Maquettes UI/UX avec validation",
                                    "en": "UI/UX Mockups with Validation"
                                },
                                "icon": "lucide-app-window"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Développement modulaire et visible",
                                    "en": "Modular, visible development"
                                },
                                "icon": "lucide-terminal"
                            },

                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Mise en production + documentation ",
                                    "en": "Production launch + documentation"
                                },
                                "icon": "lucide-cloud-upload"
                            }
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        "title": [
                            {
                                "_key": uuidv4(),
                                "fr": "Performance & technique",
                                "en": "Performance & Technology"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "UX fluide, 100 % responsive",
                                    "en": "Smooth UX, fully responsive"
                                },
                                "icon": "lucide-smartphone"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Connexion à vos outils internes",
                                    "en": "Integration with your internal tools"
                                },
                                "icon": "lucide-server-cog"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Système de rôles, sécurité, logs",
                                    "en": "Role-based access, security, logs"
                                },
                                "icon": "lucide-shield-check"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Back-end robuste & évolutif",
                                    "en": "Scalable, robust back-ends"
                                },
                                "icon": "lucide-plug"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Interface pensée performance",
                                    "en": "Interface designed for performance"
                                },
                                "icon": "lucide-shield-check"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Architecture scalable (API-ready)",
                                    "en": "API-ready architecture"
                                },
                                "icon": "lucide-network"
                            }
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        "title": [
                            {
                                "_key": uuidv4(),
                                "fr": "Pilotage & transparence",
                                "en": "Project Oversight & Transparency"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Équipe projet dédiée (pas de sous-traitance floue)",
                                    "en": "Dedicated project team (no vague outsourcing)"
                                },
                                "icon": "lucide-users"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Aucun développeur non validé",
                                    "en": "Every developer pre-approved"
                                },
                                "icon": "lucide-shield-check"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Transparence sur délais, méthodes, livrables ",
                                    "en": "Transparency on timeline, methods, deliverables"
                                },
                                "icon": "lucide-eye"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Garantie post-livraison (support & maintenance)",
                                    "en": "Post-launch guarantee (support & maintenance)"
                                },
                                "icon": "lucide-life-buoy"
                            }
                        ]
                    }
                ]
            }
        ],
        "faq": {
            "title": [
                {
                    "_key": uuidv4(),
                    "fr": "FAQ",
                    "en": "FAQ"
                }
            ],
            "items": [
                {
                    "_key": uuidv4(),
                    "question": {
                        "fr": "Combien de temps pour développer une application web ?",
                        "en": "How long does it take to develop a web application?"
                    },
                    "response": {
                        "fr": "Cela dépend de la complexité de votre projet. Un MVP structuré peut voir le jour en 6 à 10 semaines. Pour des plateformes plus riches (CRM, SaaS, marketplace), comptez 3 à 5 mois en moyenne. Dès le départ, nous vous donnons une estimation claire, découpée par étapes. Chaque phase est validée avec vous.",
                        "en": " It depends on the complexity of your project. A structured MVP can be delivered in 6 to 10 weeks. More advanced platforms (CRMs, SaaS, marketplaces) typically take 3 to 5 months. From the outset, we provide a clear timeline broken down by phase, with step-by-step validation."
                    }
                },
                {
                    "_key": uuidv4(),
                    "question": {
                        "fr": "Puis-je la faire évoluer plus tard ?",
                        "en": "Can it evolve over time ?"
                    },
                    "response": {
                        "fr": "Oui, c’est même une priorité chez nous. Nos applications sont pensées dès le départ pour être évolutives (architecture modulaire, API-first, sécurité scalable). Vous pouvez ajouter des fonctionnalités, connecter de nouveaux outils ou adapter votre interface au fil du temps. Nous anticipons ce besoin dès la conception.",
                        "en": "Absolutely, it’s a priority for us. Our applications are built to scale from day one (modular architecture, API-first, scalable security). You can add features, connect new tools, or adjust your interface over time. We anticipate this need from the design phase."
                    }
                },
                {
                    "_key": uuidv4(),
                    "question": {
                        "fr": "Je n'ai pas encore de cahier des charges, est-ce un problème ?",
                        "en": "I don’t have a project brief, can we still start ?"
                    },
                    "response": {
                        "fr": "Pas du tout. Nous commençons souvent les projets dès l’étape de cadrage fonctionnel. À travers des échanges structurés, des ateliers et des maquettes validées ensemble, nous vous aidons à formuler les bons besoins. Vous gagnez en clarté, nous avançons avec méthode.",
                        "en": "No problem. We often begin projects at the functional scoping stage. Through structured conversations, workshops and validated mockups, we help you clarify your needs. You gain clarity, we move forward with precision. "
                    }
                },
                {
                    "_key": uuidv4(),
                    "question": {
                        "fr": "Quel budget prévoir pour une application web ?",
                        "en": "What budget should I expect for a web application ?"
                    },
                    "response": {
                        "fr": "Le budget dépend de la portée, du niveau de complexité et des fonctionnalités à intégrer. Chez Diligency, nous proposons une estimation claire dès le cadrage, avec un devis transparent et un découpage par livrable. Un projet MVP démarre autour de 5 000 à 12 000 €, tandis que des applications plus avancées peuvent dépasser les 20 000 €. Chaque projet est calibré pour rester utile, viable et rentable.",
                        "en": "Budget depends on the scope, complexity and required features. At Diligency, we provide a clear estimate upfront, transparent pricing, broken down by deliverable. A solid MVP starts around €5,000 to €12,000. More advanced applications may exceed €20,000. Every project is scoped to remain useful, viable, and ROI-focused."
                    }
                },
                {
                    "_key": uuidv4(),
                    "question": {
                        "fr": "Qui est propriétaire de l’application une fois livrée ?",
                        "en": "Who owns the application once it’s delivered ?"
                    },
                    "response": {
                        "fr": "Vous l’êtes à 100 %. Nous travaillons en toute transparence : le code source, la documentation et les accès vous sont transmis à la livraison finale. Vous êtes libre de continuer avec nous ou de faire évoluer le projet avec un autre prestataire. C’est aussi pour cela que nous soignons l’architecture, la clarté du code et la documentation technique.",
                        "en": "You do 100%. We work transparently: source code, documentation, and access credentials are handed over at delivery. You’re free to continue with us or bring in another team. That’s why we ensure clean architecture, readable code, and proper documentation from day one."
                    }
                }
            ]
        },
        "footer": {
            "type": "footer-a",
            "text": {
                "fr": "Votre plateforme mérite plus qu’un site standard. Construisons une application qui vous fait gagner du temps, des clients, et du contrôle.",
                "en": "Our platform deserves more than a standard website. Let’s build an application that saves you time, attracts clients, and gives you control."
            },
            "cta": [
                {
                    "_key": uuidv4(),
                    "icon": "lucide:calendar",
                    "link": "/contact",
                    "text": {
                        "fr": "Réservez un appel stratégique",
                        "en": "Book a strategic call"
                    },
                    "type": "cta-tertiary"
                }
            ]
        }
    },
    {
        _key: uuidv4(),
        page: "service",
        slug: "web-show",
        "hero": {
            "title": [
                {
                    "_key": uuidv4(),
                    "fr": "Création de sites vitrines sur-mesure",
                    "en": "Custom Showcase Website Development"
                }
            ],
            "subtitle": [
                {
                    "_key": uuidv4(),
                    "fr": "Une vitrine digitale claire et rapide, qui renforce votre image, inspire confiance et génère des prises de contact qualifiées.",
                    "en": "A fast, clear digital showcase that strengthens your image, builds trust, and generates qualified leads."
                }
            ],
            "image": "/images/hero/ecommerce.jpg"
        },
        "blocks": [
            {
                "template": "template-f",
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "À qui s'adresse ce service ?",
                        "en": "Who is this service for?"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Ce service s’adresse à toutes les structures qui souhaitent projeter une image sérieuse, renforcer leur présence digitale, et générer des contacts qualifiés. Indépendant, cabinet ou PME : nous concevons un site adapté à vos besoins, vos moyens et votre niveau de maturité digitale.",
                        en: "This service is designed for any organization aiming to project a professional image, strengthen its digital presence, and attract qualified leads. Whether you're a freelancer, consulting firm, or growing business, we build a site tailored to your needs, resources, and digital maturity level."
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        title: [
                            {
                                _key: uuidv4(),
                                fr: "À qui s'adresse ce service ?",
                                en: "Who is this service for?"
                            }
                        ],
                        subtitle: {
                            _key: uuidv4(),
                            fr: "Ce service s’adresse à toutes les structures qui souhaitent projeter une image sérieuse, renforcer leur présence digitale, et générer des contacts qualifiés. Indépendant, cabinet ou PME : nous concevons un site adapté à vos besoins, vos moyens et votre niveau de maturité digitale.",
                            en: "This service is designed for any organization aiming to project a professional image, strengthen its digital presence, and attract qualified leads. Whether you're a freelancer, consulting firm, or growing business, we build a site tailored to your needs, resources, and digital maturity level."
                        },
                        list: [
                            {
                                "name": {
                                    "fr": "Indépendants et experts du service (coachs, avocats, architectes…)",
                                    "en": "Freelancers and service experts (coaches, lawyers, architects…)"
                                },
                                "icon": "lucide-user-check"
                            },
                            {
                                "name": {
                                    "fr": "Cabinets & professions libérales",
                                    "en": "Offices & liberal professions"
                                },
                                "icon": "lucide-briefcase"
                            },
                            {
                                "name": {
                                    "fr": "PME & structures souhaitant structurer leur présence en ligne",
                                    "en": "SMEs & organizations looking to structure their online presence"
                                },
                                "icon": "lucide-building-2"
                            },
                            {
                                "name": {
                                    "fr": "Entrepreneurs en phase de lancement",
                                    "en": "Entrepreneurs in the launch phase"
                                },
                                "icon": "lucide-rocket"
                            }
                        ]
                    }
                ]
            },
            {
                "_key": uuidv4(),
                "template": "template-e",
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "Pourquoi nous confier votre site vitrine ?",
                        "en": "Why entrust us with your showcase website ?"
                    }
                ],
                "subtitle": [
                    {
                        "_key": uuidv4(),
                        "fr": "Un site vitrine n’est pas un simple support visuel : c’est un levier stratégique. Il façonne la première impression, clarifie votre positionnement, et oriente l’utilisateur vers l’action. Chaque détail compte pour générer des prises de contact qualifiées.",
                        "en": "A showcase site isn’t just a visual support, it’s a strategic asset. It shapes first impressions, clarifies your positioning, and guides users toward action. Every detail matters to generate qualified contacts."
                    },
                    {
                        "_key": uuidv4(),
                        "fr": "Chez Diligency, nous construisons des sites structurés, rapides et lisibles, pensés pour renforcer la confiance et valoriser votre expertise. Objectif : transformer votre présence en ligne en résultats concrets",
                        "en": "At Diligency, we craft structured, fast, and readable websites designed to build trust and showcase your expertise. The goal: turn your online presence into real, measurable results."
                    }
                ]
            },
            {
                "_key": uuidv4(),
                "template": "template-e",
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "Notre méthode",
                        "en": "Our method"
                    }
                ],
                "items": [
                    {
                        "_key": uuidv4(),
                        title: [
                            {
                                _key: uuidv4(),
                                fr: "Nous cadrons chaque projet avec méthode : de la compréhension fine de vos enjeux à la livraison d’un site fiable et prêt à convertir. Chaque étape est pensée pour servir vos objectifs concrets, sans superflu.",
                                en: "We approach each project with structure, from a deep understanding of your goals to delivering a reliable, conversion-ready website. Every step is designed to serve your concrete objectives, without unnecessary extras."
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Compréhension de vos objectifs et priorités pour poser des fondations solides.",
                                    "en": "Understanding your goals and priorities to build on solid ground."
                                },
                                "icon": "lucide-target"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Design personnalisé, aligné sur votre identité et pensé pour l’expérience utilisateur.",
                                    "en": "Custom design aligned with your brand and optimized for user experience."
                                },
                                "icon": "lucide-layout-dashboard"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Développement efficace, calibré pour votre budget et vos contraintes techniques.",
                                    "en": "Efficient development adapted to your budget and technical constraints."
                                },
                                "icon": "lucide-code"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "SEO optimization from the ground up for real visibility on Google.",
                                    "en": "Optimisation SEO dès la base pour une visibilité réelle sur Google."
                                },
                                "icon": "lucide-rocket"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Livraison d’un site opérationnel, avec accompagnement si besoin post-livraison.",
                                    "en": "Delivery of an operational site, with post-launch support if needed."
                                },
                                "icon": "lucide-send"
                            }
                        ]
                    }
                ]
            }
        ],
        "footer": [
            {
                "type": "footer-a",
                "text": {
                    "fr": "Chez Diligency, nous créons des sites vitrines rapides, élégants et mobiles, adaptés à votre marque, pour inspirer confiance, renforcer votre présence digitale et convertir vos visiteurs en opportunités concrètes.",
                    "en": "At Diligency, we craft fast, elegant, and mobile showcase websites, tailored to your brand, to inspire trust, strengthen your digital presence, and turn visitors into tangible opportunities."
                },
                "cta": [
                    {
                        "icon": "lucide:layers",
                        "link": "/application",
                        "text": {
                            "fr": "Créer mon site vitrine",
                            "en": "Create my web show"
                        },
                        "type": "cta-tertiary"
                    }
                ]
            }
        ],
        faq: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "FAQ - A propos",
                    en: "FAQ - Site vitrine"
                }
            ],
            items: [
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Combien de temps faut-il pour créer mon site ?",
                        en: "How long does it take to build my site ?"
                    },
                    response: {
                        fr: "La majorité de nos sites vitrines sont livrés en 2 à 4 semaines, selon le niveau de préparation (contenus, logo, etc.) et les échanges nécessaires. Nous travaillons avec un cadre clair dès le départ.",
                        en: "Most of our showcase websites are delivered within 2 to 4 weeks, depending on how prepared you are (content, logo, etc.) and how quickly we exchange feedback. We define a clear process from day one."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Dois-je fournir tous les textes et visuels ?",
                        en: "Do I have to provide all the content and visuals?"
                    },
                    response: {
                        fr: "Pas nécessairement. Nous pouvons vous guider sur les contenus à préparer, ou vous proposer une aide à la rédaction et une sélection d’images professionnelles si vous le souhaitez.",
                        en: "Not necessarily. We can guide you in preparing your content, or assist with copywriting and selecting professional visuals, if you prefer."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Pourrai-je modifier mon site facilement ensuite ?",
                        en: "Will I be able to edit my site easily afterward ?"
                    },
                    response: {
                        fr: "Oui. Nous utilisons des outils simples à prendre en main, même sans compétences techniques. Et si besoin, nous proposons un forfait de maintenance évolutive.",
                        en: "Yes. We use tools that are easy to manage, even with no technical knowledge. If needed, we also offer an optional maintenance plan for updates and improvements."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Le site sera-t-il adapté aux smartphones ?",
                        en: "Will my site work well on smartphones ?"
                    },
                    response: {
                        fr: "Évidemment. Tous nos sites sont 100 % responsive, testés pour s’adapter parfaitement aux mobiles et tablettes.",
                        en: " Absolutely. All our sites are fully responsive and tested to perform flawlessly on mobile and tablet devices."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Je ne sais pas par où commencer, pouvez-vous m’accompagner ?",
                        en: "I don’t know where to start, can you guide me ?"
                    },
                    response: {
                        fr: "Oui. Nous proposons un cadre clair dès le départ, même si vous partez de zéro. Un premier appel suffit pour poser les bases ensemble.",
                        en: "Yes. We offer a clear and structured framework, even if you're starting from scratch. One initial call is all it takes to define the first steps together."
                    }
                },
            ]
        },
    },
    {
        _key: uuidv4(),
        page: "service",
        slug: "it-ia",
        "hero": {
            "title": [
                {
                    "_key": uuidv4(),
                    "fr": "Solutions IT & IA – Digitalisez intelligemment.",
                    "en": " IT & AI Solutions. Streamlined systems, real results"
                }
            ],
            "subtitle": [
                {
                    "_key": uuidv4(),
                    "fr": "Nous créons des systèmes sur-mesure, automatisations, et intégrations augmentées par l’intelligence artificielle.",
                    "en": "Custom-built integrations, automations, and intelligent tools that make your operations faster, smarter, and scalable, without added complexity."
                }
            ],
            "image": "/images/hero/ecommerce.jpg",
            "cta": [
                {
                    "_key": uuidv4(),
                    "icon": "lucide:pickaxe",
                    "link": "/application",
                    "text": {
                        "fr": "Construire ma solution intelligente",
                        "en": "Build My Smart Solution"
                    },
                    "type": "cta-tertiary"
                }
            ]
        },
        "blocks": [
            {
                "template": "template-f",
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "À qui s'adresse ce service ?",
                        "en": "Who is this service for?"
                    }
                ],
                "subtitle": [
                    {
                        "_key": uuidv4(),
                        "fr": "Ce service s’adresse aux entreprises qui veulent gagner du temps, réduire les tâches manuelles et exploiter le potentiel de l’IA.",
                        "en": "This service is designed for businesses seeking to save time, reduce manual tasks, and tap into the potential of AI."
                    },
                    {
                        "_key": uuidv4(),
                        "fr": "Nous vous aidons à connecter vos outils, automatiser vos processus et structurer une base technologique claire, sans complexité inutile.",
                        "en": " We help you connect your tools, automate your workflows, and build a clear tech foundation, without unnecessary complexity."
                    }
                ],
                "items": [
                    {
                        "_key": uuidv4(),
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Entreprises souhaitant automatiser leurs processus internes",
                                    "en": "Companies looking to automate their internal processes"
                                }
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Directions métier cherchant à connecter plusieurs systèmes (ERP, CRM, SaaS)",
                                    "en": "Business departments seeking to connect multiple systems (ERP, CRM, SaaS)"
                                }
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Structures intéressées par l’IA (analyse, assistants, scoring, automatisation)",
                                    "en": "Organizations interested in AI (analytics, assistants, scoring, automation)"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "_key": uuidv4(),
                "title": [
                    {
                        "_key": uuidv4(),
                        "fr": "Pourquoi choisir Diligency pour vos solutions IT & IA ?",
                        "en": "Why choose Diligency for your IT & AI solutions?"
                    }
                ],
                "subtitle": [
                    {
                        "_key": uuidv4(),
                        "fr": "La technologie n’a de sens que si elle sert une vision claire et des objectifs concrets. Chez Diligency, nous pensons l’IT comme un levier stratégique, pas comme une couche technique isolée. Nous créons des systèmes robustes, évolutifs et réellement utiles : connecteurs intelligents, automatisations fluides, plateformes internes augmentées par l’IA.",
                        "en": "Technology only makes sense when it supports a clear vision and concrete goals. At Diligency, we treat IT as a strategic enabler, not just another technical layer. We build reliable, scalable, and truly useful systems: smart connectors, smooth automations, and internal platforms enhanced by AI."
                    },
                    {
                        "_key": uuidv4(),
                        "fr": "Chaque solution est conçue pour réduire les frictions opérationnelles, améliorer vos process, et optimiser la prise de décision en temps réel. Vous gagnez en efficacité, en autonomie, et en scalabilité, toujours sans complexité inutile.",
                        "en": "Each solution is designed to reduce operational friction, improve processes, and enable real-time decision-making. You gain efficiency, autonomy, and scalability — always without unnecessary complexity."
                    }
                ]
            },
            {
                template: "template-e",
                title: [
                    {
                        "_key": uuidv4(),
                        "fr": "Notre méthode",
                        "en": "Our method"
                    }
                ],
                subtitle: [
                    {
                        "_key": uuidv4(),
                        "fr": "Chez Diligency, chaque solution IT/IA s’appuie sur une méthode rigoureuse, orientée résultats. Nous combinons structure technique, stratégie digitale et leviers intelligents pour garantir un impact durable sur vos opérations.",
                        "en": "At Diligency, every IT/AI solution follows a rigorous, results-oriented method. We combine technical structure, digital strategy, and intelligent levers to create long-term impact on your operations."
                    }
                ],
                items: [
                    {
                        "_key": uuidv4(),
                        title: [
                            {
                                "_key": uuidv4(),
                                "fr": "Cadrer pour éviter les erreurs coûteuse",
                                "en": "Scope it right, avoid costly missteps"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Audit complet de vos flux internes et outils existants",
                                    "en": "Full audit of your internal workflows and tools"
                                },
                                "icon": "lucide:hand"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Conception des spécifications fonctionnelles et architecture cible",
                                    "en": "Functional specs and target system architecture"
                                },
                                "icon": "lucide-cog"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Prototypage rapide pour valider les choix avant développement",
                                    "en": "Rapid prototyping to validate key choices before development"
                                },
                                "icon": "lucide-flask-conical"
                            },
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        title: [
                            {
                                "_key": uuidv4(),
                                "fr": "Construire vite, proprement et sans friction",
                                "en": "Build fast, clean & frictionless"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Développement rigoureux, tests, documentation claire",
                                    "en": "Rigorous development, testing, and clear documentation"
                                },
                                "icon": "lucide-link"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Intégration sur vos outils (ERP, CRM, SaaS, API) sans friction",
                                    "en": "Smooth integration with your existing stack (ERP, CRM, SaaS, API)"
                                },
                                "icon": "lucide-send"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Automatisations métiers (relances clients, emails, documents, etc.)",
                                    "en": "Custom business automations (client follow-ups, emails, docs, etc.)"
                                },
                                "icon": "lucide-bar-chart-3"
                            },
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        title: [
                            {
                                "_key": uuidv4(),
                                "fr": "Booster vos opérations avec l'intelligence ciblé",
                                "en": "Amplify with targeted intelligence"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Analyse et reporting assistés par IA",
                                    "en": "AI-assisted reporting and data analysis"
                                },
                                "icon": "lucide:brain"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Assistants IA internes (support, productivité, RH…)",
                                    "en": "Internal AI assistants (support, productivity, HR, etc.)"
                                },
                                "icon": "lucide:mouse"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Scoring intelligent pour leads, risques ou décisions",
                                    "en": "Smart scoring (leads, risks, decisions)"
                                },
                                "icon": "lucide:chart-area"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Génération IA pour vos contenus, visuels, actions marketing",
                                    "en": "AI generation for content, visuals, marketing actions"
                                },
                                "icon": "lucide:airplay"
                            },
                        ]
                    },
                    {
                        "_key": uuidv4(),
                        title: [
                            {
                                "_key": uuidv4(),
                                "fr": "Un système qui évolue avec vous, pas contre vous",
                                "en": "A system that grows with you"
                            }
                        ],
                        "list": [
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Suivi évolutif et support technique à long terme",
                                    "en": "Long-term support & evolutionary maintenance"
                                },
                                "icon": "lucide:chart-bar-increasing"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Mises à jour, évolutions, et extensions fonctionnelles",
                                    "en": "Updates, feature expansions, and scaling plans"
                                },
                                "icon": "lucide:upload"
                            },
                            {
                                "_key": uuidv4(),
                                "name": {
                                    "fr": "Recalibrage stratégique selon vos priorités",
                                    "en": "Strategic recalibration as your priorities shift"
                                },
                                "icon": "lucide:chart-area"
                            },
                        ]
                    }
                ]
            }
        ],
        footer: [
            {
                type: "footer-a",
                text: {
                    "fr": "Chez Diligency, nous concevons des solutions IT et IA sur-mesure pour automatiser vos flux, connecter vos outils, et propulser votre croissance digitale avec rigueur et sérénité.",
                    "en": "At Diligency, we build tailored IT & AI solutions to automate your workflows, connect your systems, and accelerate your digital growth with clarity, precision, and peace of mind."
                },
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:pickaxe",
                        link: "/application",
                        text: {
                            fr: "Construire ma solution intelligente",
                            en: "Build My Smart Solution"
                        },
                        type: "cta-tertiary"
                    }
                ]
            }
        ],
        faq: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "FAQ - Solution IT/IA",
                    en: "FAQ – IT / AI Solutions"
                }
            ],
            items: [
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Est-ce que l’IA est vraiment utile pour mon activité ?",
                        en: "Is AI really useful for my business ?"
                    },
                    response: {
                        fr: "Oui, si elle est bien ciblée. Nous développons des outils IA pragmatiques, comme des assistants internes, des automatisations de tâches répétitives ou des systèmes de recommandation, qui ont un impact direct sur vos résultats.",
                        en: "Yes, when properly targeted. We develop pragmatic AI tools like internal assistants, task automations, or recommendation systems that directly impact your productivity and results."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "À quel type d’entreprise s’adresse ce service ?",
                        en: "What type of businesses is this for ?"
                    },
                    response: {
                        fr: "Nos solutions sont conçues pour les PME, indépendants ou cabinets professionnels qui souhaitent gagner du temps, mieux exploiter leurs données ou offrir une meilleure expérience à leurs clients — sans recruter une équipe tech.",
                        en: "Our solutions are tailored to SMEs, freelancers, and professional firms looking to save time, use their data more effectively, or improve customer experience without needing a full tech team."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Faut-il déjà avoir une infrastructure technique ?",
                        en: "Do I need to have an existing technical infrastructure ?"
                    },
                    response: {
                        fr: "Pas forcément. Nous pouvons partir d’un environnement existant ou construire une solution légère et 100 % sur-mesure, adaptée à votre niveau actuel.",
                        en: "Not necessarily. We can build from your existing setup or create a lightweight, fully custom solution aligned with your current level of digital maturity."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Pouvez-vous connecter mes outils existants (CRM, Google Sheets, etc.) ?",
                        en: "Can you integrate my existing tools (CRM, Google Sheets, etc.) ?"
                    },
                    response: {
                        fr: "Oui. Nous réalisons des intégrations personnalisées avec vos outils actuels pour automatiser les flux, éviter les doubles saisies et centraliser l’information efficacement.",
                        en: "Yes. We create custom integrations with your existing stack to automate flows, avoid duplicate entry, and centralize your data intelligently."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Les projets IA ou IT ne sont-ils pas trop chers ?",
                        en: "Aren’t AI or IT projects too expensive ?"
                    },
                    response: {
                        fr: "Tout dépend du périmètre. Nous travaillons de manière modulaire, avec un ROI en ligne de mire. Parfois, une petite automatisation bien pensée suffit à générer un gros gain de productivité.",
                        en: "It depends on the scope. We work modularly and always aim for strong ROI. Sometimes, a single well-designed automation can lead to a significant productivity boost."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Est-ce sécurisé ?",
                        en: "Is it secure ?"
                    },
                    response: {
                        fr: "Absolument. La confidentialité des données, les droits d’accès et les bonnes pratiques de sécurité sont intégrés dans chaque projet, dès la phase de conception.",
                        en: "Absolutely. Data confidentiality, access control, and security best practices are embedded from the very first stages of every project."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "En combien de temps peut-on mettre en place une solution ?",
                        en: "How quickly can a solution be implemented?"
                    },
                    response: {
                        fr: "Certains outils simples peuvent être opérationnels en 1 à 2 semaines. Pour des systèmes plus complexes, nous structurons chaque étape pour que la mise en œuvre reste rapide, progressive et maîtrisée.",
                        en: "Some simple tools can be live within 1–2 weeks. For more complex systems, we structure the rollout to ensure a fast, phased, and controlled deployment."
                    }
                },
            ]
        },
    }
]
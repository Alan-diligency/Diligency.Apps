import { v4 as uuidv4 } from "uuid";
export const AGENCY_SEED = [
    {
        _key: uuidv4(),
        page: "agency",
        slug: "about",
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    "fr": "Notre méthode : de la diligence, du sens, de l’impact.",
                    "en": "Our Method: Diligence, Purpose, Impact."
                }
            ],
            subtitle: [
                {
                    _key: uuidv4(),
                    fr: "Diligency est une agence digitale fondée sur une conviction simple : l’efficacité naît d’un équilibre entre rigueur, innovation et compréhension métier.",
                    en: "Diligency is a digital agency founded on a simple belief: true efficiency comes from a balance of rigor, innovation, and business understanding."
                },
                {
                    _key: uuidv4(),
                    fr: "Nous accompagnons les cabinets, sociétés en transformation et entrepreneurs exigeants dans la création de solutions digitales fiables, durables et sur-mesure.",
                    en: "We support firms, evolving companies, and demanding entrepreneurs in building reliable, sustainable, and custom digital solutions."
                }
            ],
            background: "/images/hero/ecommerce.jpg"
        },
        blocks: [
            {
                _key: uuidv4(),
                template: "template-a",
                title: [
                    {
                        "_key": uuidv4(),
                        "fr": "Nos engagements",
                        "en": "Our Engagement"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Chez Diligency, nous conjuguons performance et simplicité. Chaque projet repose sur une transparence totale et une communication claire. Nous choisissons des technologies pertinentes, jamais superflues, pour répondre aux besoins réels. Nos livrables sont pensés comme des solutions concrètes, utiles et alignées avec vos objectifs stratégiques et opérationnels.",
                        en: "At Diligency, we combine performance with simplicity. Every project is built on complete transparency and clear communication. We select relevant technologies, never superfluous to address real needs. Our deliverables are designed as practical, useful solutions aligned with your strategic and operational objectives."
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:target",
                        name: {
                            fr: "Clarté avant complexité",
                            en: "Clarity over complexity"
                        },
                        text: {
                            fr: "Chez Diligency, nous visons la clarté. Pas de détours techniques ni de couches superflues : chaque solution est pensée pour délivrer une valeur métier directe, avec solidité et simplicité.",
                            en: "At Diligency, we prioritize clarity. No technical detours or unnecessary layers, every solution is designed to deliver real business value with simplicity and strength."
                        }
                    },
                    {
                        _key: uuidv4(),
                        icon: "lucide:handshake",
                        name: {
                            fr: "Transparence opérationnelle",
                            en: "Operational transparency"
                        },
                        text: {
                            fr: "Objectifs, livrables, délais ou imprévus : tout est partagé en toute transparence. La confiance est un pilier, et elle se construit étape par étape.",
                            en: "Objectives, deliverables, timelines, or setbacks, everything is shared openly. Trust is a pillar, and it’s built step by step."
                        }
                    },
                    {
                        _key: uuidv4(),
                        icon: "lucide:brain",
                        name: {
                            fr: "Technologie juste",
                            en: "Purpose-driven tech"
                        },
                        text: {
                            fr: "Nous sélectionnons les outils en fonction de votre contexte réel, pas des effets de mode. Une technologie utile, juste, au service de votre performance.",
                            en: "We choose tools based on your real context not on trends. Useful, appropriate technology that serves your performance."
                        }
                    },
                    {
                        _key: uuidv4(),
                        icon: " lucide:rocket",
                        name: {
                            fr: "Impact business réel",
                            en: "Real business impact"
                        },
                        text: {
                            fr: "Nos solutions sont des leviers d’action, pas des livrables décoratifs. Chaque fonctionnalité est alignée avec un objectif métier clair, pour un impact mesurable.",
                            en: "Our solutions are action drivers not decorative deliverables. Every feature is aligned with a clear business objective and measurable impact."
                        }
                    }
                ]
            },
            {
                _key: uuidv4(),
                template: "no-content-a",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Équipe Diligency",
                        en: "Diligency Team"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Notre équipe est composée d’experts engagés ( développeurs, designers, chefs de projet et consultants freelances ) sélectionnés pour leur rigueur, leur sens de la structure et leur adaptabilité. Chaque mission est pilotée par un référent unique, garant de la fluidité du projet et de la qualité des livrables.",
                        en: "Our team is made up of committed experts (developers, designers, project managers, and freelance consultants), carefully selected for their rigor, structured thinking, and adaptability. Each mission is led by a dedicated project lead, ensuring smooth execution and high-quality deliverables."
                    }
                ]
            }
        ],
        footer: [
            {
                _key: uuidv4(),
                type: "footer-a",
                text: {
                    fr: "Confiez votre projet digital à Diligency. Notre équipe transforme vos idées en solutions fiables, performantes et élégantes, pensées pour vos objectifs réels et votre croissance durable.",
                    en: "Entrust your digital project to Diligency. Our team turns your ideas into reliable, high-performing, and elegant solutions designed around your real goals and lasting growth."
                },
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:arrow-right",
                        text: {
                            fr: "Rejoignez-nous",
                            en: "Join us"
                        },
                        link: "/agency/job-carrier",
                        type: "cta-link"
                    }
                ]
            }
        ],
        faq: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "FAQ - A propos",
                    en: "FAQ – About Us"
                }
            ],
            subtitle: [
                {
                    _key: uuidv4(),
                    fr: "Équipe & Pilotage de projet",
                    en: "Team & Project Management"
                }
            ],
            items: [
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Quels profils composent une équipe Diligency ?",
                        en: "What profiles make up a Diligency team ?"
                    },
                    response: {
                        fr: "Chaque projet mobilise un référent dédié et des spécialistes techniques sélectionnés selon la nature de la mission : développement web ou mobile, intégration d’outils, automatisation, ou déploiement d’IA. Nous constituons des équipes resserrées, alignées avec les attentes stratégiques du client.",
                        en: "Each project is led by a dedicated project lead and supported by technical specialists tailored to the mission: web or mobile development, tool integration, automation, or AI deployment. We form streamlined teams, aligned with the client’s strategic priorities."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Qui pilote mon projet ?",
                        en: "Who manages my project ?"
                    },
                    response: {
                        fr: "Chaque projet est encadré par un référent unique, responsable du suivi, de la qualité et de la fluidité des livrables. Il assure la coordination entre les différents intervenants et vous accompagne tout au long du processus.",
                        en: "Each project is led by a dedicated project lead and supported by technical specialists tailored to the mission: web or mobile development, tool integration, automation, or AI deployment. We form streamlined teams, aligned with the client’s strategic priorities."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Comment se déroule le suivi du projet ?",
                        en: "How is the project monitored ?"
                    },
                    response: {
                        fr: "Le suivi s’effectue de manière structurée via un canal WhatsApp dédié pour les échanges informels et réactifs, complété par des points réguliers et des rapports synthétiques par e-mail. Vous êtes tenu informé sans surcharge technique.",
                        en: "Project tracking is structured via a dedicated WhatsApp channel for quick, informal exchanges, along with regular check-ins and concise email reports. You stay informed without the technical overload."
                    }
                },
                {
                    _key: uuidv4(),
                    question: {
                        fr: "Puis-je échanger directement avec les experts ?",
                        en: "Can I speak directly with the experts ?"
                    },
                    response: {
                        fr: "Le référent projet est votre point de contact principal. Il peut vous mettre ponctuellement en lien avec un expert technique si cela s’avère pertinent pour l’avancement ou la compréhension d’une étape.",
                        en: "Your main contact is the project lead. When relevant, they can connect you with a technical expert to clarify or advance a specific stage."
                    }
                },
            ]
        },
    },
    {
        _key: uuidv4(),
        page: "agency",
        slug: "job-carrier",
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Rejoindre Diligency",
                    en: "Join Diligency"
                }
            ],
            subtitle: [{
                _key: uuidv4(),
                fr: "Chez Diligency, nous collaborons avec des experts capables de livrer des solutions fiables, bien construites et alignées avec les enjeux métiers de nos clients. Chaque profil est sélectionné pour sa rigueur, sa clarté d’exécution et sa capacité à contribuer à des projets structurés, sans compromis sur la qualité",
                en: "At Diligency, we work with experts who can deliver reliable, well-structured solutions aligned with our clients’ business needs. Each profile is selected for their rigor, clarity in execution, and ability to contribute to structured projects without compromising on quality"
            }],
            background: "/images/hero/ecommerce.jpg"
        },
        blocks: [
            {
                _key: uuidv4(),
                template: "template-b",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Profils recherchés",
                        en: "Profiles we're looking for"
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        name: {
                            fr: "Développeurs front-end",
                            en: "Front-End Developers"
                        },
                        icon: "lucide:braces",
                        text: {
                            fr: "Tu transformes des maquettes en interfaces claires, modernes et efficaces ? Chez Diligency, tu travailles avec des designers structurés et des intégrateurs rigoureux. Tu maîtrises Vue.js, Nuxt, React ou Tailwind ? On avance vite, proprement, et on valorise ta précision.",
                            en: "You turn mockups into clear, modern, and efficient interfaces? At Diligency, you collaborate with structured designers and meticulous integrators. Fluent with Vue.js, Nuxt, React, or Tailwind? We move fast, clean, and we value your precision."
                        }
                    },
                    {
                        _key: uuidv4(),
                        name: {
                            fr: "Développeurs back-end",
                            en: "Back-End Developers"
                        },
                        icon: "lucide:server",
                        text: {
                            fr: "Tu conçois des APIs stables, sécurisées et efficaces ? Chez Diligency, les back-end sont au cœur des projets sur-mesure : portails, SaaS, automatisations. Tu maîtrises la logique serveur, la fiabilité des bases de données et les flux entre front et back ? On attend ton expertise",
                            en: "You design stable, secure, and efficient APIs ? Back-end logic is central to our custom projects portals, SaaS, automations. You master server logic, database reliability, and front-to-back flows? We’re ready for your expertise."
                        }
                    },
                    {
                        _key: uuidv4(),
                        name: {
                            fr: "Experts IA / Automatisation",
                            en: "AI / Automation Experts"
                        },
                        icon: "lucide:brain",
                        text: {
                            fr: "Tu sais intégrer intelligemment des briques IA ou automatiser des process avec justesse ? On t’appelle quand il faut aller plus loin que les outils classiques, sans tomber dans la complexité inutile. Tu rends la tech plus utile, pas plus lourde? On veut te lire.",
                            en: "You know how to integrate smart AI modules or automate processes with precision? We call on you when it’s time to go beyond no-code tools without adding unnecessary complexity. You make tech more useful, not heavier? We want to hear from you. "
                        }
                    },
                    {
                        _key: uuidv4(),
                        name: {
                            fr: "Fullstack developers",
                            en: "Fullstack developers"
                        },
                        icon: "lucide:server",
                        text: {
                            fr: "Tu as une vision d’ensemble, tu aimes structurer, anticiper, et livrer des projets solides de bout en bout ? Tu maîtrises à la fois front, back, APIs et productivité ? Chez Diligency, les profils fullstack sont rares, mais précieux.",
                            en: "You have a global view, you love to structure, anticipate, and deliver rock-solid projects end-to-end ? Comfortable across front-end, back-end, APIs, and productivity tools ? At Diligency, fullstack profiles are rare but invaluable."
                        }
                    },

                ]
            },
            {
                _key: uuidv4(),
                template: "template-b",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Ce que nous offrons",
                        en: "What we offer"
                    }
                ],
                items: [
                    {
                        _key: uuidv4(),
                        id: 1,
                        name: {
                            fr: "Collaboration structurée",
                            en: "Structured Collaboration"
                        },
                        icon: "lucide-workflow",
                        text: {
                            fr: "Tu aimes quand les choses sont claires ? Nous aussi. Chaque mission est organisée via des outils modernes (Notion, Git, Figma) pour assurer une communication fluide et une coordination sans friction.",
                            en: "You like things to be clear? So do we. Each mission is run via modern tools (Notion, Git, Figma) to ensure fluid communication and seamless coordination."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 2,
                        name: {
                            fr: "Briefs synthétiques, jamais flous",
                            en: "Clear, concise briefs"
                        },
                        icon: "lucide-clipboard-list",
                        text: {
                            fr: "On va droit au but. Nos briefs sont structurés, compréhensibles, orientés livrables et pensés pour permettre un vrai démarrage rapide. Pas de réunions inutiles, pas de flou sur les attentes.",
                            en: "We get to the point. Our briefs are structured, actionable, and deliverable-focused built to get you started fast. No unnecessary calls, no vague expectations."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 3,
                        name: {
                            fr: "Engagement & délais respectés",
                            en: "Commitment & deadlines you can trust"
                        },
                        icon: "lucide-calendar-clock",
                        text: {
                            fr: "Ici, la parole donnée compte. On respecte le périmètre prévu, les échéances annoncées, et on t’évite les allers-retours qui n’en finissent pas. Tu peux planifier ton temps en confiance.",
                            en: " We mean what we say. We stick to scope, meet deadlines, and avoid endless feedback loops. You can plan your time with confidence."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 4,
                        name: {
                            fr: "Évolution et rôle renforcé",
                            en: "Growth & elevated roles"
                        },
                        icon: "lucide-arrow-up",
                        text: {
                            fr: "Tu veux plus qu’un ticket à résoudre ? Chez Diligency, ton implication est remarquée. Selon ton niveau et ta régularité, tu peux rapidement devenir référent projet ou lead sur une mission.",
                            en: " Looking for more than just tickets to close? At Diligency, your involvement is seen. Depending on your level and consistency, you can quickly take on lead roles or become a project owner."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 5,
                        name: {
                            fr: "Projets à forte valeur",
                            en: "High-impact projects"
                        },
                        icon: "lucide-star",
                        text: {
                            fr: "Pas de tâche sans impact. Chaque mission est pensée pour créer une vraie valeur côté client : que ce soit une interface, une API ou une IA embarquée, tout est orienté impact et utilité.",
                            en: "No throwaway tasks. Every mission is designed to create real client value, whether it’s an interface, an API, or embedded AI, it’s all about utility and impact."
                        }
                    }
                ]
            }
        ],
        footer: [
            {
                _key: uuidv4(),
                type: "footer-b",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Postuler",
                        en: "Apply"
                    }
                ],
                text: {
                    fr: "Tu te reconnais dans notre vision ? Tu veux faire partie d’un cercle exigeant mais humain ? Envoie ton profil (LinkedIn, mini-portfolio ou lien GitHub) à recrutement@diligency.com Ou réserve un appel rapide pour un premier échange informel.",
                    en: "Do you identify with our vision? Do you want to be part of a demanding yet human circle? Send your profile (LinkedIn, mini-portfolio, or GitHub link) to recrutement@diligency.com, or book a quick call for an informal first chat."
                },
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:calendar",
                        text: {
                            fr: "Réserver un appel découverte",
                            en: "Book a discovery call"
                        },
                        link: "/contact",
                        type: "cta-tertiary"
                    }
                ]
            }
        ]
    },
    {
        _key: uuidv4(),
        page: "agency",
        slug: "hub",
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Le Hub Diligency",
                    en: "The Diligency Hub"
                }
            ],
            subtitle: [{
                _key: uuidv4(),
                fr: "Bienvenue dans notre Hub. Ici, on partage nos idées, nos méthodes, nos démonstrations. Le Hub, c’est notre façon d’éduquer, de structurer le flou digital, et de vous donner les clés pour décider intelligemment. C’est aussi une preuve de ce que nous savons faire : transformer du savoir en action concrète, lisible, utile.",
                en: "Welcome to our Hub. Here, we share our ideas, methods, and demonstrations. The Hub is our way of educating, clarifying the digital chaos, and giving you the tools to make smart decisions. It’s also a demonstration of what we can do: turning knowledge into tangible, clear, and useful action."
            }],
            background: "/images/hero/ecommerce.jpg"
        },
        blocks: [
            {
                _key: uuidv4(),
                template: "template-c",
                title: [
                    {
                        _key: uuidv4(),
                        fr: "Ce que vous y trouverez",
                        en: "What you’ll find there"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Nous diffusons des contenus utiles : analyses sur la création digitale, cas concrets de projets, guides téléchargeables et démonstrations ciblées. Une manière claire et accessible de valoriser notre approche en IA, UX/UI et performance.",
                        en: "We share useful content: analyses on digital creation, real project case studies, downloadable guides, and targeted demonstrations. A clear and accessible way to showcase our approach to AI, UX/UI, and performance."
                    }
                ],
                image: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
                items: [
                    {
                        _key: uuidv4(),
                        id: 1,
                        icon: "lucide:file-text",
                        name: {
                            fr: "Articles d’analyse sur la création de sites et d'applications",
                            en: "Analysis articles on website and application creation"
                        },
                        text: {
                            fr: "Des contenus stratégiques qui explorent les bonnes pratiques, les tendances et les choix techniques pour concevoir des sites web et applications performants",
                            en: "Strategic content exploring best practices, trends, and technical choices to design high-performance websites and applications"
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 2,
                        icon: "lucide:briefcase-business",
                        name: {
                            fr: "Études de cas issues de projets réels ou fictifs",
                            en: "Case studies from real or hypothetical projects"
                        },
                        text: {
                            fr: "Des retours d’expérience détaillés illustrant notre méthodologie, nos solutions concrètes et les résultats obtenus sur des projets variés.",
                            en: "Detailed feedback illustrating our methodology, concrete solutions, and results obtained on various projects."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 3,
                        icon: "lucide:download",
                        name: {
                            fr: "Mini-guides pratiques et checklists à télécharger",
                            en: "Practical mini-guides and checklists to download"
                        },
                        text: {
                            fr: "Des ressources prêtes à l’emploi pour vous aider à structurer vos projets, vérifier les étapes clés et gagner en autonomie rapidement.",
                            en: "Ready-to-use resources to help structure your projects, check key steps, and gain autonomy quickly."
                        }
                    },
                    {
                        _key: uuidv4(),
                        id: 4,
                        icon: "lucide:bot",
                        name: {
                            fr: "Démonstrations concrètes en IA, design et performance",
                            en: "Hands-on demonstrations in AI, design, and performance"
                        },
                        text: {
                            fr: "Des exemples visuels et interactifs de notre approche technique et créative, mettant en lumière nos expertises en intelligence artificielle, UX/UI et optimisation.",
                            en: "Visual and interactive examples of our technical and creative approach, highlighting our expertise in AI, UX/UI, and optimization."
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
                        fr: "Pourquoi ce n’est pas un blog classique",
                        en: "Why This Isn’t a Typical Blog"
                    }
                ],
                subtitle: [
                    {
                        _key: uuidv4(),
                        fr: "Pas de contenu vide pour le SEO. Chaque article vise à élever votre compréhension du digital, à clarifier vos décisions, et à vous faire gagner du temps – même si vous ne travaillez pas avec nous.",
                        en: "No empty content for SEO. Each article aims to enhance your understanding of digital topics, clarify your decisions, and save you time even if you’re not working with us."
                    }
                ],
                cta: [
                    {
                        _key: uuidv4(),
                        icon: "lucide:arrow-right",
                        link: "/article",
                        text: {
                            fr: "Lire les derniers articles",
                            en: "Read the Latest Articles"
                        },
                        type: "cta-link"
                    }
                ],
                items: [],
                action: "getArticleList"
            }
        ]
    }
]
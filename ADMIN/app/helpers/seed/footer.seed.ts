import { v4 as uuidv4 } from "uuid";
export const FOOTER_SEED = [
    {
        _key: uuidv4(),
        title: {
            "fr": "Simplifiez la gestion, maximisez l’efficacité",
            "en": "Simplify management, maximize efficiency"
        },
        subtitle: {
            "fr": "Propulsez votre entreprise vers de nouveaux sommets grâce à des solutions innovantes, des conseils d’experts et un accompagnement sur mesure.",
            "en": "Propel your business to new heights with innovative solutions, expert guidance, and personalized support."
        },
        cta: [
            {
                "_key": uuidv4(),
                "icon": "lucide:mail",
                "text": {
                    "fr": "Nous contacter",
                    "en": "Contact us"
                },
                "link": "/contact",
                "type": "cta-tertiary"
            },
            {
                "_key": uuidv4(),
                "icon": "lucide:arrow-right",
                "text": {
                    "fr": "soumettre un projet",
                    "en": "Apply a project"
                },
                "link": "/application",
                "type": "cta-link"
            }
        ],
        email: "contact@diligency.fr",
        vision: "Diligency vision",
        city: "60 rue François Ier",
        postalCode: "75008, Paris",
        social: [
            {
                "_key": uuidv4(),
                name: "facebook",
                icon: "lucide:facebook",
                link: "/facebook"
            },
            {
                "_key": uuidv4(),
                name: "linkedin",
                icon: "lucide:linkedin",
                link: "/linkedin"
            },
            {
                "_key": uuidv4(),
                name: "Instagram",
                icon: "lucide:instagram",
                link: "/instagram"
            }
        ]
    }
]
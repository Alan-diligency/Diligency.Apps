import { v4 as uuidv4 } from "uuid";
export const APPLICATION_SEED = [
    {
        _key: uuidv4(),
        step: "0",
        title: {
            fr: "soumettre mon projet",
            en: "submit my application"
        },
        subtitle: {
            fr: "Partagez votre idée ou projet avec notre équipe d’experts. Nous vous accompagnons dans l’analyse, la conception et le développement de solutions digitales sur-mesure. Que ce soit pour une application, une plateforme ou un outil intelligent, soumettre votre projet est la première étape pour le concrétiser rapidement et efficacement.",
            en: "Share your idea or project with our team of experts. We support you in the analysis, design, and development of bespoke digital solutions. Whether it's an application, a platform, or an intelligent tool, submitting your project is the first step toward bringing it to life quickly and efficiently."
        },
        buttons: {
            next: {
                fr: "Commencez",
                en: "Start application"
            },
            previous: {
                fr: "NONE",
                en: "NONE"
            }
        },
        form: []
    },
    {
        _key: uuidv4(),
        step: "1",
        title: {
            fr: "Vostre projet",
            en: "Your project"
        },
        buttons: {
            next: {
                fr: "Suivant",
                en: "Next"
            },
            previous: {
                fr: "Précédent",
                en: "Previous"
            }
        },
        form: [
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "projectName",
                required: true,
                label: {
                    fr: "Nom du projet",
                    en: "Project name"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "projectType",
                required: true,
                label: {
                    fr: "Type du projet: Application mobile / Applcation web / etc...",
                    en: "Project type: Mobile apps / web apps / etc..."
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "projectDeadline",
                required: true,
                label: {
                    fr: "Délai souhaité: 1 mois / 2 mois / 3 mois",
                    en: "Desired deadline: 1 month / 2 months / 3 months"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextArea",
                field: "text",
                fieldKey: "projectDescription",
                required: true,
                label: {
                    fr: "Description",
                    en: "Description"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "Radio",
                field: "radio",
                label: {
                    fr: "Budget",
                    en: "Budget"
                },
                radio: [
                    {
                        _key: uuidv4(),
                        default: true,
                        fieldKey: "budget",
                        label: {
                            fr: "< 5000",
                            en: "< 5000"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: true,
                        fieldKey: "budget",
                        label: {
                            fr: "5000 - 10 000",
                            en: "5000 - 10 000"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: true,
                        fieldKey: "budget",
                        label: {
                            fr: "10 000 - 20 000",
                            en: "10 000 - 20 000"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: true,
                        fieldKey: "budget",
                        label: {
                            fr: "> 20 000",
                            en: "> 20 000"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                ]
            },
        ]
    },
    {
        _key: uuidv4(),
        step: "2",
        title: {
            fr: "Aspect techniques",
            en: "Technic aspect"
        },
        subtitle: {
            fr: "Aidez-nous à mieux comprendre les aspects techniques de votre projet. Même si vous n’êtes pas sûr de tout, partagez ce que vous imaginez : préférences technologiques, outils à connecter, ou besoins spécifiques. Cela nous permettra de vous guider avec justesse, dès le départ.",
            en: "Help us better understand the technical aspects of your project. Even if you're not sure about everything, share what you imagine: technological preferences, tools to connect, or specific needs. This will allow us to guide you accurately from the start."
        },
        buttons: {
            next: {
                fr: "Suivant",
                en: "Next"
            },
            previous: {
                fr: "Précedent",
                en: "Previous"
            }
        },
        form: [
            {
                _key: uuidv4(),
                type: "TextArea",
                field: "text",
                fieldKey: "techAspectDetails",
                required: true,
                label: {
                    fr: "Décrivez ici les éléments techniques ou fonctionnels que vous avez en tête.",
                    en: "Describe here the technical or functional elements you have in mind."
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "Check",
                field: "check",
                label: {
                    fr: "Fonctionnalités prévues",
                    en: "Planned features"
                },
                custom: {
                    fr: "Autre (précisez)",
                    en: "Other (precise)"
                },
                radio: [
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "fonctionnality",
                        label: {
                            fr: "Espace client",
                            en: "Customer area"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "fonctionnality",
                        label: {
                            fr: "Connexion utilisateur",
                            en: "User login"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "fonctionnality",
                        label: {
                            fr: "Paiement en ligne",
                            en: "Online payment"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "fonctionnality",
                        label: {
                            fr: "Automatisations ou IA",
                            en: "Automations or AI"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "red"
                    },
                ]
            },
            {
                _key: uuidv4(),
                type: "Radio",
                field: "check",
                label: {
                    fr: "Vous avez un cahier des charges ou une maquette ? Importez-le ici (PDF, image, etc.) ",
                    en: "Do you have a specification document or a mockup? Upload it here (PDF, image, etc.)"
                },
                radio: [
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "hasSpecificationDocument",
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        label: {
                            fr: "Oui",
                            en: "Yes"
                        },
                        errorColor: "red"
                    },
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "hasSpecificationDocument",
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        label: {
                            fr: "Non",
                            en: "No"
                        },
                        errorColor: "red"
                    }
                ]
            },
        ]
    },
    {
        _key: uuidv4(),
        step: "2",
        title: {
            fr: "Vos coordonnées",
            en: "Your contact details"
        },
        buttons: {
            next: {
                fr: "Suivant",
                en: "Next"
            },
            previous: {
                fr: "Précedent",
                en: "Previous"
            }
        },
        form: [
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "contactDetailsFullName",
                required: true,
                label: {
                    fr: "Prénom / Nom",
                    en: "Surname / Name"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "email",
                fieldKey: "contactDetailsEmail",
                required: true,
                label: {
                    fr: "Adresse e-mail",
                    en: "E-mail Address"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "email",
                fieldKey: "contactDetailsPhoneNumber",
                required: true,
                label: {
                    fr: "Téléphone",
                    en: "Phone number"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "contactDetailsBrandName",
                required: true,
                label: {
                    fr: "Nom de l’entreprise (ou organisation)",
                    en: "Organisation / brand name"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "contactDetailsCountry",
                required: true,
                label: {
                    fr: "Pays",
                    en: "Country"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },

            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "contactDetailsWebsite",
                required: false,
                label: {
                    fr: "Site web existant : URL",
                    en: "Existing website: URL"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "contactDetailsRole",
                required: false,
                label: {
                    fr: "Poste / Rôle dans l’entreprise : (CEO, CTO, chef de projet...)",
                    en: "Position / Role in the company: (CEO, CTO, Project Manager…)L"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
            {
                _key: uuidv4(),
                type: "TextArea",
                field: "text",
                fieldKey: "contactDetailsFreeMessage",
                required: false,
                label: {
                    fr: "Message libre",
                    en: "Free message"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "red"
            },
        ]
    }
]
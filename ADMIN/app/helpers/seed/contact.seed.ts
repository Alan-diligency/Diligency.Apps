import { v4 as uuidv4 } from "uuid";
export const CONTACT_SEED = [
    {
        _key: uuidv4(),
        title: [
            {
                "fr": "Prêt à avancer ? Parlons-en.",
                "en": "Ready to move forward? Let’s talk"
            }
        ],
        subtitle: [
            {
                fr: "Vous avez un projet, une idée ou un besoin à clarifier ? Nous sommes là pour challenger vos options, poser un cadre stratégique, ou simplement démarrer un échange. Diligency vous répond rapidement, avec précision et transparence.",
                en: "Got a project, an idea, or a challenge you need clarity on? We’re here to explore your options, define a strategic framework, or simply start a meaningful conversation. At Diligency, you get clear, fast and transparent responses, no fluff, just facts."
            }
        ],
        form: [
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "firstName",
                required: true,
                label: {
                    fr: "Nom",
                    en: "First Name"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "white"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "text",
                fieldKey: "lastName",
                required: true,
                label: {
                    fr: "Prénom",
                    en: "Last Name"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "white"
            },
            {
                _key: uuidv4(),
                type: "TextInput",
                field: "email",
                fieldKey: "email",
                required: true,
                label: {
                    fr: "E-mail",
                    en: "E-mail"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "white"
            },
            {
                _key: uuidv4(),
                type: "TextArea",
                field: "text",
                fieldKey: "message",
                required: true,
                label: {
                    fr: "Votre message",
                    en: "Your message"
                },
                error: {
                    fr: "ce champs est requis",
                    en: "this field is required"
                },
                errorColor: "white"
            },
            {
                _key: uuidv4(),
                type: "Radio",
                field: "radio",
                radio: [
                    {
                        _key: uuidv4(),
                        default: true,
                        fieldKey: "strategyCall",
                        label: {
                            fr: "Appel stratégique",
                            en: "Strategic call"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "white"
                    },
                    {
                        _key: uuidv4(),
                        default: false,
                        fieldKey: "discoveryCall",
                        required: false,
                        label: {
                            en: "Discovery call (Candidates/Public)",
                            fr: "Appel de découverte (Candidats/Public)"
                        },
                        error: {
                            fr: "ce champs est requis",
                            en: "this field is required"
                        },
                        errorColor: "white"
                    }
                ]
            },
        ],
    }
]
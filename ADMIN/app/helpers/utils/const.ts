
import { v4 as uuidv4 } from "uuid";
import type { ObjectOfFieldType } from "./interfaces";
export const DEFAULT_MENU_DATA = {
    "_id": "",
    "_key": uuidv4(),
    "description": {
        "en": "",
        "fr": ""
    },
    "icon": "lucide:circle",
    "key": "",
    "link": "/",
    "name": {
        "en": "",
        "fr": ""
    }
}

export const DEFAULT_FIELDS_DATA = {
    _key: uuidv4(),  // You can use a generated or fixed default key
    error: {
        en: "This field is required",  // Default error message in English
        fr: "Ce champ est requis",  // Default error message in French
    },
    errorColor: "red",  // Default color for error messages
    field: "",  // Default field name
    fieldKey: "",  // Default key for the field
    label: {
        en: "",  // Default label in English
        fr: "",  // Default label in French
    },
    required: false,  // Default value for required field
    type: "TextInput",  // Default input type
} as ObjectOfFieldType;

export const COLOR_TYPE = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray']
export const FIELD_TYPE = ["TextInput", "TextArea", "Check"]
export const INPUT_TYPE = ["text", "email"]
export const BOOLEAN_TYPE = [true, false]
import { useApplicationStore } from "~/stores/application.store";

export const useHumanizeForm = () => {
    const applicationStore = useApplicationStore();

    const HumanizeForm = (data: Record<string, any>) => {
        const map: Record<string, any> = {};
        const step = applicationStore.currentStep;
        const dataCollection = applicationStore._data[step];
        const lang = "en"
        Object.keys(data).forEach(key => {
            const keyParam = isGuidOrContainsGuid(data[key]) ? data[key] : key;

            if (!keyParam) return;
            let humanizedKey = findFieldKeyDeep(dataCollection, keyParam);
            if (keyParam && keyParam.includes("|") && isGuidOrContainsGuid(keyParam)) {
                const _keys = keyParam.split("|").filter((x: any) => x !== "");
                for (const k of _keys) {
                    const _foundKey = findFieldKeyDeep(dataCollection, k);
                    if (_foundKey) {
                        humanizedKey = _foundKey;
                        break;
                    }
                }
            }
            if (!humanizedKey) return
            let value = data[key];
            if (typeof value === "string") {
                // If value contains pipe-separated parts
                if (value.includes("|")) {
                    const parts = value.split("|").map(part => {
                        return isGuid(part) ? (findLabelDeep(dataCollection, part, lang) || part) : part;
                    });
                    value = parts.join("|");
                }
                // Single GUID
                else if (isGuid(value)) {
                    const humanizedValue = findLabelDeep(dataCollection, value, lang);
                    if (humanizedValue) value = humanizedValue;
                }
            }

            map[humanizedKey] = value;
        });
        return map;
    };


    return { HumanizeForm };
};


function findFieldKeyDeep(data: any, key: string): string | null {
    if (Array.isArray(data)) {
        for (const item of data) {
            const result = findFieldKeyDeep(item, key);
            if (result) return result;
        }
    } else if (typeof data === "object" && data !== null) {
        if (data._key === key && typeof data.fieldKey === "string") {
            return data.fieldKey;
        }

        for (const value of Object.values(data)) {
            const result = findFieldKeyDeep(value, key);
            if (result) return result;
        }
    }

    return null;
}

function findLabelDeep(data: any, key: string, lang = "en"): string | null {
    if (typeof data === "object" && data !== null) {
        if (data._key === key && data.label) {
            return data.label[lang] ?? Object.values(data.label)[0];
        }

        for (const value of Object.values(data)) {
            const result = findLabelDeep(value, key, lang);
            if (result) return result;
        }

    } else if (Array.isArray(data)) {
        for (const item of data) {
            const result = findLabelDeep(item, key, lang);
            if (result) return result;
        }
    }

    return null;
}

import { defineStore } from "pinia"

import { GET_CONTACT_GROQ } from "~/utils/groq/contact.groq"
import { useLoaderStore } from "./loader.store"

export const useContactStore = defineStore("contact-store", () => {
    const loader = useLoaderStore()
    const data = ref()

    const GetData = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_CONTACT_GROQ)
            data.value = result[0];
            loader.Hide()
            return result[0]

        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            loader.Hide()
        }
    }

    return {
        GetData,
        data
    }
})
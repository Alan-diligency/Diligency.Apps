import { defineStore } from "pinia"

import { GET_FOOTER_FOR_CONTACT, GET_FOOTER_GROQ } from "~/utils/groq/footer.groq"
import { useLoaderStore } from "./loader.store"

export const useFooterStore = defineStore("footer-store", () => {
    const loader = useLoaderStore()
    const data = ref()

    const GetData = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_FOOTER_GROQ)
            data.value = result[0];
            return result[0]

        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            loader.Hide()
        }
    }

    const GetDataForContactAsync = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_FOOTER_FOR_CONTACT)
            data.value = result[0];
            return result[0]

        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            loader.Hide()
        }
    }

    return {
        GetData,
        GetDataForContactAsync,
        data
    }
})
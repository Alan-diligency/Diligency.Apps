import { defineStore } from "pinia"

import { GET_FOUR_LAST_ARTICLE_GROQ, GET_LAST_ARTICLE_GROQ } from "~/utils/groq/article.groq"
import { useLoaderStore } from "./loader.store"


export const useArticleStore = defineStore("article-store", () => {
    const loader = useLoaderStore()

    const GetFourLastArticle = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_FOUR_LAST_ARTICLE_GROQ)
            loader.Hide()
            return result

        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            loader.Hide()
        }
    }

    const GeLastArticle = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_LAST_ARTICLE_GROQ)
            loader.Hide()
            return result

        } catch (err) {
            console.error("Error fetching article data:", err)
        }
        finally {
            loader.Hide()
        }
    }

    return {
        GetFourLastArticle,
        GeLastArticle
    }
})
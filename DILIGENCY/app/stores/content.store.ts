import { GET_CONTENT_GROQ_BY_SLUG } from "~/utils/groq/content.groq";
import type { ContentType } from "~/utils/types";
import { useLoaderStore } from "./loader.store";


export const useContentStore = defineStore('content-store', () => {
    const contentData = ref<any>()
    const loader = useLoaderStore()

    const GetContentAsync = async (page: any, slug: any): Promise<ContentType | ContentType[]> => {
        try {
            loader.Show()
            var result = await SANITY_CLIENT.fetch(GET_CONTENT_GROQ_BY_SLUG(page, slug)) as Array<any>
            return result.find(x => x.slug == slug)
            // if (!params && slug) {
            //     var result = await SANITY_CLIENT.fetch(GET_CONTENT_GROQ_BY_TYPE(slug)) as Array<any>
            //     return result.find(x => x._id == slug)
            // }

            // if (params && slug) {
            //     var result = await SANITY_CLIENT.fetch(GET_CONTENT_GROQ_BY_TYPE(params)) as Array<any>
            //     return result.find(x => x.id == slug)

            // }
            // return [] GET_CONTENT_GROQ_BY_SLUG

        } catch (err) {
            console.error("Error fetching menu data:", err)
            return [] as any
        } finally {
            loader.Hide()
        }
    }

    const SetContentData = (data: any) => {
        contentData.value = data
    }

    return {
        contentData,
        GetContentAsync,
        SetContentData

    }
});

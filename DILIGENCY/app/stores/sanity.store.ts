import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { MAIL_STATE_ENUM } from "~/utils/types/enum";

export const useSanityStore = defineStore("sanity-store", () => {
    const isPosting = ref(false)
    const PostAsync = async (data: any, type: string) => {
        isPosting.value = true
        try {
            return await SANITY_CLIENT.createOrReplace({
                _id: uuidv4(),
                _type: type,
                state: MAIL_STATE_ENUM.UNREAD,
                ...data
            });
        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            isPosting.value = false
        }
    }

    return {
        isPosting,
        PostAsync
    }
})
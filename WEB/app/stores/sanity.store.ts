import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { APPLICATION_STATE_ENUM, MAIL_STATE_ENUM } from "~/utils/types/enum";
import { useFileStore } from "./fileStore";

export const useSanityStore = defineStore("sanity-store", () => {
    const fileStore = useFileStore()
    const isPosting = ref(false)

    const PostMailAsync = async (data: any, type: string) => {
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

    const PostApplicationAsync = async (data: any, type: string) => {
        isPosting.value = true
        try {
            if (fileStore.files.length > 0) {
                await fileStore.uploadAllAsync("/api/file/upload")
                data.files = fileStore.uploadedFilesId;
            }
            return await SANITY_CLIENT.createOrReplace({
                _id: uuidv4(),
                _type: type,
                state: APPLICATION_STATE_ENUM.UNREAD,
                ...data
            });
        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            isPosting.value = false
            fileStore.clearFiles()
        }
    }

    return {
        isPosting,
        PostMailAsync,
        PostApplicationAsync
    }
})
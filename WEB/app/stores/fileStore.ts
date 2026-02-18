import { defineStore } from 'pinia';
import type { Ref } from 'vue';

export interface FileUploadResponse {
    success: boolean;
    documentId: string;
}

export const useFileStore = defineStore('file-store', () => {
    const files: Ref<File[]> = ref([])
    const uploadedFilesId: Ref<string[]> = ref([])

    const addFile = (file: File) => {
        files.value.push(file)
    }

    const removeFile = (index: number) => {
        files.value.splice(index, 1)
    }

    const clearFiles = () => {
        files.value = []
        uploadedFilesId.value = []
    }

    const uploadAllAsync = async (api: string) => {
        uploadedFilesId.value = []

        for (const file of files.value) {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', file.name)
            try {
                const res: FileUploadResponse = await $fetch(api, {
                    method: 'POST',
                    body: formData
                })
                uploadedFilesId.value = [...uploadedFilesId.value, res.documentId]
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }

        return uploadedFilesId;
    }


    return { files, uploadedFilesId, addFile, removeFile, uploadAllAsync, clearFiles }
})

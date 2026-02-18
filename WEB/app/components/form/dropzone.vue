<template>
    <div ref="dropzoneElement"
        class="dropzone bg-secondary-400 border-2 border-secondary-500 hover:bg-secondary-500 transition-all duration-250 relative">
        <iframe v-if="uploadedFiles.length" :src="CreateBlob(uploadedFiles[uploadedFiles.length - 1])"
            class="absolute inset-0 w-full h-full pointer-events-none"></iframe>
    </div>
</template>

<script setup lang="ts">
import Dropzone from 'dropzone'
import { onMounted, ref } from 'vue'
import { useFileStore } from '~/stores/fileStore'

const dropzoneElement = ref<HTMLDivElement | null>(null)
const uploadedFiles = ref<any[]>([])
const fileStore = useFileStore()

const deleteText = {
    fr: "Supprimer",
    en: "Delete"
}

const dragAndDropText = {
    fr: "Glissez-déposez votre PDF ici ou cliquez",
    en: "Drag & drop your PDF here or click"
}
const CreateBlob = (file: any) => {
    return URL.createObjectURL(file);
}

onMounted(() => {
    if (!dropzoneElement.value) return

    const dz = new Dropzone(dropzoneElement.value, {
        url: '#',
        maxFilesize: 10,
        acceptedFiles: 'application/pdf',
        addRemoveLinks: true,
        init: function () {

            const messageEl = this.element.querySelector(".dz-message");
            if (messageEl) {
                messageEl.classList.add("text-tertiary/80");
            }

            const { locale } = useI18n()
            this.options.dictRemoveFile = deleteText[locale.value]
            this.options.dictDefaultMessage = dragAndDropText[locale.value]
            this.on('addedfile', function (file: any) {
                const preview = file.previewElement;
                const filename = preview.querySelector(".dz-filename");
                const removeLink = preview.querySelector(".dz-remove");
                if (filename) {
                    filename.classList.add(
                        "text-green-500"
                    )
                }
                if (removeLink) {
                    removeLink.classList.add(
                        "text-red-500"
                    )
                }
                uploadedFiles.value.push(file);
                fileStore.addFile(file)
            })
            this.on('removedfile', function (file: any) {
                uploadedFiles.value = uploadedFiles.value.filter(f => f.upload.uuid !== file.upload.uuid);
            })
        }
    })
})
</script>

<style scoped>
.dropzone {
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    position: relative;
}
</style>

import type { MailContentType } from "~/helpers/utils/interfaces";
export interface MailFormType {
    from: string
    to: string
    subject: string,
    html: string
}

export const useMailStore = defineStore('mail-store', () => {
    const toastStore = useToastStore()

    const isSending = ref(false)
    const modalData = ref<any>(null)

    const sendMailData = ref<any>(null)
    const form = reactive<MailFormType>({
        from: 'Diligency',
        to: '',
        subject: '',
        html: ''
    })

    const SetModalData = (data: any) => {
        modalData.value = data
    }

    const resetForm = () => {
        form.to = ''
        form.from = ''
        form.subject = ''
        form.html = ''
    }

    const SendMail = async (content: MailContentType) => {
        isSending.value = true

        try {
            await $fetch('/api/mail/send', {
                method: 'POST',
                body: content
            })
            toastStore.showToast("Evoyé avec succès!", "success")
        } catch (err) {
            toastStore.showToast("Echeck d'envoie!", "error")
        } finally {
            isSending.value = false
        }
    }

    return {
        SendMail,
        SetModalData,
        resetForm,
        modalData,
        isSending,
        sendMailData,
        form
    }
});
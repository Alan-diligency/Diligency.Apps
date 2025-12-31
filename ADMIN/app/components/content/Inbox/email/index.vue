<template>
    <div :class="['p-0 border-gray-300 relative', data.length ? 'border-1' : '']">
        <div v-if="data.length" class="overflow-x-auto">
            <table class="min-w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-800 text-white">
                        <th v-for="key in visibleKeys" :key="key" class="px-4 py-2 font-semibold capitalize">
                            <span v-if="key !== 'state'">
                                {{ key }}
                            </span>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in data" :key="i"
                        :class="['border-b border-gray-200  cursor-pointer hover:bg-gray-100', row.state == MAIL_STATE_ENUM.UNREAD ? ' bg-gray-200' : '']">
                        <td v-for="key in visibleKeys" :key="key" class="px-4 py-2 h-25">
                            <span v-if="typeof row[key] === 'boolean' && key != 'state'">
                                {{ row[key] ? "Yes" : "No" }}
                            </span>
                            <span v-if="typeof row[key] !== 'boolean' && key != 'state'">
                                {{ row[key] }}
                            </span>
                        </td>
                        <td class="px-2 flex flex-col gap-2 items-center p-2">
                            <button type="button" @click="showModal('view', row._id)"
                                class="cursor-pointer inline-flex text-orange-800 items-center rounded-full justify-center bg-orange-200 hover:bg-gray-800 hover:text-white h-8 aspect-square">
                                <Icon name="lucide:info" />
                                <span class="sr-only">Info</span>
                            </button>
                            <button type="button" @click="showModal('send', row._id)"
                                class="cursor-pointer inline-flex text-green-800 items-center justify-center   bg-green-200 hover:bg-green-800 hover:text-white rounded-full   w-8 h-8">
                                <Icon name="lucide:redo-2" />
                                <span class="sr-only">Send</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="mail-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/70">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                    <div class="leading-relaxed text-body">
                        <div class="w-full flex gap-2 items-center">
                            <ContentInboxEmailModalSendEmail v-if="action === 'send'" />
                            <ContentInboxEmailModalViewEmail v-if="action === 'view'" />
                        </div>

                    </div>
                </div>
                <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                    <button :disabled="sendingMail" type="button" @click="doSave()" v-if="action != 'view'"
                        class="cursor-pointer text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none flex items-center justify-center gap-1">
                        <Icon name="lucide:loader" class="animate animate-spin" size="25" v-if="sendingMail" />
                        {{ sendingMail ? 'envoye en cours' : 'Envoyer' }}
                    </button>
                    <button type="button" @click="respondMail()" v-if="action == 'view'"
                        class="cursor-pointer text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Répondre
                    </button>
                    <button type="button" @click="hideModal()"
                        class="cursor-pointer text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    </div>
    <LoaderStaticLoader :is-loading="!data.length" />
</template>

<script lang="ts" setup>
import { Modal } from 'flowbite'
import { MAIL_STATE_ENUM } from '~/helpers/utils/enum'
import type { MailContentType } from '~/helpers/utils/interfaces'
import { useMailStore } from '~/stores/mail.store'

const mailStore = useMailStore()
const sanityStore = useSanityStore()

const sendingMail = computed(() => mailStore.isSending)

const action = ref<'view' | 'send'>('view')
const modal = ref<any>(null)
const data = ref<any[]>([])
const lastDataId = ref<string>("")

// fields to exclude
const exclude = [
    "_createdAt",
    "_id",
    "_rev",
    "_type",
    "_updatedAt",
]

// compute visible keys once data is loaded
const visibleKeys = computed(() => {
    if (!data.value.length) return []
    return Object.keys(data.value[0]).filter(k => !exclude.includes(k))
})

onMounted(async () => {
    data.value = await sanityStore.GetGenericData("email", "_createdAt", "desc")
    const $el = document.getElementById("mail-modal");
    const options = {
        placement: "center",
        backdrop: "static",
        closable: false,
    };
    const instanceOptions = { id: "mail-modal", override: true };
    modal.value = new Modal($el!, options as any, instanceOptions);
})

const hideModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    modal.value?.hide();
};

const respondMail = () => {
    showModal('send', lastDataId.value)
}

const showModal = (act: 'view' | 'send', id: string) => {
    hideModal()
    lastDataId.value = id
    action.value = act
    const _data = {
        action: act,
        data: data.value.find(d => d._id === id)
    }
    mailStore.SetModalData(_data)
    modal.value?.show();
};

const doSave = async () => {
    // Implement save logic if needed
    const form = mailStore.form
    let mail: MailContentType = {
        from: form.from,
        to: form.to,
        subject: form.subject,
        html: form.html
    }
    await mailStore.SendMail(mail)
    hideModal()
}

const sendEmail = async () => {
    const mail: MailContentType = {
        from: 'Diligency <your@email.com>',
        to: 'naoj8lius@gmail.com',
        subject: 'Hello from Nuxt 4',
        html: '<h1>Email sent using Store 🚀</h1>'
    }

    await mailStore.SendMail(mail)
}
</script>

<template>
    <div class="w-full space-y-4">
        <h2 class="text-lg font-bold">Send Email</h2>
        <div>
            <label class="block text-sm font-medium mb-1">To</label>
            <input v-model="form.to" type="email" placeholder="Email" class="w-full border p-2 h-10"
                :class="form.to ? 'bg-green-50' : 'bg-gray-100'" />
        </div>
        <div>
            <label class="block text-sm font-medium mb-1">Subject</label>
            <input v-model="form.subject" type="text" placeholder="Subject" class="w-full border p-2 h-10" />
        </div>
        <div>
            <label class="block text-sm font-medium mb-1">Message</label>
            <textarea v-model="form.html" placeholder="Write your message here"
                class="w-full border p-2  min-h-32"></textarea>
        </div>
    </div>
</template>

<script lang="ts" setup>

const mailStore = useMailStore()
const data = computed(() => mailStore.modalData?.data)
const { form } = storeToRefs(mailStore)

watch(
    () => data.value?.email,
    (newValue) => {
        form.value.to = newValue
        form.value.subject = ''
        form.value.html = ''
    },
    { immediate: true }
)

onMounted(() => {
    form.value.to = data.value.email
})

</script>

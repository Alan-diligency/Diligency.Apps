<template>
    <div class="flex flex-col gap-2 w-full">
        <div class="bg-gray-200 p-2 w-full cursor-pointer hover:bg-gray-100">
            <div class="font-bold w-full">
                Date:
            </div>
            <div class="w-full">
                {{ formatDate(data?._createdAt) }} - {{ formatRelativeDate(data?._createdAt) }}
            </div>
        </div>
        <div class="bg-gray-200 p-2 w-full cursor-pointer hover:bg-gray-100">
            <div class="font-bold">
                Email:
            </div>
            <div>
                {{ data?.email }}
            </div>
        </div>
        <div class="bg-gray-200 p-2 w-full cursor-pointer hover:bg-gray-100">
            <div class="font-bold">
                Name:
            </div>
            <div>
                {{ data?.firstName }} {{ data?.lastName }}
            </div>
        </div>
        <div class="bg-gray-200 p-2 w-full cursor-pointer hover:bg-gray-100">
            <div class="font-bold">
                Message:
            </div>
            <div>
                {{ data?.message }}
            </div>
        </div>
        <div class="bg-gray-200 p-2 w-full cursor-pointer hover:bg-gray-100">
            <div class="font-bold">
                Strategy:
            </div>
            <div>
                {{ data?.strategyCall ? "Appel strategique" : "Appel candidature" }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const mailStore = useMailStore()
const data = computed(() => mailStore.modalData?.data)

const formatDate = (date: string) => {
    return new Date(date).toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const formatRelativeDate = (date: string) => {
    const diff = Date.now() - new Date(date).getTime()
    const minutes = Math.floor(diff / 60000)
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes} min ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} h ago`
    const days = Math.floor(hours / 24)
    return `${days} days ago`
}
</script>
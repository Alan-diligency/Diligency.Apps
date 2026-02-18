<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'
import { useAuthStore } from '~/stores/auth.store'
import { useUserStore } from '~/stores/user.store'
const authStore = useAuthStore()
const userStore = useUserStore()

const schema = z.object({
    email: z.email('Invalid email'),
    password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

const router = useRouter()
type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: 'a_a@diligency.com',
    password: 'G7!rQm9$ZL@K4x#E2Wf8'
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    const result = await authStore.loginAsync(event.data)
    if (result) {
        router.push("/")
    }
}

const users = ref([])
onMounted(async () => {
    users.value = await userStore.GetUsersASync() as any
})
</script>

<template>
    <div class=" h-full w-full flex items-center justify-center">
        <div class="rounded-sm bg-gray-100">
            <UForm :schema="schema" :state="state" class="space-y-2  w-82 px-4" @submit="onSubmit">
                <div class="flex items-center justify-center w-full py-5 rounded-full">
                    <img class="h-20 aspect-square rounded-full" src="/images/logo/android-chrome-512x512.png" alt="">
                </div>

                <div class="p-1">
                    <div class="space-y-5 bg-gray-500/20 p-4 border-t rounded-t-lg">
                        <UFormField label="Email" name="email">
                            <UInput v-model="state.email" class="w-full" />
                        </UFormField>

                        <UFormField label="Password" name="password">
                            <UInput v-model="state.password" class="w-full" type="password" />
                        </UFormField>

                        <UButton :loading="authStore.isLoading" type="submit" loading-icon="i-lucide-loader" block
                            class="cursor-pointer">
                            Connexion
                        </UButton>
                    </div>
                </div>
            </UForm>
        </div>
    </div>
</template>

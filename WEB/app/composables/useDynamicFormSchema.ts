import type { ComputedRef, Ref } from 'vue'
import { computed } from 'vue'
import { z, ZodObject } from 'zod'

export const useDynamicFormSchema = (
    formFields: Ref<any[]>,
    locale = 'en'
): { schema: ComputedRef<ZodObject<any>> } => {
    const schema = computed(() => {
        const shape: Record<string, any> = {}

        formFields.value.forEach(item => {
            let rule: any = z.string()

            // Check/Radio are optional
            if (['Check', 'Radio', 'File'].includes(item.type)) {
                rule = z.string().optional()
            } else {
                // required or optional
                if (item.required) {
                    rule = rule.min(1, item.error?.[locale] ?? 'Required field')
                } else {
                    rule = z.string().optional()
                }

                // special type handling
                if (item.field === 'email') rule = z.email('Invalid email')
                if (item.field === 'number') rule = z.coerce.number()
            }

            shape[item._key] = rule
        })

        return z.object(shape)
    })

    return { schema }
}

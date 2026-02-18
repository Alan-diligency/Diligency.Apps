import type { TableColumn } from "@nuxt/ui"
import FormsBlock from '~/components/forms/blocks/index.vue'
import FormsHero from '~/components/forms/hero/index.vue'
import FormsString from '~/components/forms/string/index.vue'

import { useSorter } from "~/composable/useSorter"
import type { ContentRow } from "../types/content-row"
const { OrderHeroItems } = useSorter()
export const columns: TableColumn<ContentRow>[] = [
    {
        accessorKey: 'key',
        header: 'Field'
    },
    {
        accessorKey: 'value',
        header: 'Value',
        cell: ({ row }) => {
            const key = row.original.key
            const value = row.original.value
            if (typeof value === 'string') {
                return h(FormsString, {
                    field: key,
                    value: value
                })
            }

            if (key === 'hero') {
                return h(FormsHero, {
                    field: key,
                    value: value
                })
            }

            if (key === "blocks") {
                return h(FormsBlock, {
                    field: key,
                    value: value
                })
            }

            return h('pre', JSON.stringify(value, null, 2))
        }
    }
]

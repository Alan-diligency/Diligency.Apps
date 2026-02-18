import type { TableColumn } from "@nuxt/ui"

import type { ContentRow } from "../types/content-row"
export const columns: TableColumn<ContentRow>[] = [
    {
        accessorKey: 'firstName',
        header: 'Nom'
    },
    {
        accessorKey: 'lastName',
        header: 'Prénom'
    },
    {
        accessorKey: 'role',
        header: 'Rôle'
    },


    {
        accessorKey: 'action',
        header: 'Actions',
        cell: ({ row }) => {
            const key = row.original.key
            if (import.meta.client) {
                alert("Need an update")
            }
        }
    }
]

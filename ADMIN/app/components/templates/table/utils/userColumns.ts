import type { TableColumn } from "@nuxt/ui"

import type { ContentRow } from "../types/content-row"
export const userColumns: TableColumn<ContentRow>[] = [
    {
        accessorKey: 'firstName',
        header: 'First Name'
    },
    {
        accessorKey: 'lastName',
        header: 'lastName',
    },
    {
        accessorKey: 'role',
        header: 'Role',
    }
]

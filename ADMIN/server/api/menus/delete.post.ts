import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { ids } = body as { ids: string[] }

    if (!ids || !ids.length) {
        return { success: false, error: 'No IDs provided' }
    }

    try {
        // Fetch all menus to identify parents and children
        const menus: any[] = await SANITY_CLIENT.fetch(
            '*[_type == "menu"]{ _key, _id, children[]{_key,_id} }'
        )

        const topLevelMenus = menus.filter(m => ids.includes(m._key))
        const childKeys = ids.filter(k => menus.some(m => m.children?.some((c: any) => c._key === k)))

        // 1️⃣ Delete top-level menus
        const deletedParents = await Promise.all(topLevelMenus.map((m: any) => SANITY_CLIENT.delete(m._id)))

        // 2️⃣ Delete children menus via patch
        const deletedChildren: any[] = []
        for (const key of childKeys) {
            const parent = menus.find(m => m.children?.some((c: any) => c._key === key))
            if (!parent) continue

            const result = await SANITY_CLIENT
                .patch(parent._id)
                .unset([`children[_key=="${key}"]`])
                .commit()
            deletedChildren.push(result)
        }

        return {
            success: true,
            data: { deletedParents, deletedChildren }
        }

    } catch (error) {
        console.error(error)
        return {
            success: false,
            error
        }
    }
})

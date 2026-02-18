import { API_RESPONSE } from '~/helpers/dto/reponses/api.response'
import { MenuType } from '~/helpers/entities/menu'
import { SANITY_CLIENT } from '~/helpers/sanity.client'

export default defineEventHandler(async (event): Promise<API_RESPONSE<MenuType>> => {
    const query = getQuery(event)
    const key = query._key as string

    const menus: any[] = await SANITY_CLIENT.fetch(`
    *[_type == "menu"]{
      ...,
      children[]{
        ...,
        children[]{
          ...
        }
      }
    }
  `)
    function findByKey(nodes: any[], key: string): any | null {
        for (const node of nodes) {
            if (node._key === key) return node
            if (node.children?.length) {
                const found = findByKey(node.children, key)
                if (found) return found
            }
        }
        return null
    }

    const result: MenuType = findByKey(menus, key)

    return {
        success: true,
        data: result
    }
})

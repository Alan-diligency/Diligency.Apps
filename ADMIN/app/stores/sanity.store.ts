import type { DiligencyMenuType } from "~/data/menu/diligency.menu.type";
import { GET_MENU_LIST_GROQ } from "~/helpers/groq/menu.groq";
import { GET_PAGE_LIST_GROQ } from "~/helpers/groq/page.groq";
import { SANITY_CLIENT } from "~/helpers/sanity/sanity.client";
import { seedData } from "~/helpers/seed";
import { seedMenu } from "~/helpers/seed/seed.helper";
import { replaceSpecialCharsWithRandomNumber } from "~/helpers/utils";

export const useSanityStore = defineStore('sanity-store', () => {

    const toastStore = useToastStore()

    const isSeeding = ref(false)
    const seedStep = ref("")
    const isLoading = ref(false)
    const isMainPageLoading = ref(false)

    const GetPagesDataAsync = async () => {
        try {
            isMainPageLoading.value = true
            return await SANITY_CLIENT.fetch(GET_PAGE_LIST_GROQ)
        }
        catch (err) {
            toastStore.showToast("Error getting Page data", "error")
        } finally {
            isMainPageLoading.value = false
        }
    }

    const GetGenericData = async (type: string, orderField: string = "", direction: "asc" | "desc" = "asc") => {
        try {
            isMainPageLoading.value = true
            const orderPart = orderField ? `| order(${orderField} ${direction})` : ""

            const query = `
                *[_type == $type] ${orderPart}
            `
            return await SANITY_CLIENT.fetch(query, { type })
        }
        catch (err) {
            console.error("Seeding error:", err)
        } finally {
            isMainPageLoading.value = false
        }
    }

    const SeedDataAsync = async () => {
        try {
            isSeeding.value = true
            console.log("Starting Sanity seeding...");

            for (const item of seedData) {
                //seedStep.value = `seeding ${item.name} with id: ${item.name} ...`
                await seedMenu(item) //seedContact(item)  //seedMenu(item) //seedOneItem(item); //seedContent(item, "article") //
            }
            isSeeding.value = false
            console.log("Sanity seeding completed!");
        } catch (err) {
            console.error("Seeding error:", err);
        }
        finally {
            isSeeding.value = false
            seedStep.value = "finished seeding"
        }
    };

    const GetMenuListAsync = async (): Promise<DiligencyMenuType[]> => {
        try {
            return await SANITY_CLIENT.fetch(GET_MENU_LIST_GROQ)
        } catch (err) {
            console.error("Error fetching menu data:", err)
            return []
        }
    }

    const CreateMenuAsync = async (data: any) => {
        try {
            isLoading.value = true;
            const documentId = data._id ?? crypto.randomUUID(); // use existing ID or generate a new one
            return await SANITY_CLIENT.createOrReplace({
                _id: documentId,
                _type: "menu",
                key: replaceSpecialCharsWithRandomNumber(data.nameFr),
                name: {
                    fr: data.nameFr,
                    en: data.nameEn
                },
                icon: data.icon,
                link: data.link,
                description: {
                    fr: data.descriptionFr,
                    en: data.descriptionEn
                },
                children: data.children ?? []
            })
        } catch (err) {
            console.error("Error saving menu:", err)
            throw err
        }
        finally {
            isLoading.value = false;
        }
    }

    const UpdateDataAsync = async (data: any, section: any = null) => {
        isLoading.value = true;
        if (!data?._id) {
            console.error("Missing _id for update");
            isLoading.value = false;
            return null;
        }

        try {
            // ================================
            // CASE 1 ➜ Update ROOT DOCUMENT
            // ================================
            if (section === null || section === 'parent') {
                const { _id, ...fieldsToUpdate } = data;

                return await SANITY_CLIENT
                    .patch(_id)
                    .set(fieldsToUpdate)
                    .commit({ returnDocuments: true });
            }

            // =========================================================
            // CASE 2 ➜ Update CHILD INSIDE children[] (sub-menu)
            // data._id = sub-menu id (menu-agence-about)
            // data.parentId MUST exist → id doc parent (ex: menu-agence)
            // =========================================================
            if (section === 'child') {
                if (!data.parentId) {
                    console.error("Missing parentId for children update");
                    return null;
                }

                const parentId = data.parentId;
                const childId = data._id;

                // Remove metadata to avoid overwriting the whole object
                const updatedFields = { ...data };
                delete updatedFields._id;
                delete updatedFields.parentId;

                // Create the GROQ patch path dynamically
                const patchPath = Object.fromEntries(
                    Object.entries(updatedFields).map(([key, value]) => [
                        `children[_id == "${childId}"].${key}`,
                        value
                    ])
                );

                return await SANITY_CLIENT
                    .patch(parentId)
                    .set(patchPath)
                    .commit({ returnDocuments: true });
            }

        } catch (err) {
            console.error("Update error:", err);
            return null;
        } finally {
            isLoading.value = false;
        }
    };

    const CreateDataAsync = async (data: any, section: any = null) => {
        isLoading.value = true;

        try {
            if (section === null || section === 'parent') {
                return await SANITY_CLIENT.create(data);
            }

            if (section === 'child') {
                if (!data.parentId || !data.child) {
                    console.error("Missing parentId or child data");
                    return null;
                }

                const parentId = data.parentId;
                const child = {
                    _id: crypto.randomUUID(),
                    ...data.child
                };

                return await SANITY_CLIENT
                    .patch(parentId)
                    .setIfMissing({ form: [] })
                    .append('form', [child])
                    .commit({ returnDocuments: true });
            }

        } catch (err) {
            console.error("Create error:", err);
            return null;
        } finally {
            isLoading.value = false;
        }
    };


    const deleteDataAsync = async (documentId: string) => {
        try {
            isLoading.value = true
            return await SANITY_CLIENT.delete(documentId)
        } catch (err) {
            console.error('Error deleting document:', err)
        } finally {
            isLoading.value = false
        }
    }

    const deleteFormDataByKeyAsync = async (parentId: string, key: string) => {
        try {
            isLoading.value = true
            return await SANITY_CLIENT
                .patch(parentId)
                .unset([`form[_key=="${key}"]`])
                .commit({ returnDocuments: true })
        } catch (err) {
            console.error('Error deleting document:', err)
        } finally {
            isLoading.value = false
        }
    }

    // begin
    const CreateChildDataAsync = async (data: any) => {
        try {
            isLoading.value = true;
            if (!data.parentId || !data.field) {
                console.error("Missing parentId or child data");
                return null;
            }

            const parentId = data.parentId;
            const _data = {
                _id: crypto.randomUUID(),
                ...data.field
            };

            return await SANITY_CLIENT
                .patch(parentId)
                .setIfMissing(data.ifMissing)
                .append(data.subSection, [_data])
                .commit({ returnDocuments: true });
        } catch (err) {
            toastStore.showToast("CreateChildDataAsync", "error");
        } finally {
            isLoading.value = false;
        }
    }

    const deleteDataAndUnsetByKeyAsync = async (payload: any) => {
        try {
            isLoading.value = true
            return await SANITY_CLIENT
                .patch(payload.parentId)
                .unset(payload.unset)
                .commit({ returnDocuments: true })
        } catch (err) {
            toastStore.showToast("CreateChildDataAsync", "error");
        } finally {
            isLoading.value = false;
        }
    }

    const UpdateChildFieldsDataAsync = async (data: any) => {
        if (!data.parentId) {
            toastStore.showToast("Missing parentId for children update", "error");
            return null;
        }

        try {
            isLoading.value = true;
            const parentId = data.parentId;
            const formItem = data.field; // the object from the form array
            const formKey = formItem._key;

            if (!formKey) {
                toastStore.showToast("Missing _key for form item", "error");
                return null;
            }

            // Remove metadata that should not be patched
            const updatedFormItem = { ...formItem };
            delete updatedFormItem._key;
            delete updatedFormItem.parentId;
            delete updatedFormItem._id;

            const result = await SANITY_CLIENT
                .patch(parentId)
                .set({
                    [`form[_key == "${formKey}"]`]: updatedFormItem
                })
                .commit({ returnDocuments: true });

            return result;


        } catch (err) {
            toastStore.showToast("UpdateChildFieldsDataAsync", "error");
            return null;
        } finally {
            isLoading.value = false;
        }
    }

    const AddChildDataAsync = async (payload: any) => {
        try {
            isLoading.value = true
            var result = await SANITY_CLIENT
                .patch(payload.parentId)
                .setIfMissing(payload.setIfMissing) //{form: []}
                .append(payload.append, [payload.data]) //'form'
                .commit({ returnDocuments: true });

            toastStore.showToast(`Created successfully: ${payload.data._key}`, "success");
            return result;

        } catch (err) {
            toastStore.showToast(`Failed creating: ${payload.data._key}`, "error");
            return null;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isMainPageLoading,
        isLoading,
        isSeeding,
        seedStep,
        GetMenuListAsync,
        CreateMenuAsync,
        SeedDataAsync,
        UpdateDataAsync,
        deleteDataAsync,
        deleteFormDataByKeyAsync,
        CreateDataAsync,
        CreateChildDataAsync,
        UpdateChildFieldsDataAsync,
        GetPagesDataAsync,
        GetGenericData,


        //=======
        deleteDataAndUnsetByKeyAsync,
        AddChildDataAsync,
    }
});

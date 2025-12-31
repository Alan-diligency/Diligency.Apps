import { SANITY_CLIENT } from "~/helpers/sanity/sanity.client";
import { AGENCY_SEED } from "~/helpers/seed/agency.seed";
import { APPLICATION_SEED } from "~/helpers/seed/application.seed";
import { ARTICLE_SEED } from "~/helpers/seed/article.seed";
import { CONTACT_SEED } from "~/helpers/seed/contact.seed";
import { FOOTER_SEED } from "~/helpers/seed/footer.seed";
import { HOME_SEED } from "~/helpers/seed/home.seed";
import { MENU_SEED } from "~/helpers/seed/menu.seed";
import { seedApplication, seedArticle, seedContact, seedFooter, seedMenu, seedPages } from "~/helpers/seed/seed.helper";
import { SERVICE_SEED } from "~/helpers/seed/service.seed";

export const useSeedStore = defineStore('seed-store', () => {

    const toastStore = useToastStore()

    const isSeeding = ref(false)
    const seedSteps = ref<string[]>([])

    const SeedAsync = async () => {
        try {
            isSeeding.value = true
            seedSteps.value = []
            console.log("Starting Sanity seeding...");
            await deleteAllDocs();

            for (const item of MENU_SEED) {
                seedSteps.value.push(`Seeding MENU-${item.name?.fr ?? item.name?.en}...`)
                await seedMenu(item)
            }

            for (const item of CONTACT_SEED) {
                seedSteps.value.push(`Seeding CONTACT...`)
                await seedContact(item)
            }

            for (const item of FOOTER_SEED) {
                seedSteps.value.push(`Seeding FOOTER...`)
                await seedFooter(item)
            }

            for (const item of ARTICLE_SEED) {
                seedSteps.value.push(`Seeding ARTICLE-${item?._key}...`)
                await seedArticle(item)
            }

            for (const item of [...HOME_SEED, ...SERVICE_SEED, ...AGENCY_SEED]) {
                seedSteps.value.push(`Seeding PAGES-${item?._key}...`)
                await seedPages(item)
            }

            for (const item of APPLICATION_SEED) {
                seedSteps.value.push(`Seeding APPLICATION-${item?._key}...`)
                await seedApplication(item)
            }

            isSeeding.value = false
            seedSteps.value.push("Sanity seeding completed!");
        } catch (err) {
            console.error("Seeding error:", err);
        }
        finally {
            isSeeding.value = false
            seedSteps.value.push("finished seeding")
        }
    };

    const deleteAllDocs = async () => {
        // Define the types you want to delete
        const typesToDelete = ['page', 'article', 'footer', 'contact', 'menu', 'application', 'home'];

        // Construct a Groq query to fetch only documents of the specified types
        const query = `*[_type in ${JSON.stringify(typesToDelete)}]`;

        try {
            // Fetch documents of the specified types
            const documents = await SANITY_CLIENT.fetch(query);

            // Loop through each document and delete it
            for (const doc of documents) {
                await SANITY_CLIENT.delete(doc._id);
                seedSteps.value.push(`Deleted: ${doc._id}`);
            }


        } catch (err) {
            console.error("Error while deleting documents:", err);
        }
        finally {
            console.log("Documents of specified types have been deleted.");
        }
    }


    return {
        isSeeding,
        seedSteps,
        SeedAsync,
    }
});


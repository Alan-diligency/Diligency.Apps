import { AGENCY_SEED } from "./agency.seed";
import { CONTACT_SEED } from "./contact.seed";
import { FOOTER_SEED } from "./footer.seed";
import { HOME_SEED } from "./home.seed";
import { MENU_SEED } from "./menu.seed";
import { SERVICE_SEED } from "./service.seed";

export const seedData = [
    ...MENU_SEED,
    ...CONTACT_SEED,
    ...FOOTER_SEED,

    ...HOME_SEED,
    ...AGENCY_SEED,
    ...SERVICE_SEED,

]
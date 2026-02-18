import { defineEventHandler, readBody } from "h3";
import { SANITY_CLIENT } from "~/helpers/sanity.client";
import { DeleteParam } from "../../../app/helpers/dto/requests";

export default defineEventHandler(async (event) => {
    const body = await readBody(event) as DeleteParam;

    if (!body._key) {
        return { success: false, message: "Missing id" };
    }

    try {
        const result = await SANITY_CLIENT.delete(body._key);
        return { success: true, data: result }
    } catch (err) {
        console.error(err);
        return { success: false, message: "Delete failed" };
    }
});

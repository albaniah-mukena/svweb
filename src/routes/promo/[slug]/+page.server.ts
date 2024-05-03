import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { mukena } from "./data";

export const load = (async ({ params }) => {
	if (mukena[0].slug !== params.slug) throw error(404);
	return { mukena };
}) satisfies PageServerLoad;

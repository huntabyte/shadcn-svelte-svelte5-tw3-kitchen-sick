import fs from "node:fs";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async () => {
	const blocks = fs
		.readdirSync(import.meta.dirname)
		.filter((f) => !f.startsWith("+"));
	return { blocks };
};

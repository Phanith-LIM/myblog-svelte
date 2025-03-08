import { error } from '@sveltejs/kit';
export const prerender = true;
import { languageTag } from '$lib/paraglide/runtime.js';

export async function load({ params }) {
    let language = languageTag();
    try {
        const post = await import(`../../posts/${language}/${params.slug}.md`);
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.log(e);
        throw error(404, { message: `Could not find ${params.slug}`, code: 'NOT_FOUND', id: params.slug });
    }
}

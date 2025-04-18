export const prerender = true;

export async function load({ params }) {
    try {
        const post = await import(`../../posts/${params.slug}.md`);
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw new Error(`Post not found: ${params.slug}`);
    }
}

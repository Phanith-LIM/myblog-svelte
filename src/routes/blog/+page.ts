import type { PostModel } from '$lib/types.js';
export const prerender = true;

export async function load({ fetch }) {
    const response = await fetch('/api/posts');
    const posts: PostModel[] = await response.json();
    return { posts };
}
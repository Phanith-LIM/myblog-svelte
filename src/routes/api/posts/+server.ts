import type { PostModel } from '$lib/types.ts';
import { json } from '@sveltejs/kit';
export const prerender = true;
import { languageTag } from '$lib/paraglide/runtime';

async function getPosts(): Promise<PostModel[]> {
    let posts: PostModel[] = [];
    let language = languageTag();
    let paths: Record<string, any> = {};

    // Handle each language separately
    if (language === 'en') {
        paths = import.meta.glob('/src/posts/en/*.md', { eager: true });
    } else if (language === 'kh') {
        paths = import.meta.glob('/src/posts/kh/*.md', { eager: true });
    } else {
        paths = import.meta.glob('/src/posts/default/*.md', { eager: true });
    }
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');
        
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata: any = file.metadata;
            const post: PostModel = { ...metadata, slug };
            
            if (post.published) {
                posts.push(post);
            }
        }
    }
    posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}

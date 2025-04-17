export type Categories = 'sveltekit' | 'svelte';

// Use interface to define the shape of Post
export interface PostModel {
    title: string;
    date: string;
    slug: string;
    categories: Categories[];
    description: string;
    published: boolean;
    thumbnail?: string;
}

export interface PostYear {
    year: 'string';
    posts: PostModel[];
}
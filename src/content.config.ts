import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
    schema: z.object({
        title: z.string(),
        author: z.string().optional(),
        date: z.string().optional(),
        journal: z.string().optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
        order: z.number().default(999),
    }),
});

const talks = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        event: z.string().optional(),
        external_url: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

const news = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/news",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        type: z.enum([
            "Announcement",
            "Events & Activities",
            "Celebration",
            "Congratulations",
        ]),
        image: z.string().optional(),
    }),
});

const posts = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/posts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
    }),
});

const teaching = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/teaching" }),
    schema: z.object({
        title: z.string(),
        institution: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().url().optional(),
    }),
});

const bio = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/bio",
    }),
    schema: z.object({}),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
    }),
});

const cv = defineCollection({
    loader: glob({ pattern: "cv.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        experience: z.array(z.object({
            role: z.string(),
            institution: z.string(),
            period: z.string(),
            description: z.string(),
        })).optional(),
        education: z.array(z.object({
            degree: z.string(),
            institution: z.string(),
            period: z.string(),
            thesis: z.string().optional(),
            description: z.string().optional(),
        })).optional(),
    }),
});

const team = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
    schema: z.object({
        name: z.string(),

        group: z.enum([
            "director",
            "graduate",
            "undergraduate",
            "affiliate",
            "alumni",
        ]),

        position: z.string(),

        affiliation: z.string(),

        pronouns: z.string().optional(),

        office: z.string().optional(),

        photo: z.string(),

        summary: z.string().optional(),

        research: z.array(z.string()).optional(),

        education: z.array(z.string()).optional(),

        current_projects: z.array(z.string()).optional(),

        selected_publications: z.array(
            z.object({
                citation: z.string(),
                url: z.string().optional(),
            })
        ).optional(),

        awards: z.array(z.string()).optional(),

        email: z.string().optional(),

        website: z.string().optional(),

        scholar: z.string().optional(),

        orcid: z.string().optional(),

        github: z.string().optional(),

        linkedin: z.string().optional(),

        cv: z.string().optional(),

        featured: z.boolean().default(false),

        order: z.number().default(999),
    }),
});

const research = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
    schema: z.object({
        title: z.string(),

        summary: z.string(),

        status: z.enum([
            "Planning",
            "Data Collection",
            "Analysis",
            "Writing",
            "Published",
            "Completed",
        ]),

        researchers: z.array(z.string()).optional(),

        featured: z.boolean().default(false),

        order: z.number().default(999),
    }),
});

export const collections = {
    publications,
    talks,
    posts,
    projects,
    cv,
    teaching,
    team,
    research,
    bio,
    news
};
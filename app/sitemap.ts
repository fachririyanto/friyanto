import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://friyanto.vercel.app";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];
}

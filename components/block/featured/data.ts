import type { FeaturedPost } from "./types";

export const data: FeaturedPost[] = [
    {
        "id": "mataparser",
        "title": "Mataparser",
        "meta": "AI Product - MVP",
        "description": "Mataparser is my first AI product project, currently in an experimental phase. It is a service that extracts content from documents and images into structured JSON, providing an API that's easy to integrate into existing platforms.",
        "url": "https://mataparser.cloud",
        "featured": "/images/portfolio/mataparser.png",
        "tech": ["NextJS", "Shadcn", "Better-Auth", "FastAPI", "LiteLLM", "MCP", "PostgreSQL", "Docker"],
        "text_demo": "Website:"
    },
    {
        "id": "genai-virtual-assistant",
        "title": "GenAI Virtual Assistant",
        "meta": "AI Product - MVP",
        "description": "GenAI Virtual Assistant is a platform to build an AI assistant that helps with tasks like answering questions based on knowledges you provide. You can embed it into your website or app as a chat widget as you can see in the bottom-right of this website. Currently in an experimental phase.",
        "url": "https://ai.mataparser.cloud",
        "featured": "/images/portfolio/genai-virtual-assistant.png",
        "tech": ["ReactJS", "Shadcn", "Laravel", "MinIO", "FastAPI", "Celery", "Redis", "PostgreSQL + Pgvector", "Langchain", "Retrieval-Augmented Generation (RAG)", "Docker"],
        "text_demo": "Platform:"
    },
];
import type { OpenSourcePost } from "./types";

export const data: OpenSourcePost[] = [
    {
        "id": "fastapi-auth",
        "title": "FastAPI Auth",
        "meta": "Open Source",
        "description": "Authentication using FastAPI (Python). Use PostgreSQL as the database and React for frontend.",
        "url": "https://github.com/fachririyanto/fastapi-auth",
        "featured": "/images/portfolio/fastapi-auth.png",
        "tech": ["Python", "FastAPI", "PostgreSQL", "React", "Tailwind", "Shadcn"],
        "text_demo": "Source Code:"
    },
    {
        "id": "keycloak-sso-app",
        "title": "Keycloak SSO App",
        "meta": "Open Source",
        "description": "A simple application that demonstrates how to use Keycloak for Single Sign-On (SSO) authentication. Frontend using React and backend available with FastAPI and Elysia framework.",
        "url": "https://github.com/fachririyanto/keycloak-sso-app",
        "featured": "",
        "tech": ["Keycloak", "React", "FastAPI", "Elysia", "Docker"],
        "text_demo": "Source Code:"
    },
    {
        "id": "db-in-docker",
        "title": "Database in Docker",
        "meta": "Open Source",
        "description": "Setup database to running in Docker. Available for PostgreSQL, MySQL, MongoDB, and Redis.",
        "url": "https://github.com/fachririyanto/db-in-docker",
        "featured": "",
        "tech": ["Docker", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
        "text_demo": "Source Code:"
    },
    {
        "id": "docker-php",
        "title": "Docker PHP",
        "meta": "Open Source",
        "description": "Docker setup for running PHP (8.0) environment (Apache, Debian).",
        "url": "https://github.com/fachririyanto/docker-php",
        "featured": "",
        "tech": ["Docker", "PHP", "MySQL", "Apache", "Linux"],
        "text_demo": "Source Code:"
    }
];
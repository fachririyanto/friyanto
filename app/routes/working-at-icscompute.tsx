import type { MetaFunction } from "@remix-run/node";
import Metadata from "~/@data/meta.json";

import { Link } from "@remix-run/react";
import Header from "~/components/blocks/header";
import Footer from "~/components/blocks/footer";

import PressReleaseData from "~/@data/press-release.json";

export const meta: MetaFunction = () => {
    return [
        { title: `Working at ICS Compute - ${Metadata.title}` },
        { name: "description", content: `The story when I was working at ICS Compute from January 29, 2024 until now.` },
    ];
};

export default function WorkingAtICSCompute() {
    return (
        <main>
            <Header />

            <section className="py-20">
                <div className="container">
                    <header className="max-w-[720px]">
                        <h1 className="font-georgia font-medium text-[48px] leading-[1] md:text-[64px]">
                            Working at ICS Compute
                        </h1>
                        <p className="mt-12 text-lg leading-relaxed">
                            After almost 10 years worked at BINUS Digital, <Link to="https://binus.ac.id" target="_blank" className="border-b border-black font-semibold">BINUS University</Link>. Now I work as Front End Developer at <Link to="https://www.icscompute.com" target="_blank" className="border-b border-black font-semibold">ICS Compute</Link>, AWS Partner of The Year 2024, focus on developing their Generative AI product, <Link to="https://redpumpkin.ai" target="_blank" className="border-b border-black font-semibold">Redpumpkin.AI</Link>.
                        </p>
                    </header>
                </div>
            </section>

            <section className="container">
                <div className="h-px border-t"></div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-[720px]">
                        <p className="mb-12 text-lg leading-relaxed">
                            From January 29, 2024 &mdash; Present.
                        </p>
                        <h3 className="mb-1 text-xl font-semibold">// Work 01.</h3>
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Redpumpkin.Ai Websites</h2>
                        <p className="text-lg leading-relaxed">
                            I build all Redpumpkin.Ai websites from scratch, there are <Link to="https://redpumpkin.ai" target="_blank" className="border-b border-black font-semibold">redpumpkin.ai</Link>, <Link to="https://aica.redpumpkin.ai" target="_blank" className="border-b border-black font-semibold">aica.redpumpkin.ai</Link>, and <Link to="https://aiap.redpumpkin.ai" target="_blank" className="border-b border-black font-semibold">aiap.redpumpkin.ai</Link>.
                            My role in this project included everything from designing UI/UX, developing the website using NextJS and TailwindCSS, to deploying the website on AWS Lightsail.
                        </p>
                    </div>
                    <figure className="mt-8 p-2 bg-white shadow-base rounded-lg">
                        <img loading="lazy" src="/images/working-at-icscompute/redpumpkin-website.png" alt="Redpumpkin.Ai Website" />
                    </figure>
                </div>
            </section>

            <section className="container">
                <div className="h-px border-t"></div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-[720px]">
                        <h3 className="mb-1 text-xl font-semibold">// Work 02.</h3>
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Redpumpkin AI Coding Assistant Press Release</h2>
                        <p className="text-lg leading-relaxed">
                            Create a simple and clear demo on how to build a landing page using the Redpumpkin AI Coding Assistant, and present the demo in front of the journalists.
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-8 md:flex-nowrap">
                        <div className="w-full md:w-1/2">
                            <figure className="p-2 bg-white shadow-base rounded-lg">
                                <img loading="lazy" src="/images/working-at-icscompute/press-release.jpg" alt="Press Release" />
                            </figure>
                        </div>
                        <div className="w-full pt-8 md:pt-0 md:pl-12 md:w-1/2 self-center">
                            <ul className="flex flex-wrap gap-8 items-center">
                                {PressReleaseData.map((item, key) => (
                                    <li key={key}>
                                        <Link to={item.url} target="_blank" className="border-b border-black font-semibold">
                                            <img loading="lazy" src={item.logo} alt={item.title} className="max-w-[128px] max-h-[48px] " />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="h-px border-t"></div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-[720px]">
                        <h3 className="mb-1 text-xl font-semibold">// Work 03.</h3>
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Redpumpkin GenAI Virtual Assistant Prototype with AWS Bedrock</h2>
                        <p className="text-lg leading-relaxed">
                            I took the initiative to create a prototype of a GenAI virtual assistant app that can help answer the customer questions based on the knowledge base, with no knowledge about the GenAI app development before (like prompting, RAG, and about LLM it self). It took me a month to build the prototype.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed">
                            I build the prototype using NextJS, TailwindCSS, Supabase as a database and vector database (with pgvector plugin), Python (FastAPI) and Langchain for RAG, and AWS Bedrock for managed embedding models and LLMs.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed">
                            I handled almost everything, including the prototype idea, UI/UX design, database schema, front-end coding (with backend support from the Supabase SDK), RAG implementation, integration with AWS Bedrock, as well as deploying the front end to Vercel and the RAG API to AWS EC2, setup with tmux and nginx.
                        </p>
                    </div>
                    <figure className="mt-8 p-2 bg-white shadow-base rounded-lg">
                        <img loading="lazy" src="/images/working-at-icscompute/genai-supabase.png" alt="Supabase" />
                    </figure>
                </div>
            </section>

            <section className="container">
                <div className="h-px border-t"></div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-[720px]">
                        <h3 className="mb-1 text-xl font-semibold">// Work 04.</h3>
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Achieved AWS GenAI Competency</h2>
                        <p className="text-lg leading-relaxed">
                            Contributed to the team's achievement of AWS GenAI Competency by creating a GenAI application prototype and writing documentation on the app, Responsible AI, and more.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed">
                            Pak Budhi&apos;s (Our Founder &amp; CEO) post on LinkedIn:<br />
                            <Link
                                target="_blank"
                                className="border-b border-black font-semibold break-all"
                                to="https://www.linkedin.com/feed/update/urn:li:activity:7240212411373248514/">
                                https://www.linkedin.com/feed/update/urn:li:activity:7240212411373248514/
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="h-px border-t"></div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="max-w-[720px]">
                        <h3 className="mb-1 text-xl font-semibold">// Work 05.</h3>
                        <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">ID Card/KTP OCR using AWS Textract</h2>
                        <p className="text-lg leading-relaxed">
                            Build a API service to extract ID Card/KTP information from image using Python (FastAPI) and AWS Textract for customer PoC purpose.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed">The service would generated a JSON response like this:</p>
                    </div>
                    <div className="mt-8 p-6 bg-[#f7f7f7] rounded-lg">
                        <pre>
                            {JSON.stringify({
                                "nik": "",
                                "nama": "",
                                "tempat_lahir": "",
                                "tanggal_lahir": "",
                                "jenis_kelamin": "",
                                "gol_darah": "",
                                "alamat": "",
                                "rt": "",
                                "rw": "",
                                "kelurahan": "",
                                "kecamatan": "",
                                "agama": "",
                                "status_perkawinan": "",
                                "pekerjaan": "",
                                "kewarganegaraan": "",
                                "berlaku_sampai": "",
                                "tanggal_pembuatan": ""
                            }, null, 4)}
                        </pre>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
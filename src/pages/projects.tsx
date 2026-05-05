import sisCursos from "../assets/logoProjetos/logosis.png";
import marianaRodrigues from "../assets/logoProjetos/logomariana.png";
import autou from "../assets/logoProjetos/logoautou.png";
import pc_catalogo from "../assets/logoProjetos/logopc_catalogo.png";
import { FaGithub } from "react-icons/fa";

type Project = {
  image?: string;
  title: string;
  description: string;
  stack: string;
  link?: string;
  linkGithub?: string;
};

/* Cores das tecnologias*/
const techStyles: Record<string, { light: string; dark: string }> = {
  react: {
    light: "bg-cyan-100 text-cyan-800 border-cyan-300",
    dark: "bg-cyan-900/40 text-cyan-200 border-cyan-600/50",
  },
  typescript: {
    light: "bg-blue-100 text-blue-800 border-blue-300",
    dark: "bg-blue-900/40 text-blue-200 border-blue-600/50",
  },
  javascript: {
    light: "bg-yellow-100 text-yellow-800 border-yellow-300",
    dark: "bg-yellow-900/40 text-yellow-200 border-yellow-600/50",
  },
  tailwind: {
    light: "bg-sky-100 text-sky-800 border-sky-300",
    dark: "bg-sky-900/40 text-sky-200 border-sky-600/50",
  },
  node: {
    light: "bg-green-100 text-green-800 border-green-300",
    dark: "bg-green-900/40 text-green-200 border-green-600/50",
  },
  python: {
    light: "bg-indigo-100 text-indigo-800 border-indigo-300",
    dark: "bg-indigo-900/40 text-indigo-200 border-indigo-600/50",
  },
  django: {
    light: "bg-emerald-100 text-emerald-800 border-emerald-300",
    dark: "bg-emerald-900/40 text-emerald-200 border-emerald-600/50",
  },
  postgresql: {
    light: "bg-slate-100 text-slate-800 border-slate-300",
    dark: "bg-slate-900/40 text-slate-200 border-slate-600/50",
  },
  mongodb: {
    light: "bg-lime-100 text-lime-800 border-lime-300",
    dark: "bg-lime-900/40 text-lime-200 border-lime-600/50",
  },
  docker: {
    light: "bg-blue-100 text-blue-700 border-blue-300",
    dark: "bg-blue-950/40 text-blue-200 border-blue-600/50",
  },
  redis: {
    light: "bg-red-100 text-red-800 border-red-300",
    dark: "bg-red-900/40 text-red-200 border-red-600/50",
  },
  keycloak: {
    light: "bg-zinc-100 text-zinc-800 border-zinc-300",
    dark: "bg-zinc-900/40 text-zinc-200 border-zinc-600/50",
  },
  ai: {
    light: "bg-violet-100 text-violet-800 border-violet-300",
    dark: "bg-violet-950/60 text-violet-200 border-violet-600/50",
  },
  rest: {
    light: "bg-slate-100 text-slate-700 border-slate-300",
    dark: "bg-slate-800/80 text-slate-200 border-slate-600/60",
  },
  default: {
    light: "bg-slate-100 text-slate-600 border-slate-300",
    dark: "bg-slate-800/80 text-slate-300 border-slate-600/50",
  },
};

function normalizeTechKey(raw: string): string {
  const t = raw.trim().toLowerCase().replace(/\s+/g, " ");
  const aliases: Record<string, string> = {
    "node.js": "node",
    nodejs: "node",
    tailwindcss: "tailwind",
    "tailwind css": "tailwind",
    postgres: "postgresql",
    postgresql: "postgresql",
    ts: "typescript",
    js: "javascript",
    py: "python",
    "api rest": "rest",
    rest: "rest",
    http: "rest",
    ia: "ai",
    "inteligencia artificial": "ai",
  };
  return aliases[t] ?? t;
}

function getTechClass(raw: string, isDark: boolean): string {
  const key = normalizeTechKey(raw);
  const found = techStyles[key] ?? techStyles.default;
  return isDark ? found.dark : found.light;
}

const projects: Project[] = [
  {
    image: sisCursos,
    title: "SIS Cursos",
    description:
      "Sistema completo de cursos online com inscricao, pagamento, aulas e certificado.",
    stack: "Python, Django, PostgreSQL, Docker",
    link: "https://www.siscursos.com.br",
    linkGithub: "https://github.com/brunocoelhosi/School-Management",
  },
  {
    image: marianaRodrigues,
    title: "Mariana Rodrigues - Psicóloga",
    description:
      "Landing page com foco em psicologia infantil para captação de pacientes.",
    stack: "React, TypeScript, TailwindCSS",
    link: "https://psico-marianarodrigues.vercel.app/",
    linkGithub: "https://github.com/brunocoelhosi/psico-marianarodrigues",
  },
  {
    image: pc_catalogo,
    title: "Catálogo de Produtos - Marketplace",
    description:
      "Gerenciamento dos produtos do Catálogo do Marketplace, garantindo organização e controle centralizado. Fornecendo informações dos produtos disponíveis aos sellers e consumidores.",
    stack: "Python, FastAPI, MongoDB, Docker, IA, Redis, Keycloak",
    linkGithub: "https://github.com/brunocoelhosi/pc-catalogo",
  },
  {
    image: autou,
    title: "Email Classifier",
    description:
      "Classificador automático de e-mails que utiliza técnicas de Processamento de Linguagem Natural (NLP) e Inteligência Artificial para categorizar e sugerir respostas automáticas para e-mails recebidos.",
    stack: "Python, OpenAI, Pytest",
    linkGithub: "https://github.com/brunocoelhosi/Email_Classifier-AutoU",
    link: "https://email-classifier-autou-pe6k.onrender.com/",
  },
];

type ProjectsProps = {
  isDark: boolean;
};

export function Projects({ isDark }: ProjectsProps) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <h2
          className={`text-2xl font-semibold tracking-tight md:text-3xl ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Projetos desenvolvidos
        </h2>
        <span
          className={`rounded-full border px-3 py-1 text-xs ${
            isDark
              ? "border-slate-700 bg-slate-900 text-slate-300"
              : "border-slate-300 bg-white text-slate-600"
          }`}
        >
          {projects.length} projetos
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${
              isDark
                ? "border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/30 hover:border-cyan-400/40"
                : "border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:shadow-md"
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className={`flex h-40 items-center justify-center text-sm ${
                  isDark
                    ? "bg-slate-800/70 text-slate-300"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                Preview em desenvolvimento
              </div>
            )}

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p
                  className={` text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div
                className="flex flex-wrap content-start items-center gap-2"
                role="list"
                aria-label="Tecnologias usadas"
              >
                {project.stack.split(",").map((raw, index) => {
                  const label = raw.trim();
                  return (
                    <span
                      key={`${label}-${index}`}
                      role="listitem"
                      className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ${getTechClass(
                        label,
                        isDark,
                      )}`}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      isDark
                        ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                        : "bg-sky-700 text-white hover:bg-sky-600"
                    }`}
                  >
                    Ver projeto
                  </a>
                ) : null}
                {project.linkGithub ? (
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                      isDark
                        ? "border-slate-700 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
                        : "border-slate-300 text-slate-700 hover:border-sky-400 hover:text-sky-700"
                    }`}
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;

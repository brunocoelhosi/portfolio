import sisCursos from "../assets/logoProjetos/logosis.png";
import marianaRodrigues from "../assets/logoProjetos/logomariana.png";
import autou from "../assets/logoProjetos/logoautou.png";
import { FaGithub } from "react-icons/fa";

type Project = {
  image?: string;
  title: string;
  description: string;
  stack: string;
  link?: string;
  linkGithub?: string;
};

/** Cores aproximadas às marcas oficiais; variantes light/dark (tema vem de isDark, não de classe `dark:`). */
const techStyles: Record<string, { light: string; dark: string }> = {
  react: {
    light: "bg-[#61DAFB]/15 text-[#087ea4] border-[#61DAFB]/50",
    dark: "bg-[#61DAFB]/20 text-[#99e6fa] border-[#61DAFB]/45",
  },
  typescript: {
    light: "bg-[#3178C6]/12 text-[#235a97] border-[#3178C6]/40",
    dark: "bg-[#3178C6]/25 text-[#9dc6f5] border-[#3178C6]/45",
  },
  javascript: {
    light: "bg-[#F7DF1E]/35 text-[#3e3e0a] border-[#E8D000]/60",
    dark: "bg-[#F7DF1E]/20 text-[#f5e6a0] border-[#F7DF1E]/40",
  },
  tailwind: {
    light: "bg-[#06B6D4]/12 text-[#0c7490] border-[#06B6D4]/40",
    dark: "bg-[#06B6D4]/20 text-[#7ce8f7] border-[#06B6D4]/40",
  },
  node: {
    light: "bg-[#339933]/12 text-[#1f5c1f] border-[#339933]/45",
    dark: "bg-[#339933]/22 text-[#8fdf8f] border-[#339933]/50",
  },
  python: {
    light: "bg-[#3776AB]/12 text-[#1e4a70] border-[#3776AB]/40",
    dark: "bg-[#3776AB]/25 text-[#8ec5ed] border-[#3776AB]/45",
  },
  django: {
    light: "bg-[#092E20]/10 text-[#092E20] border-[#0c4c32]/50",
    dark: "bg-[#0d3d28]/50 text-[#6ee7a8] border-[#1a7a4a]/50",
  },
  postgresql: {
    light: "bg-[#336791]/12 text-[#1f4560] border-[#336791]/40",
    dark: "bg-[#336791]/30 text-[#9ec5e8] border-[#336791]/50",
  },
  mongodb: {
    light: "bg-[#47A248]/12 text-[#2d6a2f] border-[#47A248]/50",
    dark: "bg-[#47A248]/25 text-[#a8e0ab] border-[#47A248]/50",
  },
  docker: {
    light: "bg-[#2496ED]/12 text-[#0d5a9e] border-[#2496ED]/45",
    dark: "bg-[#2496ED]/22 text-[#9fd2fc] border-[#2496ED]/50",
  },
  redis: {
    light: "bg-[#DC382D]/10 text-[#8b1f1a] border-[#DC382D]/45",
    dark: "bg-[#DC382D]/22 text-[#f0a4a0] border-[#DC382D]/50",
  },
  keycloak: {
    light: "bg-[#EDEDED] text-[#3E444A] border-[#4D4D4D]/40",
    dark: "bg-[#2b2b2b] text-[#d4d4d4] border-[#5c5c5c]/50",
  },
  /** IA genérico (não vinculado a um logo único) */
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
    title: "Catálogo de Produtos - Marketplace",
    description:
      "Gerenciamento dos produtos do Catálogo do Marketplace, garantindo organização e controle centralizado. Fornecendo informações dos produtos disponíveis aos sellers e consumidores.",
    stack: "Python, MongoDB, Docker, IA, Redis, Keycloak",
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
                        : "bg-sky-600 text-white hover:bg-sky-500"
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

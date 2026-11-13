import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import f1 from "@/assets/finops-1.jpg";
import f2 from "@/assets/finops-2.jpg";
import f3 from "@/assets/finops-3.jpg";
import f4 from "@/assets/finops-4.jpg";
import d1 from "@/assets/dashboard-1.jpg";
import d2 from "@/assets/dashboard-2.jpg";
import d3 from "@/assets/dashboard-3.jpg";
import d4 from "@/assets/dashboard-4.jpg";
import d5 from "@/assets/dashboard-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deivid Gemerasca — Analista Financeiro | Portfólio" },
      { name: "description", content: "Analista Financeiro com foco em automação, dashboards e melhoria de processos. Conheça meus projetos." },
      { property: "og:title", content: "Deivid Gemerasca — Portfólio" },
      { property: "og:description", content: "Automação financeira, dashboards e melhoria de processos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5551993639639?text=Ol%C3%A1%20Deivid%2C%20vi%20seu%20portf%C3%B3lio!";

const modules = [
  { img: f1.url, title: "Validador de Guias e Batch Input SAP", text: "Extrai automaticamente fornecedor, valor e vencimento de boletos e guias, sinaliza vencimentos próximos e gera planilhas .xlsx padronizadas para lançamento em lote no SAP." },
  { img: f2.url, title: "OCR de Caracteres Numéricos", text: "Converte prints e imagens de boletos de difícil leitura em texto puro — basta colar com Ctrl+V. Fim da digitação manual de linhas digitáveis." },
  { img: f3.url, title: "Higienizador de Linhas Digitáveis", text: "Remove pontos, espaços, máscaras e traços instantaneamente, deixando o código no padrão exigido pelo SAP e pelo Elaw." },
  { img: f4.url, title: "Consolidador de Documentos (Merge PDF)", text: "Une notas fiscais, comprovantes e minutas em um único PDF auditável, sem limite de arquivos ou tamanho e sem sair do navegador." },
];

const dash = [
  { img: d1.url, title: "Visão geral e filtros", text: "Filtros por mês, período, responsável, status, tipo de pagamento e empresa. Indicadores principais: 38.979 pagamentos, R$ 937,2 mi movimentados, 37.407 liquidados e 1.562 devoluções (4%)." },
  { img: d2.url, title: "Evolução mensal e status", text: "Curva de valor pago e quantidade mês a mês para identificar sazonalidade, junto à distribuição de pagamentos OK x devolvidos." },
  { img: d3.url, title: "Responsáveis e tipos de pagamento", text: "Ranking de produtividade por analista e top 10 tipos de pagamento (condenações, acordos, GPS, custas judiciais), comparando valor e volume." },
  { img: d4.url, title: "Empresas (clientes)", text: "Top 8 empresas por valor total pago, apoiando a priorização e a conversa com as áreas de negócio." },
  { img: d5.url, title: "Pagamentos recentes", text: "Tabela operacional com os últimos lançamentos, destacando devoluções para tratamento rápido." },
];

const nav = [["Sobre", "#sobre"], ["Projetos", "#projetos"], ["Experiência", "#experiencia"], ["Contato", "#contato"]];

function Index() {
  const [zoom, setZoom] = useState<string | null>(null);
  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#topo" className="font-display text-lg font-semibold text-primary">D. Gemerasca</a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-primary">{l}</a>)}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-whatsapp px-4 py-1.5 text-sm font-medium text-whatsapp-foreground">WhatsApp</a>
        </div>
      </header>

      <section id="topo" className="bg-hero">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Analista Financeiro · Automação & Dados</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary md:text-7xl">Deivid Gemerasca</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transformo rotinas financeiras em processos mais rápidos, seguros e mensuráveis — com ferramentas internas, automações e dashboards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Ver projetos</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-md border border-primary/20 bg-card px-5 py-3 text-sm font-medium text-primary">Falar no WhatsApp</a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Menino Deus, Porto Alegre — RS</p>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle kicker="Sobre" title="Finanças com visão de sistemas" />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Profissional com sólida experiência em análise financeira e suporte técnico em empresas de grande porte, como Grupo Carrefour e TK Elevator. A formação em Sistemas de Informação pela Unisinos me dá a base para ir além da operação: identifico gargalos, crio ferramentas de controle e desenvolvo automações que reduzem erros e liberam tempo da equipe.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[["4+", "anos em grandes empresas"], ["38 mil+", "pagamentos acompanhados no dashboard"], ["4", "ferramentas no hub de automação"], ["100%", "dados processados localmente"]].map(([n, l]) => (
              <div key={l} className="rounded-xl border bg-card p-5 shadow-card">
                <div className="font-display text-3xl font-semibold text-primary">{n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle kicker="Projeto 01" title="FinOps Suite — Hub de Automação Financeira (CSC)" />
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="O problema" text="A equipe de Contas a Pagar e Jurídico dependia de sites de terceiros para converter PDFs, ler imagens e limpar códigos — expondo notas, contratos e guias, esbarrando em limites de uso e gerando erros de digitação no SAP e no Elaw." />
            <InfoCard title="A solução" text="Uma aplicação interna que roda 100% no navegador do usuário: nenhum dado sensível sai da empresa. Quatro ferramentas reunidas em um só lugar." />
            <InfoCard title="Resultados" text="Privacidade total dos dados de clientes e fornecedores, zero interrupções por limites externos e redução drástica de falhas e retrabalho nos lançamentos." />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {modules.map((m) => (
              <figure key={m.title} className="overflow-hidden rounded-xl border bg-background">
                <button onClick={() => setZoom(m.img)} className="block w-full" aria-label={`Ampliar ${m.title}`}>
                  <img src={m.img} alt={m.title} loading="lazy" className="w-full border-b" />
                </button>
                <figcaption className="p-5">
                  <h3 className="font-semibold text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-24">
            <SectionTitle kicker="Projeto 02" title="Dashboard — Controle de Pagamentos" />
            <p className="-mt-4 mb-12 max-w-3xl text-muted-foreground">Painel analítico criado para acompanhar a operação de pagamentos processuais do grupo: volume, valores, devoluções e produtividade, com filtros que permitem responder perguntas da gestão em segundos.</p>
            <div className="space-y-14">
              {dash.map((d, i) => (
                <div key={d.title} className={`grid items-center gap-8 md:grid-cols-[1.6fr_1fr] ${i % 2 ? "md:[&>*:first-child]:order-2 md:grid-cols-[1fr_1.6fr]" : ""}`}>
                  <button onClick={() => setZoom(d.img)} className="overflow-hidden rounded-xl border shadow-card" aria-label={`Ampliar ${d.title}`}>
                    <img src={d.img} alt={d.title} loading="lazy" className="w-full" />
                  </button>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-primary">{d.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle kicker="Trajetória" title="Experiência profissional" />
        <div className="space-y-10 border-l-2 border-accent/40 pl-8">
          <Job company="Grupo Carrefour" role="Analista Financeiro" period="03/2024 – 04/2026" items={[
            "Criação e melhoria de sistemas internos usados pela equipe de pagamentos.",
            "Análise e execução de pagamentos processuais do grupo.",
            "Validação de alçadas de aprovação com gestores e diretores, garantindo compliance.",
            "Construção e atualização de dashboards para acompanhamento de indicadores.",
            "Mapeamento de gargalos operacionais e proposta de automações.",
          ]} />
          <Job company="TK Elevator (TKE)" role="Analista de Suporte Técnico" period="01/2022 – 03/2024" items={[
            "Suporte técnico de segundo nível aos técnicos de manutenção em campo.",
            "Ajustes em sistemas e otimização dos canais de comunicação com a equipe técnica.",
            "Gestão e ajuste das escalas operacionais dos técnicos.",
            "Implantação de sistema de backup emergencial, garantindo a continuidade das operações em quedas de sistema.",
          ]} />
        </div>
        <div className="mt-16">
          <SectionTitle kicker="Formação" title="Educação" />
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="font-semibold text-primary">Bacharelado em Sistemas de Informação</h3>
            <p className="text-muted-foreground">Universidade do Vale do Rio dos Sinos (Unisinos) · Cursado até o 5º semestre</p>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="font-display text-4xl font-semibold">Vamos conversar?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">Estou disponível para novas oportunidades em finanças, processos e automação.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-md bg-whatsapp px-6 py-3 font-medium text-whatsapp-foreground">WhatsApp (51) 99363-9639</a>
            <a href="mailto:deividgemerasca@hotmail.com" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-medium">deividgemerasca@hotmail.com</a>
          </div>
          <p className="mt-12 text-sm opacity-60">© 2026 Deivid de Oliveira Gemerasca · Porto Alegre — RS</p>
        </div>
      </section>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-card">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg>
      </a>

      {zoom && (
        <button onClick={() => setZoom(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4" aria-label="Fechar imagem">
          <img src={zoom} alt="Imagem ampliada" className="max-h-full max-w-full rounded-lg" />
        </button>
      )}
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border bg-background p-6">
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function Job({ company, role, period, items }: { company: string; role: string; period: string; items: string[] }) {
  return (
    <div className="relative">
      <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-accent" />
      <p className="text-sm text-muted-foreground">{period}</p>
      <h3 className="font-display text-2xl font-semibold text-primary">{company}</h3>
      <p className="font-medium text-accent">{role}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

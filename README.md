# Deivid Finance Portfolio

Boa tarde! Vamos criar um portfólio para mim. Já tenho imagens de alguns dos meus trabalhos e preciso criar um portfólio para apresentar nas possíveis vagas. 

Vou te passar minhas informações. 

DEIVID GEMERASCA
Analista Financeiro
Menino Deus, Porto Alegre - RS | (51) 99363-9639 | deividgemerasca@hotmail.com


​Resumo Profissional
​Profissional com sólida experiência em análise financeira e suporte técnico em empresas de grande porte (Carrefour e TK Elevator), aliado a formação em Sistemas de Informação (Unisinos). Perfil analítico com foco na melhoria de processos, criação de ferramentas de controle e automações operacionais.


​Formação Acadêmica
​Bacharelado em Sistemas de Informação (Interrompido / 5º semestre)
Universidade do Vale do Rio dos Sinos (Unisinos)


​Experiência Profissional
​Grupo Carrefour | Analista Financeiro
​03/2024 – 04/2026
​Atuação na melhoria e criação de sistemas internos utilizados pela equipe de pagamento.
​Condução de análises e realização de pagamentos processuais do grupo.
​Validação de alçadas de aprovação junto a gestores e diretores, garantindo compliance.
​Criação e alimentação de dashboards analíticos para acompanhamento de indicadores.
​Mapeamento de gargalos operacionais e desenvolvimento de sugestões de automação.
​TK Elevator (TKE) | Analista de Suporte Técnico
​01/2022 – 03/2024
​Suporte técnico de segundo nível para os técnicos de manutenção em campo.
​Ajustes em sistemas e otimização dos canais de comunicação com a equipe técnica.
​Gestão e ajuste de escalas operacionais dos técnicos.
​Implementação de sistema de backup emergencial para mitigar quedas de sistema e garantir a continuidade das operações.



Agora vou te enviar as imagens para ser adicionadas dos sistemas que criei, vou te passar um breve resumo dos trabalhos para que descreva as imagens.



Hub de Automação e Processamento Financeiro Centralizado (CSC)

Desenvolvedor & Analista Responsável: Deivid de Oliveira Gemerasca



Escopo do Projeto: Eliminação de gargalos operacionais, garantia de soberania de dados corporativos e ganho de eficiência na rotina de lançamentos fiscais e jurídicos.



🎯 O Problema

No ecossistema de Contas a Pagar e Gestão Jurídica, a equipe dependia de ferramentas web de terceiros para realizar tarefas cotidianas (conversão de PDF, OCR de imagens e higienização de strings). Essa abordagem gerava três riscos críticos:



Quebra de Confidencialidade: Upload de notas fiscais, contratos e guias com dados sensíveis em servidores externos não homologados.



Gargalo de Produtividade: Interrupção de fluxos devido a limites diários de uso em plataformas gratuitas e poluição visual (anúncios).



Erros de Input Manual: Erros de digitação ao transcrever códigos de barras de imagens para sistemas legados (SAP / Elaw).



💡 A Solução

Desenvolvimento de uma aplicação interna em camada única (Single Page Application), totalmente executada do lado do cliente (client-side), garantindo que nenhum dado sensível saia da infraestrutura da empresa. O hub centraliza 4 ferramentas modulares:



🛡️ Validador de Guias e Geração de Batch Input: Motor de extração automatizada de metadados de boletos e guias (Fornecedor, Valor, Vencimento). O sistema analisa a proximidade do vencimento e converte as informações estruturadas em arquivos .xlsx padronizados para alimentação em lote via Batch Input no SAP, reduzindo o tempo de processamento unitário.



🔍 OCR de Caracteres Numéricos: Módulo de visão computacional voltado para converter arquivos rasterizados (prints e imagens de boletos de difícil leitura) em dados textuais puros, eliminando a digitação manual de linhas digitáveis complexas.



🧹 Higienizador / Limpador de Linhas Digitáveis: Algoritmo de tratamento de strings que realiza a sanitização instantânea de códigos de barras, removendo pontos, espaços, máscaras e traços para adequação imediata aos padrões estritos de importação dos sistemas SAP e Elaw.



🔗 Consolidador de Documentos Fiscais (Merge PDF): Motor de unificação de arquivos locais sem restrição de volume ou tamanho, permitindo anexar notas fiscais, comprovantes de pagamento e minutas contratuais em um único documento PDF auditável.



📊 Impactos e Resultados Esperados

100% de Data Privacy: Mitigação total do risco de vazamento de informações confidenciais de clientes e fornecedores.



Zero Downtime: Eliminação de travas operacionais por limites de plataformas de terceiros.



Acurácia de Dados: Redução drástica de falhas humanas e retrabalho nos lançamentos contábeis.

Por fim irei te enviar imagens de um dashboard que criei e pode desrecever ao lado das imagens. 

Você pode alterar e fazer melhorias no texto e no que achar necessário.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/59f0cb18-8157-4f0d-94cb-f57412ba6157).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

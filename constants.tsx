import React from 'react';
import { Chapter } from './types';
import { BookOpen, Target, Users, Zap, MessageSquare, Wrench, Database, RefreshCw, Globe, ShieldAlert } from 'lucide-react';

export const BOOK_METADATA = {
    title: "IA Vendas",
    subtitle: "O Guia Definitivo para Empreendedores Digitais",
    author: "Ebook Completo",
    tags: ["10 Capítulos Práticos", "Estratégia", "Tecnologia"]
};

export const CHAPTERS: Chapter[] = [
    {
        id: "capitulo_1",
        title: "1. Por Que a IA Não é Mais Opcional",
        plainText: `Capítulo 1: Por Que a IA Não é Mais Opcional. A era de "apenas ter um site e vender" acabou. Hoje, o mercado digital está abarrotado de produtos, serviços e, o mais importante, informação. Para o empreendedor digital, a pergunta não é mais "Como me destacar?", mas sim: "Como eu consigo ver o que meu concorrente e o cliente não estão vendo?" A resposta é: Inteligência Artificial (IA). A Saturação e a Necessidade de Diferenciação. Pense na sua caixa de e-mail ou no seu feed de redes sociais. Quantas mensagens de vendas você recebe por dia? Dezenas. Essa sobrecarga de informação cria um fenômeno chamado "fadiga de decisão". A IA resolve esse problema porque ela permite que você saia do "tiro de bazuca" e vá para o "tiro de sniper".`,
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <BookOpen className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 1: Por Que a IA Não é Mais Opcional</h2>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">A era de "apenas ter um site e vender" acabou. Hoje, o mercado digital está abarrotado de produtos, serviços e, o mais importante, <strong>informação</strong>. Para o empreendedor digital, a pergunta não é mais "Como me destacar?", mas sim: "Como eu consigo ver o que meu concorrente e o cliente não estão vendo?"</p>
                <p className="text-lg leading-relaxed font-medium text-primary-blue dark:text-blue-400">A resposta é: Inteligência Artificial (IA).</p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">1.1. A Saturação e a Necessidade de Diferenciação</h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">Pense na sua caixa de e-mail ou no seu feed de redes sociais. Quantas mensagens de vendas você recebe por dia? Dezenas. Essa sobrecarga de informação cria um fenômeno chamado <strong>"fadiga de decisão"</strong>. O cliente não tem mais tempo para analisar 10 opções de curso ou 5 marcas de suplemento. Ele escolhe a que fala <em>diretamente</em> com a sua dor, no <em>momento exato</em> que a dor acontece.</p>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">A IA resolve esse problema porque ela permite que você saia do "tiro de bazuca" (enviar a mesma mensagem para 1000 pessoas) e vá para o <strong>"tiro de sniper"</strong> (enviar a mensagem certa para a pessoa certa). Isso não é luxo, é sobrevivência.</p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">1.2. Definição de IA para o Empreendedor: Otimização e Previsão</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Esqueça os robôs de filmes. Para o seu negócio, a IA tem duas funções principais:</p>
                <ul className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                    <li className="flex gap-3">
                        <span className="font-bold text-accent-orange">1.</span>
                        <div>
                            <strong>Otimização:</strong> Fazer tarefas repetitivas muito mais rápido e melhor do que um humano.
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">Exemplo: Classificar quais clientes estão "quentes" em segundos.</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-accent-orange">2.</span>
                        <div>
                            <strong>Previsão:</strong> Olhar para o passado para antecipar o futuro.
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">Exemplo: A IA analisa 10.000 clientes que cancelaram para identificar padrões e evitar novos cancelamentos.</p>
                        </div>
                    </li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">1.3. O ROI da Inteligência Artificial em Vendas</h3>
                <p className="text-gray-700 dark:text-gray-300">O custo de adquirir um novo cliente (CAC) está sempre subindo. A IA ajuda a diminuir esse custo aumentando a eficiência.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-primary-blue dark:text-blue-400 mb-2">Aumento da Taxa de Conversão</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Um aumento de 2% para 4% dobra suas vendas sem precisar dobrar seu tráfego.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="font-bold text-primary-blue dark:text-blue-400 mb-2">Redução de Custos</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Chatbots resolvem 70% das dúvidas comuns, liberando sua equipe.</p>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-primary-blue dark:border-blue-500 mt-6">
                    <h4 className="font-bold text-primary-blue dark:text-blue-400 mb-2">Estudos de Caso Iniciais</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>E-commerce de Nicho:</strong> Aumento de 20% na conversão com pop-ups personalizados por comportamento.</li>
                        <li><strong>Produtor de Conteúdo:</strong> Focou vendas apenas nos 200 leads "Super Quentes" identificados pela IA, aumentando a eficiência.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "capitulo_2",
        title: "2. O Funil de Vendas 5.0 Orientado por Dados",
        plainText: `Capítulo 2: O Funil de Vendas 5.0 Orientado por Dados. O funil de vendas tradicional (Topo, Meio, Fundo) foi útil, mas é linear e ignora o fato de que um cliente pode "voltar" ou gerar novas vendas após a compra. Na era da IA, precisamos de uma estrutura que reflita a jornada do cliente como um ciclo contínuo de crescimento: o Flywheel ou, como chamamos aqui, o Funil 5.0.`,
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Target className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 2: O Funil de Vendas 5.0</h2>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">O funil de vendas tradicional foi útil, mas é linear. Na era da IA, precisamos de uma estrutura que reflita a jornada do cliente como um ciclo contínuo de crescimento: o <strong>Flywheel</strong> ou <strong>Funil 5.0</strong>.</p>

                <div className="my-8 p-6 bg-gray-900 dark:bg-black text-white rounded-xl">
                   <h3 className="text-xl font-bold text-accent-orange mb-4">O Ciclo do Flywheel</h3>
                   <ol className="list-decimal pl-5 space-y-4">
                        <li><strong>Atrair (IA na Descoberta):</strong> Atrai pessoas mais qualificadas, economizando dinheiro em tráfego.</li>
                        <li><strong>Engajar (IA na Interação):</strong> Personaliza a experiência de compra para cada visitante.</li>
                        <li><strong>Encantar (IA na Retenção):</strong> Garante que o cliente tenha sucesso com o produto, transformando-o em um promotor.</li>
                   </ol>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">2.2. Machine Learning na Tomada de Decisão</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">O Machine Learning (ML) descobre padrões ocultos nos dados que são invisíveis para nós. Em vez de regras fixas ("se x, faça y"), o ML aprende com o histórico: "Clientes com perfil X tendem a comprar quando acontece Y".</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">2.3. As Três Fases da IA em Vendas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                        <h4 className="font-bold text-primary-blue dark:text-blue-400">1. Descoberta</h4>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">Identifica seu cliente ideal (ICP) nas plataformas de anúncios e filtra leads.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                        <h4 className="font-bold text-primary-blue dark:text-blue-400">2. Engajamento</h4>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">Personaliza a jornada do cliente no site, e-mail e anúncios.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                        <h4 className="font-bold text-primary-blue dark:text-blue-400">3. Retenção</h4>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">Garante o sucesso do cliente e sugere próximos passos (upsell/cross-sell).</p>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">2.4. Dados vs. Intuição</h3>
                <p className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-400 italic text-gray-800 dark:text-gray-200">
                    "Ao usar a IA, você transforma o achismo em decisão estratégica orientada pela probabilidade. Isso é o que chamamos de vendas inteligentes."
                </p>
            </div>
        )
    },
    {
        id: "capitulo_3",
        title: "3. Prospecção e Geração de Leads",
        plainText: "Capítulo 3: Prospecção e Geração de Leads Inteligentes. A prospecção é o motor de qualquer negócio. O segredo da IA nesta fase é qualidade sobre quantidade. Lead Scoring Preditivo, Análise de Comportamento e Segmentação Dinâmica.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Users className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 3: Prospecção Inteligente</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">Gastar tempo com leads que não vão comprar é o erro mais caro. A IA foca em <strong>qualidade sobre quantidade</strong>.</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">3.1. Lead Scoring Preditivo</h3>
                <p className="text-gray-700 dark:text-gray-300">O sistema tradicional dá pontos manuais. O Preditivo usa Machine Learning para descobrir quais ações realmente preveem uma venda.</p>
                <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800 shadow-sm">
                    <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Exemplo Prático:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A IA nota que leads que visitam a página de "estudos de caso" têm conversão 5x maior. Ela classifica esses leads como "Nível A - 90% Probabilidade" automaticamente.</p>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">3.2. Análise de Intenção</h3>
                <p className="text-gray-700 dark:text-gray-300">A IA usa cliques, tempo de página e scroll para inferir o que o lead quer. Se ele lê sobre "custo" e vai para "preços", a IA pode acionar um anúncio focado em ROI e Custo-Benefício.</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">3.3. Segmentação Dinâmica</h3>
                <p className="text-gray-700 dark:text-gray-300">Crie públicos como "Leads que pararam no checkout de um produto de R$ 97,00 nas últimas 48h". A mensagem é entregue no momento de maior sensibilidade.</p>
            </div>
        )
    },
    {
        id: "capitulo_4",
        title: "4. Personalização (Hiper-Engajamento)",
        plainText: "Capítulo 4: Personalização de Conteúdo e Ofertas. Seu cliente quer sentir que a sua marca o conhece. Motores de Recomendação, Conteúdo Dinâmico (DCO) e Testes A/B Automatizados.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Zap className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 4: Hiper-Engajamento</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">Personalização hoje é prever o que o cliente quer ver antes que ele saiba. Isso é alcançado com IA em escala.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-t-4 border-primary-blue dark:border-blue-500">
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Motores de Recomendação</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Como a Netflix ou Amazon. Se o usuário comprou o Módulo 1, sugira o webinar bônus relevante.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-t-4 border-primary-blue dark:border-blue-500">
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Conteúdo Dinâmico (DCO)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Alterar imagens e textos da landing page em tempo real baseado no perfil do visitante (ex: Designer vs Copywriter).</p>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">4.3. Testes A/B Automatizados (Multi-Armed Bandit)</h3>
                <p className="text-gray-700 dark:text-gray-300">Em vez de esperar um vencedor, a IA aloca tráfego dinamicamente para a variação que está performando melhor no momento, otimizando o resultado durante o próprio teste.</p>
            </div>
        )
    },
    {
        id: "capitulo_5",
        title: "5. Automação com Chatbots e Voice",
        plainText: "Capítulo 5: Automação e Conversão Assistida por Chatbots e Voice. Chatbots de Alta Performance usando NLP para qualificação e vendas.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <MessageSquare className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 5: Chatbots e Conversão</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">A conversão deve ter atrito zero. Chatbots com IA (NLP) não são apenas "árvores de decisão", eles entendem intenção e atuam como vendedores.</p>

                <ul className="list-disc pl-5 space-y-4 mt-4 text-gray-700 dark:text-gray-300">
                    <li><strong>Geração de Leads 24/7:</strong> O bot qualifica o lead (BANT) e agenda reuniões automaticamente.</li>
                    <li><strong>Tratamento de Objeções:</strong> Se o cliente fala de preço, o bot responde com prova social e ROI, não com respostas genéricas.</li>
                    <li><strong>C-Commerce:</strong> Venda direta dentro do WhatsApp ou Messenger, minimizando atrito.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">5.4. Precificação Dinâmica</h3>
                <p className="text-gray-700 dark:text-gray-300">A IA ajusta preços ou libera descontos baseados na urgência e probabilidade de compra do lead, garantindo margem máxima.</p>
            </div>
        )
    },
    {
        id: "capitulo_6",
        title: "6. O Toolkit Essencial",
        plainText: "Capítulo 6: O Toolkit Essencial de IA. Ferramentas de CRM, E-commerce e Automação de Marketing. Como escolher e integrar.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Wrench className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 6: O Toolkit Essencial</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">Você não precisa ser programador. As principais ferramentas já possuem IA integrada.</p>

                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm text-sm text-left border border-gray-200 dark:border-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-3">Categoria</th>
                                <th className="px-6 py-3">Funcionalidades AI</th>
                                <th className="px-6 py-3">Exemplos</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">CRM</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Priorização de leads, previsão de receita, sugestões de contato.</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">HubSpot AI, Salesforce Einstein</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">E-commerce</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Recomendação de produtos, busca inteligente, alerta de estoque.</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Shopify, VTex</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Marketing</td>
                                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Geração de copy, otimização de anúncios em tempo real.</td>
                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Google Ads, Jasper</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <h4 className="font-bold text-accent-orange">Como Começar:</h4>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">1. Mapeie sua dor. 2. Escolha uma ferramenta focada. 3. Priorize a integração dos dados.</p>
                </div>
            </div>
        )
    },
    {
        id: "capitulo_7",
        title: "7. Estruturando Seus Dados",
        plainText: "Capítulo 7: Estruturando Seus Dados para o Sucesso da IA. A importância da qualidade, unificação e limpeza dos dados. O ciclo Coleta, Limpeza, Análise e Ação.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Database className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 7: Estruturando Dados</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">Dados são os ingredientes da IA. Se forem ruins, o resultado será ruim.</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">7.2. O Ciclo da Inteligência</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Coleta:</strong> De todas as fontes.</li>
                    <li><strong>Limpeza:</strong> Remover duplicatas e padronizar. (Crucial!)</li>
                    <li><strong>Análise:</strong> Machine Learning identifica padrões.</li>
                    <li><strong>Ação:</strong> Decisão estratégica baseada no insight.</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">7.3. Métricas (KPIs) de IA</h3>
                <p className="text-gray-700 dark:text-gray-300">Mudança de foco do passado para o futuro.</p>
                <ul className="mt-4 space-y-2 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span className="text-gray-500 dark:text-gray-400">Taxa de Conversão (Passado)</span>
                        <span className="font-bold text-primary-blue dark:text-blue-400">Probabilidade de Compra (Futuro)</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 pt-2">
                        <span className="text-gray-500 dark:text-gray-400">Receita Total</span>
                        <span className="font-bold text-primary-blue dark:text-blue-400">LTV Preditivo</span>
                    </li>
                    <li className="flex justify-between pt-2">
                        <span className="text-gray-500 dark:text-gray-400">Churn Rate</span>
                        <span className="font-bold text-primary-blue dark:text-blue-400">Probabilidade de Churn</span>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: "capitulo_8",
        title: "8. Relacionamento e Retenção",
        plainText: "Capítulo 8: Gerenciamento de Relacionamento e Retenção com IA. Previsão de Churn, Customer Success automatizado e Upsell inteligente.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <RefreshCw className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 8: Retenção com IA</h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">Reter custa muito menos que adquirir. A IA atua como um "olheiro" monitorando a saúde do cliente.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
                        <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Previsão de Churn</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Identifica risco de cancelamento antes que aconteça (ex: parou de usar recurso X). Ação: E-mail de resgate automático.</p>
                    </div>
                    <div className="border border-green-100 dark:border-green-900 bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
                        <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">Upsell Inteligente</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Identifica sucesso e confiança. Ação: Oferta de produto superior no momento exato de maior satisfação.</p>
                    </div>
                </div>
                
                <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-400">O Fator Humano: A IA cuida do volume, o humano cuida da complexidade e empatia em situações críticas.</p>
            </div>
        )
    },
    {
        id: "capitulo_9",
        title: "9. A Próxima Onda",
        plainText: "Capítulo 9: A Próxima Onda de IA em Vendas. Metaversos, AR, IA Generativa criando campanhas completas e Vendas Preditivas em Cadeia.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <Globe className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 9: O Futuro (Próxima Onda)</h2>
                </div>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">9.1. Metaversos e AR</h3>
                <p className="text-gray-700 dark:text-gray-300">A IA transforma visualização 3D em consultoria, sugerindo produtos que combinam com o ambiente do cliente em tempo real.</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">9.2. IA Generativa em Campanhas</h3>
                <p className="text-gray-700 dark:text-gray-300">O empreendedor se torna um "Curador". A IA gera públicos, textos, imagens e vídeos para uma campanha de lançamento em minutos.</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 border-l-4 border-accent-orange pl-4">9.3. Vendas Preditivas</h3>
                <p className="text-gray-700 dark:text-gray-300">Antecipação de necessidade. O produto aparece (oferta) magicamente no momento de maior conveniência, antes mesmo do cliente buscar.</p>
            </div>
        )
    },
    {
        id: "capitulo_10",
        title: "10. Ética e Responsabilidade",
        plainText: "Capítulo 10: Desafios, Ética e Responsabilidade. Viés algorítmico, LGPD, Transparência e o novo papel do empreendedor como Gerente de Algoritmos.",
        content: (
            <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3 mb-6 text-primary-blue dark:text-blue-400">
                    <ShieldAlert className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Capítulo 10: Ética e Responsabilidade</h2>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300">Com grande poder vem grande responsabilidade. É preciso mitigar viés algorítmico e respeitar a privacidade (LGPD).</p>

                <ul className="list-disc pl-5 space-y-3 mt-4 bg-white dark:bg-gray-800 p-6 rounded shadow-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Viés Algorítmico:</strong> Audite seus dados para evitar discriminação automática.</li>
                    <li><strong>Transparência:</strong> Seja claro quando o cliente está falando com um bot ou recebendo uma decisão automatizada.</li>
                    <li><strong>Novo Papel:</strong> Você é agora um Gerente de Algoritmos e Curador de Experiências.</li>
                </ul>

                <div className="mt-8 p-6 bg-light-blue dark:bg-blue-900/20 rounded-xl border border-primary-blue dark:border-blue-500">
                    <h4 className="text-2xl font-bold text-primary-blue dark:text-blue-400 mb-4">Checklist de Ação Imediata</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Escolha seu maior gargalo.</li>
                        <li>Identifique uma ferramenta de entrada.</li>
                        <li>Limpe 30 dias de dados.</li>
                        <li>Configure um teste piloto.</li>
                        <li>Defina o ponto de contato humano.</li>
                    </ul>
                </div>
            </div>
        )
    }
];

export const FULL_BOOK_TEXT = CHAPTERS.map(c => c.plainText).join("\n\n");
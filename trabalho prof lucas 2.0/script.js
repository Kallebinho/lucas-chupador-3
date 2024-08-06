const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um rio local poluído. O que você faz?",
        alternativas: [
            {
                texto: "Organiza uma equipe de voluntários para limpar o rio.",
                afirmacao: "Sua ação ajuda a melhorar a qualidade da água e promove a vida aquática. "
            },
            {
                texto: "Ignora o problema e foca em outras tarefas.",
                afirmacao: "Sua decisão evita o esforço imediato, mas o problema se agrava."
            }
        ]
    },
    {
        enunciado: "Você descobre que uma fábrica está despejando resíduos tóxicos no solo. O que você faz?",
        alternativas: [
            {
                texto: "Denuncia a fábrica às autoridades e pressiona por uma investigação.",
                afirmacao: "Sua denúncia leva a uma investigação e promove práticas mais seguras."
            },
            {
                texto: "Decide não se envolver para evitar conflitos.",
                afirmacao: "Sua escolha evita a confrontação, mas permite que o problema persista."
            }
        ]
    },
    {
        enunciado: "Você tem a oportunidade de plantar árvores em uma área desmatada. O que você faz?",
        alternativas: [
            {
                texto: "Planta uma grande quantidade de árvores e organiza um evento comunitário.",
                afirmacao: "Sua iniciativa acelera a recuperação da área e engaja a comunidade."
            },
            {
                texto: "Planta apenas algumas árvores e deixa o resto para depois.",
                afirmacao: "Sua ação é um bom começo, mas a recuperação é mais lenta."
            }
        ]
    },
    {
        enunciado: "Você descobre uma maneira de reduzir o desperdício de energia na sua casa. O que você faz?",
        alternativas: [
            {
                texto: "Implementa todas as mudanças recomendadas e incentiva seus vizinhos a fazer o mesmo.",
                afirmacao: "Sua dedicação reduz o consumo de energia e influencia positivamente sua comunidade."
            },
            {
                texto: "Faz apenas algumas mudanças para economizar um pouco.",
                afirmacao: "Sua abordagem parcial reduz alguma energia, mas o impacto é limitado."
            }
        ]
    },
    {
        enunciado: "Você está participando de uma reunião comunitária sobre sustentabilidade. O que você faz?",
        alternativas: [
            {
                texto: "Fica em silêncio e observa, sem oferecer sugestões.",
                afirmacao: "Sua decisão de não participar impede novas ideias de surgirem e desacelera o progresso."
            },
            {
                texto: "Propõe ideias inovadoras e colabora com os outros para implementar um plano verde.",
                afirmacao: "Sua contribuição ativa acelera a adoção de práticas sustentáveis na comunidade."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Anos Depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
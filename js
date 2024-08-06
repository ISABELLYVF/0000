const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma menina e ela ta dando em cima de vc, oque vc faz?",
        alternativas: [
            {
                texto: "Sair correndo e fingir ser um deb mental",
                afirmacao: "afirmacao",
            },
            {
                texto: "Conversar com ela",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Depois a isabelly te convida pra sair, que atitude você toma?",
        alternativas: [
            {
                texto: "Aceitar o convite",
                afirmacao: "afirmacao",
            },
            {
                texto: "Dizer que esta ocupado e sair com a menina estranha",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Você esta em um campeonato de vôlei, e no final da partida as meninas pedem um autografo no peito delas, oque você faria",
        alternativas: [
            {
                texto: "Assinar no peito de todas",
                afirmacao: "afirmacao",
            },
            {
                texto: "Esfregar a alianca na cara delas",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Você ve o cara dando em cima da isa e dando flores, oque você faria?",
        alternativas: [
            {
                texto: "Deixaria a Isa com o cara por que ele é melhor que você",
                afirmacao: "afirmacao",
            },
            {
                texto: "Puxaria a Isa pra longe dele",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Oque você faria no dia do casamento da isa de não fosse com você",
        alternativas: [
            {
                texto: "Roubar a arma do seu pai e atirar em todo mundo",
                afirmacao: "afirmacao",
            },
            {
                texto: "Deixa ela se casar e sofrer pelo resto da vida",
                afirmacao: "afirmacao",
            }
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    } else {
        caixaPerguntas.textContent = "Fim do questionário!";
        caixaAlternativas.innerHTML = "";
        caixaResultado.style.display = "block";
        
    }
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpar alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.classList.add("botao-alternativa"); // Adiciona a classe de estilização
        botaoAlternativa.addEventListener("click", () => {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();

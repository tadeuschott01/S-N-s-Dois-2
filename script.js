/* =========================================
SÓ NÓS DOIS ❤️
JOGO PARA 2 PESSOAS
========================================= */

/* =========================================
PERGUNTAS
========================================= */

const perguntas = {

conhecendo: [

    "Qual foi o momento em que você percebeu que gostava de mim?",

    "Qual lembrança nossa você gostaria de reviver?",

    "Qual é uma coisa que você mais admira em mim?",

    "O que torna nossa história especial?",

    "Qual foi um dos momentos mais engraçados que vivemos juntos?",

    "Qual lugar você gostaria de conhecer comigo?",

    "Qual coisa simples que fazemos juntos você mais gosta?",

    "O que você acha que mais combina entre nós dois?",

    "Qual foi o melhor encontro que tivemos?",

    "O que você gostaria que fizéssemos mais juntos?"

],


diversao: [

    "Quem dos dois é mais provável de começar uma dança do nada?",

    "Se pudéssemos viajar amanhã, para onde você iria comigo?",

    "Qual filme ou série combina com a nossa história?",

    "Quem dos dois faria a maior besteira durante uma viagem?",

    "Se nossa história fosse um filme, qual seria o título?",

    "Quem demora mais para escolher o que assistir?",

    "Se tivéssemos um dia inteiro livre, o que você faria comigo?",

    "Quem dos dois sobreviveria mais tempo em uma ilha deserta?",

    "Quem provavelmente esqueceria onde deixou o celular?",

    "Se tivéssemos que abrir um negócio juntos, qual seria?"

],


romantico: [

    "Diga uma qualidade minha que você gostaria que eu nunca esquecesse.",

    "Qual lembrança nossa mais aquece seu coração?",

    "Como seria um dia perfeito ao meu lado?",

    "O que eu faço que faz você se sentir amado(a)?",

    "Qual foi um momento em que você se sentiu muito feliz comigo?",

    "Qual sonho você gostaria de construir comigo?",

    "O que você gostaria de fazer mais vezes ao meu lado?",

    "Qual lugar seria perfeito para uma viagem nossa?",

    "O que você aprendeu comigo?",

    "Complete: Uma das melhores coisas da nossa história é...",

    "Qual foi o momento em que você mais sentiu orgulho de nós?",

    "O que você espera viver comigo no futuro?"

],


desafios: [

    "Dê um abraço apertado no outro durante 20 segundos.",

    "Olhem um para o outro sem rir durante 30 segundos.",

    "Cada um diga três qualidades do outro.",

    "Façam uma selfie juntos fazendo uma pose engraçada.",

    "Dê um beijo carinhoso no outro.",

    "Cada um imite o outro por 30 segundos.",

    "Inventem um apelido novo um para o outro.",

    "Dancem juntos durante uma música.",

    "Cada um conte uma lembrança engraçada da relação.",

    "Façam uma promessa divertida para o próximo encontro.",

    "Escolham uma música que represente vocês dois.",

    "Fiquem abraçados enquanto cada um fala uma coisa pela qual é grato."

]

};

/* =========================================
VARIÁVEIS DO JOGO
========================================= */

let jogador1 = "";

let jogador2 = "";

let categoriaAtual = "";

let perguntaAtual = 0;

/*
0 = Jogador 1
1 = Jogador 2
*/

let jogadorAtual = 0;

/* =========================================
ABRIR TELA DE JOGADORES
========================================= */

function abrirJogadores() {

esconderTelas();

document
    .getElementById("jogadores")
    .classList
    .add("ativa");

}

/* =========================================
SALVAR JOGADORES
========================================= */

function salvarJogadores() {

const campo1 =
    document
        .getElementById("jogador1");

const campo2 =
    document
        .getElementById("jogador2");


const nome1 =
    campo1
        .value
        .trim();


const nome2 =
    campo2
        .value
        .trim();


if (nome1 === "") {

    alert(
        "Digite o nome do Jogador 1 ❤️"
    );

    campo1.focus();

    return;

}


if (nome2 === "") {

    alert(
        "Digite o nome do Jogador 2 ❤️"
    );

    campo2.focus();

    return;

}


jogador1 = nome1;

jogador2 = nome2;


document
    .getElementById("resultadoJogadores")
    .textContent =
    `${jogador1} e ${jogador2}`;


abrirCategorias();

}

/* =========================================
ABRIR CATEGORIAS
========================================= */

function abrirCategorias() {

esconderTelas();

document
    .getElementById("categorias")
    .classList
    .add("ativa");

}

/* =========================================
INICIAR JOGO
========================================= */

function iniciarJogo(categoria) {

categoriaAtual = categoria;

perguntaAtual = 0;

/*
    Toda nova rodada começa
    com o Jogador 1.
*/

jogadorAtual = 0;


esconderTelas();

document
    .getElementById("jogo")
    .classList
    .add("ativa");


mostrarPergunta();

}

/* =========================================
MOSTRAR PERGUNTA
========================================= */

function mostrarPergunta() {

const lista =
    perguntas[categoriaAtual];


if (!lista || lista.length === 0) {

    return;

}


const nome =
    jogadorAtual === 0
        ? jogador1
        : jogador2;


/*
    Nome do jogador da vez
*/

document
    .getElementById("nomeJogador")
    .textContent =
    nome;


/*
    Categoria
*/

document
    .getElementById("categoria")
    .textContent =
    nomeCategoria(
        categoriaAtual
    );


/*
    Número da pergunta
*/

document
    .getElementById("numero")
    .textContent =
    `${perguntaAtual + 1}/${lista.length}`;


/*
    Pergunta
*/

document
    .getElementById("pergunta")
    .textContent =
    lista[perguntaAtual];


/*
    Barra de progresso
*/

atualizarProgresso(
    perguntaAtual,
    lista.length
);

}

/* =========================================
PRÓXIMA PERGUNTA
========================================= */

function proximaPergunta() {

const lista =
    perguntas[categoriaAtual];


if (!lista) {

    return;

}


/*
    Avança a pergunta
*/

perguntaAtual++;


/*
    Alterna o jogador
*/

jogadorAtual =
    jogadorAtual === 0
        ? 1
        : 0;


/*
    Verifica se terminou
*/

if (
    perguntaAtual >=
    lista.length
) {

    atualizarProgresso(
        lista.length,
        lista.length
    );

    mostrarResultado();

    return;

}


mostrarPergunta();

}

/* =========================================
BARRA DE PROGRESSO
========================================= */

function atualizarProgresso(
atual,
total
) {

if (total <= 0) {

    return;

}


const porcentagem =
    (atual / total) * 100;


document
    .getElementById("barraProgresso")
    .style.width =
    `${porcentagem}%`;

}

/* =========================================
MOSTRAR RESULTADO
========================================= */

function mostrarResultado() {

document
    .getElementById("resultadoJogadores")
    .textContent =
    `${jogador1} e ${jogador2}`;


esconderTelas();

document
    .getElementById("resultado")
    .classList
    .add("ativa");

}

/* =========================================
NOMES DAS CATEGORIAS
========================================= */

function nomeCategoria(
categoria
) {

const nomes = {

    conhecendo:
        "💕 Conhecendo vocês",

    diversao:
        "😂 Diversão",

    romantico:
        "❤️ Romântico",

    desafios:
        "🎮 Desafios"

};


return nomes[categoria]
    || "Só Nós Dois ❤️";

}

/* =========================================
VOLTAR AO INÍCIO
========================================= */

function voltarInicio() {

esconderTelas();


document
    .getElementById("inicio")
    .classList
    .add("ativa");


categoriaAtual = "";

perguntaAtual = 0;

jogadorAtual = 0;

}

/* =========================================
ESCONDER TODAS AS TELAS
========================================= */

function esconderTelas() {

const telas =
    document
        .querySelectorAll(".tela");


telas.forEach(
    function(tela) {

        tela.classList
            .remove("ativa");

    }
);

}

/* =========================================
ENTER NOS CAMPOS
========================================= */

document.addEventListener(
"keydown",
function(event) {

    const telaJogadores =
        document
            .getElementById("jogadores")
            .classList
            .contains("ativa");


    if (
        event.key === "Enter" &&
        telaJogadores
    ) {

        salvarJogadores();

    }

}

);

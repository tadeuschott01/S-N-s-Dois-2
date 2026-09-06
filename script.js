```javascript
/* =====================================
   PERGUNTAS GRATUITAS
===================================== */

const perguntas = {

    conhecendo: [

        "Qual foi o momento em que você percebeu que gostava de mim?",

        "Qual lembrança nossa você gostaria de reviver?",

        "Qual é uma coisa que você admira em mim?",

        "O que torna nossa história especial?",

        "Qual foi um dos momentos mais engraçados que vivemos juntos?",

        "Qual lugar você gostaria de conhecer comigo?",

        "Qual coisa simples que fazemos juntos você mais gosta?"

    ],


    diversao: [

        "Quem dos dois é mais provável de começar uma dança do nada?",

        "Se pudéssemos viajar amanhã, para onde você iria comigo?",

        "Qual filme ou série combina com a nossa história?",

        "Quem dos dois faria a maior besteira durante uma viagem?",

        "Se nossa história fosse um filme, qual seria o título?",

        "Quem demora mais para escolher o que assistir?",

        "Se tivéssemos um dia inteiro livre, o que você faria comigo?"

    ],



/* =====================================
   20 DESAFIOS PREMIUM
===================================== */

    desafiosPremium: [

        "Beije meu corpo inteiro sem encostar nos lábios.",

        "Me venda e faça o que quiser por 3 minutos.",

        "Morda levemente meu pescoço até eu arrepiar.",

        "Faça uma massagem erótica e termine do jeito que eu pedir.",

        "Cada um conte um sonho que gostaria de realizar no futuro.",

        "Me beije como se fosse a primeira vez.",

        "Me dê um beijo que me deixe com tesão instantâneo.",

        "Inventem um apelido divertido um para o outro.",

        "Cada um conte qual foi seu primeiro pensamento quando conheceu o outro.",

        "Façam uma lista de cinco coisas que vocês querem experimentar juntos.",

        "Cada um escolha uma memória favorita da relação e explique o motivo.",

        "Tire uma peça de roupa minha com a boca.",

        "Simule um oral em mim por 30 segundos.",

        "Sussurre no meu ouvido o que faria se eu estivesse amarrado(a).",

        "Cada um conte uma coisa pela qual é grato na relação.",

        "Me faça gemer sem usar as mãos.",

        "Cada um fale sobre uma conquista do outro que admira.",

        "Me faça um strip-tease lento.",

        "Me penetre em uma posição diferente.",

        "Me dê tapas na bunda até eu pedir mais.",


    ],



/* =====================================
   ROMÂNTICO PREMIUM
===================================== */

    romanticoPremium: [

        "Diga uma qualidade da outra pessoa que você gostaria que ela nunca esquecesse.",

        "Conte qual lembrança da relação mais aquece seu coração.",

        "Descreva como seria um dia perfeito juntos.",

        "Diga uma coisa simples que faz você se sentir valorizado.",

        "Conte qual foi um momento em que você se sentiu muito feliz ao lado do outro.",

        "Fale sobre um sonho que gostaria de construir juntos.",

        "Diga uma coisa que você gostaria de fazer mais vezes juntos.",

        "Conte qual lugar você gostaria de visitar em uma viagem a dois.",

        "Cada um diga uma coisa que aprendeu com o outro.",

        "Complete: 'Uma das melhores coisas da nossa história é...'"

    ]

};



/* =====================================
   CONFIGURAÇÕES
===================================== */

let categoriaAtual = "";

let perguntaAtual = 0;


/*
    Enquanto não houver integração
    com a Google Play, o Premium
    permanece bloqueado.
*/

let premiumAtivo = false;



/* =====================================
   ABRIR CATEGORIAS
===================================== */

function abrirCategorias() {

    fecharModal();

    esconderTelas();

    document
        .getElementById("categorias")
        .classList.add("ativa");

}



/* =====================================
   VERIFICAR PREMIUM
===================================== */

function verificarPremium(categoria) {

    if (premiumAtivo === true) {

        iniciarJogo(categoria);

        return;

    }


    document
        .getElementById("modalPremium")
        .classList.add("ativo");

}



/* =====================================
   ABRIR PREMIUM
===================================== */

function abrirPremium() {

    fecharModal();

    esconderTelas();

    document
        .getElementById("premium")
        .classList.add("ativa");

}



/* =====================================
   FECHAR MODAL
===================================== */

function fecharModal() {

    document
        .getElementById("modalPremium")
        .classList.remove("ativo");

}



/* =====================================
   FUTURA COMPRA PREMIUM
===================================== */

function assinarPremium() {

    alert(
        "O sistema de assinatura será conectado à Google Play na versão final."
    );

}



/* =====================================
   INICIAR JOGO
===================================== */

function iniciarJogo(categoria) {

    categoriaAtual = categoria;

    perguntaAtual = 0;

    esconderTelas();

    document
        .getElementById("jogo")
        .classList.add("ativa");

    mostrarPergunta();

}



/* =====================================
   MOSTRAR PERGUNTA
===================================== */

function mostrarPergunta() {

    const lista =
        perguntas[categoriaAtual];


    document
        .getElementById("categoria")
        .textContent =
        nomeCategoria(categoriaAtual);


    document
        .getElementById("numero")
        .textContent =
        `${perguntaAtual + 1}/${lista.length}`;


    document
        .getElementById("pergunta")
        .textContent =
        lista[perguntaAtual];

}



/* =====================================
   PRÓXIMA PERGUNTA
===================================== */

function proximaPergunta() {

    const lista =
        perguntas[categoriaAtual];


    perguntaAtual++;


    if (perguntaAtual >= lista.length) {

        esconderTelas();

        document
            .getElementById("resultado")
            .classList.add("ativa");

        return;

    }


    mostrarPergunta();

}



/* =====================================
   NOME DA CATEGORIA
===================================== */

function nomeCategoria(categoria) {

    const nomes = {

        conhecendo:
            "💕 Conhecendo vocês",

        diversao:
            "😂 Diversão",

        desafiosPremium:
            "🎮 Desafios Premium",

        romanticoPremium:
            "❤️ Romântico Premium"

    };


    return nomes[categoria];

}



/* =====================================
   VOLTAR AO INÍCIO
===================================== */

function voltarInicio() {

    fecharModal();

    esconderTelas();

    document
        .getElementById("inicio")
        .classList.add("ativa");

    perguntaAtual = 0;

    categoriaAtual = "";

}



/* =====================================
   ESCONDER TELAS
===================================== */

function esconderTelas() {

    const telas =
        document.querySelectorAll(".tela");


    telas.forEach(
        function(tela) {

            tela.classList.remove("ativa");

        }
    );

}
```

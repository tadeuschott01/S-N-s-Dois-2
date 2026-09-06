/* =========================================================
   SÓ NÓS DOIS ❤️
   SCRIPT.JS

   Jogo para dois jogadores
   - Perguntas de múltipla escolha
   - Resposta secreta
   - Tentativa do parceiro
   - Pontuação
   - Resultado final
   - Roleta de desafios
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const perguntas = {

    conhecendo: [

        {
            pergunta: "Qual desses lugares eu escolheria para viajar com você?",
            opcoes: [
                "Praia",
                "Serra",
                "Cidade grande",
                "Interior"
            ]
        },

        {
            pergunta: "Qual dessas comidas eu escolheria para comer junto?",
            opcoes: [
                "Pizza",
                "Hambúrguer",
                "Massa",
                "Churrasco"
            ]
        },

        {
            pergunta: "Qual desses presentes eu gostaria mais de ganhar?",
            opcoes: [
                "Uma carta",
                "Uma viagem",
                "Um presente surpresa",
                "Um jantar"
            ]
        },

        {
            pergunta: "Qual dessas atividades eu escolheria para fazer juntos?",
            opcoes: [
                "Assistir filme",
                "Sair para passear",
                "Jogar",
                "Ficar conversando"
            ]
        },

        {
            pergunta: "Qual dessas opções mais combina comigo?",
            opcoes: [
                "Calmo(a)",
                "Aventureiro(a)",
                "Engraçado(a)",
                "Romântico(a)"
            ]
        },

        {
            pergunta: "Qual desses filmes eu provavelmente escolheria?",
            opcoes: [
                "Comédia",
                "Romance",
                "Ação",
                "Terror"
            ]
        },

        {
            pergunta: "Qual dessas coisas eu mais valorizo em uma relação?",
            opcoes: [
                "Confiança",
                "Companheirismo",
                "Carinho",
                "Diversão"
            ]
        },

        {
            pergunta: "Qual desses lugares eu escolheria para um encontro?",
            opcoes: [
                "Restaurante",
                "Cinema",
                "Parque",
                "Praia"
            ]
        },

        {
            pergunta: "Qual dessas características eu mais admiro em você?",
            opcoes: [
                "Seu jeito",
                "Seu humor",
                "Sua dedicação",
                "Seu carinho"
            ]
        },

        {
            pergunta: "Qual dessas coisas eu gostaria de fazer mais vezes com você?",
            opcoes: [
                "Viajar",
                "Assistir filmes",
                "Sair juntos",
                "Conversar"
            ]
        }

    ],


    diversao: [

        {
            pergunta: "Quem provavelmente começaria uma dança do nada?",
            opcoes: [
                "Eu",
                "Você",
                "Os dois",
                "Nenhum"
            ]
        },

        {
            pergunta: "Se pudéssemos viajar amanhã, qual seria o destino?",
            opcoes: [
                "Praia",
                "Montanha",
                "Cidade grande",
                "Interior"
            ]
        },

        {
            pergunta: "Qual tipo de filme combina mais com nossa história?",
            opcoes: [
                "Comédia",
                "Romance",
                "Aventura",
                "Comédia romântica"
            ]
        },

        {
            pergunta: "Quem demoraria mais para escolher um filme?",
            opcoes: [
                "Eu",
                "Você",
                "Os dois",
                "Depende do dia"
            ]
        },

        {
            pergunta: "Se nossa história fosse um filme, qual seria o estilo?",
            opcoes: [
                "Comédia",
                "Romance",
                "Aventura",
                "Tudo misturado"
            ]
        },

        {
            pergunta: "Quem provavelmente esqueceria onde colocou alguma coisa?",
            opcoes: [
                "Eu",
                "Você",
                "Os dois",
                "Nenhum"
            ]
        },

        {
            pergunta: "Se tivéssemos um dia inteiro livre, o que faríamos?",
            opcoes: [
                "Sair",
                "Viajar",
                "Assistir filmes",
                "Ficar juntos em casa"
            ]
        },

        {
            pergunta: "Quem provavelmente faria uma piada no pior momento?",
            opcoes: [
                "Eu",
                "Você",
                "Os dois",
                "Nenhum"
            ]
        },

        {
            pergunta: "Qual atividade seria mais divertida para fazermos juntos?",
            opcoes: [
                "Karaokê",
                "Boliche",
                "Parque",
                "Jogo de tabuleiro"
            ]
        },

        {
            pergunta: "Quem provavelmente escolheria a comida do encontro?",
            opcoes: [
                "Eu",
                "Você",
                "Os dois",
                "Quem estiver com mais fome"
            ]
        }

    ],


    /* =====================================================
       DESAFIOS PREMIUM
       
       Mantidos em formato divertido e não explícito.
    ====================================================== */

    desafiosPremium: [

        "Faça uma declaração engraçada para o outro.",
        "Imite o outro por 20 segundos.",
        "Conte uma lembrança que sempre faz você sorrir.",
        "Escolham uma música e façam uma pequena dança juntos.",
        "Faça um elogio inesperado ao outro.",
        "Crie um apelido divertido para o outro.",
        "Conte uma coisa que você admira no outro.",
        "Façam uma pose engraçada para uma foto juntos.",
        "Escolham um lugar que gostariam de conhecer juntos.",
        "Tentem fazer o outro rir em até 30 segundos.",
        "Conte uma história engraçada que vocês viveram.",
        "Cada um diga uma qualidade do outro.",
        "Façam uma competição de caretas.",
        "Escolham uma música que represente vocês.",
        "Inventem um cumprimento secreto.",
        "Cada um conte um sonho que gostaria de realizar.",
        "Façam uma pergunta que nunca fizeram um ao outro.",
        "Escolham um filme para assistir juntos depois do jogo.",
        "Cada um fale uma coisa pela qual é grato.",
        "Criem juntos um plano para um encontro perfeito."
    ],


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

        "Complete: Uma das melhores coisas da nossa história é..."
    ]

};


/* =========================================================
   DESAFIOS DA ROLETA
========================================================= */

const desafiosRoleta = [

    "Faça uma declaração engraçada para o outro. ❤️",

    "Imite o outro por 20 segundos. 😂",

    "Conte uma lembrança que sempre faz vocês sorrirem. 😊",

    "Escolham uma música e dancem juntos. 💃",

    "Faça um elogio inesperado. ❤️",

    "Crie um apelido divertido para o outro. 😄",

    "Conte uma coisa que você admira no outro. 💕",

    "Façam uma competição de caretas. 😂",

    "Escolham um lugar que gostariam de conhecer juntos. 🌎",

    "Tentem fazer o outro rir primeiro. 🤣"

];


/* =========================================================
   ESTADO DO JOGO
========================================================= */

let jogador1 = "";
let jogador2 = "";

let pontos1 = 0;
let pontos2 = 0;

let categoriaAtual = "";

let perguntasJogo = [];

let perguntaAtual = 0;

let jogadorRespondendo = 1;

let jogadorAdivinhando = 2;

let respostaCorreta = -1;

let rodadasCompletas = 0;

let girando = false;


/* =========================================================
   FUNÇÃO MOSTRAR TELA
========================================================= */

function mostrarTela(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    const tela = document.getElementById(id);

    if (tela) {
        tela.classList.add("ativa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   INÍCIO
========================================================= */

function abrirConfiguracao() {

    mostrarTela("configuracao");

}


/* =========================================================
   VOLTAR AO INÍCIO
========================================================= */

function voltarInicio() {

    mostrarTela("inicio");

}


/* =========================================================
   CONFIGURAÇÃO DOS JOGADORES
========================================================= */

function abrirCategorias() {

    const input1 =
        document.getElementById("nomeJogador1");

    const input2 =
        document.getElementById("nomeJogador2");

    jogador1 =
        input1.value.trim();

    jogador2 =
        input2.value.trim();

    if (!jogador1) {

        alert("Digite o nome do Jogador 1.");

        input1.focus();

        return;
    }

    if (!jogador2) {

        alert("Digite o nome do Jogador 2.");

        input2.focus();

        return;
    }

    if (jogador1.toLowerCase() === jogador2.toLowerCase()) {

        alert("Os jogadores precisam ter nomes diferentes.");

        return;
    }

    mostrarTela("categorias");

}


/* =========================================================
   PREMIUM
========================================================= */

function abrirPremium() {

    fecharModal();

    mostrarTela("premium");

}


function fecharModal() {

    const modal =
        document.getElementById("modalPremium");

    modal.classList.remove("aberto");

}


function assinarPremium() {

    alert(
        "O sistema de assinatura será conectado à Google Play na versão final."
    );

}


/* =========================================================
   INICIAR JOGO
========================================================= */

function iniciarJogo(categoria) {

    categoriaAtual = categoria;

    /*
        Por enquanto o Premium está liberado
        para você conseguir testar o jogo.
    */

    if (
        categoria === "desafiosPremium" ||
        categoria === "romanticoPremium"
    ) {

        /*
            Quando o pagamento estiver conectado,
            essa parte poderá verificar a assinatura.
        */

    }


    if (
        categoria === "desafiosPremium" ||
        categoria === "romanticoPremium"
    ) {

        iniciarDesafios(categoria);

        return;
    }


    perguntasJogo =
        [...perguntas[categoria]];

    embaralhar(perguntasJogo);

    perguntaAtual = 0;

    pontos1 = 0;
    pontos2 = 0;

    rodadasCompletas = 0;

    jogadorRespondendo = 1;

    jogadorAdivinhando = 2;

    iniciarRodada();

}


/* =========================================================
   INICIAR PERGUNTAS
========================================================= */

function iniciarRodada() {

    if (perguntaAtual >= perguntasJogo.length) {

        finalizarJogo();

        return;
    }

    const jogadorResposta =
        jogadorRespondendo === 1
            ? jogador1
            : jogador2;

    const jogadorAdivinha =
        jogadorAdivinhando === 1
            ? jogador1
            : jogador2;


    document.getElementById("passarTitulo").textContent =
        "Passe o celular para " + jogadorResposta;

    document.getElementById("passarTexto").textContent =
        jogadorResposta +
        ", é sua vez de responder secretamente.";


    document.getElementById("respostaTitulo").textContent =
        jogadorResposta +
        ", escolha sua resposta.";


    mostrarTela("passarCelular");

}


/* =========================================================
   CONTINUAR TURNO
========================================================= */

function continuarTurno() {

    const pergunta =
        perguntasJogo[perguntaAtual];

    if (!pergunta) {
        finalizarJogo();
        return;
    }


    if (jogadorRespondendo === 1 ||
        jogadorRespondendo === 2) {

        mostrarRespostaSecreta();

    }

}


/* =========================================================
   MOSTRAR RESPOSTA SECRETA
========================================================= */

function mostrarRespostaSecreta() {

    const pergunta =
        perguntasJogo[perguntaAtual];


    document.getElementById(
        "perguntaSecreta"
    ).textContent =
        pergunta.pergunta;


    const container =
        document.getElementById(
            "opcoesResposta"
        );

    container.innerHTML = "";


    pergunta.opcoes.forEach(
        function(opcao, indice) {

            const botao =
                document.createElement("button");

            botao.className = "opcao";

            botao.textContent =
                opcao;

            botao.onclick = function() {

                escolherRespostaSecreta(indice);

            };

            container.appendChild(botao);

        }
    );


    mostrarTela("respostaSecreta");

}


/* =========================================================
   ESCOLHER RESPOSTA SECRETA
========================================================= */

function escolherRespostaSecreta(indice) {

    respostaCorreta = indice;


    const jogadorAdivinha =
        jogadorAdivinhando === 1
            ? jogador1
            : jogador2;


    document.getElementById(
        "passarTitulo"
    ).textContent =
        "Passe o celular para " +
        jogadorAdivinha;


    document.getElementById(
        "passarTexto"
    ).textContent =
        jogadorAdivinha +
        ", agora tente adivinhar a resposta.";


    mostrarTela("passarCelular");


    setTimeout(
        function() {

            prepararAdivinhacao();

        },
        300
    );

}


/* =========================================================
   PREPARAR ADIVINHAÇÃO
========================================================= */

function prepararAdivinhacao() {

    const pergunta =
        perguntasJogo[perguntaAtual];


    const jogadorAdivinha =
        jogadorAdivinhando === 1
            ? jogador1
            : jogador2;


    document.getElementById(
        "adivinhacaoTitulo"
    ).textContent =
        jogadorAdivinha +
        ", qual você acha que é a resposta?";


    document.getElementById(
        "perguntaAdivinhacao"
    ).textContent =
        pergunta.pergunta;


    const container =
        document.getElementById(
            "opcoesAdivinhacao"
        );

    container.innerHTML = "";


    pergunta.opcoes.forEach(
        function(opcao, indice) {

            const botao =
                document.createElement("button");

            botao.className = "opcao";

            botao.textContent =
                opcao;

            botao.onclick = function() {

                verificarResposta(indice);

            };

            container.appendChild(botao);

        }
    );


    mostrarTela("adivinhacao");

}


/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function verificarResposta(indiceEscolhido) {

    const acertou =
        indiceEscolhido === respostaCorreta;


    if (acertou) {

        if (jogadorAdivinhando === 1) {

            pontos1++;

        } else {

            pontos2++;

        }

    }


    const opcoes =
        document.querySelectorAll(
            "#opcoesAdivinhacao .opcao"
        );


    opcoes.forEach(
        function(botao, indice) {

            botao.disabled = true;

            if (indice === respostaCorreta) {

                botao.classList.add(
                    "correta"
                );

            }

            if (
                indice === indiceEscolhido &&
                indice !== respostaCorreta
            ) {

                botao.classList.add(
                    "errada"
                );

            }

        }
    );


    mostrarResultadoRodada(acertou);

}


/* =========================================================
   RESULTADO DA RODADA
========================================================= */

function mostrarResultadoRodada(acertou) {

    const jogadorAdivinha =
        jogadorAdivinhando === 1
            ? jogador1
            : jogador2;


    const jogadorResposta =
        jogadorRespondendo === 1
            ? jogador1
            : jogador2;


    const pergunta =
        perguntasJogo[perguntaAtual];


    document.getElementById(
        "nomePlacar1"
    ).textContent =
        jogador1;


    document.getElementById(
        "nomePlacar2"
    ).textContent =
        jogador2;


    document.getElementById(
        "pontosPlacar1"
    ).textContent =
        pontos1;


    document.getElementById(
        "pontosPlacar2"
    ).textContent =
        pontos2;


    if (acertou) {

        document.getElementById(
            "resultadoIcone"
        ).textContent =
            "🎉";


        document.getElementById(
            "resultadoTitulo"
        ).textContent =
            "Acertou!";


        document.getElementById(
            "resultadoTexto"
        ).textContent =
            jogadorAdivinha +
            " acertou a resposta de " +
            jogadorResposta +
            "!";


    } else {

        document.getElementById(
            "resultadoIcone"
        ).textContent =
            "😅";


        document.getElementById(
            "resultadoTitulo"
        ).textContent =
            "Não foi dessa vez!";


        document.getElementById(
            "resultadoTexto"
        ).textContent =
            jogadorAdivinha +
            " não conseguiu adivinhar. A resposta era: " +
            pergunta.opcoes[respostaCorreta] +
            ".";

    }


    mostrarTela("resultadoRodada");

}


/* =========================================================
   PRÓXIMA RODADA
========================================================= */

function proximaRodada() {

    perguntaAtual++;

    rodadasCompletas++;


    /*
        Troca os jogadores:

        Quem respondeu agora passa
        a tentar adivinhar.

        Quem adivinhou passa
        a responder.
    */

    const antigoRespondendo =
        jogadorRespondendo;


    jogadorRespondendo =
        jogadorAdivinhando;


    jogadorAdivinhando =
        antigoRespondendo;


    iniciarRodada();

}


/* =========================================================
   FINALIZAR JOGO
========================================================= */

function finalizarJogo() {

    document.getElementById(
        "finalNome1"
    ).textContent =
        jogador1;


    document.getElementById(
        "finalNome2"
    ).textContent =
        jogador2;


    document.getElementById(
        "finalPontos1"
    ).textContent =
        pontos1;


    document.getElementById(
        "finalPontos2"
    ).textContent =
        pontos2;


    const resultado =
        document.getElementById(
            "resultadoFinal"
        );


    if (pontos1 > pontos2) {

        resultado.innerHTML =
            "🏆 <strong>" +
            jogador1 +
            "</strong> venceu!<br>" +
            jogador2 +
            " perdeu e vai para a roleta.";

    } else if (pontos2 > pontos1) {

        resultado.innerHTML =
            "🏆 <strong>" +
            jogador2 +
            "</strong> venceu!<br>" +
            jogador1 +
            " perdeu e vai para a roleta.";

    } else {

        resultado.innerHTML =
            "🤝 Deu empate!<br>" +
            "Os dois podem girar a roleta.";

    }


    mostrarTela("placarFinal");

}


/* =========================================================
   IDENTIFICAR PERDEDOR
========================================================= */

function obterPerdedor() {

    if (pontos1 < pontos2) {

        return jogador1;

    }

    if (pontos2 < pontos1) {

        return jogador2;

    }

    return "Os dois";

}


/* =========================================================
   ROLETA
========================================================= */

function abrirRoleta() {

    const perdedor =
        obterPerdedor();


    const descricao =
        document.getElementById(
            "roletaDescricao"
        );


    if (perdedor === "Os dois") {

        descricao.textContent =
            "Deu empate! Os dois podem participar do desafio.";

    } else {

        descricao.textContent =
            perdedor +
            " perdeu e deve cumprir o desafio!";

    }


    document.getElementById(
        "desafioResultado"
    ).textContent =
        "Clique em GIRAR para começar!";


    document.getElementById(
        "btnGirar"
    ).classList.remove("escondido");


    document.getElementById(
        "btnNovoJogo"
    ).classList.add("escondido");


    mostrarTela("roleta");

}


/* =========================================================
   GIRAR ROLETA
========================================================= */

function girarRoleta() {

    if (girando) {
        return;
    }


    girando = true;


    const wheel =
        document.getElementById(
            "roletaWheel"
        );


    const botao =
        document.getElementById(
            "btnGirar"
        );


    botao.disabled = true;

    botao.textContent =
        "🎡 GIRANDO...";


    const numeroDesafios =
        desafiosRoleta.length;


    const indice =
        Math.floor(
            Math.random() *
            numeroDesafios
        );


    const grausPorDesafio =
        360 /
        numeroDesafios;


    /*
        Muitas voltas + posição aleatória.
    */

    const voltas =
        5 + Math.floor(
            Math.random() * 3
        );


    const anguloFinal =
        (
            voltas * 360
        ) +
        (
            indice *
            grausPorDesafio
        ) +
        (
            grausPorDesafio / 2
        );


    wheel.style.transform =
        "rotate(" +
        anguloFinal +
        "deg)";


    setTimeout(
        function() {

            mostrarDesafio(indice);

        },
        4100
    );

}


/* =========================================================
   MOSTRAR DESAFIO
========================================================= */

function mostrarDesafio(indice) {

    const desafio =
        desafiosRoleta[indice];


    document.getElementById(
        "desafioResultado"
    ).textContent =
        "🔥 " + desafio;


    document.getElementById(
        "btnGirar"
    ).textContent =
        "🎡 GIRAR NOVAMENTE";


    document.getElementById(
        "btnGirar"
    ).disabled =
        false;


    document.getElementById(
        "btnNovoJogo"
    ).classList.remove(
        "escondido"
    );


    girando = false;

}


/* =========================================================
   VOLTAR PARA CATEGORIAS
========================================================= */

function voltarCategoriasDepoisDoJogo() {

    pontos1 = 0;

    pontos2 = 0;

    perguntaAtual = 0;

    rodadasCompletas = 0;

    categoriaAtual = "";

    mostrarTela("categorias");

}


/* =========================================================
   VOLTAR DO PLACAR PARA ROLETA
========================================================= */

function voltarPlacarFinal() {

    mostrarTela("placarFinal");

}


/* =========================================================
   DESAFIOS PREMIUM
========================================================= */

function iniciarDesafios(categoria) {

    const lista =
        perguntas[categoria];


    if (!lista || lista.length === 0) {

        alert(
            "Essa categoria ainda não possui desafios."
        );

        return;
    }


    /*
        Escolhe um desafio aleatório.
    */

    const indice =
        Math.floor(
            Math.random() *
            lista.length
        );


    const desafio =
        lista[indice];


    const perdedor =
        obterPerdedor();


    let mensagem =
        "";


    if (perdedor === "Os dois") {

        mensagem =
            "Desafio para os dois! ❤️\n\n" +
            desafio;

    } else {

        mensagem =
            "Desafio para " +
            perdedor +
            ":\n\n" +
            desafio;

    }


    alert(mensagem);


    mostrarTela("categorias");

}


/* =========================================================
   EMBARALHAR ARRAY
========================================================= */

function embaralhar(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        const temporario =
            array[i];


        array[i] =
            array[j];


        array[j] =
            temporario;

    }


    return array;

}


/* =========================================================
   BLOQUEAR ENTER EM INPUT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            document
                .getElementById("configuracao")
                .classList
                .contains("ativa")
        ) {

            abrirCategorias();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarTela("inicio");

    }
);


var altura = 0 // variáveis globais
var largura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search
nivel = nivel.replace ('?', '')

var criaMosquitoTempo = 1500

if (nivel==='normal') {
     criaMosquitoTempo = 1500
} else if (nivel==='dificil') {
     criaMosquitoTempo = 1000
} else if (nivel==='chucknorris') {
     criaMosquitoTempo = 750
}

function ajustarTamanhoPalcoJogo () {
     altura = window.innerHeight // pegando a altura do browser
     largura = window.innerWidth // pegando a largura do browser
     console.log (largura, altura) // debugando com o console
}

ajustarTamanhoPalcoJogo ()

var cronomentro = setInterval (function () {
     tempo-- // decrementa a variavel tempo que recebeu = 10
     if (tempo < 0) {
          clearInterval (cronomentro) // cronomentro para em 0
          clearInterval (criaMosquito) // para de criar os mosquitos na tela
          window.location.href = 'vitoria.html' // redireciona para outra tela
     } else {
     document.getElementById ('cronomentro').innerHTML = tempo // inclui o cronomentro dentro da tag html
     }
},1000)

function posicaoRandomica () {

     //remover o elemento html (mosquito), caso exista

     if (document.getElementById ('mosquito')) { // busca o elementro atraves do if, se encontrar, a condição vai retorna true para o js
          document.getElementById ('mosquito').remove () // acessa o elemento e remove ele


       if (vidas > 3) {
          window.location.href = 'fim_de_jogo.html'
       } else {
          document.getElementById ('v' + vidas).src = 'imagens/coracao_vazio.png' // contador para ir mudando as imagens que representam as vidas no jogo
          vidas++ // conta
       }

     }
    
     var posicaoX = Math.floor (Math.random () * largura) - 70// Math.floor, arredonda o valor para baixo
     var posicaoY = Math.floor (Math.random () * altura) - 70// Valor aleatorio * altura

     posicaoX = posicaoX < 0 ? 0 : posicaoX // para nao da valor menor que zero e mosquito sumir da janela
     posicaoY = posicaoY < 0 ? 0 : posicaoY

     console.log (posicaoX, posicaoY)


/*CRIANDO ELEMENTO HTML PELO JS */

     var mosquito = document.createElement ('img') 
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = tamanhoAleatorio () + ' ' + ladoAleatorio () // muda o tamanho, aplicando a classe de retorno de acordo com valor randomico gerado na funcao // precisa ter uma string vazia com um espaço dentro para funcionar as duas funções
     mosquito.style.left = posicaoX + 'px'
     mosquito.style.top = posicaoY + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito' 
     mosquito.onclick = function () {
          this.remove ()  // função para remover o mosquito a partir do click
     }

     document.body.appendChild (mosquito)


}

function tamanhoAleatorio () {  // função para mudar o tamanho do mosquito
     
     var classe = Math.floor (Math.random ()*3) // gera um valor randomico entre 0 e 2

     switch (classe) {
          case 0:
               return 'mosquito1'
          case 1:
               return 'mosquito2'
          case 2:
               return 'mosquito3'
     }
}

function ladoAleatorio () {
     var classe = Math.floor (Math.random ()*2) // gera um valor randomico entre 0 e 1

     switch (classe) {
          case 0:
               return 'ladoA'
          case 1:
               return 'ladoB'
        
     }
}

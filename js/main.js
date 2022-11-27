const botoes = document.querySelectorAll('[data-botao]')
const conteudos = document.querySelectorAll('[data-conteudo]')

for(var x=0; x<botoes.length; x++){
    botoes[x].addEventListener("click", function(evento){
        botaoClicado = evento.target
        inativarBotoes()
        ativarBotoes(botaoClicado)              
                               
        for(var x=0; x<conteudos.length; x++){
            conteudoMostrar = conteudos[x]
            conteudoAtual = conteudos[x].dataset.conteudo
            
            if(botaoClicado.dataset.botao === conteudoAtual) {
                conteudoMostrar.classList.remove("hide")                             
            } else {
                conteudoMostrar.classList.add("hide")                              
            }
        } 
    })
}

function inativarBotoes() {
    botoes.forEach(botao => botao.classList.remove("ativa"))              
}    

function ativarBotoes(botao) {
    botao.classList.add("ativa")
}
             

 



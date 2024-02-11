// Muda a barra de progresso lateral conforme o scroll
document.querySelector(`.conj_secoes`).addEventListener('scroll', () => {
    let secao_aberta = Array.from(document.querySelectorAll(`.secao_pagina`)).filter(x => x.getBoundingClientRect().top - 30 <= document.querySelector(`.conj_secoes`).getBoundingClientRect().top && x.getBoundingClientRect().top + 30 >= document.querySelector(`.conj_secoes`).getBoundingClientRect().top)[0]
    let todas_secoes = Array.from(document.querySelectorAll(`.secao_pagina`))
    let index_secao = todas_secoes.indexOf(secao_aberta)

    // Verifica se o index esta correto
    if(index_secao !== -1) {

        // Verifica se é a primeira pagina
        if(index_secao === 0) {
            
            // Oculta a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.remove('ativo')

        }
        else if(index_secao === 1) {

            // Oculta a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.remove('ativo')
            
        }
        else if(index_secao === 2) {

            // Exibe a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.add('ativo')

            // Remove destaque dos pinos
            document.querySelectorAll(`.pino_paginacao`).forEach(x => x.classList.remove('ativo'))
    
            // Ativa o pino correspondente a página
            document.querySelectorAll(`.pino_paginacao`)[0].classList.add('ativo')
            
        }
        else if(index_secao === 3) {

            // Exibe a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.add('ativo')

            // Remove destaque dos pinos
            document.querySelectorAll(`.pino_paginacao`).forEach(x => x.classList.remove('ativo'))
    
            // Ativa o pino correspondente a página
            document.querySelectorAll(`.pino_paginacao`)[1].classList.add('ativo')
            
        }
        else if(index_secao === 4) {

            // Exibe a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.add('ativo')

            // Remove destaque dos pinos
            document.querySelectorAll(`.pino_paginacao`).forEach(x => x.classList.remove('ativo'))
    
            // Ativa o pino correspondente a página
            document.querySelectorAll(`.pino_paginacao`)[2].classList.add('ativo')
            
        }
        else {

            // Oculta a barra de progresso
            document.querySelector(`.aba_paginacao_vertic`).classList.remove('ativo')

        }

    }

})
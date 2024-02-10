// Muda o cenário conforme rolagem
document.querySelector(`.conj_secoes`).addEventListener('scroll', () => {
    let lista = document.querySelector(`.conj_secoes`)
    let sec_calculadora = document.querySelector(`#sec_calculadora`)
    let alt_sec_na_lista = sec_calculadora.offsetTop
    let alt_secao = document.querySelector(`#sec_calculadora`).offsetHeight

    // Saiu da seção
    if(lista.scrollTop >= alt_sec_na_lista + alt_secao) {
        return false
    }
    // Entrou na seção
    else if(lista.scrollTop >= (alt_sec_na_lista - alt_secao)) {

        // Prepara a nova rotação
        let graus_por_pixel = 180 / (alt_secao * 2)
        let angulo = ((lista.scrollTop - alt_sec_na_lista + alt_secao) * graus_por_pixel) - 90
        
        // Prepara a nova escala
        let escala_por_pixel = 1 / (alt_secao * 2)
        let escala = ((lista.scrollTop - alt_sec_na_lista + alt_secao) * escala_por_pixel) + 0.5
        
        // Aplica na calculadora
        document.querySelector(`.conj_calculadora`).style.transform = `rotate(${angulo}deg) scale(${escala})`

    }

})

























// Exibir aba de histórico
let exib_mensag_historic = true
document.addEventListener('click', (e) => {
    let item = (e.target).closest(`#bt_aba_historico`)

    if(item !== null) {
        let aba_histor = document.querySelector(`.aba_historico`)

        // Abre a aba
        if(!aba_histor.classList.contains('ativo')) {
            aba_histor.classList.add('ativo')

            // Exibe a mensagem
            if(exib_mensag_historic) {

                // Desativa a re-apresentação da mensagem
                exib_mensag_historic = false
    
                // Apresenta a mensagem
                setTimeout(() => {
                    aba_histor.querySelector(`.mensagem_anim`).classList.add('ativo')
                    setTimeout(() => {
                        aba_histor.querySelector(`.mensagem_anim`).classList.remove('ativo')
        
                        
                    }, 3000)
                }, 1500)
    
            }

        }

    }
    else {
        let aba_histor = document.querySelector(`.aba_historico`)

        // Fecha a aba e remove a mensagem
        if(aba_histor !== null) {
            aba_histor.classList.remove('ativo')
            aba_histor.querySelector(`.mensagem_anim`).classList.remove('ativo')
        }

    }

})














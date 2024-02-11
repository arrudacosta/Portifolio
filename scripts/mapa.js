// Adiciona o mapa na seção de mapa
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJydWRhY29zdGEiLCJhIjoiY2xkMTJhYmZpMXI4MTNxbW9uYXphOW5mZyJ9.qeWmLHrUg9t0oXtmzP1afQ';
const map = new mapboxgl.Map({
	container: 'cont_mapa', // container ID
	style: 'mapbox://styles/arrudacosta/clr4cqqsz00xo01qud0ghg9ms', // style URL
	center: [-38.53436421339557, -3.7759184237399555], // starting position [lng, lat]
	zoom: 9, // starting zoom
})



// Muda o cenário conforme rolagem
let secao_mapa_fixada = false
document.querySelector(`.conj_secoes`).addEventListener('scroll', () => {
    let lista = document.querySelector(`.conj_secoes`)
    let sec_mapeamento = document.querySelector(`#sec_mapeamento`)
    let alt_sec_na_lista = sec_mapeamento.offsetTop
    let alt_secao = document.querySelector(`#sec_mapeamento`).offsetHeight

    // Saiu da seção
    if(lista.scrollTop >= alt_sec_na_lista + alt_secao) {
        return false
    }
    // Entrou na seção
    else if(lista.scrollTop >= (alt_sec_na_lista - alt_secao)) {


        // Prepara a nova rotação
        let graus_por_pixel = 180 / (alt_secao * 2)
        let angulo = ((lista.scrollTop - alt_sec_na_lista + alt_secao) * graus_por_pixel) - 90
        
        // Aplica no mapa
        document.querySelector(`.conj_mapa`).style.transform = `perspective(900px) rotateX(${angulo}deg) rotateY(0deg) rotateZ(0deg)`

        // ----------------------------------------------------------------------------------------------------

        // Atualiza o mapa
        map.resize()

        // Verifica se chegou na zona de ampliação/redução
        if(alt_sec_na_lista <= lista.scrollTop + 150 && alt_sec_na_lista >= lista.scrollTop - 150) {
            let escala_por_pixel = 30 / 150
            let escala = 100 - (Math.abs(alt_sec_na_lista - lista.scrollTop) * escala_por_pixel)

            // Zona de ampliação
            if(alt_sec_na_lista - 30 >= lista.scrollTop) {
                document.querySelector(`.conj_mapa`).style.width = `${escala}%`
                document.querySelector(`.conj_mapa`).style.height = `${escala}%`
                document.querySelector(`.conj_mapa`).classList.remove('ativo')
            }
            // Zona do meio
            else if(alt_sec_na_lista - 30 <= lista.scrollTop && alt_sec_na_lista + 30 >= lista.scrollTop) {
                document.querySelector(`.conj_mapa`).style.width = `100%`
                document.querySelector(`.conj_mapa`).style.height = `100%`
                document.querySelector(`.conj_mapa`).classList.add('ativo')
            }
            // Zona de redução
            else if(alt_sec_na_lista + 30 <= lista.scrollTop) {
                document.querySelector(`.conj_mapa`).style.width = `${escala}%`
                document.querySelector(`.conj_mapa`).style.height = `${escala}%`
                document.querySelector(`.conj_mapa`).classList.remove('ativo')
            }
            
        }

    }

})








































































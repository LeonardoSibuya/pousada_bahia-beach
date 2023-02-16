AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    //BOTAO DA SECTION DE FOTOS
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas()
            aba.classList.add('gallery__fotos__tab__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('gallery__fotos__buttons__btn--is-active')
        })
    }

    //INTERAÇÃO COM OS VALORES DA SECTION RESERVE
    const select = document.getElementById("select")
    const span = document.getElementById('valor')

    select.addEventListener('change', function() {
        const valorSelecionado = select.value

        if (valorSelecionado === "opcao1") {
            span.innerText = "90,00"
        } else {
            span.innerText = "300,00"
        }
    })
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('gallery__fotos__buttons__btn--is-active')
    }
}

function escondeAbas() {
    const tabscontainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabscontainer.length; i++) {
        tabscontainer[i].classList.remove('gallery__fotos__tab__list--is-active')
    }
}
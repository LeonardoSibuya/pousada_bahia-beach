AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    //BOTAO DA SECTION DE FOTOS
    const buttons = document.querySelectorAll('[data-tab-button]')

    buttons.forEach( button => {
        button.addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas()
            aba.classList.add('gallery__fotos__tab__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('gallery__fotos__buttons__btn--is-active')
        })
    })

    //INTERAÇÃO COM OS VALORES DA SECTION RESERVE
    const select = document.getElementById("select")
    const span = document.getElementById('valor')

    select.addEventListener('change', function() {
        const valorSelecionado = select.value

        if (valorSelecionado === "opcao1") {
            span.innerText = "80,00"
        } else {
            span.innerText = "300,00"
        }
    })

    //FUNÇÃO DE ABRIR IMAGENS DA GALERIA
    const images = document.querySelectorAll('.gallery__fotos__tab__list__item__img')

    images.forEach(image => {
        image.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
            const imageLarge = document.createElement('img');
            overlay.appendChild(imageLarge);
            imageLarge.src = this.src;

            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            overlay.appendChild(closeButton);
            closeButton.innerHTML = '&times;';
            
            closeButton.addEventListener('click', function() {
                overlay.remove();
            })

            document.body.appendChild(overlay)
        })
    })

    //NAV TOGGLE
        const botaoNav = document.getElementById('botao-nav')
        const navList = document.getElementById('nav-list')
    
        botaoNav.addEventListener('click', () => {
        navList.classList.toggle('show')
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
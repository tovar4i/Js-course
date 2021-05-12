let result = inputMoney.value
let cart = 0
const [...place] = document.querySelectorAll('.kino__row__item')
const price = {
    basic: 100,
    vip: 150
}

for (let elem of place) {

    elem.onclick = function() {
        console.log(elem.classList.contains('readyToBuy'))
        if (!elem.classList.contains('busy-buy')) {
            if (elem.classList.contains('readyToBuy') && !elem.classList.contains('busy')) {
                elem.classList.add('busy')
                if (elem.classList.contains('kino__row__item--vip')) {
                    cart = cart + price.vip
                } else {
                    cart = cart + price.basic
                }
            }
        }
    }
}

buyTicket.onclick = function() {
    modalMoney.style.display = 'block'
    setTimeout(function() {
        modalMoney.style.opacity = 1
    }, 0)
}

choosePlace.onclick = function() {
    result = inputMoney.value
    if (result < price.basic) {
        alert('Not enough money')
    } else {
        place.map(function(elem, index) {
            // elem.style.backgroundColor = '#ccc'
            if (elem.classList.contains('kino__row__item--vip')) {
                if (result >= price.vip) {
                    elem.style.backgroundColor = 'green'
                    elem.classList.add('readyToBuy')
                }
            } else {
                if (result >= price.basic) {
                    elem.style.backgroundColor = 'green'
                    elem.classList.add('readyToBuy')
                }
            }
        })
        modalMoney.style.opacity = 0
        setTimeout(function() {
            modalMoney.style.display = 'none'
        }, 200)
    }
}

submitOr.onclick = function() {
    modalOrder.style.display = 'block'
    moneyOrder.innerHTML = cart
    moneyClient.innerHTML = result
    setTimeout(function() {
        modalOrder.style.opacity = 1
    }, 0)
    cart = 0
}

// Submit order - forms
payOrder.onclick = function() {
    if (cart < result) {
        place.map(function(elem, index) {
            elem.classList.remove('readyToBuy')
            elem.style.backgroundColor = '#ccc'
            if (elem.classList.contains('busy')) {
                elem.classList.remove('busy')
                elem.classList.add('busy-end')
            }
        })
        modalThanks.style.display = 'block'
        modalOrder.style.opacity = 0
        setTimeout(function() {
            modalThanks.style.opacity = 1
            modalOrder.style.display = 'none'
            setTimeout(function() {
                modalThanks.style.opacity = 0
                setTimeout(function() {
                    modalThanks.style.display = 'none'
                }, 0)
            }, 1500)
        }, 0)

    }
}
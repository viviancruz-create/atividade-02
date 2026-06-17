//PEGANDO ELEMENTOS DO DOM
const divQ01 = document.querySelector('#div-q01')

for (i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        divQ01.innerHTML += `${i} <br>`

    }
}
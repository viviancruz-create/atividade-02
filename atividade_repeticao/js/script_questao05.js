// //PEGAR ELEMENTOS DO DOM
const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const inputRenda = document.querySelector('#renda')
const btnVerifica = document.querySelector('#btn-verifica')
const divResultado = document.querySelector('#div-resultado')

// Variáveis de contagem da Questão 5
let totalPessoas = 0
let somaSalarioHomens = 0
let totalHomens = 0
let mulheresGanhamEntre1000e3000 = 0
let homensGanhamMais2000 = 0
let mulheresGanhamMais2000 = 0

btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inputIdade.value)
        let sexo = inputSexo.value.toUpperCase().trim()
            let renda = Number(inputRenda.value)

                // Soma +1 no total de pessoas que já responderam
                    totalPessoas++

                        // Se for MASCULINO
                            if (sexo === 'MASCULINO') {
                                    totalHomens++
                                            somaSalarioHomens = somaSalarioHomens + renda // Acumula o salário para a média
                                                    if (renda >= 2000) {
                                                                homensGanhamMais2000++
                                                                        }
                                                                            }
                                                                                
                                                                                    // Se for FEMININO
                                                                                        if (sexo === 'FEMININO') {
                                                                                                if (renda >= 1000 && renda <= 3000) {
                                                                                                            mulheresGanhamEntre1000e3000++
                                                                                                                    }
                                                                                                                            if (renda >= 2000) {
                                                                                                                                        mulheresGanhamMais2000++
                                                                                                                                                }
                                                                                                                                                    }

                                                                                                                                                        // Calcula a média de salário dos homens (evita divisão por zero se não houver homens)
                                                                                                                                                            let mediaSalarioM = totalHomens > 0 ? (somaSalarioHomens / totalHomens) : 0

                                                                                                                                                                // Se chegar a 20 pessoas, trava tudo igual o professor fez na foto
                                                                                                                                                                    if (totalPessoas == 20) {
                                                                                                                                                                            inputIdade.setAttribute('disabled', 'disabled')
                                                                                                                                                                                    inputSexo.setAttribute('disabled', 'disabled')
                                                                                                                                                                                            inputRenda.setAttribute('disabled', 'disabled')
                                                                                                                                                                                                    btnVerifica.setAttribute('disabled', 'disabled')
                                                                                                                                                                                                        }

                                                                                                                                                                                                            // Mostra o resultado na div usando as crases ``
                                                                                                                                                                                                                divResultado.innerHTML = `
                                                                                                                                                                                                                        Habitantes pesquisados: ${totalPessoas} de 20 <br><br>
                                                                                                                                                                                                                                a) Total de pessoas pesquisadas: ${totalPessoas} <br>
                                                                                                                                                                                                                                        b) Média de salário dos homens: R$ ${mediaSalarioM.toFixed(2)} <br>
                                                                                                                                                                                                                                                c) Mulheres com salário entre R$ 1000 e R$ 3000: ${mulheresGanhamEntre1000e3000} <br>
                                                                                                                                                                                                                                                        d) Ganham R$ 2000 ou mais -> Homens: ${homensGanhamMais2000} | Mulheres: ${mulheresGanhamMais2000}
                                                                                                                                                                                                                                                            `

                                                                                                                                                                                                                                                                // Limpa as caixas para o próximo habitante digitar
                                                                                                                                                                                                                                                                    inputIdade.value = ''
                                                                                                                                                                                                                                                                        inputSexo.value = ''
                                                                                                                                                                                                                                                                            inputRenda.value = ''
                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                            
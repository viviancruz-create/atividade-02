// //PEGAR ELEMENTOS DO DOM
const inputNome = document.querySelector('#nome')
const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const btnVerifica = document.querySelector('#btn-verifica')
const divResultado = document.querySelector('#div-resultado')

let totalPessoas = 0
let menores18 = 0
let maiores65 = 0
let entre18e65 = 0
let totalF = 0
let totalM = 0

btnVerifica.addEventListener('click', (evt) => {
    let nome = inputNome.value
        let idade = Number(inputIdade.value)
            let sexo = inputSexo.value.toUpperCase().trim()

                // Soma +1 no total de pessoas cadastradas
                    totalPessoas++

                        // Regras de IDADE (Questão 4)
                            if (idade < 18) {
                                    menores18++
                                        } else if (idade > 65) {
                                                maiores65++
                                                    } else {
                                                            entre18e65++
                                                                }

                                                                    // Regras de SEXO (Questão 4)
                                                                        if (sexo === 'FEMININO') {
                                                                                totalF++
                                                                                    } else if (sexo === 'MASCULINO') {
                                                                                            totalM++
                                                                                                }

                                                                                                    // Se chegar a 20 pessoas, desativa o botão e os campos (igual o professor fez)
                                                                                                        if (totalPessoas == 20) {
                                                                                                                inputNome.setAttribute('disabled', 'disabled')
                                                                                                                        inputIdade.setAttribute('disabled', 'disabled')
                                                                                                                                inputSexo.setAttribute('disabled', 'disabled')
                                                                                                                                        btnVerifica.setAttribute('disabled', 'disabled')
                                                                                                                                            }

                                                                                                                                                // Mostra os resultados na div
                                                                                                                                                    divResultado.innerHTML = `
                                                                                                                                                            Pessoas cadastradas: ${totalPessoas} de 20 <br><br>
                                                                                                                                                                    a) Idade inferior a 18: ${menores18} <br>
                                                                                                                                                                            b) Idade acima de 65: ${maiores65} <br>
                                                                                                                                                                                    c) Entre 18 e menor que 65: ${entre18e65} <br>
                                                                                                                                                                                            d) Feminino: ${totalF} | Masculino: ${totalM}
                                                                                                                                                                                                `

                                                                                                                                                                                                    // Limpa os campos para a próxima pessoa
                                                                                                                                                                                                        inputNome.value = ''
                                                                                                                                                                                                            inputIdade.value = ''
                                                                                                                                                                                                                inputSexo.value = ''
                                                                                                                                                                                                                })
                                                                                                                                                                                                                
                                
                                                                                            
                                                                                                                                                            
    
    


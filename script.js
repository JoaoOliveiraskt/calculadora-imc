const calculate = document.getElementById('calculate')

const calcImc = () => {
    const userName = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result')
    
    if (weight !== '' && height !== '') {
        
        const imc = (weight / (height * height)).toFixed(2)

        let classificacao = ''

        if(imc < 17) {
            classificacao = 'Muito abaixo do peso'
        } else if (imc < 18.49){
            classificacao = 'Abaixo do peso'
        } else if (imc < 24.99 ) {
           classificacao = 'Peso normal'
        } else if (imc < 29.99) {
            classificacao = 'Acima do peso'
        } else if(imc < 34.99) {
            classificacao = 'Obesidade |'
        } else if (imc < 39.99) {
            classificacao = 'Obesidade || (severa)'
        } else {
            classificacao = 'Obesidade ||| (mórbida)'
        }

        result.textContent = `Olá ${userName}, seu IMC é ${imc} e sua classificação é ${classificacao}`
        result.style.color = 'black'
    } else {
        result.textContent = 'Preencha os campos necessários!'
        result.style.color = 'red'
    }
}

calculate.addEventListener('click', calcImc);
const defaultLanguage = 'pt';
let currentLanguage = defaultLanguage;

function setDataPortuguese(){
    const translatable = document.querySelectorAll('.translate');
    translatable.forEach(element=>{
        element.setAttribute('data-pt', element.textContent)
    })

}

function switchLanguage() {
    const elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach( (element) => {
        let translationKey = 'data-' + currentLanguage;
        element.innerText = element.getAttribute(translationKey);
    });

    currentLanguage = (currentLanguage === 'en') ? 'pt' : 'en';

    if(currentLanguage === 'en'){
        document.querySelector('#btnEn').classList.remove('d-none')
        document.querySelector('#btnPt').classList.add('d-none')
    }else{
        document.querySelector('#btnPt').classList.remove('d-none')
        document.querySelector('#btnEn').classList.add('d-none')
    }
}

async function fetchExchangeRates() {
    const apiKey = '97db30b9fcf9884d141559023806a052';
    const url = `'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=YOUR_APIKEY'${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        // Update the displayed exchange rates
        // document.getElementById('dollarContainer').innerText = `Dollar: ${data.rates.USD}`;
        // document.getElementById('meticalContainer').innerText = `Metical: ${data.rates.MZN}`;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}


fetchExchangeRates();
setDataPortuguese()
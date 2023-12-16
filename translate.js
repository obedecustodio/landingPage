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
}

// document.querySelectorAll(".switchLang").forEach(e => e.addEventListener('click',()=>{
//     switchLanguage()
//     console.log("translste")
// } ))

setDataPortuguese()
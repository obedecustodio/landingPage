var defaultLanguage = 'pt';
var currentLanguage = defaultLanguage;


function switchLanguage() {
    var elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach(function (element) {
        var translationKey = 'data-' + currentLanguage;
        element.innerHTML = element.getAttribute(translationKey);
    });

    currentLanguage = (currentLanguage === 'en') ? 'pt' : 'en';
}
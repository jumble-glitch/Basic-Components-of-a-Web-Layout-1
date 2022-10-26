// alert("link check")

var input = document.querySelector('textarea[name="input"]');
var btn = document.querySelector('.btn');
var output = document.querySelector('textarea[name="output"]');

btn.addEventListener('click', clickHandler);

function errorHandler(error){
    alert("Error Ocurred \n" + error)
}

function clickHandler(){
    var url = "https://api.funtranslations.com/translate/minion.json?text=";
    text = url+input.value
    fetch(text)
        .then(response => response.json())
        .then(json => {
            var tranlatedText = (json.contents.translated)
            output.innerText = tranlatedText
        })
        .catch(errorHandler)
}
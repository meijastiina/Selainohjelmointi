// Luodaan muuttuja merkkilaskurille
let merkkienLkm = 0;
let textareaElement = document.getElementById('textareaElement');
// Tapahtumankäsittelijä textarean keypress-tapahtumalle
textareaElement.onkeyup = function() {
    merkkienLkm = textareaElement.value.length;
    document.getElementById('merkkienLkm').innerHTML = merkkienLkm; 
}
// Vakio arvausten maksimimäärälle
const ARVAUS_MAX = 10;
// Muuttuja käytettyjen arvausten lukumäärälle
let arvaustenLkm = 0;
// Muuttuja arvattavalle sanalle
let arvattavaSana = "JavaScript";

// Laitetaan arvausmaksimi ja -lukumäärä niille kuuluviin paikkoihin
document.getElementById('arvaustenMax').innerHTML = ARVAUS_MAX;
let arvaustenLkmElementti = document.getElementById('arvaustenLkm');
arvaustenLkmElementti.innerHTML = arvaustenLkm;

// Laitetaan arvattavan sanan kirjainten määrä näkyville
let sanaElementti = document.getElementById('word');
// Loopataan arvattava sana
let sana = ''; // Muuttuja johon rakennetaan näytettävä sana
for (let i = 0; i < arvattavaSana.length; i++) {
    sana += "_";
}
// Päivitetään sana sivulle
sanaElementti.innerHTML = sana;
// Tehdään tapahtumakäsittelijä arvauspainikkeelle
document.getElementById('btnGuess').onclick = function () {
    // Haetaan muuttujaan arvattu kirjain
    let arvattuKirjainElementti = document.getElementById('guessedLetter');
    // Käydään silmukassa läpi sanaa kirjain kerrallaan 
    for ( let i = 0; i < arvattavaSana.length; i++ ) {
        // Tarkistetaan vain kirjaimet, joita ei ole vielä arvattu
        if (arvattavaSana.charAt(i) != "_") {
            // Ja jos kirjain vastaa arvattua kirjainta asetetaan se siihen
            if ( arvattavaSana.charAt(i) == arvattuKirjainElementti.value ) {
                sana = sana.substring(0, i) + arvattuKirjainElementti.value + sana.substring(i +1);
            }
        }
    }
    // Päivitetään sana sivulle
    sanaElementti.innerHTML = sana;
    // Kasvatetaan arvausten lukumäärää
    arvaustenLkm++;
    // Tyhjennetään arvauskenttä
    arvattuKirjainElementti.value = '';
    // Päivitetään sivulle arvausten lukumäärä
    arvaustenLkmElementti.innerHTML = arvaustenLkm;
    // Tarkistetaan onko jo viimeinen arvaus käytetty
    if ( arvaustenLkm == ARVAUS_MAX ) {
        // Näytetään game over -teksti
        document.getElementById('guess').innerHTML = "<h2>GAME OVER!</h2>";
    }
    // Tarkistetaanko onko sana jo kokonaan arvattu
    if ( !sana.includes('_') ) {
        // Näytetään voitto -teksti
        document.getElementById('guess').innerHTML = "<h2>SANA ARVATTU - VOITIT PELIN!</h2>"
    }
    return false;
}
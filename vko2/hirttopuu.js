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
    // Tarkistetaan löytyykö sanasta arvattua kirjainta
    // Tehdään vertailusta case insensitiivinen
    let arvatunKirjaimenIndeksi = arvattavaSana.toLowerCase().indexOf(arvattuKirjainElementti.value.toLowerCase()); // Tässä muuttujassa pidetään kirjaa siitä mistä indeksistä arvattukirjain löytyi
    while (arvatunKirjaimenIndeksi > -1) {
        // Arvattu kirjain löytyy sanasta
        // Korvataan alaviiva arvatulla kirjaimella
        sana = sana.substring(0, arvatunKirjaimenIndeksi) + arvattuKirjainElementti.value + sana.substring(arvatunKirjaimenIndeksi + 1);
        // Siirrytään seuraavaan jos sanassa on kirjain useampaan kertaan
        arvatunKirjaimenIndeksi = arvattavaSana.toLowerCase().indexOf(arvattuKirjainElementti.value.toLowerCase(), arvatunKirjaimenIndeksi + 1);
    }
    
    // Päivitetään sana sivulle
    sanaElementti.innerHTML = sana;
    // Kasvatetaan arvausten lukumäärää jos arvattua kirjainta ei löydy
    if ( arvattavaSana.toLowerCase().indexOf(arvattuKirjainElementti.value.toLowerCase()) == -1) {
        let liElement = document.createElement('li');
        liElement.innerHTML = arvattuKirjainElementti.value;
        document.getElementsByTagName('ul')[0].appendChild(liElement);
        arvaustenLkm++;
    }
    // Tyhjennetään arvauskenttä
    arvattuKirjainElementti.value = '';
    // Päivitetään sivulle arvausten lukumäärä
    arvaustenLkmElementti.innerHTML = arvaustenLkm;
    // Tarkistetaanko onko sana jo kokonaan arvattu
    if ( !sana.includes('_') ) {
        // Näytetään voitto -teksti
        document.getElementById('guess').innerHTML = "<h2>SANA ARVATTU - VOITIT PELIN!</h2>"
    } else {
        // Tarkistetaan onko jo viimeinen arvaus käytetty
        if ( arvaustenLkm == ARVAUS_MAX ) {
            // Näytetään game over -teksti
            document.getElementById('guess').innerHTML = "<h2>GAME OVER!</h2>";
        }
    }
    return false;
}
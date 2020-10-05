// Tapahtumankäsittelijä painikkeen klikkaukselle
document.getElementById('btnKaanna').onclick = function() {
    // Luodaan muuttuja käännetylle sanalle ja asetetaan se tyhjäksi merkkijonoksi
    let kaannetty = '';
    // Luodaan muuttuja käännettävälle ja asetetaan siihen käyttäjän syöttämä merkkijono
    let kaannettava = document.getElementById('merkkijono').value;
    for ( let i = kaannettava.length - 1; i >= 0 ; i-- ) {
        kaannetty += kaannettava[i];
    }
    // Päivitetään käännetty merkkijono sivulle
    document.getElementById('kaannetty').innerHTML = kaannetty;
    // Estetään lomakkeen lähettäminen
    return false;
}
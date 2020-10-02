// Määritellään maksimi ja minimi
const max = 6; // Nämä ovat vakioita (arvo ei muutu)
const min = 1;

document.getElementById('heita').onclick = function () {
    // Arvotaan kokonaisluku väliltä 1-6
    let arvottuNumero = Math.floor(Math.random() * max) + min; 
    document.getElementById('heitettyNumero').innerHTML = arvottuNumero;
}
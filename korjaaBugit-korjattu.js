/*
Syyskuu 2020 tulostus
Tulosta allaolevaan laatikkoon syyskuun 2020 kalenterinäkymä.
*/
// Luodaan table-elementti kalenteria varten
let calendar = document.createElement("table");
calendar.style = "border: 1px solid black; border-collapse: collapse";
// Luodaan muuttuja, jossa syyskuun päivien lukumäärä
let daysInMonth = 30
// Luodaan muuttuja, jossa tieto mikä viikonpäivä on kuukauden ensimmäinen
let firstDay = new Date('2020/09/01');
let firstWeekday = firstDay.getDay();
// Luodaan muuttuja, jossa pidetään kirjaa siitä minkä päivän kohdalla ollaan menossa ja alustetaan se kuukauden ensimmäiseksi päiväksi.
let currentDay = firstDay.getDate();
// Luodaan taulukkoon solut niin että rivejä tulee viisi 
for (let rowNumber = 0; rowNumber < 5; rowNumber++) {
    // Luodaan tr-elementti jokaiselle riville
    let row = document.createElement('tr');
    // Luodaan taulukkoon solut niin, että jokaisella rivillä on seitsemän solua
    for (let col = 0; col < 7; col++) {
        // Luodaan td-elementit
        let cell = document.createElement('td');
        cell.style = "border: 1px solid black; padding: 5px;"
        // Jos ollaan ensimmäisellä rivillä ja sarakkeella joka on pienempi kuin kuukauden ensimmäinen päivä (eli viikon päivät jotka ovat edellisen kuukauden puolella) jätetään solu tyhjäksi
        if ( !(rowNumber == 0 && col < firstWeekday)) {
            // Ja kunhan käsiteltävä päivä on pienempi kuin kuukauden päivien lukumäärä
            if (currentDay <= daysInMonth) {
                // Tulostetaan soluun päivä
                cell.innerHTML = currentDay;
                currentDay++;
            }
        } 
        // Lisätään solut riville
        row.appendChild(cell);;;
    }
    // Lisätään rivi kalenteriin (table-elementtiin).
    calendar.appendChild(row);
}
// Lisätään kalenteri sille annettuun paikkaan.
document.getElementById('september2020').appendChild(calendar);
let table = document.createElement('table');
table.style = "text-align: right;"
const multiplier = 5;
for (let i = 0; i <= 10; i++) {
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.innerHTML = i;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = " * "
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = multiplier;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = " = ";
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = i * multiplier;
    row.appendChild(cell); 
    table.appendChild(row);
}
document.getElementById('kertotaulu').appendChild(table);
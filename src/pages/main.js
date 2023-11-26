const form = document.getElementById('formulario')
const contacts = [];
const numbers = [];
let inputName = document.getElementById('input-name');
let inputNumber = document.getElementById('input-number');
form.addEventListener('submit', function(e) {

    e.preventDefault();
    updateTable();
})

function addRow() {
    let row = '<tr>'
    row += `<td>${inputName.value}</td>`
    row += `<td>${inputNumber.value}</td>`
    row += '</tr>'

    inputName.value = '';
    inputNumber.value = '';

    return row
}

function updateTable () { 
    if (contacts.includes(inputName.value) || numbers.includes(inputNumber.value)) {
        alert('O contato/número já está salvo.')
    } else if (inputNumber.value.length < 8 || inputNumber.value.length > 11 ) {
        alert('O tamanho do número é inválido.')
    } else {    
        let tableBody = document.getElementById('table-body');
        contacts.push(inputName.value);
        numbers.push(inputNumber.value);
        let row = addRow()
        tableBody.innerHTML += row
    }
}
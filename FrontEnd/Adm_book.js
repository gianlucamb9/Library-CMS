$(document).ready(function () {
    debugger;
    loadMenu();

    $('#addMenuBtn').on('click', function () {
        debugger;
        const book_Name = $('#book').val();
        const quantity = $('#amount').val();
        const price = $('#price').val();
        const category = $('#categ').val();
        const book_Descr = $('#description').val();
        const file = $('#file').val();
       

        $.ajax({
            url: 'http://localhost/php/Library/BackEnd/Adm_book.php',
            method: 'POST',
            data: JSON.stringify({ book_Name, quantity, price, category, book_Descr, file }),
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                debugger;
                loadMenu();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });

});


const deleteHandler = (id) =>{
    debugger;
    $.ajax({
        url: 'http://localhost/php/Library/BackEnd/Adm_book.php',
        method: 'DELETE',
        data: JSON.stringify({ id }),
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
            debugger;
            loadMenu();
        },
        error: function (error) {
            console.log(error);
        },
    });
}



const EditHandler = (id, book_Name, quantity, price, categ, book_Descr) =>{
    debugger;
    let labelName = document.querySelector('#labelName');
    labelName.hidden = false;
    let name = document.querySelector('#name');
    name.hidden = false;
    name.value = book_Name;

    let labelAmount = document.querySelector('#labelAmount');
    labelAmount.hidden = false;
    let amount = document.querySelector('#amountUpd');
    amount.hidden = false;
    amount.value = quantity;

    let labelPrice = document.querySelector('#labelPrice');
    labelPrice.hidden = false;
    let prices = document.querySelector('#priceUpd');
    prices.hidden = false;
    prices.value = price;

    let labelCateg = document.querySelector('#labelCateg');
    labelCateg.hidden = false;
    let categs = document.querySelector('#categUpd');
    categs.hidden = false;
    categs.value = categ;

    let saved = document.querySelector('#updateBtn');
    saved.hidden = false;
    saved.className = "btn btn-primary";
    saved.addEventListener('click', (e) => {
        book_Name = document.querySelector('#name').value;
        quantity = document.querySelector('#amount').value;
        price = document.querySelector('#price').value;
        categ = document.querySelector('#categ').value;
        debugger;
        $.ajax({
            url: 'http://localhost/php/Library/BackEnd/Adm_book.php',
            method: 'PUT',
            data: JSON.stringify({ id, book_Name, quantity, price, categ, book_Descr }),
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                labelName.hidden = true;
                labelAmount.hidden = true;
                labelPrice.hidden = true;
                name.hidden = true;
                amount.hidden = true;
                prices.hidden = true;
                categs.hidden = true;
                saved.hidden = true;
                debugger;
                loadMenu();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });

}

const buttonPoper = (tr)=>{
    debugger;
    let td = document.createElement("td");
    let editBt = document.createElement("button");
    editBt.innerText = "Edit";
    editBt.className = "btn btn-primary";
    let delBt = document.createElement("button");
    delBt.innerText = "Delete";
    delBt.className = "btn btn-danger";
    td.append(editBt,delBt);
    tr.append(td);
    editBt.addEventListener("click", ()=>{
        debugger;
        EditHandler(tr.children[0].innerText, tr.children[1].innerText, tr.children[2].innerText, tr.children[3].innerText,tr.children[4].innerText,tr.children[5].innerText);
    });
    delBt.addEventListener("click", ()=>{
        deleteHandler(tr.children[0].innerText);
    });
    return tr;
 }

const tablePoper = (data) => {
    debugger;
    document.querySelector("table").removeAttribute("style");
    for (let m of data) {
       let tr = document.createElement("tr");
       for (let p in m) {
          let td = document.createElement("td");
          td.innerText = m[p];
          tr.append(td);
       }
       document.querySelector("tbody").append(buttonPoper(tr));
    }
 }

function loadMenu() {
    debugger;
    $.ajax({
        method: 'GET',
        url: 'http://localhost/php/Library/BackEnd/Adm_book.php',
        success: function (response) {
            debugger;
            console.log(response);
            const menuList = $('#menuTable');
            menuList.empty();

            tablePoper(response);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    debugger;
    let data = new FormData(event.target);
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/php/LibrarySystem/BackEnd/login.php");
    xhttp.send(data);
    xhttp.onload = function(){
        debugger;
        console.log(xhttp.responseText);
        switch(xhttp.responseText){
            case "Admin":
                location.replace("./Adm_book.html");
                break;
            case "Customer":
                location.replace("./home.html");
                break;
            case "Staff":
                location.replace("./Adm_book.html");
        }
        sessionStorage.setItem("id",xhttp.responseText);
    }
})


// $(document).ready(function () {
//     debugger;
//     $('#submitLogin').on('click', function () {
//         debugger;
//         const email = $('#formEmail').val();
//         const password = $('#formPass').val();
//         const mode = "login";

//         $.ajax({
//             url: 'http://localhost/php/LibrarySystem/BackEnd/login.php',
//             method: 'POST',
//             data: JSON.stringify({ mode, email, password }),
//             contentType: 'application/json',
//             success: function (response) {
//                 debugger;
//                 console.log(response);
//             },
//             error: function (error) {
//                 console.log(error);
//             },
//         });
//     });

// });

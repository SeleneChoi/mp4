var reservationForm = document.getElementById("reservation");
var overlay1 = document.querySelector(".overlay1");
var overlay2 = document.querySelector(".overlay2");


function showForm() {
    reservationForm.style.display = 'flex'
    overlay1.style.opacity = '0.5'
    overlay2.style.opacity = '0.5'

}

function closeForm() {
    reservationForm.style.display = 'none'
    overlay1.style.opacity = '1'
    overlay2.style.opacity = '1'
}

function showDetail() {
    
}
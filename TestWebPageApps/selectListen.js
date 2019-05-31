document.addEventListener("DOMContentLoaded", function(event) {
    let dd = document.querySelector('select');

    function chBoxColor() {
       alert('You selected an item from the dropdown box');
    }

    dd.onselect = chBoxColor;
});
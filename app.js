'use strict';

const btn_start = document.querySelector('.btn_start');
const score = 0;
const intput_name = document.getElementById("name_txt");



btn_start.addEventListener('click', function() {
    window.location.href = 'video1.html'; // Chemin relatif à votre fichier actuel
    localStorage.setItem('score',score);
    let name = intput_name.value 
    localStorage.setItem("Name",name)
   
    console.log('ACTIVER');
});


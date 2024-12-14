'use strict';

const btn_start = document.querySelector('.btn_start');
const score = 0

btn_start.addEventListener('click', function() {
    window.location.href = 'video1.html'; // Chemin relatif à votre fichier actuel
    localStorage.setItem('score',score);
   
    console.log('ACTIVER');
});

'use strict';

// Element
const score = parseInt(localStorage.getItem('score'));
const see_score = document.getElementById('result');
const Ygood = document.getElementById("Ygood")

//Var
const green = '#137809' //  #137809;
const yellow = '#b5b811'//    #b5b811;
const red = '#b81111'   //   #b81111
const Pname = localStorage.getItem("Name")


see_score.innerText = score;

if (score >7){
//8-9-10
see_score.style.color = green;

}else if(score >4){
//5-6-7
see_score.style.color = yellow;


}else{
//0-5

see_score.style.color = red;
}

const phrase = Pname +",pour avoir obtenue le score de 10, vous obtenez les félicitation du jury"


/*
btn_start.addEventListener('click', function() {
    window.location.href = 'video1.html'; // Chemin relatif à votre fichier actuel
    localStorage.setItem('score',score);
   
    console.log('ACTIVER');
});
*/

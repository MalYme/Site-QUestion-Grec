'use strict';

// Element
const score = parseInt(localStorage.getItem('score'));
const see_score = document.getElementById('result');
const Ygood = document.getElementById("Ygood");

//Var
const green = '#137809' //  #137809;
const yellow = '#b5b811'//    #b5b811;
const red = '#b81111'   //   #b81111
const Pname = localStorage.getItem("Name");


see_score.innerText = score;

if (score >7){
    if (score<11){
    
     //8-9-10
    see_score.style.color = green;

    }else{
        see_score.innerText = "Tricheur";
        see_score.style.color = red;
        document.getElementById("result2").innerText = "";
        const phrase = Pname +", vous avez triché, je vois souhaite bonne nuit avec de détail qui reviendra vous hantez qand vous irez dormir";
        Ygood.innerText = phrase;
        Ygood.style.color = red;
    }

}else if(score >4){
    //5-6-7
    see_score.style.color = yellow;


}else{
    //0-5
    see_score.style.color = red;
}
if (score===10){

    const phrase = Pname +", pour avoir obtenue le score de 10, vous obtenez les félicitation du jury";
    Ygood.innerText = phrase;
}


/*
btn_start.addEventListener('click', function() {
    window.location.href = 'video1.html'; // Chemin relatif à votre fichier actuel
    localStorage.setItem('score',score);
   
    console.log('ACTIVER');
});
*/

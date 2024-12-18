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
        const phrase = Pname +", vous avez triché, je vois souhaite bonne nuit avec ce détail qui reviendra vous hantez qand vous irez dormir";
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
if (score===9){

    const phrase = Pname +", Dommage, t'aurais pu faire mieux, bien joué quand même !";
    Ygood.innerText = phrase;
}
if (score===8){

    const phrase = Pname +", BIEN.";
    Ygood.innerText = phrase;
}
if (score===7){

    const phrase = Pname +", 7, comme le nombre de fromage à mettre dans UNE raclette";
    Ygood.innerText = phrase;
}
if (score===6){

    const phrase = Pname +", limite";
    Ygood.innerText = phrase;
}
if (score===5){

    const phrase = Pname +", la moyenne, juste la moyenne quoi";
    Ygood.innerText = phrase;
}
if (score===4){

    const phrase = Pname +", Dura Lex, Sed Lex";
    Ygood.innerText = phrase;
}
if (score===3){

    const phrase = Pname +", plus que 2 mais moins que 4  ";
    Ygood.innerText = phrase;
}
if (score===2){

    const phrase = Pname +", 1+1=2 ";
    Ygood.innerText = phrase;
}
if (score===1){

    const phrase = Pname +", Pour l'honneur ";
    Ygood.innerText = phrase;
}
if (score===0){

    const phrase = Pname +", NUUUUUUUUUUUUUUUL 🫵 ";
    Ygood.innerText = phrase;
}
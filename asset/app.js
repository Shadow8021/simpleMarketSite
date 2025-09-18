//CREE UNE VARIABLE GLOBALE ET AFFICHER DANS LA FONCTION
// let nom = "OYAGA"
// var prenom = "martial"
// function afficherVariable(){
//     console.log(nom);    
// }
// afficherVariable()
// console.log(prenom);




//utilisation de let et var dans une boucle

// for(var i=0;i<10;i++){
//     console.log("bonjour",i);
    
// }
// console.log("notre variable est",i);


//creation de deux variables de meme nom dans deux fonctions differentes

let direBonjour=()=>{
    var nom = "oyaga"
    console.log("bonjour a vous",nom);
    
}
function saluer(){
    //var nom ="martial"
    console.log("mes salutations a vous",nom);
    
}

direBonjour()
saluer()
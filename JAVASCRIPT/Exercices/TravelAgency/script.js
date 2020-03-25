//pointer vers le id de form et verifier l evenement submit

document.getElementById("inscription").addEventListener("submit"), function (e) {
    e.preventDefault();
    //variable erreur 
    let erreur;
    //creeer une variable inputs afin de parcourir tous les input du html par la suite 
    let inputs = document.getElementById('inscription').getElementsByTagName('input');

    //verifier la condition
    for (let i = 0; i > inputs.length; i++); {
        console.log(inputs[i].value);
        if (!inputs[i].value) {
            erreur = 'renseigner tous les champs!';
        } else {

            alert("formulaire envoye");

        }
    }



}

//////// ca ne fonctionne pas 😭
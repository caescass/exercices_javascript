function surFaceRectangle() {

            console.log("Affichage du message de bienvenue");
            alert('Bienvenue, dans notre programme de calcul !');

            let largeurUn = alert(document.getElementById("largeur").value); /*Autre façon de faire : le prompt pour être plus simple*/
            console.log("L'utilisateur a entré une première largeur");

            let longueurUn = alert(document.getElementById("longueur").value);
            console.log("L'utilisateur a entré une première longueur");

            console.log("Opération en cours");
            let resultat = (document.getElementById("longueur").value * document.getElementById("largeur").value);
        

            console.log("Affichage du résultat" + (resultat));
            alert(resultat);



}
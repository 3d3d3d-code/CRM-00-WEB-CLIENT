var  nom=false;
var  email=false;


var Coordonnees = []
	{ 
		name: "hamza"
		email: "reda@orange.fr"
	}
	{ 
		name: "mac "
		email: "book@orange.fr "
    }
    
	{ 
		name: "toujours"
	    email: "encore@aol.fr"
	}







function OK() {


    for(var i = 0; i < Coordonnees.length; i++) {
        //verifier dans la liste si le nom et l email correspondent
        if( Coordonnees.name==true  && Coordonnees.email==true )
		if(name == Coordonnees[i].name && email == Coordonnees[i].email) {
            console.log("votre nom est :"+ name +"et votre email est :" + email)
			// arreter la fonction si tout est correct
		return
		}

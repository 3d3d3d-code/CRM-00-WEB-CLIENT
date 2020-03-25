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
		if( Coordonnees[].name==true  && Coordonnees[].email==true )
	{
document.getElementById('message').innerText='message serveur';
document.getElementById('inscription').submit()

		
	}
		
			// arreter la fonction si tout est correct
			}	else{

				console.log('nom ou email incorrect')
			}
	}


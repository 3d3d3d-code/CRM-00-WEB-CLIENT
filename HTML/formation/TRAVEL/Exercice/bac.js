// Loop through Array of Objects
var Coordonnees = [
	{ 
		name: "hamza"
		email: "reda@orange.fr"
	},
	{ 
		name: "mac "
		email: "book@orange.fr "
    },
    
	{ 
		name: "toujours"
	    email: "encore@aol.fr"
	}

]

function OK() {
	var name = document.getElementById('name').value
    var email = document.getElementById('email').value
   

	for(var i = 0; i < Coordonnees.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(name == Coordonnees[i].name && email == Coordonnees[i].email) {
            console.log("votre nom est :"+ name +"et votre email est :" + email)
			// arreter la fonction si tout est correct
			return
		}
	}
	console.log("nom ou prenom incorrect!")
}





/*
const name=document.getElementById('name')
const email=document.getElementById('email')
const form=document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('le nom est requis')
  }


  if (email.value === 'email') {
    messages.push('email  eronne')
  }

  
}*/



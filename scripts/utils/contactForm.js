/* eslint-disable no-unused-vars */
const modal = document.getElementById('modal')

//ouverture du formulaire 
function displayModal() {
	modal.style.display = 'block'
}
// fermeture du formulaire
function closeModal() {
	modal.style.display = 'none'
}
// bloque l'envoie du formulaire et affiche les valeurs des input en console
function envoyer(){
	const email=document.getElementById('email').value
	const firstname=document.getElementById('firstname').value
	const lastname=document.getElementById('lastname').value
	const message=document.getElementById('message').value
	console.log('nom:'+firstname+' \nprénom:'+lastname+' \nemail: '+email+' \nmessage:'+message)
	modal.style.display = 'none'
	return false
}

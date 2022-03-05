/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mediaWrapper=document.getElementById('media__wrapper')
const listOptions = document.querySelector('.filters__select__list')
const options =document.querySelectorAll('.filters__select__list__opt')
const selectedField = document.querySelector('.filters__select__selectedField')
const selectedFieldText=document.querySelector('.selectedFieldText')
const arrow= document.querySelector('.fa-angle-down')

selectedField.addEventListener('click', openFilters)

// ouvre/ferme le filtre et retourne la flêche
function openFilters(){
	if(selectedFieldText.id === ''){
		selectedFieldText.id = 'popularité'
	}
	listOptions.classList.toggle('open')
	arrow.classList.toggle('rotate')
	selectedField.classList.toggle('radius')
}

// gestion du dropdown au click
for(option of options){
	option.onclick = async function(){
		let id=selectedFieldText.id
		let text=selectedFieldText.textContent
		// remplace l'élèment en en tête par l'élèment cliqué
		selectedFieldText.textContent= this.textContent
		selectedFieldText.id=this.id
		// remplace le texte de l'élément cliqué par celui de l'élement en entête
		this.textContent = text
		this.id=id
		openFilters()
		let medias= new PhotographersTemplate()
		// relance la fonction du display des medias
		medias.initMediaDisplay()
	}
}

// selectionne l'ordre d'affichage des médias
async function searchFilter(){
	// vide le conteneur de médias
	mediaWrapper.innerHTML=''
	let template= new PhotographersTemplate()
	// renvoie tous les médias pour le photographe demandé
	let med= await template.getMediaByPhotographer()
	switch(selectedFieldText.id){
	case 'popularité': 
		return med.sort(function(a, b){return b.likes - a.likes})

	case 'date':
		return med.sort(function(a, b){return new Date(b.date) - new Date(a.date)})

	case 'titre':
		return med.sort(function(a, b) {return (a.title > b.title)?1:-1})
	// affichage sans tri par défaut
	default:
		return med
	}
}

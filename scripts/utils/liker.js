/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function liker(){
	const likes= document.querySelectorAll('.media-article__heading__like')
	// pour chaque icone coeur cliqué
	likes.forEach((i)=>i.addEventListener('click', (e)=>{
		let likeIcon= e.target.classList[0]
		let likeValue= e.target.dataset.value
		//si l'icone possède la classe far
		if(likeIcon === 'far'){
			// ajoute +1 à la valeur cliquée
			likeValue++
			// ajoute 1 à la valeur dans le reminder
			likeDisplay.textContent++
			e.target.previousSibling.textContent=likeValue
			// l'icone coeur se rempli
			e.target.classList.replace('far', 'fas')
		}else{
			let initLike=likeValue
			// retire 1 à la valeur cliqué
			likeDisplay.textContent--
			// reinitilise la valeur 
			e.target.previousSibling.textContent=initLike
			// vide l'icone coeur
			e.target.classList.replace('fas', 'far')
		}	
	}
	))
}
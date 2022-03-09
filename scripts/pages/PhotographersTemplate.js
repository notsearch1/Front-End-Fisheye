/* eslint-disable indent */
/* eslint-disable no-undef */
let likeDisplay= document.querySelector('.reminder__likes__data')

class PhotographersTemplate{
	constructor(){
		this.photographHeader = document.getElementById('photograph-header')
		this.btnContact = document.getElementById('contact_button')
		this.photographersApi = new PhotographersApi('../../data/photographers.json')
		this.mediaApi = new MediaApi('../../data/photographers.json')
		this.position= window.location.href.indexOf('?')
		this.getId= window.location.href.substring(this.position + 4)
		this.sumLikes= 0
	}

	// affiche la bannière de description du photographe
	async diplayHeader(){
		const photoData= await this.photographersApi.get()
		const listPhotographers=photoData.map(photographer => new PhotographerFactory(photographer))
		for(let photographer of listPhotographers){
			if (photographer.id == this.getId){
				// affiche l'image après le bouton
				const imgHeader= photographer.photographerImageHeader()
				this.photographHeader.insertBefore(imgHeader, this.btnContact.nextSibling)
				// affiche le texte avant le bouton
				const textHeader= photographer.photographerTextHeader()
				this.photographHeader.insertBefore(textHeader, this.btnContact)
			}      
		}
	}

	// affiche les médias
	async displayArticle(media, name) {
		const mediaModel = new Medias(media)
		const mediaList= mediaModel.getMediaArticle(name)
		mediaWrapper.appendChild(mediaList)
	}

	// récupère les informations pour l'affichage des médias
	async initMediaDisplay() {
		let sumLikes=0
		let medias= await searchFilter()
		// Récupère les medias pour le bon photographe
		// balaye tous les medias un par un
		for(let media of medias){
			// récupère le nom du photographe
			const formName= document.querySelector('.modal-content__header__name')
			let name= await this.getNameById()
			formName.textContent=name
			var likes= media.likes
			sumLikes += likes
			this.displayArticle(media, name)
		}
		this.getPriceByPhotographer()
		this.sumLikesDisplay(sumLikes)
		this.lightboxDisplay()
		liker()
	}
   

	//fonction qui affiche la lightbox et déclenche ses différentes fonctions
	async lightboxDisplay(){
		let pictures = document.querySelectorAll('.media-article__link')
		pictures.forEach((a)=>{a.addEventListener('click', async(e)=>{
			let idMedia= e.target.dataset.id
			const carousel = document.querySelector('.lightbox-section')
			carousel.style.display ='block'
			let medias= await this.getMediaByPhotographer()
			let nameById= await this.getNameById()
			let lightbox = new Lightbox(medias, nameById)
			lightbox.showMedia(idMedia, nameById)	
		})
		})
	}

	// affiche le total des likes medias
	async sumLikesDisplay(sumLikes){
		likeDisplay.innerHTML=sumLikes
	}
    
	// renvoie un tableau de média par photographe
	async getMediaByPhotographer(){
		let medias= await this.mediaApi.getMedia()
		let tab=[]
		for(let media of medias){
			if(media.photographerId == this.getId){
				tab.push(media)
			}
		}
		return tab
	}

	// affiche le prix par jour par photographe
	async getPriceByPhotographer(){
		const priceDisplay= document.querySelector('.reminder__price')
		let photographers= await this.photographersApi.get()
		let price=null
		for(let photographer of photographers){
			if (photographer.id==this.getId){
				price=photographer.price
				priceDisplay.innerHTML= price+ '€/jour'
			}
		}
	}
    // renvoie le nom du photographe par id
	async getNameById(){
		let photographers= await this.photographersApi.get()
		let name=null
		for(let photographer of photographers){
			if(photographer.id==this.getId){
				name= photographer.name
			}
		}
		return name
	}
    

}
const template= new PhotographersTemplate()
template.diplayHeader()
template.initMediaDisplay()





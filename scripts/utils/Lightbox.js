/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const wrapper = document.querySelector('.lightbox-section__view') 
const view = document.querySelector('.lightbox-section__view__picture')
const mp4 = document.createElement('video')
const textLightbox = document.querySelector('.lightbox-section__text')
class Lightbox{
	constructor(medias, name){
		this.currentMedia=null
		this.media=medias
		this.name=name
		this.manageEvent()
		const context=this
		// fonction navigation au clavier
		document.onkeydown = function (e) {
			e = e || window.event
			switch(e.key){
			case 'ArrowRight':
				context.next()
				break

			case 'ArrowLeft':
				context.prev()
				break
			
			case 'Escape':
				context.close()
				break
			}
		}
	}
	
	
	// affichage de la 1ere vue cliquée
	showMedia(idMedia, name){
		this.currentMedia=this.getElementById(idMedia)
		let text= this.currentMedia.title
		const mediaDisplay= new MediaFactory(this.currentMedia, name)
		const factory=mediaDisplay.display()
		factory.classList.replace('media-article__img', 'lightbox-section__view__picture')
		if(this.currentMedia.video != undefined){
			factory.setAttribute('controls', '')
			factory.setAttribute('alt', text)
			factory.setAttribute('autoplay', '')
		}
		wrapper.insertBefore(factory, textLightbox)
		document.querySelector('.lightbox-section__text').textContent=text
	}
	
    // fonction déclencher au click sur la flêche gauche
	prev(){
		let index = this.media.findIndex(element=>element.id == this.currentMedia.id )
            
		if(index == 0){
			this.currentMedia = this.media[this.media.length -1]
               
		}else{
			this.currentMedia = this.media[index -1]
		}
		this.display()	
	}

	// fonction déclenchée au click sur la flêche droite
	next(){
		let index = this.media.findIndex(element=>element.id == this.currentMedia.id )
		if(index == this.media.length -1){
			this.currentMedia = this.media[0]
		}else{
			this.currentMedia = this.media[index +1]
		}
		this.display()
		
	}

	// trouver un média par son id
	getElementById(idMedia){
		return this.media.find(element =>element.id == idMedia)
	}
	
	// fermer la modale
	close(){
		document.querySelector('.lightbox-section').style.display ='none'
		if (document.querySelector('.lightbox-section__view__picture') != null){
			wrapper.removeChild(document.querySelector('.lightbox-section__view__picture'))
		}
	}

	// gère tous les évenements sur la modale
	manageEvent(){
		document.querySelector('.close').addEventListener('click', ()=>{
			this.close()
		})
		document.querySelector('.lightbox-section__btn-left').addEventListener('click', ()=>{
			this.prev()
		})
		document.querySelector('.lightbox-section__btn-right').addEventListener('click', ()=>{
			this.next()
		})

	}
	
	// affichage des médias suivantes et précédantes
	display(){
		let text= this.currentMedia.title
		wrapper.removeChild(document.querySelector('.lightbox-section__view__picture'))
		if(this.currentMedia.video == undefined){
			let img=document.createElement('img')
			img.classList.add('lightbox-section__view__picture')
			img.setAttribute('alt', text)
			img.src='assets/photographers/'+ this.name +'/' + this.currentMedia.image
			wrapper.insertBefore(img, textLightbox)
		}else{
			const mp4= document.createElement('video')
			mp4.classList.add('lightbox-section__view__picture')
			mp4.setAttribute('controls', '')
			mp4.setAttribute('autoplay', '')
			mp4.setAttribute('alt', text)
			mp4.src='assets/photographers/'+ this.name +'/' + this.currentMedia.video
			wrapper.insertBefore(mp4, textLightbox)
		}
		document.querySelector('.lightbox-section__text').textContent=text
	}

	
    
	
}

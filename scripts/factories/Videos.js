/* eslint-disable no-unused-vars */
class Videos{
	constructor(name, element){
		this.media=element
		this.name=name
		this.srcMp4 = `assets/photographers/${this.name}/${this.media.video}`
	}

	// méthode qui renvoie un lien contenant une vidéo
	display(){
		const mp4= document.createElement('video')
		mp4.setAttribute('src', this.srcMp4)
		mp4.classList.add('media-article__img')
		mp4.setAttribute('data-id', this.media.id)
		mp4.setAttribute('alt', this.media.title+', closeup view')
		return mp4
	}

}
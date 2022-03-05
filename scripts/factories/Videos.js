/* eslint-disable no-unused-vars */
class Videos{
	constructor(name, element){
		this.media=element
		this.name=name
		this.srcMp4 = `assets/photographers/${this.name}/${this.media.video}`
	}

	// méthode qui renvoie un lien contenant une vidéo
	display(){
		const link= document.createElement('a')
		const play= document.createElement('span')
		const mp4= document.createElement('video')
		link.classList.add('media-article__link')
		mp4.setAttribute('src', this.srcMp4)
		mp4.classList.add('media-article__img')
		play.innerHTML='<i class="far fa-play-circle"></i>'
		play.classList.add('media-article__play')
		mp4.setAttribute('data-id', this.media.id)
		mp4.setAttribute('alt', this.media.title+', closeup view')
		link.appendChild(play)
		link.appendChild(mp4)
		return link
	}

}
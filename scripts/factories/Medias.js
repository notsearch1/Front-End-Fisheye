/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Medias{
	constructor(media){
		this.media=media
	}
	// méthode qui renvoie un article par nom de photographe
	getMediaArticle(name) {
		const play= document.createElement('span')
		const article= document.createElement('article')
		article.classList.add('media-article')
		const link= document.createElement('a')
		link.classList.add('media-article__link')
		const mediaDisplay= new MediaFactory(this.media, name)
		const factory=mediaDisplay.display()
		if(this.media.video != undefined){
			play.innerHTML='<span class="far fa-play-circle"></span>'
			play.classList.add('media-article__play')
			link.appendChild(play)
		}
		link.appendChild(factory)
		const p= document.createElement('p')
		p.classList.add('media-article__heading')
		p.innerHTML = this.media.title + '<span>' +this.media.likes+ '<span class="far fa-heart media-article__heading__like" aria-label="likes" data-value='+this.media.likes+'></span></span>'
		article.appendChild(link)
		article.appendChild(p)
		return (article)
	}
}
   





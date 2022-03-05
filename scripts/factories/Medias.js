/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Medias{
	constructor(media){
		this.media=media
	}
	// méthode qui renvoie un article par nom de photographe
	getMediaArticle(name) {
		const article= document.createElement('article')
		article.classList.add('media-article')
		const mediaDisplay= new MediaFactory(this.media, name)
		const factory=mediaDisplay.display()
		article.appendChild(factory)
		const p= document.createElement('p')
		p.classList.add('media-article__heading')
		p.innerHTML = this.media.title + '<span>' +this.media.likes+ '<i class="far fa-heart media-article__heading__like" aria-label="likes" data-value='+this.media.likes+'></i></span>'
		article.appendChild(p)
		return (article)
	}
}
   





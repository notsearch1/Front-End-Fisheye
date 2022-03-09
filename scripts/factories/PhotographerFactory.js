/* eslint-disable no-unused-vars */
class PhotographerFactory{
	constructor(json){
		json && Object.assign(this, json)
		this.picture = `assets/photographers/profil/${this.portrait}`

	}

	// méthode qui renvoie un article sur un photographe
	getUserCardDOM() {
		const article = document.createElement( 'article' )
		const content = 
        `   <a href="photographer.html?id=${this.id}" class="link">
                <img src="${this.picture}" alt=""></img>
                <h2>${this.name}</h2>
            </a>
            <span class="location">${this.city}, ${this.country}</span>
            <p class="description">${this.tagline}</p>
            <span class="price">${this.price}€/jour</span>   `

		article.innerHTML = content   
		return (article)
	}
    
	// méthode qui renvoie le texte description sur la page photographe
	photographerTextHeader(){
		const text= document.createElement('div')
		text.classList.add('photograph-header__text')
		text.setAttribute('aria-label', 'presentation photographer')
		const h1= document.createElement('h1')
		h1.classList.add('photograph-header__text__heading')
		h1.textContent = this.name
		const p1= document.createElement('p')
		p1.classList.add('photograph-header__text__location')
		p1.textContent= this.city + ', ' + this.country
		const P2= document.createElement('p')
		P2.classList.add('photograph-header__text__description')
		P2.textContent= this.tagline
		text.appendChild(h1)
		text.appendChild(p1)
		text.appendChild(P2)
		return (text)
	}
	// méthode qui renvoie l'image du photographe sur la page photographe
	photographerImageHeader(){
		const img= document.createElement('img')
		img.classList.add('photograph-header__img')
		img.setAttribute('src', this.picture)
		img.setAttribute('alt', this.name)
		return (img)
	}
}





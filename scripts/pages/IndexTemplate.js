/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
class Index{
	constructor(){
		this.photographersApi = new PhotographersApi('./../../data/photographers.json')
		this.photographersSection = document.querySelector(".photographer__section")

	}

    // affiche tous les photographes
	async displayPhotographers(){
		const photoData= await this.photographersApi.get()
		const listPhotographers=photoData.map(photographer => new PhotographerFactory(photographer))
		const listPhotographerView=listPhotographers.map(photographer => photographer.getUserCardDOM())
		let i=0
        
		// eslint-disable-next-line no-unused-vars
		for (let photographer of listPhotographerView){
			this.photographersSection.appendChild(listPhotographerView[i])
			i++
		}
	}
    
}     
const index = new Index()
index.displayPhotographers()

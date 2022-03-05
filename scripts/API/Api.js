/* eslint-disable no-unused-vars */
class Api {
	constructor(url) {
		this._url = url
	}

	async get() {
		return fetch(this._url)
			.then(res => res.json())
			.then(res => res.photographers)
			.catch(err => console.log('an error occurs', err))
	}
	async getMedia() {
		return fetch(this._url)
			.then(res => res.json())
			.then(res => res.media)
			.catch(err => console.log('an error occurs', err))
	}
}


class PhotographersApi extends Api {
	constructor(url) {
		super(url)
	}

	async getPhotographers() {
		return await this.get()
	}
}

class MediaApi extends Api {
	constructor(url) {
		super(url)
	}

	async getMedias() {
		return await this.getMedia()
	}
}





// Récupération des datas media
// async function getMedia() {
//     let url= '/data/photographers.json';
//     let medias=  fetch(url)
//                         .then((response) =>response.json()
//                         .then((data) =>{
//                         let dataMedia= data.media;
//                         return dataMedia
//                          }))      
//                          console.log(medias)
                           
//     return medias
// }
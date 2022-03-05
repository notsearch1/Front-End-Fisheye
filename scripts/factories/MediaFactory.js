/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */

// dispatche si le média est une video ou une image
class MediaFactory{
	constructor(element, name){
		if(element.hasOwnProperty('video')){
			return new Videos(name, element)
		}else if(element.hasOwnProperty('image')){
			return new Images(name, element)
		}else{
			throw 'Unknown type format'
		}
	}
}
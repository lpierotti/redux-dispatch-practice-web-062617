export let state;


export function managePets(state = {pets: []}, action){
	switch (action.type) {
		case 'ADD_PET':
			return Object.assign({}, {pets: [...state.pets, action.pet]})
		case 'REMOVE_PET':
			return Object.assign({}, {pets: state.pets.filter(pet => pet.id !== action.id)})
		default:
			return state;
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render();
}

export function render(){
	var pets = state.pets.map(pet => `<li>${pet.name}</li>`)
	document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}

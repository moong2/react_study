interface Person {
	name: string;
	age?: number;
}
interface Developer {
	name: string;
	age?: number;
	skills: string[];
}

const person: Person = {
	name: "박성하",
	age: 24
};

const expert: Developer = {
	name: "박천재",
	skills: ['typescript', 'react']
};
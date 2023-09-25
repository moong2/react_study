type Person = {
	name: string;
	age?: number;
};

type Developer = Person & {
	skills: string[];
};

const person: Person = {
	name: "박성하"
};

const expert: Developer = {
	name: "박천재",
	skills: ["typescript", "react"]
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];
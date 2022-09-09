class Student {
	#id
	#name
	
	constructor(id, name) {
		this.#id = id
		this.#name = name
	}
	
	getId() {
		return this.#id
	}
	
	getName() {
		return this.#name
	}
	
	#print() {
		console.log(this.#id + ", " + this.#name)
	}
}

var student = new Student(1, "Arun")
// console.log(student.#id) -- error
console.log(student.getId())
console.log(student.getName())
//console.log(student.#print()) -- error
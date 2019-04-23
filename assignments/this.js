/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - the value of "this" refers to the global obeject.
* 2. Implicit Binding - "this" refers to the object that the function is called in.
* 3. New binding - Used when a constructor function is used, and refers to the newly created object.
* 4. Explicit binding - used when with call and apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

let person = {
    firstName : 'Matheus',
    lastName : 'Silva',
    fullNameFunction : function (){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullNameFunction())

// Principle 3

// code example for New Binding

function Parent (attribute) {
    this.firstName = attribute.firstName;
    this.lastName = attribute.lastName;
};

let matheus = new Parent ({
    firstName: "Matheus",
    lastName: "Silva"
});

console.log(matheus);

// Principle 4

// code example for Explicit Binding

function Child (childAttributes){
    Parent.call(this, childAttributes);
    this.age = childAttributes.age;
}

let filipe = new Child ({
    firstName: 'Filpe',
    lastName: 'Silva',
    age: 26
})

console.log(filipe);
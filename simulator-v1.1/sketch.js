"use strict";

const width = 400;
const height = 400;

const persons = [];

function setup() {
  createCanvas(width, height);
  for (let i = 1; i < 10; i++) {
    persons.push(new Person(width, height));
  }
}

function draw() {
  background(51);
  movePersons();
}

function movePersons() {
  for (const person of persons) {
    person.move();
    // fill(person.colour);
    person.render();
  }
}

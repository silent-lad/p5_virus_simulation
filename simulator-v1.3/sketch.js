"use strict";

const width = 400;
const height = 400;

const persons = [];

const initialPopulation = 400;

function setup() {
  createCanvas(width, height);
  for (let i = 0; i < initialPopulation; i++) {
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

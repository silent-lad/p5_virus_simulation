"use strict";

const width = 400;
const height = 400;

const population = 10;

const persons = [];
const infected = [];

function setup() {
  createCanvas(width, height);
  for (let i = 1; i < population; i++) {
    persons.push(new Person(new Coordinate(width, height), 16, false));
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

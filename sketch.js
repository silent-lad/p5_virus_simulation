"use strict";

const width = window.innerWidth;
const height = 800;

const population = 100;

const persons = [];
const infected = [];

function setup() {
  createCanvas(width, height);
  createPopulation();
}

function draw() {
  background(51);
  checkComplete();
  movePersons();
  updateText();
}

function updateText() {
  select("#virus").html(`Infected: ${infected.length}`);
  select("#healthy").html(`Healthy: ${persons.length - infected.length}`);
  select("#total").html(`Total: ${persons.length}`);
}

function checkComplete() {
  if (persons.length - infected.length == 0) {
    noLoop();
  }
}

function movePersons() {
  for (const person of persons) {
    person.move();
    fill(person.colour);
    person.render();
    for (const person2 of persons) {
      checkCollision(person, person2);
    }
  }
}

function checkCollision(person, person2) {
  if (
    dist(person.pos.x, person.pos.y, person2.pos.x, person2.pos.y) <
      person.size &&
    isOneInfected(person, person2)
  ) {
    person.infect();
    person2.infect();
    infected.push(person.infected);
  }
}

function isOneInfected(person, person2) {
  return (
    (person.infected || person2.infected) && !areBothInfected(person, person2)
  );
}

function areBothInfected(person, person2) {
  return person.infected && person2.infected;
}

function createPopulation() {
  for (let i = 1; i < population; i++) {
    persons.push(new Person(new Coordinate(width, height), 16, false));
  }
  createCarrier();
}

function createCarrier() {
  const carrier = new Person(new Coordinate(width, height), 16, true);
  persons.push(carrier);
  infected.push(carrier);
}

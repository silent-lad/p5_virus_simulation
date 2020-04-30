"use strict";

class Person {
  constructor(canvas) {
    this.pos = startLocation(canvas.x, canvas.y);
    this.speed = 1;
    this.canvas = canvas;
    this.size = 10;
  }

  render() {
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  move() {
    this.pos = new Coordinate(
      this.pos.x + (Math.random() * (2 * this.speed) - this.speed),
      this.pos.y + (Math.random() * (2 * this.speed) - this.speed)
    );
  }
}

function hitBoundary(person, axis) {
  return (
    person.pos[axis] > person.canvas[axis] - person.size ||
    person.pos[axis] < person.size
  );
}

function startLocation(x, y) {
  return new Coordinate(randRange(x, 5), randRange(y, 5));
}

function randRange(max, min) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function rand(constraint) {
  return Math.ceil(Math.random() * constraint);
}

function randCoordinate() {
  return new Coordinate(rand(2), rand(2));
}

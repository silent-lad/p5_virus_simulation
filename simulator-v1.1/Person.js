"use strict";

class Person {
  constructor(canvasWidth, canvasHeight) {
    this.pos = startLocation(canvasWidth, canvasHeight);
    this.speed = 1;
    this.size = 10;
  }

  render() {
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  move() {
    this.pos.x = this.pos.x + (Math.random() * (2 * this.speed) - this.speed);
    this.pos.y = this.pos.y + (Math.random() * (2 * this.speed) - this.speed);
  }
}

function startLocation(x, y) {
  return {
    x: randRange(x, 5),
    y: randRange(y, 5),
  };
}

function randRange(max, min) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function rand(constraint) {
  return Math.ceil(Math.random() * constraint);
}

function randCoordinate() {
  return {
    x: rand(2),
    y: rand(2),
  };
}

"use strict";

class Person {
  constructor(canvasWidth, canvasHeight) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.pos = startLocation(canvasWidth, canvasHeight);
    this.speed = 1;
    this.size = 10;
    this.destinationX = startLocation(this.canvasWidth, this.canvasHeight).x;
    this.destinationY = startLocation(this.canvasWidth, this.canvasHeight).y;
  }

  render() {
    ellipse(this.pos.x, this.pos.y, this.size);
    square(this.destinationX, this.destinationY, this.size);
    // square(30, 20, 55);
  }

  move() {
    let differenceX = this.pos.x - this.destinationX;
    let differenceY = this.pos.y - this.destinationY;

    if (
      Math.abs(differenceX) < this.speed &&
      Math.abs(differenceY) < this.speed
    ) {
      this.destinationX = startLocation(this.canvasWidth, this.canvasHeight).x;
      this.destinationY = startLocation(this.canvasWidth, this.canvasHeight).y;
    } else {
      if (differenceX > 0) {
        if (this.speed <= Math.abs(differenceX)) this.pos.x -= this.speed;
        else this.pos.x -= differenceX;
      } else if (differenceX < 0) {
        if (this.speed <= Math.abs(differenceX)) this.pos.x += this.speed;
        else this.pos.x += differenceX;
      }

      if (differenceY > 0) {
        if (this.speed <= Math.abs(differenceY)) this.pos.y -= this.speed;
        else this.pos.y -= differenceY;
      } else if (differenceX < 0) {
        if (this.speed <= Math.abs(differenceY)) this.pos.y += this.speed;
        else this.pos.y += differenceY;
      }
    }
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

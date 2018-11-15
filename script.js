function Rectangle(width=100, height=50, color='#ff0000') {
  this.width = width;
  this.height = height;
  this.color = color;

  this.calPerimeter = () => {
    return (this.width + this.height)*2;
  }
  this.calArea = () => {
    return this.width * this.height;
  }
  this.printRectangle = () => {
    let myCanvas = document.getElementById('myCanvas');
    let context = myCanvas.getContext('2d');
    context.fillStyle = this.color;
    context.fillRect(0, 0, this.width, this.height);
  }
}

let myRectangle = new Rectangle(500, 200, '#ff6699');
myRectangle.printRectangle();
class Shape {
    constructor() {
        this.text = "", this.textColor = "", this.shapeColor = "";
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return "";
  }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="${this.textColor}" stroke-width="3" fill="${this.shapeColor}"/>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50,5 90,90 5,90" stroke="${this.textColor}" stroke-width="3" fill="${this.shapeColor}"/>`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="80" height="80" stroke="${this.textColor}" stroke-width="3" fill="${this.shapeColor}"/>`;
    }
}
   
module.exports = {Shape, Circle, Triangle, Square};
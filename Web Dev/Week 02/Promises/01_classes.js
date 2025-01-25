/*
    a
*/

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log(this);
        return area;
    }

    paint(){
        console.log("Color is " + this.color);
    }

}

const rect = new Rectangle(2, 4, "Red"); 
const rect2 = new Rectangle(20, 10, "Black"); 
const area = rect.area();
const area2 = rect2.area();
const paint = rect.paint();
console.log(area, area2, paint);
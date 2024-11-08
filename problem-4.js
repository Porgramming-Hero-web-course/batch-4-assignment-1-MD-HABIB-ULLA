"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.length;
    }
    return 0;
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    length: 6,
});
console.log(rectangleArea);

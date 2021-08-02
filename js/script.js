const PI = Math.PI;

//Functions to calculate perimeters with square, triangle and circle.

function s_perimeter(b, h){
    const PERIMETER = (2 * b) + (2 * h);
    return `The perimeter of the square is ${PERIMETER}cm`;
}

function t_perimeter(b, s1, s2){
    const PERIMETER = b + s1 + s2;
    return `The perimeter of the triangle is ${PERIMETER}cm`;
}

function c_perimeter(r){
    const PERIMETER = (r*2) * PI;
    return `The circumference of the circle is ${PERIMETER}cm`;
}

//Functions to calculate area with square, triangle and circle.

function s_area(b, h){
    const AREA = b * h;
    return `The area of the square is ${AREA}cm²`;
}

function t_area(b, h){
    const AREA = (b * h) / 2;
    return `The area of the triangle is ${AREA}cm²`;
}

function c_area(r){
    const AREA = (r * r) * PI;
    return `The area of the circle is ${AREA}cm²`;
}




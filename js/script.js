const PI = Math.PI;

//Functions to calculate perimeters with square, triangle and circle.

const s_perimeter = (b, h) => (2 * b) + (2 * h)

const t_perimeter = (b, s1, s2) => b + s1 + s2;

const c_perimeter = (r) => (r*2) * PI;


//Functions to calculate area with square, triangle and circle.

const s_area = (b, h) => b * h;

const t_area = (b, h) => (b * h) / 2;

const c_area = (r) => (r * r) * PI;

//Functions to receive HTML values

const square = (op) => {
    switch(op){
        case 1:
            side = parseInt(document.getElementById("square_input").value);
            document.getElementById("square_output").value = s_perimeter(side, side) + "cm";
        break;
        case 2:
            side = parseInt(document.getElementById("square_input").value);
            document.getElementById("square_output").value = s_area(side, side) + "cm²";
        break;
    }
};
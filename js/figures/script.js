const PI = Math.PI;

//Functions to calculate perimeters with square, triangle and circle.

const s_perimeter = (b, h) => (2 * b) + (2 * h)

const t_perimeter = (b, s1, s2) => b + s1 + s2;

const c_perimeter = (r) => ((r * 2) * PI).toFixed(2);


//Functions to calculate area with square, triangle and circle.

const s_area = (b, h) => b * h;

const t_area = (b, h) => (b * h) / 2;

const c_area = (r) => ((r * r) * PI).toFixed(2);

//Functions to receive HTML values

const square = (op) => {
    let side = (document.getElementById("square_input").value);
    if(side.length == 0){
        document.getElementById("square_output").value = "Insert a value";
    } else if(Number(side)) {
        switch (op) {
            case 1:
                document.getElementById("square_output").value = s_perimeter(side, side) + "cm";
                break;
            case 2:
                document.getElementById("square_output").value = s_area(side, side) + "cm²";
                break;
        }
    } else {
        document.getElementById("square_output").value = "Insert numbers only";
    }
};

const triangle = (op) => {
    switch (op) {
        case 1:
            let b = document.getElementById("triangle_base").value;
            let s1 = document.getElementById("triangle_height").value;
            let s2 = document.getElementById("triangle_ss").value;
            if (s2.length == 0) {
                document.getElementById("triangle_output").value = "Insert second side value";
            } else if (s1.length == 0) {
                document.getElementById("triangle_output").value = "Insert first side value";
            } else if (b.length == 0) {
                document.getElementById("triangle_output").value = "Insert base value";
            } else {
                if (Number(b) && Number(s1) && Number(s2)) {
                    b = parseInt(b);
                    s1 = parseInt(s1);
                    s2 = parseInt(s2);
                    document.getElementById("triangle_output").value = t_perimeter(b, s1, s2) + "cm";
                } else {
                    document.getElementById("triangle_output").value = "Insert numbers only";
                }
            }
            break;
        case 2:
            let base = document.getElementById("triangle_base").value;
            let h = document.getElementById("triangle_height").value;
            if (base.length == 0) {
                document.getElementById("triangle_output").value = "Insert base value";
            } else if (h.length == 0) {
                document.getElementById("triangle_output").value = "Insert height value";
            } else {
                if (Number(base) && Number(h)) {
                    base = parseInt(base)
                    h = parseInt(h)
                    document.getElementById("triangle_output").value = t_area(base, h) + "cm²";
                } else {
                    document.getElementById("triangle_output").value = "Insert numbers only";
                }
            }
            break;
    }
};

const circle = (op) => {
    let radio = (document.getElementById("circle_input").value);
    if(radio.length == 0){
        document.getElementById("circle_output").value = "Insert a value";
    } else if(Number(radio)) {
        switch (op) {
            case 1:
                document.getElementById("circle_output").value = c_perimeter(radio) + "cm";
                break;
            case 2:
                document.getElementById("circle_output").value = c_area(radio) + "cm²";
                break;
        }
    } else {
        document.getElementById("circle_output").value = "Insert numbers only";
    }
};
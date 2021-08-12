const country = [];
let accSalaries = "";
let isFirstTime = true;

const add_salaries = () => {
    if(isFirstTime){
        accSalaries += "Salaries: $" + document.getElementById("salary").value;
        isFirstTime = false;
    } else {
        accSalaries += ", $" + document.getElementById("salary").value;
    }
    country.push(parseInt(document.getElementById("salary").value));
    document.getElementById("salary").value = "";
    document.getElementById("acc-salaries").innerText = accSalaries;
}


const salariesSorted = (salaries) => salaries.sort((a, b) => a - b);

const isEven = (salary) => salary % 2 === 0;

const general_median = () => {
    salaries = country;

    if (isEven(salaries.length)) {
        document.getElementById("median").value = "Median: $" + ((salaries[salaries.length / 2] + salaries[(salaries.length / 2) - 1]) / 2) + ".";
    } else {
        document.getElementById("median").value = "Median: $" + salaries[(Math.floor(salaries.length / 2))] + ".";
    }
    top_ten(salaries);
};

const top_ten = (salaries) => {
    const spliceStart = parseInt((salaries.length - 1) * (90/100));
    const spliceCount = (salaries.length) - spliceStart;
    salaries = salariesSorted(salaries);
    salaries = salaries.splice(spliceStart, spliceCount);
    let string_salaries = "";
    for(let i = 0; i < spliceCount; i++){
        if(i == spliceCount - 1){
            string_salaries += "$" + salaries[i].toString() + ".";
        } else {
            string_salaries += "$" + salaries[i].toString() + ", ";
        }
    }

    document.getElementById("top").value = "Top 10%: " + string_salaries;

}
const median = () => {
    let i = 0;
    let values = [];
    let id;
    let n = "1";
    while(i < 5){
        n.toString()
        id = "value-" + n;

        if(!Number(parseFloat(document.getElementById(id).value))){
            break;
        }

        values.push(parseFloat(document.getElementById(id).value));
        i++;

        n = parseInt(n);
        n++;
    }
    values.sort((minor, major) => minor - major);
    const middle_value = Math.floor(values.length / 2);
    if(values.length % 2 === 0){
        document.getElementById("result").value = ((values[middle_value] + values[middle_value - 1]) / 2)
    } else {
        document.getElementById("result").value = (values[middle_value]);
    }
}
const average = () => {
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
    const sumValues = values.reduce((addedValue, finalValue) => addedValue + finalValue)
    document.getElementById("result").value = (sumValues/values.length).toFixed(2);
}
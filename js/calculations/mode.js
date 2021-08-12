const mode = () => {
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
    let object = {};
    values.map((el) => {
        if(object[el]){
            object[el] += 1;
        } else {
            object[el] = 1;
        }
    });

    const realValues = Object.entries(object).sort((a, b) => b[1] - a[1]);
    document.getElementById("result").value = (realValues[0][0]);
}
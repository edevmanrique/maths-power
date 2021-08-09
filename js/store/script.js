const calculate_discount = () => {
    const price = parseInt(document.getElementById("price").value);
    const discount = parseInt(document.getElementById("discount").value);

    if(!Number(price) || !Number(discount)){
        document.getElementById("Result").value = "Insert valid values";
    } else {
        if(discount >= 0 && discount <= 100){
            document.getElementById("Result").value = (price * (100 - discount))/100 + '$';
        } else {
            document.getElementById("Result").value = "Discount needs to be between 0 and 100";
        }
    }
}

function clickMe2(){
    let num1, num2, sum, difference, product, quotient

    num1 =  parseInt(document.getElementById("num1").value)
    num2 =  parseInt(document.getElementById("num2").value)
    sum = num1 + num2 

    difference= num1 - num2
    product = num1 * num2 
    quotient = num1 / num2 

    document.getElementById("output").innerHTML = sum
    document.getElementById("output1").innerHTML = difference
    document.getElementById("output2").innerHTML = product
    document.getElementById("output3").innerHTML = quotient
}



var a = document.getElementById('num1');
var b = document.getElementById('num2');
var res = document.getElementById('result');
var numresult = [];
document.getElementById('sendbtn').addEventListener('click', function (e) {
    e.preventDefault();
    var num1 = a.value;
    var num2 = b.value;
    var result = add(+num1, +num2);
    res.innerHTML = result;
    printResult({ value: result, timestamp: new Date() });
    numresult.push(result);
    console.log(numresult);
});
function printResult(resultobj) {
    console.log(resultobj);
}
function add(a, b) {
    return a + b;
}

const a=document.getElementById('num1') as HTMLInputElement;
const b=document.getElementById('num2') as HTMLInputElement;
const res=document.getElementById('result') as HTMLButtonElement;

const numresult:number[]=[];
document.getElementById('sendbtn')!.addEventListener('click',(e)=>{
  e.preventDefault();
  const num1=a.value;
  const num2=b.value;
  const result=add(+num1,+num2);
 res.innerHTML=result;
 printResult({value:result,timestamp:new Date()})
numresult.push(result);
console.log(numresult);

})
function printResult(resultobj: {value:number;timestamp:Date}){
    console.log(resultobj);
    
}

function add(a:number|string,b:number|string):number{
return a+b;
}

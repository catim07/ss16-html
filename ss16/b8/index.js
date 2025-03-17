let num1,num2,num3;
do{
    num1=parseFloat(prompt("mời bạn nhập số thứ nhất: "));
    num2=parseFloat(prompt("mời bạn nhập số thứ hai: "));
    num3=parseFloat(prompt("mời bạn nhập số thứ ba: "));
    if(num1==num2||num1==num3||num2==num3){
        alert("bạn nhập 3 số khác nhau mới đúng")
    }
}while(num1==num2||num1==num3||num2==num3);
let max = Math.max(num1,num2,num3);
console.log(` số lớn nhất là: ${max}`);
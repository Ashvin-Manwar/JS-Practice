# JS-Practice
A code repo for JS YT

JS Execution Context
1.GEC:Global EC
2.FEC:Function EC
3.Eval EC(imm mangodb)

let val1=10;
let val2=5;
function addNum(num1,num2) {
    total=num1+num2
    return total 
}
let result1=addNum(val1,val2);
let result2=addNum(10,9);

1.GEC >this
2.Memory Phase(MP)>
        val1> undefined
        val2> undefined
        addNum> defination
        result1>undefined
        result2 >undefined
3.Exexution phase:
        val1  < 10
        val2  < 5
        addNum > new variable Env + Execution thread   > 2.(MP) 3.     
                > it will delete after it                                         
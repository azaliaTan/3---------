'use strict';

//1 задание

let a;
let b;

 a = prompt('введите стоимость товара', 0);
 b = prompt('введите количество денег', 0);


 if(Number(a)<=0 || Number(b)<=0){
    if(a===b){
        alert('покупка совершена');
     }else if(a>b){
        alert(`Для покупки не хватает ${a-b}р.`);
     } else if (b>a){
        alert(`Покупка совершена. Сдача ${b-a} р.`);
     } 
 } else{
    alert('ошибка типа данных');
 }
 

 //2 задание

 let c;
  c=prompt('введите число',0);

if(c>0){
    alert(1);
}else if(c===0){
    alert(0);
}else if(c<0){
    alert(-1);
}


//3 задание


let aa;
let bb;

let result=(aa+bb<4)?'мало':'много';


//4 задание

let login;

let message=(login=='сотрудник')? 'привет' : 
(login =='директор') ? 'здравствуйте' : 
(login =='') ? 'нет логина' : 
'';

//5 задание

let log;
log=prompt('введите логин', 'отменено');
if(log=="Админ"){
    let passw=prompt('введите пароль',0);
    if (passw=="Я главный"){
        alert('Здравствуйтe');
    } else if ( passw!=" Я главный"){
        alert('Неверный пароль')
    }
}else if (log!="Админ"){
    alert('я вас не знаю');
}

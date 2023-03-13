// 정답 선택 버튼 html 단
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

let btn_array = [];
let opr_array = ["+","-","*","/"]; //나눗셈은 현재는 미사용

let opr_ran;
let opr;
let lv = 3;
// 문제 html 단
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let op = document.querySelector(".op");

let time_text  = document.querySelector(".time_text");
let time = 10;
// 문제 back단
let Q1 ,Q2;
let cor;

// 정답 선택 버튼 back단
let btn_num1;
let btn_num2;
// 
let user;
btn3.textContent = 7;


function operator(){
    opr_ran = Math.floor(Math.random()*lv);
}

function Quiz(Q1,Q2,lv){
    op.textContent = opr_array[opr_ran];

    if(opr_array[opr_ran]=="+"){
        return Q1+Q2;
    }else if(opr_array[opr_ran]=="-"){
        return Q1-Q2;
    }else if(opr_array[opr_ran]=="*"){
        return Q1*Q2;
    }
    // else{

    //     return Math.floor(Q1/Q2);
    // }
}

function game(){
    setInterval(timer,1000);

    time = 10;
    
    operator();

    if(opr_array[opr_ran]=="+"||opr_array[opr_ran]=="-"){
        Q1 = Math.floor(Math.random()*20+1);
        Q2 = Math.floor(Math.random()*20+1);
    }else if(opr_array[opr_ran]=="*"){
        Q1 = Math.floor(Math.random()*9+1);
        Q2 = Math.floor(Math.random()*9+1);
    }
    
    while(1){
        if(Q1>=Q2){
            break;
        }
        Q2 = Math.floor(Math.random()*20+1);
    }
    cor = Quiz(Q1,Q2,lv);
     
    btn_array[0] = cor; //정답 랜덤으로 나오게 하기 위해 먼저 배열에 넣음.
    num1.textContent = Q1;
    num2.textContent = Q2;    
    
}

let timer = setInterval(function(){
    if(time>=1){
        time = time - 1;
            
    }
    time_text.textContent = time;
    if(time==0){
        alert("아웃\n 정답은"+cor);

        clearInterval(timer);
    }
},1000);
    
   
   

    


function btnValue(){
    
    for(let i=1;i<3;){
        if(opr_array[opr_ran]=="+"){
            btn_num1 = Math.floor(Math.random()*20+1);
            btn_num2 = Math.floor(Math.random()*20+1);
        }else if(opr_array[opr_ran]=="-"||opr_array[opr_ran]=="*"){
            btn_num1 = Math.abs(Q1-Math.floor(Math.random()*9+1));
            btn_num2 =  Math.abs(Q2-Math.floor(Math.random()*9+1));
        }

        if(cor!=btn_num1+btn_num2 && btn_num1+btn_num2 !=btn_array[i-1]){
            btn_array[i] = btn_num1 + btn_num2;
            i++;
        }
    }
    shuffle(btn_array);
    shuffle(btn_array);

    btn1.textContent = btn_array[0];
    btn2.textContent = btn_array[1];
    btn3.textContent = btn_array[2];

}


// 문제 선택 함수
btn1.addEventListener("click",function(){
    user = Number(btn1.textContent);
    compare(user);
    game();
    btnValue();
});
btn2.addEventListener("click",function(){
    user = Number(btn2.textContent);
    compare(user);
    game();
    btnValue();
});
btn3.addEventListener("click",function(){
    user = Number(btn3.textContent);
    compare(user);
    game();
    btnValue();
});

function compare(user){
    if(user==cor){
        alert("정답");
    }else{
        alert("오답\n 정답은"+cor);
    }
}

game();
btnValue();

// 문제 배열 섞기
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

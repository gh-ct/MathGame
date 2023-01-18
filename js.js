// 정답 선택 버튼 html 단
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

let btn_array = [];
let opr_array = ["+","-","*","/"];
// 문제 html 단
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");

// 문제 back단
let Q1 ,Q2;
let cor;

// 정답 선택 버튼 back단
let btn_num1;
let btn_num2;
// 
let user;
btn3.textContent = 7;



function game(){
    Q1 = Math.floor(Math.random()*20+1);
    Q2 = Math.floor(Math.random()*20+1);
    cor = Q1+Q2;    //정답
    btn_array[0] = cor; //정답 랜덤으로 나오게 하기 위해 먼저 배열에 넣음.
    num1.textContent = Q1;
    num2.textContent = Q2;    
}

function btnValue(){
    for(let i=1;i<3;){
        btn_num1 = Math.floor(Math.random()*20+1);
        btn_num2 = Math.floor(Math.random()*20+1);
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

    // console.log("답:"+typeof(cor));
    // console.log("문제:"+typeof(btn_array[0]));
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
        console.log(typeof(user)+"문제타입"+typeof(cor));
        console.log("정답"+cor+"유저선택"+user);
    }else{
        alert("오답");
        
        console.log(typeof(user)+"문제타입"+typeof(cor));
        console.log("정답"+cor+"유저선택"+user);
    }
}

game();
btnValue();

// 문제 배열 섞기
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
/*
남은거
O 1. 배열 랜덤으로 섞기
O 2. 문제 기본적인거 잘나오는지 확인
3. 연산에 따라 나오게 변경 난이도에 따라 다르게
4. 타이머

*/
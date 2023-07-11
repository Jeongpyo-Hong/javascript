// 3의 배수에서 '박수' 출력
const 삼육구 = (num) => {
  const str = num.toString();
  console.log(Number(str.slice(-1)));
  Number(str.slice(-1)) % 9 === 0
    ? console.log("박수x2")
    : Number(str.slice(-1)) % 3 === 0
    ? console.log("박수")
    : console.log("통과");

  num % 9 === 0
    ? console.log("박수x2")
    : num % 3 === 0
    ? console.log("박수")
    : console.log("통과");
};

// 합격여부 판단하기
const isPass = (score1, score2) => {
  if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100) {
    alert("장난 노노");
    return;
  }
  score1 < 40 || score2 < 40
    ? console.log("불합격(과락)")
    : score1 + score2 >= 120
    ? console.log("통과")
    : console.log("불합격");
};

// 변수, 사칙연산
let age = 28;
const place = "dongtan";

// 이자율 계산하기
const budgetAfterTwoYears = (money) => {
  if (money < 50000) {
    console.log(money * 1.15 * 1.15);
  } else {
    console.log(money * 1.2 * 1.2);
  }
};

// 커피 리필로 최대 얼만큼 마실 수 있을까
// 방금 마신 커피의 3/2 만큼 총 2번 리필 해줌
const maxCoffee = (coffee) => {
  const second = (coffee * 2) / 3;
  const third = (second * 2) / 3;
  console.log(coffee + second + third);
};

// 태조 이성계가 태어난 년도(1335)
// 답을 3번 입력했을 때 못 맞추면 '탈락'
let falseCnt = 0;
const birthYear = (year) => {
  if (year === 1335) {
    alert("성공");
  } else if (falseCnt === 3) {
    alert("바보");
  } else {
    alert("실패");
    falseCnt++;
  }
};

// 분과 초를 차례로 파라미터에 입력하면 ms단위로 바꿔주는 함수
const changeMs = (min, sec) => {
  console.log((min * 60 + sec) * 1000);
};

// 가격을 파라미터로 입력하면 10% 할인가 알려주는 함수
// 첫 구매인 경우(true | false) 1.5달러 할인
const discount = (price, first) => {
  first
    ? console.log((price * 0.9).toFixed(1) - 1.5)
    : console.log((price * 0.9).toFixed(1));
};

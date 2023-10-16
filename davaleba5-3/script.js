// შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება

const rightAnswer = document.querySelectorAll(".correct-answer");
const wrongAnswer = document.querySelectorAll(".wrong-answer");
const scoreEl = document.querySelector(".score");

let score = 0;

for (el of rightAnswer) {
  el.addEventListener("click", (e) => {
    e.target.style.color = "green";
    e.target.style.background = "white";
    if (el) {
      score++;
      scoreEl.textContent = score;
    }
  });
}

for (el of wrongAnswer) {
  el.addEventListener("click", (e) => {
    e.target.style.color = "red";
    e.target.style.background = "white";
  });
}

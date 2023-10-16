// შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const divEl = document.createElement("div");
const h2El = document.createElement("h2");
const textEl = document.createTextNode("Gandalf");
const aTagEl = document.createElement("a");
const textEl2 = document.createTextNode("Go to profile");

h2El.append(textEl);
aTagEl.append(textEl2);
aTagEl.setAttribute("href", "#");
divEl.append(h2El, aTagEl);
divEl.setAttribute("id", "card");
const bodyEl = document.body.append(divEl);

function validityTest(id1) {
  if (id1 < 0 || isNaN(id1)) {
    alert("INVALID NUMBER");
    return 0;
  }
}

const mainBalance = document.getElementById("main-balance");
const historyDiv = document.getElementById("history-page");
function backTodigint(id) {
  const number1 = document.getElementById(id).value;
  return parseFloat(number1);
}
function backTodigintFormString(id) {
  const number1 = document.getElementById(id).innerText;
  return parseFloat(number1);
}
function calculateBalance(id1, id2) {
  const addMoney = document.getElementById(id2);
  addMoney.innerText = backTodigint(id1) + backTodigintFormString(id2);
  if (backTodigintFormString("main-balance") - backTodigint < 0) {
    alert("Insufficient Balance");
    return;
  }
  mainBalance.innerText =
    backTodigintFormString("main-balance") - backTodigint(id1);
}

function addHistory(donate, place) {
  const div = document.createElement("div");

  const div1 = document.createElement("div");
  div1.innerHTML = `<p>${backTodigint(donate)}  ${
    document.getElementById(place).innerText
  } </p>
     
     <h5>${new Date()}</h5>
     
     `;
  div1.classList.add("p-3", "border", "space-y-2", "rounded-xl");
  div.appendChild(div1);

  historyDiv.appendChild(div);
}

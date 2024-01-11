let countVal = document.querySelector("#count");

let increment = () => {
  let value = parseInt(countVal.innerText);
  value = value + 1;
  countVal.innerText = value;
};

let decrement = () => {
  let value = parseInt(countVal.innerText);
  value = value - 1;
  countVal.innerText = value;
};

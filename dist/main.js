let cardNum = document.getElementById("card-number"),
  cardName = document.getElementById("card-name"),
  cardCvc = document.getElementById("card-cvc"),
  dateYear = document.getElementById("date-year"),
  dateMonth = document.getElementById("date-month"),
  inputName = document.getElementById("name"),
  inputNum = document.getElementById("number"),
  inputMonth = document.getElementById("month"),
  inputYear = document.getElementById("year"),
  inputCvc = document.getElementById("cvc"),
  nameErr = document.getElementById("name-error"),
  numErr = document.getElementById("number-error"),
  monthErr = document.getElementById("month-error"),
  yearErr = document.getElementById("year-error"),
  cvcErr = document.getElementById("cvc-error"),
  btn = document.getElementById("submit"),
  ignoreNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  form = document.querySelector(".form"),
  btnContinue = document.querySelector(".continue"),
  thanks = document.querySelector(".thanks");

// prevent user from typing numbers in name input
inputName.addEventListener("keydown", function (e) {
  ignoreNums.forEach((num) => {
    if (e.key == num) {
      e.preventDefault();
    }
  });
});

// submit form
btn.addEventListener("click", function (e) {
  e.preventDefault();
  isValidate();
  successSubmit();
});

// return to form
btnContinue.addEventListener("click", function () {
  form.classList.remove("hide");
  thanks.classList.remove("show");
});

function isValidate() {
  //card name validation
  if (!inputName.value.length) {
    nameErr.innerHTML = "Can't be blank";
    inputName.classList.add("err-input");
  } else if (inputName.value.length > 20) {
    nameErr.innerHTML = "Only 20 charachters";
    cardName.innerHTML = "Jane Appleseed";
    inputName.classList.add("err-input");
  } else {
    cardName.innerHTML = inputName.value;
    nameErr.innerHTML = "";
    inputName.classList.remove("err-input");
  }

  //card number validation
  if (!inputNum.value.length) {
    numErr.innerHTML = "Can't be blank";
    inputNum.classList.add("err-input");
  } else if (inputNum.value.length > 16 || inputNum.value.length < 16) {
    numErr.innerHTML = "Wrong format only 16 number";
    cardNum.innerHTML = "0000 0000 0000 0000";
    inputNum.classList.add("err-input");
  } else {
    cardNum.innerHTML = bankNum(inputNum.value);
    numErr.innerHTML = "";
    inputNum.classList.remove("err-input");
  }

  //card date month validation
  if (!inputMonth.value.length) {
    monthErr.innerHTML = "Can't be blank";
    inputMonth.classList.add("err-input");
  } else if (inputMonth.value.length > 2) {
    monthErr.innerHTML = "Wrong format, only 2 charachters";
    inputMonth.classList.add("err-input");
    dateMonth.innerHTML = "00";
  } else {
    dateMonth.innerHTML =
      inputMonth.value < 10 ? "0" + inputMonth.value : inputMonth.value;
    monthErr.innerHTML = "";
    inputMonth.classList.remove("err-input");
  }

  //card date year validation
  if (!inputYear.value.length) {
    yearErr.innerHTML = "Can't be blank";
    inputYear.classList.add("err-input");
  } else if (inputYear.value.length > 2 && inputYear.value.length < 2) {
    yearErr.innerHTML = "Wrong format, only 2 charachters";
    dateYear.innerHTML = "00";
    inputYear.classList.add("err-input");
  } else {
    dateYear.innerHTML = inputYear.value;
    yearErr.innerHTML = "";
    inputYear.classList.remove("err-input");
  }

  //card cvc number valiation
  if (!inputCvc.value.length) {
    cvcErr.innerHTML = "Can't be blank";
    inputCvc.classList.add("err-input");
  } else if (inputCvc.value.length > 3 && inputCvc.value.length < 3) {
    cvcErr.innerHTML = "Wrong format, only 3 numbers";
    cardCvc.innerHTML = "000";
    inputCvc.classList.add("err-input");
  } else {
    cardCvc.innerHTML = inputCvc.value;
    cvcErr.innerHTML = "";
    inputCvc.classList.remove("err-input");
  }
}

//create bank number format
function bankNum(myNum) {
  const firstgrp = myNum.slice(0, 4),
    secondgrp = myNum.slice(4, 8),
    thirdgrp = myNum.slice(8, 12),
    fourthgrp = myNum.slice(12, 16);

  return (cardNum.innerHTML =
    firstgrp + " " + secondgrp + " " + thirdgrp + " " + fourthgrp);
}

// check if inputs is empty
function successSubmit() {
  if (
    !numErr.childNodes.length &&
    !nameErr.childNodes.length &&
    !monthErr.childNodes.length &&
    !yearErr.childNodes.length &&
    !cvcErr.childNodes.length
  ) {
    form.classList.add("hide");
    thanks.classList.add("show");
  }
}

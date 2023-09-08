var worker = {};
var currentDate, birthDate, userAge, isUserAge, isLName, isFName, isEmail;

function workerFun() {
  worker = {
    FName: FNameInput.value,
    LName: LNameInput.value,
    bDay: birthdayInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    profession: professionInput.value,
  };
}
//------------------------------------------
function isFNameValid() {
  isFName = FNameInput.value[0] === FNameInput.value[0].toUpperCase();
  if (!isFName) {
    FNameLabel.innerHTML = `<span>Must start with an uppercase letter</span>`;
    FNameLabel.style.color = `#f00`;
  } else {
    FNameLabel.innerHTML = "First Name";
    FNameLabel.style.color = `#000`;
  }
}
FNameInput.addEventListener("input", isFNameValid);
//----------------------------------------------
function isLNameValid() {
  isLName = LNameInput.value.length <= 20;
  if (!isLName) {
    LNameLabel.innerHTML = `<span>*Must be max 20 characters</span>`;
    LNameLabel.style.color = `#f00`;
  } else {
    LNameLabel.innerHTML = "Last Name";
    LNameLabel.style.color = `#000`;
  }
}
LNameInput.addEventListener("input", isLNameValid);
//----------------------------------------------
function isBDayValid() {
  currentDate = new Date();
  birthDate = new Date(birthdayInput.value);
  userAge = currentDate.getFullYear() - birthDate.getFullYear();
  isUserAge = userAge > 16 && userAge < 65;
  if (!isUserAge) {
    birthdayLabel.innerHTML = `<span>*This Site is Not for Your Age</span>`;
    emailLabe.style.color = `#f00`;
  } else {
    birthdayLabel.innerHTML = "Birthdate";
    emailLabe.style.color = `#000`;
  }
}
birthdayInput.addEventListener("input", isBDayValid);
//----------------------------------------------
function isEmailValid() {
  isEmail =
    emailInput.value.lastIndexOf(".com") === emailInput.value.length - 4 ||
    emailInput.value.lastIndexOf(".co.il") === emailInput.value.length - 6;
  if (!isEmail) {
    emailLabel.innerHTML = `<span>*Email Most End with ".com" or ".co.il" </span>`;
    emailLabel.style.color = `#f00`;
  } else {
    emailLabel.innerHTML = "Email";
    emailLabel.style.color = `#000`;
  }
}
emailInput.addEventListener("input", isEmailValid);
//-----------------------------------------------
function isPhoneValid() {
  isPhone = phoneInput.value[0] == 0 && phoneInput.value.length == 10;
  if (!isPhone) {
    phoneLabel.innerHTML = `<span>*Phone Number Most Start with 0 and Most to be 10 digits width</span>`;
    phoneLabel.style.color = `#f00`;
  } else {
    phoneLabel.innerHTML = "Phone Number";
    phoneLabel.style.color = `#000`;
  }
}
phoneInput.addEventListener("input", isPhoneValid);

function displayTime() {
  var currenrTime = new Date();
  timeDiv.innerHTML = `<p>
  ${currenrTime.getHours()}:${currenrTime.getMinutes()}:${currenrTime.getSeconds()}
  </p>`;
}
setInterval(displayTime, 1000);

var counter = 0;
function checkFormDetails() {
  if (counter >= 3) {
    submitBtn.disabled = true;
    startCounter();
  }
  if (isUserAge && isLName && isFName && isEmail) {
    workerFun();
    return true;
  } else {
    counter++;
    console.log(counter);
    return false;
  }
}
submitBtn.addEventListener("click", function (event) {
  if (!checkFormDetails()) {
    event.preventDefault();
  }
});

var SecondsLeft = 30;
function countDown() {
  console.log(SecondsLeft);
  FNameInput.disabled = true;
  LNameInput.disabled = true;
  birthdayInput.disabled = true;
  emailInput.disabled = true;
  phoneInput.disabled = true;
  professionInput.disabled = true;

  countDownTimer.innerHTML = `<p>You can Try Again in 00:${SecondsLeft}</p>`;
  SecondsLeft--;

  if (SecondsLeft < 10) {
    countDownTimer.innerHTML = `<p>You can Try Again in 00:0${SecondsLeft}</p>`;
  }

  if (SecondsLeft == 0) {
    countDownTimer.innerHTML = null;
    FNameInput.disabled = false;
    LNameInput.disabled = false;
    birthdayInput.disabled = false;
    emailInput.disabled = false;
    phoneInput.disabled = false;
    professionInput.disabled = false;
    submitBtn.disabled = false;
    counter = 0;
    SecondsLeft = 30;
    stopCounter();
  }
}

var counterInterval;
function startCounter() {
  counterInterval = setInterval(countDown, 100);
}
function stopCounter() {
  clearInterval(counterInterval);
}

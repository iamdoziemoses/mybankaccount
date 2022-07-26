// Global variables
const userName = document.getElementById("user-name");
const userInput = document.getElementById("user-input");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const savingValue = document.getElementById("saving-value");
const accValue = document.getElementById("accValue");

// Show nav content'
function showNavContent() {
  const navToggle = document.getElementById("nav__toggle");
  const navToggle2 = document.getElementById("nav__toggle2");
  const navData = document.getElementById("nav-data");
  const mainContent = document.getElementById("main");

  navToggle.addEventListener("click", function () {
    navData.classList.toggle("show-content");
    navToggle2.style.display = "block";
    navToggle.style.display = "none";
    mainContent.style.display = "none";
  });

  navToggle2.addEventListener("click", function () {
    navData.classList.toggle("show-content");
    navToggle2.style.display = "none";
    navToggle.style.display = "block";
    mainContent.style.display = "block";
  });
}

showNavContent();

// class
class Bank {
  constructor() {
    this.accountBalance = 250;
  }

  depositMoney(amount) {
    this.accountBalance += amount;
    return this.accountBalance;
  }

  withDrawMoney(decAmount) {
    if (this.accountBalance - decAmount < 0) {
      alert("❌ Transaction declined, seems you don't have enough money");
      return this.accountBalance;
    }

    return (this.accountBalance -= decAmount);
  }
}

// Get User
const newUser = new Bank();

// Log in the person
const logIn = () => {
  loginBtn.onclick = () => {
    savingValue.innerText = `$${newUser.accountBalance}`;
    const userValue = userInput.value;
    userName.innerText = `Welcome ${userValue} 🙂`;
    userInput.style.display = "none";
    userInput.value = "";
    logoutBtn.style.display = "block";
    loginBtn.style.display = "none";
  };
};

logIn();

// Log out the person
const logOut = () => {
  logoutBtn.onclick = () => {
    savingValue.innerText = `-----(login)`;
    userInput.style.display = "block";
    userName.innerText = "";
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
  };
};

logOut();

//Increase Account Balance when you deposit money
function IncreaseAccountBalance() {
  const depositBtn = document.getElementById("depositBtn");

  depositBtn.onclick = () => {
    const amountValue = Number(accValue.value);
    const increasedSaveValue = newUser.depositMoney(amountValue);
    savingValue.innerText = `$${increasedSaveValue}`;
    accValue.value = "";
  };
}
IncreaseAccountBalance();

// Decrease Account Balance when you withdraw money
function decreaseAccountBalance() {
  const withdrawBtn = document.getElementById("withdrawBtn");

  withdrawBtn.onclick = () => {
    const amountValue = Number(accValue.value);
    const decreasedSaveValue = newUser.withDrawMoney(amountValue);
    savingValue.innerText = `$${decreasedSaveValue}`;
    accValue.value = "";
  };
}

decreaseAccountBalance();

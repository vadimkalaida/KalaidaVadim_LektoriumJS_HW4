let nameInput = document.querySelector('#nameInput'),
  coinsInput = document.querySelector('#coinsInput'),
  coins = 0;

coinsInput.value = coins;

function earnCoins() {
  if(coins <= 999) {
    coins++;
    coinsInput.value = coins;
  } else {
    alert('You have max number of coins');
  }
}

function Name() {
  let firstName = prompt('First Name:'),
    lastName = prompt('Last Name:');
  firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);
  nameInput.value = firstName + ' ' + lastName;

  return {
    changeFirstName : function () {
      if((coins - 10) >= 0) {
        firstName = prompt('New First Name:');
        firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
        nameInput.value = firstName + ' ' + lastName;
        coins -= 10;
        coinsInput.value = coins;
      } else {
        alert('You need 10 coins to change your First Name!');
      }
    },
    changeLastName : function () {
      if((coins - 15) >= 0) {
        lastName = prompt('New Last Name:');
        lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);
        nameInput.value = firstName + ' ' + lastName;
        coins -= 15;
        coinsInput.value = coins;
      } else {
        alert('You need 15 coins to change your Last Name!');
      }
    }
  };

}

let myName = Name();
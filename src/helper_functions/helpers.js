let helpers = {
  getRandomNumber: function() {
    let randomNumber = Math.floor((Math.random() * 15) + 1);
    console.log(randomNumber);

    return randomNumber;
  }
}

export default helpers;

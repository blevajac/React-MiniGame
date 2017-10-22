let helpers = {
  getRandomNumber: function() {
    let randomNumber = Math.floor((Math.random() * 11) + 5);

    return randomNumber;
  },
  getNewRandomNumber: function(number) {
    let randomNumber = Math.floor((Math.random() * number) + 1);

    return randomNumber;
  }

}

export default helpers;

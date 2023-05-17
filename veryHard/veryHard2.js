//EFFICIENT

function leastCoins(arr, amount) {
  //sort arr in descending order
  arr.sort((a, b) => b - a);
  // create map to keep track of which coins are being added
  let coins = new Map();

  // object that holds coin count and map of coins that appear
  // a sucess addition
  let addedCoins = {
    numCoins: 0,
    mapOfTypes: new Map(),
  };

  //initalize counter for loop
  let i = 0;
  //continue loop until amount no longer greater than 0 or i no longer less than arr.length
  while (amount > 0 && i < arr.length) {
    let coin = arr[i];

    //divide amound by coin and floor to check if atleast 1 coin can be used
    const quotient = Math.floor(amount / coin);
    if (quotient) {
      // the amount of times a coin can be used is equal to the quotient
      let val = quotient;
      //add coin and its appearances (val) to map
      coins.set(coin, val);
      //update total coins
      addedCoins.numCoins += val;
      addedCoins.mapOfTypes.set(coin, coin + " appears: " + val + " times");

      //update amount to remainder
      amount %= coin;
    }
    i++;
  }

  //if amount zero than the combination exists if not return -1
  if (amount === 0) {
    console.log(addedCoins.mapOfTypes);
    return addedCoins.numCoins;
  } else {
    return -1;
  }
}
//This version runs runce per coin where as in the prev version it runs n times per coin.
// n = the amuont of times the number goes into its startin amount
console.log(leastCoins([1,2,3,4,5,6,7,8,9], 99985));
console.log(leastCoins([1, 2, 5], 11));
console.log(leastCoins([3, 2], 11));

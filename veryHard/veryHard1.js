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

  while (amount > 0 && i < arr.length) {
    let coin = arr[i];

    //Check if amount is > or = to coin
    if (amount >= coin) {
  
      // set val to current coin value in map +1 if undefined set val to 1
      let val = coins.get(coin) ? coins.get(coin) + 1 : 1;
      //update map
      coins.set(coin, val);
      //increment total coins count
      addedCoins.numCoins++;
      addedCoins.mapOfTypes.set(coin, coin + " appears: " + val + " times");
      //update amount
      amount -= coin;
    } else {
      i++;
    }
  }
//if amount zero than the combination exists if not return -1
  if (amount === 0) {
    console.log(addedCoins.mapOfTypes);
    return addedCoins.numCoins;
  } else {
    return -1;
  }
}

console.log(leastCoins([1,2,3,4,5,6,7,8,9], 99985));
console.log(leastCoins([1, 2, 5], 11));
console.log(leastCoins([3, 2], 11));

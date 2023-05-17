function average(arr){
    let sum = 0
    arr.forEach((element)=>{
        sum+=element
    })
    return sum/arr.length
}


console.log(average([1,2,3,4,5,6,7,8,9]))
console.log(average([1,4,7]))
console.log(average([10, 5]))
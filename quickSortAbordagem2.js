const sort=(arr) =>{
    if(arr.length < 2) return arr;
    else{
        const pivo= arr[Math.floor(Math.random()*arr.length)]
        const less= arr.filter(value => value < pivo)
        const greater= arr.filter(value => value > pivo)
        return [... sort(less),pivo,...sort(greater)]
    }

}


let arranjo=[3,2,5,30,54,12,1,7,18,22,1]

console.log(sort(arranjo))

// const str = [3,4,5,6]

// const arr = str.reduce((acc,curr) => {
//     acc.push(curr - 1);
//     return acc;
// }, [])

// console.log(arr)

const str =['Alex','Victor', 'Artur']

const arr =str.reduce((acc,curr) =>{
    acc.push(curr[0]);
    return acc;
}, [])

console.log(arr)


const data=[
    {
        id:4,
        nombre:'Manuel',
        edad:40
    },
    {
        id:6,
        nombre:'Juan',
        edad:50
    },
    {
        id:7,
        nombre:'Marcos',
        edad:50
    }
]
const getData = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}
let response = getData();

response.then((data)=>{
    console.log(data);
})

console.log('Continua el programa');


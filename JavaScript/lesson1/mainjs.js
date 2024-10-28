var fullName = 'Pham Thi Thu Huyen';
var age = 18;
// alert(fullName);
// alert(age);
// Console: hien ra thong  b\

/*console.log('In ra thong bao trong Console DevTool')
console.log(fullName)
console.warn(age);console.error(age);*/

// Confirm
// confirm('Xac nhan ban du tuoi!')
// prompt
// prompt('Xac nhan ban du tuoi!')
// set time out: cho 1 doan code chay sau 1 khoang thoi gian
/*setTimeout(function(){
    alert('Thong bao')
}, 1000)
// Set Interval: chay lien tuc sau 1 khoang thoi gian
/* setInterval(function(){
    console.log('Day la log'+ Math.random())
}, 1000)*/
function writeLog(){
    var myString='';
    for (var param of arguments){
        myString+=`${param} - `
    }
    console.log(myString)
}
writeLog('log1','log2', 3, 4);

parseInt(238,21);
function isNumber(value){
    
    return typeof value === 'number'
    }
    // Expected results:
    console.log(isNumber(999)); // true
    console.log(isNumber('abc')); // false
    console.log(isNumber('100')); // false

var languages =[
    'JS',
    'PHP', 'ruby'
]
console.log( typeof languages)
console.log(languages.length)
console.log(languages.slice(1, 2))
// slice: cắt 1, vài element

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



var emailKey='email';
var myInfo={
    name: 'Thu Huyen',
    age: 19,
    [emailKey]: 'phamhuyen1409@'
}
console.log(myInfo)





var courses=[
    {
        id:1,
        name:'JS',
        coin:100
    },
    {
        id:2,
        name:'HTML,CSS',
        coin:200
    },
    {
        id:3,
        name:'Ruby',
        coin:220
    }
]
var totalCoin=courses.reduce(function(accumulator,currentValue)
   { return accumulator+currentValue.coin;
   },0);
console.log(totalCoin);
// Vòng lặp lồng nhau -- Nestes loop
var myArray=[
    [1,2],
    [3,4],
    [5,6]
    ];
    for (var i=0; i<myArray.length; i++){
        for (var j=0; j< myArray[i].length; j++){
            console.log(myArray[i][j]);
        }
    }


// myMap method 
Array.prototype.myMap = function(cb) {
    var output=[];var arrayLength =this.length;
    for (var i=0; i<arrayLength;i++){
        var result=cb(this[i], i);
        output.push(result);
    }
    return output;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
}))
 // Output: [2, 4, 6]
 console.log(numbers.myMap(function (number, index) {
        return number * index;
    })) 
    // Output: [0, 2, 6]


d=new Date();
Number(d);
console.log(d);
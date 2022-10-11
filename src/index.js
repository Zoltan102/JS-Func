function fvNeve(param1, param2){

}

let masikFv = function (param1, param2){
    console.log(param1);
};

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('page loaded');
//     document.getElementById('szinezes').addEventListener('click', function (){
//         document.body.style.backgrondColor = "lightblue";
//     });
// });

// function osszehasonlit(a, b){
//     if(a < b){
//         return -1;
//     }else if(a > b){
//         return 1;
//     }else{
//         return 0;
//     }
// }
// t.sort((a, b) => {
//     if(a < b){
//         return -1;
//     }else if(a > b){
//         return 1;
//     }else{
//         return 0;
//     }
// });

//sorts num
let t = [ 4, 78, 715, -99 ];
t.sort((a, b) => {return a-b});
console.log(t);

//filters even num
console.log(t.filter(e => e % 2 === 0));

//apply to all element
console.log(t.map(e => e * e));

let szam = 0;

//side effect
//no side effect
1 + 1;
Math.sqrt(1 *2 / 4);
[1, 2, 3].filter(e => e > 2);
szam > 2;
[56 , 33].includes(szam);
//has side effect
console.log('hello');
let a = szam++;
let b = ++szam;
t.push(a, b);
t.sort();
console.log(a, b);
console.log(t)

//random bg colour
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('szinezes').addEventListener('click', () => {
        //start interval
        let interval = setInterval(() => {
            document.body.style.backgroundColor = 'rgb(' + rnd() + ',' + rnd() + ',' + rnd() + ')';
            console.log(document.body.style.backgroundColor);
        }, 50);
        //stop interval
        document.getElementById('stop').addEventListener('click', ()=>{
            document.body.style.backgroundColor = 'white';
            clearInterval(interval);
        });
    });
    console.log('Page loaded');
    
});

function rnd(){
    return Math.floor(Math.random() * 255) + 1;
}


let personas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


function swap (num1,num2,array){
 if(num1 !== num2){
 array[num1]= array.splice(num2,1,array[num1]).join()
 }
 return array
}
console.log(swap(0,1,personas));


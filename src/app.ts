import fs from 'fs'
import path from 'path'

const title: string = "Tabla del 5";
const filePaht: string = path.join(__dirname, 'tabla5.txt')


console.log('==========================================');
console.log(title);
console.log('==========================================');
let print:string = '';
const tableFive:number = 5;

for(let i:number = 1; i <= 10; i++){
   print += `${tableFive} X ${ i } = ${tableFive * i }\n` 
   
}

console.log(print);
fs.writeFile(filePaht, print, (err)=>{
    if(err){
        console.log("error al guardar el archivo", err);    
    }else{
        console.log("archivo guardado");    
        }
    })




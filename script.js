let i = Number(prompt('Qual o número de degraus ?'));
let indiceDoDegrau = 0 ;
let material = prompt('Por favor digitar o material!');
let texto2 = material;
while( indiceDoDegrau < i){
   if(indiceDoDegrau == 0){
   console.log(material);
   indiceDoDegrau ++ ;}
   else{
      console.log(texto2 + material);
      texto2 = texto2 + material;
      
      indiceDoDegrau ++;
   }

}

var carro = [{modelo: 'Audi A3', marca : "Audi", ano: 2020},
{modelo:'Compass', marca: 'Jeep', ano: 2023}]

for (let caracteristica in carro){
    console.log(carro[caracteristica].modelo);

}

for (let c of carro){
    console.log(c.marca)

}

 var c = 1
 while(c <= 10){
    console.log(c)
    c++
 }

 var t = 1
 do{
    console.log(t)
    t++
 }while( t <= 6)
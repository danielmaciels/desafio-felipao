let nome = "Danielgameplays"
let nivelDeXp = 5889
let textoNome = "O Herói de nome " + nome
let textoNivel = " está no nível "

if (nivelDeXp <=1000){
    console.log(textoNome + textoNivel + "Ferro.")
}

if (nivelDeXp >=1001 && nivelDeXp <=2000){
    console.log(textoNome + textoNivel + "Bronze.")
 }

if (nivelDeXp >=2001 && nivelDeXp <=5000){
    console.log(textoNome + textoNivel + "Prata.")
 }

if (nivelDeXp >=5001 && nivelDeXp <=7000){
    console.log(textoNome + textoNivel + "Ouro.")
 }

if (nivelDeXp >=7001 && nivelDeXp <=8000){
    console.log(textoNome + textoNivel + "Platina.")
}

if (nivelDeXp >=8001 && nivelDeXp <= 9000){
    console.log(textoNome + textoNivel + "Ascendente.")
}

if (nivelDeXp >= 9001 && nivelDeXp <=10000){
    console.log(textoNome + textoNivel + "Imortal.")
}

if (nivelDeXp >=10000){
    console.log(textoNome + textoNivel + "Radiante.")
}
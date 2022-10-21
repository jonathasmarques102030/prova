//var bim1 = 6;
//var bim2 = 8;
//var bim3 = 3;
//var bim4 = 7;


//var mediaBimestral = (bim1 + bim2 + bim3 + bim4) / 4

//if (mediaBimestral >= 7) {
 //   console.log("APROVADO")
//} else {
//    console.log("REPROVADO")
//}
/* PROVA IF ELSE */

var aluno = [{
        id: 1,
        bim1: 6,
        bim2: 8,
        bim3: 3,
        bim4: 7,
        media: 8
    },
    {
        id: 2,
        bim1: 5,
        bim2: 5,
        bim3: 5,
        bim4: 5,
        media: 5
    },
    {
        id: 3,
        bim1: 10,
        bim2: 10,
        bim3: 10,
        bim4: 10,
        media: 10
    }
]

for (let i = 0; i == aluno.length; i++){
 }
if(aluno[0].media <= 7){
    console.log("Aluno 1 reprovado")
}else {
    console.log("Aluno 1 aprovado")
}

if(aluno[1].media <= 7){
    console.log("Aluno 2 reprovado")
}else {
    console.log("Aluno 2 aprovado")
}

if(aluno[2].media <= 7){
    console.log("Aluno 3 reprovado")
}else {
    console.log("Aluno 3 aprovado")
}
// Definindo o tempo
let pipocaTempo = 10;
let macarraoTempo = 8;
let carneTempo = 15;
let feijaoTempo = 12;
let brigadeiroTempo = 8;

// Definindo a mensagem

const a = "Tempo insuficiente";
const b = "Comida queimou.";
const c = "Kabumm";
const d = "Prato pronto, bom apetite!!!";

// Selecionando a opção

const readlineSync = require('readline-sync');

console.log("Selecione uma das opções abaixo:");

const opcao = readlineSync.question("Escolha a sua opcao:\n 1 - Pipoca " 
+ pipocaTempo + " segundos\n 2 - Macarrao "
+ macarraoTempo + " segundos\n 3 - Carne "
+ carneTempo + " segundos\n 4 + Feijao "
+ feijaoTempo + " segundos\n 5 - Brigadeiro " 
+ brigadeiroTempo + " segundos\n");


// Seleção de tempo

let tempo = 10;

switch (opcao) {
    case '1':console.log("Selecionado: Pipoca");
        if(tempo < pipocaTempo){console.log(a);}
        else if (tempo >= (pipocaTempo*2) && tempo < (pipocaTempo*3)){console.log(b);}
        else if (tempo >= (pipocaTempo*3)){console.log(c);}
        else{console.log(d);};
        break;
    case '2': console.log("Selecionado: Macarrao");
        if(tempo < macarraoTempo){console.log(a);}
        else if (tempo >= (macarraoTempo*2) && tempo < (macarraoTempo*3)){console.log(b);}
        else if (tempo >= (macarraoTempo*3)){console.log(c);}
        else{console.log(d);};
    break;
    case '3': console.log("Selecionado: Carne");
        if(tempo < carneTempo){console.log(a);}
        else if (tempo >= (carneTempo*2) && tempo < (carneTempo*3)){console.log(b);}
        else if (tempo >= (carneTempo*3)){console.log(c);}
        else{console.log(d);};
    break;
    case '4': console.log("Selecionado: Carne");
        if(tempo < carneTempo){console.log(a);}
        else if (tempo >= (carneTempo*2) && tempo < (carneTempo*3)){console.log(b);}
        else if (tempo >= (carneTempo*3)){console.log(c);}
        else{console.log(d);};
    break;
    case '5': console.log("Selecionado: Carne");
        if(tempo < carneTempo){console.log(a);}
        else if (tempo >= (carneTempo*2) && tempo < (carneTempo*3)){console.log(b);}
        else if (tempo >= (carneTempo*3)){console.log(c);}
        else{console.log(d);};
    break;
    default: console.log("Prato inexistente");
}
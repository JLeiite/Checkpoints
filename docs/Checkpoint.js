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

// Opções do microondas
function microondas() {

    console.log(1 + " - Pipoca " + pipocaTempo + " segundos");
    console.log(2 + " - Macarrão " + macarraoTempo + " segundos");
    console.log(3 + " - Carne " + carneTempo + " segundos");
    console.log(4 + " - Feijão " + feijaoTempo + " segundos");
    console.log(5 + " - Brigadeiro " + brigadeiroTempo + " segundos");
}

microondas();

// Seleção de item e tempo
let item = 2;
let tempo = 2;

// Cálculo do tempo e item inserido
if (item === 1){
    console.log("Selecionado: Pipoca");
    if(tempo < pipocaTempo){
        console.log(a);
    } else if (tempo >= (pipocaTempo*2) && tempo < (pipocaTempo*3)){
        console.log(b);
    }else if (tempo >= (pipocaTempo*3)){
        console.log(c);
    }else{
        console.log(d);
    }
}

else if (item === 2){
    console.log("Selecionado: Macarrao");
    if(tempo < macarraoTempo){
        console.log(a);
    } else if (tempo >= (macarraoTempo*2) && tempo < (macarraoTempo*3)){
        console.log(b);
    }else if (tempo >= (macarraoTempo*3)){
        console.log(c);
    }else{
        console.log(d);
    }
}

else if(item === 3){
    console.log("Selecionado: Carne");
    if(tempo < carneTempo){
        console.log(a);
    } else if (tempo >= (carneTempo*2) && tempo < (carneTempo*3)){
        console.log(b);
    }else if (tempo >= (carneTempo*3)){
        console.log(c);
    }else{
        console.log(d);
    }
}

else if(item === 4){
    console.log("Selecionado: Feijão");
    if(tempo < feijaoTempo){
        console.log(a);
    } else if (tempo >= (feijaoTempo*2) && tempo < (feijaoTempo*3)){
        console.log(b);
    }else if (tempo >= (feijaoTempo*3)){
        console.log(c);
    }else{
        console.log(d);
    }
}

else if(item === 5){
    console.log("Selecionado: Brigadeiro");
    if(tempo < brigadeiroTempo){
        console.log(a);
    } else if (tempo >= (brigadeiroTempo*2) && tempo < (brigadeiroTempo*3)){
        console.log(b);
    }else if (tempo >= (brigadeiroTempo*3)){
        console.log(c);
    }else{
        console.log(d);
    }
}

else {
    console.log("Prato inexistente");
}

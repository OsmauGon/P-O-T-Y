var letras =[
    "AAAA"
    ,"BBBB"
    ,"CCCC"
    ,"DDDD"
    ,"EEEE"
    ,"FFFF"
    /*,"G"
    ,"H"
    ,"I"
    ,"J"
    ,"K"
    ,"L"
    ,"M"
    ,"N"
    ,"Ñ"
    ,"O"
    ,"P"
    ,"Q"
    ,"R"
    ,"S"
    ,"T"
    ,"U"
    ,"V"
    ,"W"
    ,"X"
    ,"Y"
    ,"Z"
    ,"libre28"
    ,"libre29"
    ,"libre30"
    ,"libre31"
    ,"libre32"*/
];
var nombres5 =["Ana","Bianca","Cecilia","Daniela","Estela"];
var nombres10 =["Andres","Bautista","Carlos","Damian","Esteban",
                "Francisco","Guillermo","Hipolito","Ian","Javier"];
var nombres16 =["Agustin","Beatriz","Cateo","Daiana","Erik",
                "Flavia","Gabriela","Heros","Ivana","Jesica",
                "Kevin","Lucia","Marcos","Noelia","Oliver","Pilar"];
/****************************************************************** */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
function mesclar(lista){
    //console.log(lista);//atecion:borrar
    let nuevoArreglo3 = [];
    let nuevoArreglo4 = [];
    let nuevoArreglo5 = [];
    let nuevoArreglo6 = [];
    for (elemen in lista){
        let nombre = [lista[elemen], getRandomInt(0,999)]
        nuevoArreglo3[elemen] = nombre;
        nuevoArreglo4.push(nuevoArreglo3[elemen][1])
    }
    //console.log(nuevoArreglo4);//atencion:borrar
    nuevoArreglo5 = nuevoArreglo4.sort()
    //console.log(nuevoArreglo5);//atencion:borrar
    for (elemento1 in nuevoArreglo5){
        let numeroSolo = nuevoArreglo5[elemento1];
        for (elemento2 in nuevoArreglo3){
            if (nuevoArreglo3[elemento2][1] == numeroSolo){
                nuevoArreglo6[elemento1] = nuevoArreglo3[elemento2][0]
            }
        }
    }
    return nuevoArreglo6
}
function creadorDeNombres(numero){
    let nombres =[];
    let contador = 0;
    while (contador < numero){
        let nombre = "Jugador " + contador;
        nombres.push(nombre);
        contador++;
    }
    return nombres
}


function crearCombinaciones(arreglo){
    let agrupados = [];
    let combinaciones = [];
    let elementoActual = 0;

    for(nombre of arreglo){
        for(nombre2 of arreglo){
            let combi = [nombre,nombre2];
            agrupados.push(combi);
        }
    }
    for(i = 0; i<arreglo.length; i++){
        for(j = 0; j<arreglo.length; j++){
            if(j > i){
                combinaciones.push(agrupados[elementoActual]);
            }
            elementoActual++;
        }
    }
    return combinaciones
}
function crearRondasConPotenciaDe2(arreglo){
    let arregloDecombinaciones = crearCombinaciones(arreglo)
    let mesclados = arregloDecombinaciones;
    let listaDeRondas =[];
    for(i=0; i<arreglo.length - 1; i++){
        let ronda = [];
        let yaUsados = [];
        let sigRonda = [];
        for (el of mesclados){
            if (ronda.length == 0){
                ronda.push(el);
                yaUsados.push(el[0]);
                yaUsados.push(el[1]);
            }
            else{
                if(yaUsados.includes(el[0]) || yaUsados.includes(el[1])){
                    sigRonda.push(el);
                }
                else{   
                ronda.push(el);
                yaUsados.push(el[0]);
                yaUsados.push(el[1]);
                }
            }
        }
        listaDeRondas.push(ronda);
        mesclados = sigRonda;
        
    }
    //return [listaDeRondas,mesclados]
    return listaDeRondas
}
function crearRondasConMezcla(arreglo){
    let arregloDecombinaciones = crearCombinaciones(arreglo)
    let mesclados = mesclar(arregloDecombinaciones);
    let listaDeRondas =[];
    
    for(i=0; i<arreglo.length - 1; i++){
        let ronda = [];
        let yaUsados = [];
        let sigRonda = [];
        for (el of mesclados){
            if (ronda.length == 0){
                ronda.push(el);
                yaUsados.push(el[0]);
                yaUsados.push(el[1]);
            }
            else{
                if(yaUsados.includes(el[0]) || yaUsados.includes(el[1])){
                    sigRonda.push(el);
                }
                else{   
                ronda.push(el);
                yaUsados.push(el[0]);
                yaUsados.push(el[1]);
                }
            }
        }
        listaDeRondas.push(ronda);
        mesclados = sigRonda;
        
    }
    return [listaDeRondas,mesclados]
}
function crearRondasMenoresDe16(arreglo){
    let flag = true;
    let intentos = 0;
    let maximoEncontrado = 0;
    let comparacion = 1000;
    let consolacion = [];
    let rondasCreadas = [];
    while (flag) {   
    let rondas = crearRondasConMezcla(arreglo);
    let cant = 0;
        for(ele of rondas[0]){
            if(ele.length == (arreglo.length/2)){
                cant++;
           }
        }
        if (cant > maximoEncontrado){
            maximoEncontrado = cant;
            rondasCreadas = rondas[0]
        }
        if(intentos == 1000 || maximoEncontrado == rondasCreadas){
            flag = false;
        }
        else {
            intentos++;
        } 
    }
    
    return rondasCreadas
    //return [rondasCreadas,maximoEncontrado]
}
function quitarSobras(arreglo){
    let numero = arreglo[0].length;
    let array = [];
    for(ele of arreglo){
        if (ele.length == numero){
            array.push(ele);
        }
    }
    return array
}
function creadorDeRondas(arreglo){
    console.time();
    let numeroDeJugadores = arreglo.length
    let listaDeRondas =[]
    if(numeroDeJugadores < 15){
        listaDeRondas = crearRondasMenoresDe16(arreglo);
    }
    switch (numeroDeJugadores) {
        case 16:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 32:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 64:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 128:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 256:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 512:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 1024:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 2048:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
    
        default:
            listaDeRondas = crearRondasMenoresDe16(arreglo);
            break;
    }
    console.timeEnd()
    return listaDeRondas
}

let ejemplo = creadorDeNombres(6)
let pureaDeFuego = creadorDeRondas(letras);
console.log(pureaDeFuego)

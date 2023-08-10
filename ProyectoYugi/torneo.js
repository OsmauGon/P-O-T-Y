var arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var arrayDePrueba1 = [
"Mauricio",
"Gonzalo",
"Pablo",
"Ignacio",
"Matias",
"Javier",
"Dabid",
"Esteban"
]//este arreglo tiene 8 nombres
var arrayDePrueba2 = [
    ["Mauricio",0,false],
    ["Gonzalo",3,false],
    ["Pablo",2,false],
    ["Ignacio",1,false],
    ["Matias",2,false],
    ["Javier",3,false],
    ["Dabid",3,false],
    ["Esteban",0,false],
    ["Lean",0,false]  
]//este arreglo tiene los 8 nombres, sus puntajes, y su verificacion de libre o no
var arrayDePrueba3 = {
    jug1: ["Mauricio",0],
    jug2: ["Gonzalo",3],
    jug3: ["Pablo",2],
    jug4: ["Ignacio",1],
    jug5: ["Matias",2],
    jug6: ["Javier",3],
    jug7: ["Dabid",3],
    jug8: ["Esteban",0],
    jug9: ["Lean",0]  
}//este es un arreglo de objetos, NO LO ESTOY USANDO
var duelistas = ["Yugi Moto","Moto Yugi","Seto Kaiba","Kaiba Seto","Joey Wheeler","Wheeler Joey","Marik Ishtar","Max Pegasus"];
var duelistas2 = [["Yugi Moto",8],["Moto Yugi",7],["Seto Kaiba",6],["Kaiba Seto",5],["Joey Wheeler",4],["Wheeler Joey",3],["Marik Ishtar",2],["Max Pegasus",1]];
var duelistas3 = [["Yugi Moto",8,false],["Moto Yugi",7,true],["Seto Kaiba",6,false],["Kaiba Seto",5,true],["Joey Wheeler",4,false],["Wheeler Joey",3,true],["Marik Ishtar",2,false],["Max Pegasus",1,false]];
/****************************************************************************** */
/**********************Obtencion de Recursos*********************************** */
/****************************************************************************** */
const ingresar = document.querySelector(".ingresar");
const lanzar = document.querySelector(".lanzar");
const actualizar = document.querySelector(".actualizar");
const mostrar = document.querySelector(".mostrar");
const probar = document.querySelector(".probar");//atencion:borrar
const ver = document.querySelector(".ver");//atencion:borrar
const guardar = document.querySelector(".guardar");//atencion:borrar
const retomar = document.querySelector(".retomar");//atencion:borrar
/****************************************************************************** */
/**********************Declaracion de variables******************************** */
/****************************************************************************** */
var numeroDeRonda = 0;//atencion:debe estar en 0
var numeroDeActualizacion = 0;;//atencion:debe estar en 0
var listaJugadores = [];//atencion:debe estar vacio
var listaCombinaciones = [];//atencion:debe estar vacio
var listaRondas = [];//atencion:debe estar vacio
var listaJugadoresPuntuaciones = [];//atencion:debe estar vacio
/****************************************************************************** */
/**********************Funciones que voy a usar******************************** */
/****************************************************************************** */
function verificar(){
    alert("Funcionaa!!!")
}// mostrara una alerta que verifique que funcina lo que hice
function mostrarVariables(){
    console.log("El numero de ronda es " + numeroDeRonda);
    console.log("El numero de actualizacion es " + numeroDeActualizacion);
    console.log(listaJugadores);
    console.log(listaCombinaciones);
    console.log(listaRondas);
    console.log(listaJugadoresPuntuaciones);
}
function errorDePrograma(numero){   
    alert("Error!!");
    switch(numero){
            case 0:
                alert("Ya hay un torneo en marcha, no se pueden agregar nuevos jugadores");
                break;
            case 1:
                alert("El nombre de jugador no valido. Vuelva a ingresar");
                break;
            case 2:
                alert("Jugadores insuficintes. Por favor ingrese un numero mayor de participantes");
                break;
            case 3:
                alert("Aun no se han ingresado jugadores");
                break;
            case 4:  
            alert("Aun no se han cargado resultados de la ronda anterior");
                break;
            case 5:
                alert("Aun no se lanzo la ronda de juego");
                break;
            case 6:
                alert("Se registraron resultados no admitidos, repita los resultados de...");
                break;
    }
}//reconoce cuando se fenera un error y vuelve para atras
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}//devuelve un valor entero aleatorio entre 2 numeros
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
}//Toma un arreglo y lo devuelve con los elementos mesclados
function agruparPorPuntaje(arreglo){
    let jugadoresCon0 = [];
    let jugadoresCon1 = [];
    let jugadoresCon2 = [];
    let jugadoresCon3 = [];
    let jugadoresCon4 = [];
    let jugadoresCon5 = [];
    let jugadoresCon6 = [];
    let jugadoresCon7 = [];
    let jugadoresCon8 = [];
    let jugadoresCon9 = [];
    for (jugAgrupado in arreglo){
        switch (arreglo[jugAgrupado][1]){
            case 0:
            jugadoresCon0.push(arreglo[jugAgrupado][0]);
            break;
            case 1:
                jugadoresCon1.push(arreglo[jugAgrupado][0]);
                break;
                case 2:
                    jugadoresCon2.push(arreglo[jugAgrupado][0]);
                    break;
                    case 3:
                        jugadoresCon3.push(arreglo[jugAgrupado][0]);
                        break;
                        case 4:
                            jugadoresCon4.push(arreglo[jugAgrupado][0]);
                            break;
                            case 5:
                                jugadoresCon5.push(arreglo[jugAgrupado][0]);
                                break;
                                case 6:
                                    jugadoresCon6.push(arreglo[jugAgrupado][0]);
                                    break;
                                    case 7:
                                        jugadoresCon7.push(arreglo[jugAgrupado][0]);
                                        break;
                                        case 8:
                                            jugadoresCon8.push(arreglo[jugAgrupado][0]);
                                            break;
                                            case 9:
                                                jugadoresCon9.push(arreglo[jugAgrupado][0]);
                                                break;
        }
    }
    let arreglo2y1 = jugadoresCon2.concat(jugadoresCon1)
    let arreglo210 = arreglo2y1.concat(jugadoresCon0)
    let arreglo3210 = jugadoresCon3.concat(arreglo210)
    let arreglo43210 = jugadoresCon4.concat(arreglo3210);
    let arreglo543210 = jugadoresCon5.concat(arreglo43210);
    let arreglo6543210 = jugadoresCon6.concat(arreglo543210);
    let arreglo76543210 = jugadoresCon7.concat(arreglo6543210);
    let arreglo876543210 = jugadoresCon8.concat(arreglo76543210);
    let arreglo9876543210 = jugadoresCon9.concat(arreglo876543210);
    return arreglo9876543210;
    /*********************************************************************************************** */
    /* 
    let jugadoresCon0 = [];
    let jugadoresCon1 = [];
    let jugadoresCon2 = [];
    for (jugAgrupado in arreglo){
        if (arreglo[jugAgrupado][1] === 0){
            jugadoresCon0.push(arreglo[jugAgrupado][0]);
        }
        if (arreglo[jugAgrupado][1] === 1){
            jugadoresCon1.push(arreglo[jugAgrupado][0]);
        }
        if (arreglo[jugAgrupado][1] === 2){
            jugadoresCon2.push(arreglo[jugAgrupado][0]);
        }
    }  
    let arreglo2y1 = jugadoresCon2.concat(jugadoresCon1);
    let arreglo210 = arreglo2y1.concat(jugadoresCon0);
    return arreglo210 */
    /*********************************************************************************************** */
}//Toma un arreglo con puntos y agrupa a los jugadores por puntaje, desde los mayores a los menores
function incializarEn0 (arreglo){
    let valor = 0;
    for (arre of arreglo){
        let jugador = [arre,0,false];
        listaJugadoresPuntuaciones[valor] = jugador;
        valor ++;
    }
}//crea un arreglo con los participantes y sus puntuaciones en 0
function quitarPuntajeDe(arreglo){
    let arregloParaTrabajar = arreglo;
    let arregloSinPuntos = [];
    /***************************************** */
    for (ar in arregloParaTrabajar){
        let nombre = arregloParaTrabajar[ar][0];
        arregloSinPuntos.push(nombre)
    }
    return arregloSinPuntos
}//Toma un arreglo con puntaje y devuelve el mismo arreglo pero solo con los nombres
function devolverPuntajes(arregloSinPuntaje, arregloConPuntos){
    let arregloConPuntajesDevueltos = [];
    let arregloConPuntajesDevueltos2 = [];
    for (cosa of arregloSinPuntaje){
        for (elemento in arregloConPuntos){
            if(cosa === arregloConPuntos[elemento][0]){
                let nuevoElemento = arregloConPuntos[elemento];
                arregloConPuntajesDevueltos[elemento] = nuevoElemento;
            }  
            else {
            }
        }
    }
    for (algo of arregloConPuntajesDevueltos){
        if(algo != undefined){
        arregloConPuntajesDevueltos2.push(algo);
        }
    }
    return arregloConPuntajesDevueltos2
}//devuelve los puntajes a cada jugador
function empezarDeNuevo(){
        numeroDeRonda = 0
        numeroDeActualizacion = 0;
        listaJugadores = [];
        listaCombinaciones = [];
        listaRondas = [];
        listaJugadoresPuntuaciones = [];
}
/************************************************* */
/************************************************* */
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
}//sirve para quitar las rondas que no tengan a todos lo jugadores jugando
function creadorDeRondas(arreglo){
    console.time();
    let numeroDeJugadores = arreglo.length
    let listaDeRondas =[]
    switch (numeroDeJugadores) {
        case 4:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 8:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
        case 16:
            listaDeRondas = crearRondasConPotenciaDe2(arreglo);
            break;
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
    return quitarSobras(listaDeRondas)
}
/************************************************* */
function conversorRondaALista(arregloDeRondas){
    let convertidoAlista =[];
    for (dupla of arregloDeRondas){
        convertidoAlista.push(dupla[0]);
        convertidoAlista.push(dupla[1]);
    }
    return convertidoAlista
}//Toma un de ronda y devuelve un lista de los jugadores
function pruebaDeQuite(arregloConTodasLasCombinaciones,arregloConCombinacionesAQuitar){
                                            for (nos of arregloConCombinacionesAQuitar){
                                                let nombre1 = nos[0];
                                                let nombre2 = nos[1];
                                                for (no in arregloConTodasLasCombinaciones){
                                                if (arregloConTodasLasCombinaciones[no].includes(nombre1) && 
                                                    arregloConTodasLasCombinaciones[no].includes(nombre2) ){
                                                    console.log(`estaba la combinacion: ${arregloConTodasLasCombinaciones[no]}`);//atencion:borrar
                                                    arregloConTodasLasCombinaciones.splice([no],1) 
                                                }
                                            }
                                            }
                                            //console.log(arregloConTodasLasCombinaciones);//atencion:borrar
}//toma un arreglo el arreglo con todas las combinaciones y un arreglo con algunas combinaciones y quita del primero las del segundo
function impares(arreglo){
    let posiblesLibres = [];
    let arregloSinJugLibre = [];
    for(nombre of arreglo){
        if(nombre[2] == false){
            posiblesLibres.push(nombre);
        }
    }
    if (posiblesLibres.length == 0){ 
        let opsion = confirm("Todos los jugadores ya han quedado libres. ¿Desea reiniciarlos a todos?");
        if (opsion == true){
        for (jug of arreglo){
            jug[2] = false;
        }
        alert("Todos los jugadores ya pueden volver a quedar libres.");
        }
        else{
            alert("Torneo finalizado, gracias por jugar");
            return
        }
    }
    let numeroAleatorio = getRandomInt(0, posiblesLibres.length);
    let jugLibre = posiblesLibres[numeroAleatorio];
    for (jug in arreglo){
        if (arreglo[jug][0] != jugLibre[0]){
            arregloSinJugLibre.push(arreglo[jug]);
        }
        else {
            arreglo[jug][2] = true;
        }
    }
    return [arregloSinJugLibre, jugLibre]
}//Toma un arreglo con cantidad impar de nombres y devuelve un arreglo con una lista de nombres y el jugador que queda libre
function guardaar(arreglo){
    document.write(`var ultimoTorneo = [<br>`)
    for (element of arreglo){
        document.write(`["${element[0]}",${element[1]},${element[2]}],<br>`)
    }
    document.write("];<br>");
    document.write(`var rondaYactualizacion = [${numeroDeRonda},${numeroDeActualizacion}]`);
}//imprime el estado actual del torneo
/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */
function obtenerJugadores (){
    if (numeroDeRonda != 0){
        errorDePrograma(0)
        return
    }
    let cant = prompt("cuantos jugadores seran?");
    let ind = 1;
    while (ind <= cant) {
        ind++;
        newPlayer = prompt("Tu nombre con mayuscula seguido de la primero letra de tu apellido en mayuscula");
        if (newPlayer.length < 4 || listaJugadores.includes(newPlayer) === true){
            errorDePrograma(1);
            ind--;
        }
        else {
        listaJugadores.push(newPlayer);
        } 
    }
    if (listaJugadores.length < 4){
        errorDePrograma(2);
        listaJugadores = [];
        return
    }
    if(listaJugadores.length%2 == 1){
        listaJugadores.push("PlayerBy");
    }
    incializarEn0(listaJugadores);
    listaCombinaciones = crearCombinaciones(listaJugadores);
    listaRondas = creadorDeRondas(listaJugadores);
    //mostrarVariables();//atencion borrar
    //console.log(listaCombinaciones); //atencion:borrar
    alert(`Jugadores Listos, se han encontrado ${listaRondas.length} rondas para jugar`);
}// Agrega a LISTAJUGADORES los nombres de los participantes
function lanzarRonda(arreglo){
    rondaAlanzar =[];
    if (listaJugadores.length == 0){
        errorDePrograma(3);
        return
    }
    if (numeroDeRonda != numeroDeActualizacion){
        errorDePrograma(4);
        return
    }
    /*********************************************** */
    let rondaActual = arreglo[numeroDeActualizacion];
    rondaAlanzar = conversorRondaALista(rondaActual);
    console.log(rondaActual); //atencion:borrar
    console.log(rondaAlanzar); //atencion:borrar
    /*********************************************** */
     if (versus.hasChildNodes()){
        abrirVersus(rondaAlanzar);
        abrirVersus(rondaAlanzar);
    }
    else {
        abrirVersus(rondaAlanzar);
    }  
    
    numeroDeRonda++; 
}//toma un arreglo de objetos y muestra aleatoriamente quien contra quien
function actualizarRonda(arreglo){
    if (numeroDeRonda == numeroDeActualizacion){
        errorDePrograma(5);
        return
    }
    numeroDeActualizacion++; 
    let resultados = [];
    let resultadosFallidos = [];
    let resultadosFallidos2 = [];
    let resultadosFallidos3 = [];
    let contador = 0;
    for (player of arreglo){
        let resultado = prompt(`${player} 1_Gano? 2_Empato? 3_Perdio? 4_Libre?`);
        switch (resultado){
            case '1':
                let duelist = [player,2];
                resultados[contador] = duelist
                contador++;
                break;
            case '2':
                let duelis = [player,1];
                resultados[contador] = duelis
                contador++;
                break;
            case '4':
                let dueli = [player,1];
                resultados[contador] = dueli
                contador++;
                break;
            case '3':
                let duel = [player,0];
                resultados[contador] = duel
                contador++;
                break;
            default:
                resultadosFallidos.push(player);
        }
    }
    if (resultadosFallidos.length != 0){
        errorDePrograma(6);
        for (player of resultadosFallidos){
            let resultado = prompt(`${player} 1_Gano? 2_Empato? 3_Perdio? 4_Libre?`);
            switch (resultado){
                case '1':
                let duelist = [player,2];
                resultados[contador] = duelist
                contador++;
                break;
            case '2':
                let duelis = [player,1];
                resultados[contador] = duelis
                contador++;
                break;
            case '4':
                let dueli = [player,1,true];
                resultados[contador] = dueli
                contador++;
                break;
            case '3':
                let duel = [player,0];
                resultados[contador] = duel
                contador++;
                break;
                default:
                    resultadosFallidos2.push(player);
            }
        }
    }
    if (resultadosFallidos2.length != 0){
        alert("Aun se resultados no admitidos");
        for (player of resultadosFallidos2){
            let resultado = prompt(`${player} 1_Gano? 2_Empato? 3_Perdio? 4_Libre?`);
            switch (resultado){
                case '1':
                //resultados.push(`${player} salio Ganador de esta ronda`);
                let duelist = [player,2];
                resultados[contador] = duelist
                contador++;
                break;
            case '2':
                //resultados.push(`${player} Empato en esta ronda`);
                let duelis = [player,1];
                resultados[contador] = duelis
                contador++;
                break;
            case '4':
                //resultados.push(`${player} quedo Libre`);
                let dueli = [player,1,true];
                resultados[contador] = dueli
                contador++;
                break;
            case '3':
                //resultados.push(`${player} Perdio esta ronda`);
                let duel = [player,0];
                resultados[contador] = duel
                contador++;
                break;
                default:
                    resultadosFallidos3.push(player);
            }
        }
    }
    if (resultadosFallidos3.length != 0){
        alert("Ingresaste mal 3 veces los resultados bolaaa, ponete las pilas y carga TODOS los resultados de nuevo");
        
    }
    for (player in listaJugadoresPuntuaciones){
        if (listaJugadoresPuntuaciones[player][0] === resultados[player][0]){
            listaJugadoresPuntuaciones[player][1] += resultados[player][1]
        }
    }
    if (numeroDeActualizacion === listaRondas.length){
        alert("Limite de Rondas alcanzado Gracias por jugar");
        mostrarRanking(listaJugadoresPuntuaciones);
        empezarDeNuevo();
    }
}//tOMA UN ARREGLO Y PRENGUTA POR CADA ELEMENTO SU RESULTADO
function mostrarRanking(arreglo){ 
    if (listaJugadores.length == 0){
        errorDePrograma(3);
        return
    }
    if(versus.hasChildNodes){
        abrirVersus(listaJugadores);
        abrirRanking(arreglo);
    }
}//Debe mostrar en nombre de cada jugador con su puntaje actual
/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */

/****************************************************************************** */
/**********************Armado de eventos*************************************** */
/****************************************************************************** */
ingresar.addEventListener("click", ()=> obtenerJugadores());
lanzar.addEventListener("click", ()=> lanzarRonda(listaRondas));
actualizar.addEventListener("click", ()=> actualizarRonda(listaJugadores));
mostrar.addEventListener("click", ()=> mostrarRanking(listaJugadoresPuntuaciones));
/******************************************************************************** */
probar.addEventListener("click", ()=> prueba());
ver.addEventListener("click", ()=> mostraar());
guardar.addEventListener("click", ()=> guardaar(listaJugadoresPuntuaciones));
retomar.addEventListener("click", ()=> retomarTorneo());

/**************************************************************************************************************************** */
/**************************************************************************************************************************** */
/*//***********************************************Estoy trabajando********************************************************** */
/****************************************************************************************************************************** */
// NO logre que no se puedan repetir jugadores libres
function mostraar(){
    console.log(arrayDePrueba1);
}
function retomarTorneo(){
    listaJugadoresPuntuaciones = ultimoTorneo;
    numeroDeRonda = rondaYactualizacion[0];
    numeroDeActualizacion = rondaYactualizacion[1];
    listaJugadores = rondaYactualizacion;
    alert("Torneo Retomado");
}
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
/*************************************************************** *//*************************************************************** */
const botonVersus = document.querySelector(".deVersus");
botonVersus.addEventListener("click", () => abrirVersus(duelistas))
const botonRanking = document.querySelector(".deRanking");
botonRanking.addEventListener("click", () => abrirRanking(duelistas3))
const botonVariables = document.querySelector(".deVariables");
botonVariables.addEventListener("click", () => mostrarVariables())
/******************************************************************* */
const versus = document.querySelector(".veersus");
function crearPVP(arreglo){
    for (i = 0; i < arreglo.length/2; i++){
        let seccion_individual_pvp = document.createElement("div");
        seccion_individual_pvp.classList.add("seccion_individual_pvp")
        versus.appendChild(seccion_individual_pvp);
        }
}
function agregarCajas(arreglo){
    let contador_individual = 0;
    let contador_versus = 1;
    let contador_renglon = 0;
    let objetivo = document.querySelectorAll(".seccion_individual_pvp");

    for (nombre of arreglo){
    let divAgregado = document.createElement("DIV");
    let nombreJugador = document.createElement("P");
    nombreJugador.innerHTML = nombre;
    let fotoJugador = document.createElement("IMG");

    nombreJugador.classList.add("nombre_Jugador_Individual");
    fotoJugador.classList.add("fotoJugadorIndividual");
    fotoJugador.setAttribute("src",`/Personajes/${nombre}.jpg`);
    
    
    if (contador_individual%2 === 0){
        divAgregado.classList.add("cajaBlanca","animated","bounceInLeft");
         
         }
    else {
        divAgregado.classList.add("cajaBlanca","animated","bounceInRight");
        contador_versus++;
    }
    divAgregado.appendChild(fotoJugador);
    divAgregado.appendChild(nombreJugador);
    objetivo[contador_renglon].appendChild(divAgregado);

    if (contador_individual%2 == 0){
        let cuadroVersus = document.createElement("IMG");
        cuadroVersus.setAttribute("src","/versus.png")
        cuadroVersus.classList.add("h2_versus");
        objetivo[contador_renglon].appendChild(cuadroVersus);
        contador_individual++;    
    }
    if (contador_versus%2 == 0){
        contador_renglon++;
        contador_individual++;
        contador_versus++;
    }
}
}
function abrirVersus(arreglo){
    if (versus.classList.contains("versusActivo") === false){
   versus.classList.add("versusActivo");
   crearPVP(arreglo)
   agregarCajas(arreglo);
   } else {
       while (versus.firstChild){
           versus.removeChild(versus.firstChild);
       }
       versus.classList.remove("versusActivo");

   } 
}
/******************************************************************* */
const ranking = document.querySelector(".caja_ranking");
function crear_cajas_ranking(arreglo){
    for (i = 0; i < arreglo.length; i++){
        let seccion_individual_ranking = document.createElement("div");
        seccion_individual_ranking.classList.add("seccion_individual_ranking")
        ranking.appendChild(seccion_individual_ranking);
        }
}
function agregar_cajas_ranking(arreglo){
    let contador_renglon = 0;
    let objetivoo = document.querySelectorAll(".seccion_individual_ranking");

    for (nombre in arreglo){
    let divFoto = document.createElement("DIV");
    let divDetalles = document.createElement("DIV");
    divDetalles.classList.add("detalles");
    divFoto.classList.add("foto");
    
    let fotoJugador = document.createElement("IMG");
    let nombreJugador = document.createElement("P");
    let puntajeJugador = document.createElement("P");
    let estadoJugador = document.createElement("P");
    nombreJugador.innerHTML = arreglo[nombre][0];
    puntajeJugador.innerHTML = "Tiene " + arreglo[nombre][1] + " puntos";
    if (arreglo[nombre][2] === true){
        estadoJugador.innerHTML = "Ya ha quedado libre";
    }

    nombreJugador.classList.add("nombre_Jugador_Individual");
    puntajeJugador.classList.add("nombre_Jugador_Individual");
    estadoJugador.classList.add("nombre_Jugador_Individual");
    fotoJugador.classList.add("fotoJugadorIndividual");
    
    fotoJugador.classList.add("foto");
    fotoJugador.setAttribute("src",`/Personajes/${arreglo[nombre][0]}.jpg`);
    
    divFoto.appendChild(fotoJugador);
    divDetalles.appendChild(nombreJugador);
    if (numeroDeRonda != 0){
    divDetalles.appendChild(puntajeJugador);
    }
    divDetalles.appendChild(estadoJugador);
    objetivoo[contador_renglon].appendChild(fotoJugador);
    objetivoo[contador_renglon].appendChild(divDetalles);

    contador_renglon++;
}
}
function abrirRanking(arreglo){
    if (ranking.classList.contains("rankingActivo") === false){
        ranking.classList.add("rankingActivo");
        crear_cajas_ranking(arreglo);
        agregar_cajas_ranking(arreglo);
    }
    else {
        while (ranking.firstChild){
        ranking.removeChild(ranking.firstChild);
        }
        ranking.classList.remove("rankingActivo");
    }
}
    

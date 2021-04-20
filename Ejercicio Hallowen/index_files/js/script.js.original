// Deshabilitar menu del click derecho
oncontextmenu = function() { return false }

// Pantalla completa cada vez que se hace click en la página
document.addEventListener("click", Fullscreen);

function Fullscreen() {
    // Entrar en modo Pantalla Completa
    if(document.documentElement.requestFullscreen) {
       document.documentElement.requestFullscreen();
    } else if(document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen();
    } else if(document.documentElement.webkitRequestFullscreen) {
       document.documentElement.webkitRequestFullscreen();
    } else if(document.documentElement.msRequesFullscreen) {
       document.documentElement.msRequesFullscreen();
    }
    
    // Salir del modo Pantalla Completa
    /*    if(document.exitFullscreen) {
       document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
       document.webkitExitFullscreen();
    } else if(document.msExitFullscreen) {
       document.msExitFullscreen();
    }
    */
}

// Pantalla de bienvenida para poder activar la música
// que a su vez activa las animaciones de entrada

var welcome = document.getElementsByClassName("welcome")[0];
var title_welcome = document.getElementsByClassName("title_welcome")[0];
var pumpkin = document.getElementsByClassName("p1")[0];

var body_div = document.getElementsByClassName("body")[0];

// Añadir evento de click al texto de bienvenida
title_welcome.addEventListener("click", Welcome);

function Welcome() {

    welcome.style = "display: none";

    // Activar música
    var music = document.createElement("audio");
    music.src = "index_files/assets/media/halloween-music.mp3";
    music.setAttribute("loop", "");
    music.volume = 0.45;
    music.play();
    
    // Crea y adjunta un span con id="bats" en el "div" de clase "body"
    var bats_span = document.createElement("span");
    bats_span.setAttribute("id", "bats");
    bats_span.setAttribute("draggable", "false");
    bats_span.classList.add("cursor_none");
    body_div.appendChild(bats_span);
    
    // Adjunta el gif de los murcielagos en el span,
    // reproduce sonidos de murcielagos
    // y lo elimina pasados 1.9s
    var bats = document.getElementById("bats");
    var bats_welcome = '<img src="index_files/assets/img/bats.gif" style="position:fixed; width: 100%; top: 0">';
    bats.innerHTML = bats_welcome;

    var bats_sound = document.createElement("audio");
    bats_sound.src = "index_files/assets/media/bats-sound.mp3";
    bats_sound.play();

    setTimeout(function() {
        
        // Eliminar murcielagos de bienvenida
        bats_span.remove();

        // Reduce el volumen de los murcielagos lentamente
        // para que sea una transición más suave
        var bats_volume = setInterval(function() {
            
        bats_sound.volume = 1 - (bats_sound.currentTime) * 0.3;
        if(bats_sound.volume <= 0.01) {
           clearInterval(bats_volume);
           bats_sound.volume = 0;
        }

        }, 1);
        
        // Activar animaciones de titulo y calabaza
        var title = document.getElementsByClassName("title")[0];
        title.classList.add("animation");
        pumpkin.classList.add("pumpkin");
        
        // Añade la clase "b1" a los murcielagos para que se
        // posicionen en el titulo con una animación
        var bats_b1 = document.getElementsByClassName("bats")[0];
        bats_b1.classList.add("b1");

    }, 1900);

    // Añadir evento de click a la calabaza
    pumpkin.addEventListener("click", Pumpkin);

    function Pumpkin() {

        music.pause();
        music.src = "index_files/assets/media/Let's Play With The Demon.ogg";
        music.volume = 0.1;
        music.play();

        var title = document.getElementsByClassName("title")[1];
        title.innerHTML = "NIGHTMARE";
        title.style = "color: #f00";
        var bats_b1 = document.getElementsByClassName("bats")[0];
        bats_b1.classList.remove("b1");
        bats_b1.classList.add("b1_1");

        setTimeout(function() { // Si no se usa el setTimeout la transición de los murcielagos al desaparecer no funciona
         bats_b1.setAttribute("style","transform: translateX(35vw) !important");
        }, 0);

        // Desactiva interacción, animación y cursor de la calabaza
        pumpkin.removeEventListener("click", Pumpkin);
        pumpkin.classList.remove("pumpkin");
        pumpkin.classList.remove("pointer");

        // Activa la animación de la bruja
        var witch_w1 = document.getElementsByClassName("witch")[0];
        witch_w1.classList.add("w1");

        setTimeout(function() {

            witch_w1.classList.remove("w1");

        }, 20000);

        // Reproducir sonido de bruja al hacer click en la calabaza
        var witch = document.createElement("audio");
        witch.src = "index_files/assets/media/witch-sound.mp3";
        witch.volume = 0.40;
        witch.play();

        // Activa animación del rayo
        var thunder = document.getElementById("thunder");
        thunder.classList.add("thunder");

        // Reproducir sonido de trueno al hacer click en la calabaza
        var thunder_sound = document.createElement("audio");
        thunder_sound.src = "index_files/assets/media/thunder-sound.mp3";
        thunder_sound.play();

        var thunder_volume = setInterval(function() {

                thunder_sound.volume = 1 - (thunder_sound.currentTime) * 0.05;
                if(thunder_sound.volume <= 0.01) {
                   clearInterval(thunder_volume);
                   thunder_sound.volume = 0;
                }
        }, 1);

        // Activa lluvia
        var rain = document.getElementById("rain");
        rain.classList.add("rain");

        // Entrada del aviso del caldero
        var adviceC = document.getElementsByClassName("advice")[0];
        adviceC.classList.add("ad1");
        
        var adviceH1 = document.getElementsByClassName("advice")[1];
        adviceH1.classList.add("ad1");


        // Entrada del sonido del aviso de entrada del caldero
        var avisoEnter = document.createElement("audio");
        avisoEnter.src = "index_files/assets/media/aviso-enter.mp3";
        setTimeout(function() {avisoEnter.play()}, 10000);
        
        // Entrada del sonido de salida del aviso del caldero
        var avisoBye = document.createElement("audio");
        avisoBye.src = "index_files/assets/media/aviso-bye.mp3";
        setTimeout(function() {avisoBye.play()}, 17000);

        // Activa animación de dejar caer caldero cuando la bruja pasa la puerta
        var caldero = document.getElementsByClassName("caldero")[0];
        caldero.classList.add("c1");

        // Activa el sonido del caldero
        var caldero_sound = document.createElement("audio");
        caldero_sound.src = "index_files/assets/media/caldero-sound.mp3";
        caldero_sound.setAttribute("loop", "");
        caldero_sound.volume = 1;
        
        // Sonido del caldero hirviendo
        setTimeout(function() {

            caldero_sound.play();
            
            // Explosión del caldero seguida de un zombie más su grito
            // y luego la chica zombie más su grito
            setTimeout(function() {

                caldero_sound.pause();
                var boom = document.getElementsByClassName("boom")[0];
                boom.classList.add("bo1");
                var boom_sound = document.createElement("audio");
                boom_sound.src = "index_files/assets/media/boom.ogg";
                boom_sound.play();

                caldero.style = "visibility: hidden";
                var hoguera = document.getElementsByClassName("hoguera")[0];
                hoguera.style = "visibility: hidden";

                var zombieM = document.getElementsByClassName("zombie")[0];
                zombieM.style.visibility = "visible";
                zombieM.classList.add("out");
                var zombie_sound = document.createElement("audio");
                zombie_sound.src = "index_files/assets/media/zombie.mp3";
                zombie_sound.play();

                var zombieG = document.getElementsByClassName("zombie-girl")[0];

                // Retardo para la chica zombie en aparecer tras el 1er zombie
                setTimeout( function() {

                    zombieG.classList.add("out");
                    var zombieG_sound = document.createElement("audio");
                    zombieG_sound.src = "index_files/assets/media/zombie-girl.mp3";
                    zombieG_sound.play();
                
                    // La música se entrecorta
                    var i = 0;
                    var music_cut = setInterval( function() {

                        if(i==0) {music.pause(); i=1}
                        else {music.play(); i=0}

                    }, 1);

                    var bye = setTimeout( function() {

                        clearInterval(music_cut);
                        music.pause();

                        var all = document.getElementsByClassName("all")[0];
                        all.style.transform = "scale(0)";
                        var desvanecer = document.createElement("audio");
                        desvanecer.src = "index_files/assets/media/desvanecer.mp3";
                        desvanecer.currentTime = 0.1;
                        desvanecer.play();
                        
                        setTimeout( function() {

                            var screamer = document.createElement("audio");
                            screamer.src = "index_files/assets/media/screamer.mp3";
                            screamer.currentTime = 0.5;
                            document.body.classList.add("screamer");
                            screamer.play();

                            setTimeout(function() {

                                document.body.classList.remove("screamer");
                                var avisoF = document.getElementById("aviso");
                                avisoF.classList.add("aviso");

                            }, 3900)

                        }, 2000);

                    }, 7000);

                }, 9000);

            }, 14000);

        }, 7500);


        // Descomentar para reactivar el evento de click de la calabaza
        // una vez usado durante el desarrollo
/*        setTimeout(function() {

            // Reactiva interacción, animación y cursor de la calabaza
            pumpkin.addEventListener("click", Pumpkin);
            pumpkin.classList.add("pumpkin");
            pumpkin.classList.add("pointer");
            // Quita la clase "rain" para volver a utilizarla si es necesario
            rain.classList.remove("rain");
            // Quita la clase "thunder" para volver a utilizarla si es necesario
            thunder.classList.remove("thunder");

        }, 20000);
*/
    }
}

// Eliminar etiquetas de audio del DOM una vez cargada la página
document.addEventListener("DOMContentLoaded", function() {
    
    var audios_preload = document.getElementsByTagName("audio");
    
    var i;
    // He procedido de esta forma peculiar para eliminar los audios al fallar la forma normal por alguna razón
    for(i=0;i<=audios_preload.length + i-1;i++) {
        audios_preload[0].remove();
    }

});

// Sin uso
/*
document.addEventListener("DOMContentLoaded", function() {
    
    var audio = document.createElement("audio");
    audio.setAttribute("preload", "auto");

    var source = ["index_files/assets/media/halloween-music.mp3",
    "index_files/assets/media/Let's Play With The Demon.ogg",
    "index_files/assets/media/bats-sound.mp3",
    "index_files/assets/media/witch-sound.mp3",
    "index_files/assets/media/aviso-enter.mp3",
    "index_files/assets/media/aviso-bye.mp3",
    "index_files/assets/media/caldero-sound.mp3",
    "index_files/assets/media/boom.ogg",
    "index_files/assets/media/zombie.mp3",
    "index_files/assets/media/zombie-girl.mp3",
    "index_files/assets/media/thunder-sound.mp3"];

    document.body.appendChild(audio);
    var i = 0;
    for(i=0;i<=source.length-1;i++) {
        audio.src = source[i];
    }
    if(i == source.length){audio.remove();}

});
*/

// Deshabilitar menu del click derecho
oncontextmenu = () => event.preventDefault()

// Pantalla completa cada vez que se hace click en la página
document.addEventListener("click", Fullscreen);

function Fullscreen() {
    if(!document.fullscreen) return document.documentElement.requestFullscreen()
}



// Pantalla de bienvenida para poder activar la música
// que a su vez activa las animaciones de entrada

const welcome = document.querySelector('.welcome');
const title_welcome = document.querySelector('.title_welcome');
const pumpkin = document.querySelector('.p1');

const body_div = document.querySelector('.body');

// Añadir evento de click al texto de bienvenida
title_welcome.addEventListener("click", Welcome);



const music = document.createElement("audio");

async function Welcome() {

    welcome.style = "display: none";

    // Activar música

    music.src = "index_files/assets/media/halloween-music.mp3";
    music.setAttribute("loop", "");
    music.volume = 0.45;
    music.play();
    
    // Crea y adjunta un span con id="bats" en el "div" de clase "body"
    const bats_span = document.createElement("span");
    bats_span.setAttribute("id", "bats");
    bats_span.setAttribute("draggable", "false");
    bats_span.classList.add("cursor_none");
    body_div.appendChild(bats_span);
    
    // Adjunta el gif de los murcielagos en el span,
    // reproduce sonidos de murcielagos
    // y lo elimina pasados 1.9s
    const bats = document.getElementById("bats");
    const bats_welcome = '<img src="index_files/assets/img/bats.gif" style="position: fixed; width: 100%; top: 0">';
    bats.innerHTML = bats_welcome;

    const bats_sound = document.createElement("audio");
    bats_sound.src = "index_files/assets/media/bats-sound.mp3";
    bats_sound.play();


    await delay(1900)


    // Eliminar murcielagos de bienvenida
    bats_span.remove();

    // Reduce el volumen de los murcielagos lentamente
    // para que sea una transición más suave
    const bats_volume = setInterval(function() {

        bats_sound.volume = 1 - (bats_sound.currentTime) * 0.3;
        if(bats_sound.volume <= 0.01) {
           clearInterval(bats_volume);
           bats_sound.volume = 0;
        }

    }, 1);

    // Activar animaciones de titulo y calabaza
    const title = document.querySelector('.title');
    title.classList.add("animation");
    pumpkin.classList.add("pumpkin");

    // Añade la clase "b1" a los murcielagos para que se
    // posicionen en el titulo con una animación
    const bats_b1 = document.querySelector('.bats');
    bats_b1.classList.add("b1");


    // Añadir evento de click a la calabaza
    pumpkin.addEventListener("click", Pumpkin);

}







async function Pumpkin() {

    music.pause();
    music.src = "index_files/assets/media/Let's Play With The Demon.ogg";
    music.volume = 0.1;
    music.play();

    const title = document.querySelectorAll('.title')[1];
    title.innerHTML = "NIGHTMARE";
    title.style.color = "#f00";
    const bats_b1 = document.querySelector('.bats');
    bats_b1.classList.remove("b1");
    bats_b1.classList.add("b1_1");

    // Si no se usa el setTimeout la transición de los murcielagos al desaparecer no funciona
    setTimeout( () => bats_b1.style.setProperty('transform', 'translateX(35vw)', 'important'), 0);

    // Desactiva interacción, animación y cursor de la calabaza
    pumpkin.removeEventListener("click", Pumpkin);
    pumpkin.classList.remove("pumpkin");
    pumpkin.classList.remove("pointer");

    // Activa la animación de la bruja
    const witch_w1 = document.querySelector('.witch');
    witch_w1.classList.add("w1");

    // Desaparece la bruja después de 20s
    setTimeout( () => witch_w1.classList.remove("w1"), 20000);

    // Reproducir sonido de bruja al hacer click en la calabaza
    const witch = document.createElement("audio");
    witch.src = "index_files/assets/media/witch-sound.mp3";
    witch.volume = 0.40;
    witch.play();

    // Activa animación del rayo
    const thunder = document.querySelector('#thunder');
    thunder.classList.add("thunder");

    // Reproducir sonido de trueno al hacer click en la calabaza
    const thunder_sound = document.createElement("audio");
    thunder_sound.src = "index_files/assets/media/thunder-sound.mp3";
    thunder_sound.play();

    const thunder_volume = setInterval(function() {

        thunder_sound.volume = 1 - (thunder_sound.currentTime) * 0.05;
        if(thunder_sound.volume <= 0.01) {
           clearInterval(thunder_volume);
           thunder_sound.volume = 0;
        }

    }, 1);

    // Activa lluvia
    const rain = document.getElementById("rain");
    rain.classList.add("rain");

    // Entrada del aviso del caldero
    const [adviceC, adviceH1] = document.querySelectorAll('.advice');
    adviceC.classList.add("ad1");
    adviceH1.classList.add("ad1");


    // Entrada del sonido del aviso de entrada del caldero
    const avisoEnter = document.createElement("audio");
    avisoEnter.src = "index_files/assets/media/aviso-enter.mp3";

    // Entrada del sonido de salida del aviso del caldero
    const avisoBye = document.createElement("audio");
    avisoBye.src = "index_files/assets/media/aviso-bye.mp3";


    setTimeout( () => avisoEnter.play(), 10000)

    setTimeout( () => avisoBye.play(), 17000)


    // Activa animación de dejar caer caldero cuando la bruja pasa la puerta
    const caldero = document.querySelector('.caldero');
    caldero.classList.add("c1");

    // Activa el sonido del caldero
    const caldero_sound = document.createElement("audio");
    caldero_sound.src = "index_files/assets/media/caldero-sound.mp3";
    caldero_sound.setAttribute("loop", "");
    caldero_sound.volume = 1;

    // Sonido del caldero hirviendo

    await delay(7500)

    caldero_sound.play();

    // Explosión del caldero seguida de un zombie más su grito
    // y luego la chica zombie más su grito

    await delay(14000)

    caldero_sound.pause();
    const boom = document.querySelector('.boom');
    boom.classList.add("bo1");
    const boom_sound = document.createElement("audio");
    boom_sound.src = "index_files/assets/media/boom.ogg";
    boom_sound.play();

    caldero.style.visibility = 'hidden';
    const hoguera = document.querySelector('.hoguera');
    hoguera.style.visibility = 'hidden';

    var zombieM = document.querySelector('.zombie');
    zombieM.style.visibility = 'visible';
    zombieM.classList.add("out");
    const zombie_sound = document.createElement("audio");
    zombie_sound.src = "index_files/assets/media/zombie.mp3";
    zombie_sound.play();

    const zombieG = document.querySelector('.zombie-girl');


    // Retardo para la chica zombie en aparecer tras el 1er zombie
    await delay(9000)
            

    zombieG.classList.add("out");

    const zombieG_sound = document.createElement("audio");
    zombieG_sound.src = "index_files/assets/media/zombie-girl.mp3";
    zombieG_sound.play();

    // La música se entrecorta
    const music_cut = setInterval( function() {

        if(!music.paused) music.pause();
        else music.play();

    }, 1);


    await delay(7000)

    clearInterval(music_cut);
    music.pause();

    const all = document.querySelector('.all');
    all.style.transform = "scale(0)";
    const desvanecer = document.createElement("audio");
    desvanecer.src = "index_files/assets/media/desvanecer.mp3";
    desvanecer.currentTime = 0.1;
    desvanecer.play();


    await delay(2000)


    const screamer = document.createElement("audio");
    screamer.src = "index_files/assets/media/screamer.mp3";
    screamer.currentTime = 0.5;
    document.body.classList.add("screamer");
    screamer.play();

    await delay(3900)


    document.body.classList.remove("screamer");
    const avisoF = document.querySelector('#aviso');
    avisoF.classList.add("aviso");



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










// Eliminar etiquetas de audio del DOM una vez cargada la página
    
const audios_preload = document.querySelectorAll("audio");

window.addEventListener('load', () => {
  for(let i = 0; i < audios_preload.length; i++) {
    audios_preload[i].remove();
  }
})



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

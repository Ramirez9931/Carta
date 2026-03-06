function mostrarMensaje(){

document.getElementById("mensaje").innerHTML = `
<p>
Sé que han sido <span class="resaltar">días duros y complicados</span> para ti mi amor,
pero no sabes lo <span class="resaltar">orgulloso</span> que me haces sentir.
</p>

<p>
Saber que, aunque tengas <span class="resaltar">tanto que hacer</span>,
<strong>nunca te rindes</strong> 🌷💖
</p>

<p>
Gracias por ser <span class="resaltar">mi niña mimada</span>.
</p>

<p>
Nunca dejes de mostrar esos lados tan <span class="resaltar">hermosos</span> que tienes.
<br>
Esa niña interior <strong>siempre la cuidaré y la amaré</strong> 🌷
</p>
`;

document.getElementById("boton1").style.display = "none";
document.getElementById("boton2").style.display = "inline-block";

}

function mostrarAmor(){

document.getElementById("mensaje").innerHTML = `
<p>
Le doy <span class="resaltar">gracias a Dios</span> por permitirme:
</p>

<p>
hablar contigo, verte, amarte, tenerte,
<span class="resaltar">chinearte</span>, consentirte,
acariciarte, cumplir tus antojos,
ayudarte y mucho más día a día 🌷💖
</p>

<p class="fraseFinal">
<strong>AMO SER TU NOVIO</strong> 🥰
</p>
`;

/* TEXTO */

const texto = [

"111 1111",
" 1  1   ",
" 1  111 ",
" 1  1   ",
" 1  1111",

"",
" 111  1   1  111",
"1   1 11 11 1   1",
"11111 1 1 1 1   1",
"1   1 1   1 1   1",
"1   1 1   1  111"

];

/* DETECTAR SI ES TELEFONO */

let esMovil = window.innerWidth < 600;

let espacioX = esMovil ? 12 : 30;
let espacioY = esMovil ? 14 : 35;
let tamañoCorazon = esMovil ? 12 : 26;

/* CALCULO PARA CENTRAR */

let anchoTexto = texto[0].length * espacioX;
let startX = (window.innerWidth - anchoTexto) / 2 - (esMovil ? 30 : 0);
let startY = window.innerHeight / 2 - (esMovil ? 80 : 120);

for(let y=0;y<texto.length;y++){

for(let x=0;x<texto[y].length;x++){

if(texto[y][x] === "1"){

let corazon = document.createElement("div");

corazon.className="corazon";
corazon.innerHTML="❤️";

corazon.style.fontSize = tamañoCorazon + "px";

corazon.style.left = startX + (x*espacioX) + "px";
corazon.style.top = startY + (y*espacioY) + "px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},7000);

}

}

}

}

/* GENERADOR DE TULIPANES */

function crearTulipan(){

let tulipan = document.createElement("div");

tulipan.className="tulipan";
tulipan.innerHTML="🌷";

tulipan.style.left = Math.random()*100 + "vw";
tulipan.style.top = Math.random()*100 + "vh";

let size = 20 + Math.random()*30;
tulipan.style.fontSize = size + "px";

tulipan.style.animationDuration = (6 + Math.random()*6) + "s";

document.body.appendChild(tulipan);

setTimeout(()=>{
tulipan.remove();
},12000);

}

/* MUCHOS TULIPANES AL INICIO */

for(let i=0;i<80;i++){
crearTulipan();
}

/* SIGUEN APARECIENDO */

setInterval(()=>{
crearTulipan();
},300);
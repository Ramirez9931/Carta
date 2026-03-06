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

/* ocultar primer botón */
document.getElementById("boton1").style.display = "none";

/* mostrar botón corazón */
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

/* detectar teléfono */

let esTelefono = window.innerWidth < 600;

/* texto con corazones */

const texto = esTelefono ? [

"111 1111",
" 1  1   ",
" 1  111 ",
" 1  1   ",
" 1  1111",

"        ",

" 111   1   1  1111",
"1   1  11 11 1    ",
"11111  1 1 1 1    ",
"1   1  1   1 1    ",
"1   1  1   1  1111"

] : [

"111 1111     111   1   1  1111",
" 1  1       1   1  11 11 1    1",
" 1  111     11111  1 1 1 1    1",
" 1  1       1   1  1   1 1    1",
" 1  1111    1   1  1   1  1111"

];

/* escala adaptable */

let escala = Math.min(window.innerWidth / 900, 1);

let espacioX = 45 * escala;
let espacioY = 50 * escala;

let tamañoCorazon = 50 * escala;

/* centrado automático */

let anchoTexto = texto[0].length * espacioX;
let altoTexto = texto.length * espacioY;

let startX = (window.innerWidth - anchoTexto) / 2;
let startY = (window.innerHeight - altoTexto) / 2;

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

/* posición horizontal */

tulipan.style.left = Math.random()*100 + "vw";

/* posición vertical */

tulipan.style.top = Math.random()*100 + "vh";

/* tamaño */

let size = 20 + Math.random()*30;
tulipan.style.fontSize = size + "px";

/* velocidad */

tulipan.style.animationDuration = (6 + Math.random()*6) + "s";

document.body.appendChild(tulipan);

/* eliminar */

setTimeout(()=>{
tulipan.remove();
},12000);

}

/* muchos tulipanes al inicio */

for(let i=0;i<80;i++){
crearTulipan();
}

/* siguen cayendo */

setInterval(()=>{
crearTulipan();
},300);
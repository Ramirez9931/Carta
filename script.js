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
const texto = [

"111 1111     111   1   1  1111",
" 1  1       1   1  11 11 1    1",
" 1  111     11111  1 1 1 1    1",
" 1  1       1   1  1   1 1    1",
" 1  1111    1   1  1   1  1111"

];

let startX = window.innerWidth/2 - (texto[0].length * 45) / 2;
let startY = window.innerHeight/2 - 100;

for(let y=0;y<texto.length;y++){

for(let x=0;x<texto[y].length;x++){

if(texto[y][x] === "1"){

let corazon = document.createElement("div");

corazon.className="corazon";
corazon.innerHTML="❤️";

corazon.style.left = startX + (x*45) + "px";
corazon.style.top = startY + (y*50) + "px";

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

/* posición vertical en TODA la pantalla */

tulipan.style.top = Math.random()*100 + "vh";

/* tamaño aleatorio */

let size = 20 + Math.random()*30;
tulipan.style.fontSize = size + "px";

/* velocidad de caída */

tulipan.style.animationDuration = (6 + Math.random()*6) + "s";

document.body.appendChild(tulipan);

/* eliminar después */

setTimeout(()=>{
tulipan.remove();
},12000);

}

/* MUCHOS TULIPANES AL INICIO */

for(let i=0;i<80;i++){
crearTulipan();
}

/* SIGUEN APARECIENDO TODO EL TIEMPO */

setInterval(()=>{
crearTulipan();
},300);
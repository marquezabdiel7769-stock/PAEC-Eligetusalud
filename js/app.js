// app.js — la lógica de la página PAEC (versión final + retos)

// 1. Seleccionar con querySelector (selectores de CSS)
const titulo = document.querySelector("#titulo");
titulo.textContent = "Elige tu salud, elige tu vida";
titulo.style.color = "#e6d194";
const lema = document.querySelector("header .lema");
lema.textContent = "PAEC · Prevención del consumo de sustancias nocivas";

// 2. Todas las secciones y todos los enlaces del menú
const secciones = document.querySelectorAll(".seccion");
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace, indice) => {
  enlace.textContent = `${indice + 1}. ${enlace.textContent}`;
  if (indice === 0) {
    enlace.classList.add("activo");
  }
});

// 3. Navegación: mostrar una sección y ocultar las demás
// (Reto: la sección "Fuentes" funciona sin tocar esta función)
function mostrarSeccion(id) {
  secciones.forEach(seccion => {
    seccion.classList.toggle("activa", seccion.id === id);
  });
  enlaces.forEach(enlace => {
    enlace.classList.toggle("activo", enlace.dataset.seccion === id);
  });
}

enlaces.forEach(enlace => {
  enlace.addEventListener("click", evento => {
    evento.preventDefault();
    mostrarSeccion(enlace.dataset.seccion);
  });
});

// 4. Ficha de una sustancia con Object.entries
const ficha = document.querySelector("#ficha");

function mostrarFicha(sustancia) {
  let filas = "";
  Object.entries(sustancia).forEach(([clave, valor]) => {
    if (typeof valor === "function") return;   // los métodos no se muestran
    const texto = Array.isArray(valor) ? valor.join("; ") : valor;
    filas += `<tr><th>${clave.replaceAll("_", " ")}</th><td>${texto}</td></tr>`;
  });
  ficha.innerHTML = `<h3>${sustancia.nombre}</h3><table>${filas}</table>`;
}

// 5. Tarjetas con map (+ Reto: contador de resultados)
const contenedorTarjetas = document.querySelector("#tarjetas");
const contadorResultados = document.querySelector("#contadorResultados");

function pintarTarjetas(lista) {
  const tarjetas = lista.map(s => `
    <article class="tarjeta ${s.tipo}" data-nombre="${s.nombre}">
      <span class="etiqueta">${s.categoria}</span>
      <h3>${s.nombre}</h3>
      <p>${s.efectos[0]}</p>
    </article>`);
  contenedorTarjetas.innerHTML = tarjetas.length > 0
    ? tarjetas.join("")
    : `<p class="vacio">No se encontraron resultados.</p>`;
  contadorResultados.textContent = `${lista.length} de ${sustancias.length} sustancias`;
}
pintarTarjetas(sustancias);

// 6. Filtrar por tipo con filter
const botonesFiltro = document.querySelectorAll(".filtros button");
botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    const tipo = boton.dataset.tipo;
    const lista = tipo === "todas"
      ? sustancias
      : sustancias.filter(s => s.tipo === tipo);
    pintarTarjetas(lista);
    botonesFiltro.forEach(b => b.classList.toggle("activo", b === boton));
  });
});

// 7. Buscador con includes
const buscador = document.querySelector("#buscador");
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const encontradas = sustancias.filter(s =>
    s.nombre.toLowerCase().includes(texto) ||
    s.efectos.join(" ").toLowerCase().includes(texto)
  );
  pintarTarjetas(encontradas);
});

// 8. Ver la ficha al hacer clic: find y findIndex
contenedorTarjetas.addEventListener("click", evento => {
  const tarjeta = evento.target.closest(".tarjeta");
  if (!tarjeta) return;
  const buscado = tarjeta.dataset.nombre;
  const sustancia = sustancias.find(s => s.nombre === buscado);
  const posicion = sustancias.findIndex(s => s.nombre === buscado);
  mostrarFicha(sustancia);
  ficha.innerHTML += `<p class="posicion">Ficha ${posicion + 1} de ${sustancias.length}</p>`;
});

// 9. Array.from: de un texto a un arreglo de letras
const palabra = "AUTOCUIDADO";
const letras = Array.from(palabra, (letra, i) =>
  `<span style="animation-delay: ${i * 0.1}s">${letra}</span>`
);
document.querySelector("#palabra").innerHTML = letras.join("");

// 10. Mitos y realidades
const listaMitos = document.querySelector("#listaMitos");
const contador = document.querySelector("#contadorMitos");

listaMitos.innerHTML = mitos.map(m => `
  <article class="mito">
    <p class="frase">"${m.mito}"</p>
    <p class="realidad"><strong>Realidad:</strong> ${m.realidad}</p>
  </article>`).join("");

function actualizarContadorMitos() {
  const todos = Array.from(document.querySelectorAll(".mito"));   // NodeList → arreglo
  const revelados = todos.filter(m => m.classList.contains("revelado"));
  contador.textContent = `Descubriste ${revelados.length} de ${todos.length} realidades`;
}

listaMitos.addEventListener("click", evento => {
  const mito = evento.target.closest(".mito");
  if (!mito) return;
  mito.classList.toggle("revelado");
  actualizarContadorMitos();
});

// Reto: ocultar todas las realidades y reiniciar el contador
document.querySelector("#btnOcultar").addEventListener("click", () => {
  document.querySelectorAll(".mito").forEach(m => m.classList.remove("revelado"));
  actualizarContadorMitos();
});

// 11. Autoevaluación: some, every y reduce
const formTest = document.querySelector("#formTest");
const resultado = document.querySelector("#resultado");

formTest.innerHTML = preguntas.map(p => `
  <label class="pregunta">
    <input type="checkbox"> ${p.texto}
  </label>`).join("") + `<button type="submit">Ver resultado</button>`;

formTest.addEventListener("submit", evento => {
  evento.preventDefault();
  const casillas = Array.from(formTest.querySelectorAll("input"));
  const marcadas = preguntas.filter((p, i) => casillas[i].checked);
  const ninguna = casillas.every(c => !c.checked);       // ¿TODAS sin marcar?
  const alerta = marcadas.some(p => p.alerta);            // ¿ALGUNA es de alerta?
  const puntos = marcadas.reduce((acumulado, p) => acumulado + p.puntos, 0);

  let mensaje = "Hay algunas situaciones de riesgo. " +
    "Platícalas con alguien de confianza.";
  let clase = "medio";
  if (ninguna) {
    mensaje = "Muy bien: no marcaste situaciones de riesgo. Sigue cuidándote.";
    clase = "bajo";
  } else if (alerta || puntos >= 4) {
    mensaje = "Hay señales importantes. Habla hoy con un adulto de confianza " +
      "o llama a la Línea de la Vida: 800 911 2000.";
    clase = "alto";
  }
  resultado.className = `resultado ${clase}`;
  resultado.innerHTML = `
    <p><strong>Puntos de riesgo: ${puntos}</strong></p>
    <p>${mensaje}</p>
    <p class="aviso">Esta autoevaluación es solo orientativa; no es un diagnóstico.</p>`;
});

// 12. Prevención: map para los consejos y reduce para unir textos
document.querySelector("#consejos").innerHTML = consejos.map((c, i) => `
  <li>
    <span class="numero">${i + 1}</span>
    <div><strong>${c.titulo}</strong><p>${c.texto}</p></div>
  </li>`).join("");

const temas = sustancias.reduce(
  (acumulado, s, i) => i === 0 ? s.nombre : acumulado + ", " + s.nombre, ""
);
document.querySelector("#temas").textContent = `Temas de esta página: ${temas}.`;

// Reto: sección Fuentes
document.querySelector("#listaFuentes").innerHTML = fuentes.map(f => `<li>${f}</li>`).join("");

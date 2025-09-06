"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  const tbody = document.querySelector("#tablaRegistros tbody");
  const feedback = document.getElementById("feedback");

  const showError = (msg) => {
    feedback.textContent = msg;
    feedback.classList.remove("feedback--ok");
    feedback.hidden = false;
  };

  const showOk = (msg) => {
    feedback.textContent = msg;
    feedback.classList.add("feedback--ok");
    feedback.hidden = false;
  };

  const clearFeedback = () => {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.classList.remove("feedback--ok");
  };

  // --- Helpers que lanzan errores personalizados ---
  function getRequiredTrimmedValue(id, label){
    const el = document.getElementById(id);
    const val = el.value.trim();
    if (!val){
      // (a) Validación de datos obligatorios
      // Lanzamos una excepción si falta un campo requerido
      throw new Error(`El campo ${label} es obligatorio.`);
    }
    return val;
  }

  function getEdadInRange(id, min=15, max=100){
    const el = document.getElementById(id);
    const raw = el.value;
    // (b) Conversión/validación de datos
    // Si no hay edad, se permite vacío; si hay, debe ser número en rango
    if (raw === "") return "";
    const num = Number(raw);
    if (Number.isNaN(num) || num < min || num > max){
      throw new Error(`La edad debe ser un número entre ${min} y ${max}.`);
    }
    return String(num);
  }

  function getGeneroSafe(){
    try{
      const checked = document.querySelector('input[name="genero"]:checked');
      return checked ? checked.value : "No seleccionado";
    }catch(err){
      // Cualquier falla de DOM devolverá un valor por defecto
      return "No seleccionado";
    }
  }

  function getIntereses(){
    return Array.from(
      document.querySelectorAll(".intereses input[type='checkbox']:checked")
    ).map(chk => chk.value);
  }

  // Delegación para manejar clicks en "Eliminar"
  tbody.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-action='eliminar']");
    if (!btn) return;
    const row = btn.closest("tr");
    if (row) row.remove();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFeedback();

    try {
      // (a) Validación de datos obligatorios
      const nombre = getRequiredTrimmedValue("nombre", "Nombre");
      const correo = getRequiredTrimmedValue("correo", "Correo");

      // (b) Conversión de datos (edad en rango)
      const edad = getEdadInRange("edad", 15, 100);

      const genero = getGeneroSafe();
      const intereses = getIntereses();
      const nivel = document.getElementById("nivel").value;
      const fecha = document.getElementById("fecha").value;
      const comentarios = document.getElementById("comentarios").value;

      // (c) Inserción en la tabla con try–catch independiente
      try {
        const tr = document.createElement("tr");
        const cells = [
          nombre,
          correo,
          edad,
          genero,
          intereses.join(", "),
          nivel,
          fecha,
          comentarios
        ];
        for (const text of cells){
          const td = document.createElement("td");
          td.textContent = text;
          tr.appendChild(td);
        }
        const tdAccion = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.className = "btn btn--danger";
        btnEliminar.dataset.action = "eliminar";
        btnEliminar.textContent = "Eliminar";
        tdAccion.appendChild(btnEliminar);
        tr.appendChild(tdAccion);

        if (!tbody) {
          // Simulamos un fallo de DOM si tbody no existe
          throw new Error("No se encontró el cuerpo de la tabla (#tablaRegistros tbody).");
        }
        tbody.appendChild(tr);
        form.reset();
        showOk("Registro agregado correctamente.");
      } catch (err) {
        // (c) Atrapar errores de inserción sin romper la app
        showError("Error al insertar en la tabla: " + err.message);
      }
    } catch (err) {
      // Captura general de validación/conversión
      showError("Ocurrió un problema: " + err.message);
    }
  });
});

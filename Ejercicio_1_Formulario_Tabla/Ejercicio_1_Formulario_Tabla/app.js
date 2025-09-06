"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  const tbody = document.querySelector("#tablaRegistros tbody");

  // Delegación para manejar clicks en "Eliminar"
  tbody.addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-action='eliminar']");
    if (!btn) return;
    const row = btn.closest("tr");
    if (row) row.remove();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación mínima adicional (además de required/type)
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    if (!nombre.value.trim() || !correo.value.trim()) {
      // Usar validación nativa si está disponible
      form.reportValidity?.();
      return;
    }

    const edad = document.getElementById("edad").value;
    const generoInput = document.querySelector('input[name="genero"]:checked');
    const genero = generoInput ? generoInput.value : "No seleccionado";

    const intereses = Array.from(
      document.querySelectorAll(".intereses input[type='checkbox']:checked")
    ).map(chk => chk.value);

    const nivel = document.getElementById("nivel").value;
    const fecha = document.getElementById("fecha").value;
    const comentarios = document.getElementById("comentarios").value;

    // Construir fila de forma segura usando textContent
    const tr = document.createElement("tr");
    const cells = [
      nombre.value.trim(),
      correo.value.trim(),
      edad || "",
      genero,
      intereses.join(", "),
      nivel,
      fecha,
      comentarios
    ];

    for (const text of cells) {
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

    tbody.appendChild(tr);

    form.reset();
  });
});

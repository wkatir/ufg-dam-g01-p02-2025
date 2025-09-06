# Ejercicio 1 — Formulario de registro con tabla dinámica

## Descripción
Aplicación web en **HTML + CSS + JavaScript** que permite registrar participantes mediante un formulario y mostrar los datos en una **tabla dinámica**. Incluye botones para **Enviar**, **Limpiar** (reset del formulario) y **Eliminar** cada registro.

## Requisitos cumplidos
- Formulario con: nombre, correo, edad, género (radios), áreas de interés (checkboxes), nivel (select), fecha (date) y comentarios (textarea).
- Al enviar, agrega una fila a la tabla con los datos.
- Botón **Eliminar** por fila.
- **Limpiar** (reset) que vacía el formulario.
- **Validación básica** de campos obligatorios (nombre y correo) usando validación nativa del navegador y comprobación previa en JS.

## Estructura
```
Ejercicio_1_Formulario_Tabla/
├─ index.html
├─ styles.css
└─ app.js
```

## Cómo ejecutar
Abra `index.html` en su navegador (doble clic). No requiere servidor.

## Buenas prácticas aplicadas
- **Separación de responsabilidades**: HTML, CSS y JS en archivos distintos.
- **Accesibilidad y semántica**: uso de `label` asociado a cada control y `fieldset/legend` para agrupaciones.
- **Seguridad**: creación de celdas con `textContent` en lugar de `innerHTML` para evitar inyecciones.
- **Mantenibilidad**: constantes, funciones pequeñas y **delegación de eventos** para eliminar filas.
- **Compatibilidad**: validación nativa (`required`, `type="email"`) + verificación en JS antes de insertar.

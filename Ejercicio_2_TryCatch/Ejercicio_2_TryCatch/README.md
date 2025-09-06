# Ejercicio 2 — Manejo de Excepciones con `try…catch`

## Descripción
Partiendo del ejercicio anterior, se agregan bloques **`try…catch`** para robustecer la aplicación:
- **Validación de datos obligatorios** con excepciones personalizadas.
- **Conversión/validación de edad** asegurando un rango permitido.
- **Inserción en tabla** envuelta en `try…catch` para no romper la app si el DOM no existe.

Los errores se muestran en pantalla dentro de un área con `role="alert"`.

## Estructura
```
Ejercicio_2_TryCatch/
├─ index.html
├─ styles.css
└─ app.js
```

## Cómo ejecutar
Abra `index.html` en su navegador.

## Buenas prácticas aplicadas
- Separación de responsabilidades (HTML/CSS/JS).
- **Funciones pequeñas** para validar campos y convertir edad.
- **Mensajería de errores** consistente y accesible (`role="alert"`).
- **Comentarios** indicando el tipo de error controlado en cada `try…catch`.

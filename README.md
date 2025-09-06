# Proyectos de Desarrollo Web - UFG DAM G01 P02 2025

## Descripción General

Este repositorio contiene dos ejercicios de desarrollo web que demuestran la evolución desde funcionalidad básica hasta manejo robusto de errores. Ambos proyectos implementan un sistema de registro para el Taller de Innovación 2025 con diferentes niveles de complejidad.

## Estructura del Proyecto

```
ufg-dam-g01-p02-2025/
├── Ejercicio_1_Formulario_Tabla/
│   └── Ejercicio_1_Formulario_Tabla/
│       ├── index.html
│       ├── styles.css
│       ├── app.js
│       └── README.md
├── Ejercicio_2_TryCatch/
│   └── Ejercicio_2_TryCatch/
│       ├── index.html
│       ├── styles.css
│       ├── app.js
│       └── README.md
└── README.md (este archivo)
```

## Ejercicio 1: Formulario con Tabla Dinámica

### Características Principales
- **Formulario completo** con validación HTML5 nativa
- **Tabla dinámica** que se actualiza al enviar registros
- **Funcionalidad de eliminación** por fila individual
- **Diseño responsivo** con CSS Grid
- **Tema oscuro** profesional y moderno

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (ES6+)
- Validación nativa del navegador

### Campos del Formulario
- Nombre completo (obligatorio)
- Correo electrónico (obligatorio)
- Edad (opcional, rango 1-120)
- Género (radio buttons)
- Áreas de interés (checkboxes múltiples)
- Nivel de experiencia (select)
- Fecha (date picker)
- Comentarios (textarea)

## Ejercicio 2: Manejo de Excepciones con Try-Catch

### Características Principales
- **Todas las características del Ejercicio 1**
- **Manejo robusto de errores** con bloques `try-catch`
- **Validación personalizada** con mensajes de error específicos
- **Sistema de feedback** visual para el usuario
- **Recuperación elegante** de errores sin romper la aplicación

### Mejoras Implementadas
- Validación de campos obligatorios con excepciones personalizadas
- Validación de rango de edad (15-100 años)
- Manejo seguro de consultas DOM
- Mensajes de error accesibles con `role="alert"`
- Separación de errores de validación e inserción

## Cómo Ejecutar los Proyectos

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requiere servidor web (archivos estáticos)

### Instrucciones
1. Navegue a la carpeta del ejercicio deseado
2. Abra el archivo `index.html` en su navegador
3. Complete el formulario y observe la funcionalidad

### Ejecución Rápida
```bash
# Para Ejercicio 1
cd Ejercicio_1_Formulario_Tabla/Ejercicio_1_Formulario_Tabla
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

# Para Ejercicio 2
cd Ejercicio_2_TryCatch/Ejercicio_2_TryCatch
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

## Buenas Prácticas Implementadas

### Seguridad
- ✅ Prevención de XSS usando `textContent` en lugar de `innerHTML`
- ✅ Validación tanto en cliente como con validación nativa del navegador
- ✅ Sanitización de datos de entrada

### Accesibilidad
- ✅ Uso de elementos semánticos HTML5
- ✅ Atributos ARIA (`aria-describedby`, `role="alert"`)
- ✅ Etiquetas asociadas correctamente a controles de formulario
- ✅ Navegación por teclado funcional
- ✅ Contraste de colores accesible

### Rendimiento
- ✅ Delegación de eventos para manejo eficiente
- ✅ Manipulación mínima del DOM
- ✅ CSS optimizado con variables personalizadas
- ✅ Código JavaScript modular y reutilizable

### Mantenibilidad
- ✅ Separación clara de responsabilidades (HTML/CSS/JS)
- ✅ Código bien comentado y documentado
- ✅ Funciones pequeñas y específicas
- ✅ Estructura de archivos organizada

## Características Técnicas Destacadas

### Ejercicio 1
- **Validación híbrida**: Combina validación HTML5 nativa con verificación JavaScript
- **Event delegation**: Manejo eficiente de eventos de eliminación
- **CSS Grid responsivo**: Layout adaptativo para diferentes tamaños de pantalla
- **Tema oscuro**: Diseño moderno con paleta de colores profesional

### Ejercicio 2
- **Manejo de errores en capas**: Diferentes niveles de try-catch para diferentes tipos de errores
- **Funciones de validación modulares**: Código reutilizable y testeable
- **Feedback visual**: Sistema de mensajes de éxito y error
- **Validación de rango personalizada**: Control específico para campos numéricos

## Casos de Uso de Prueba

### Pruebas de Validación
1. **Campos obligatorios**: Intente enviar sin nombre o correo
2. **Validación de edad**: Ingrese edades fuera del rango 15-100
3. **Formato de correo**: Pruebe con correos inválidos
4. **Campos opcionales**: Verifique que los campos no obligatorios funcionen correctamente

### Pruebas de Funcionalidad
1. **Registro completo**: Complete todos los campos y envíe
2. **Eliminación**: Elimine registros individuales de la tabla
3. **Reset del formulario**: Use el botón "Limpiar"
4. **Responsividad**: Pruebe en diferentes tamaños de pantalla

## Tecnologías y Estándares

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables personalizadas, Grid, Flexbox
- **JavaScript ES6+**: Arrow functions, const/let, template literals
- **Web Standards**: ARIA, WCAG 2.1, HTML5 Validation API

# Chatbot Institucional IES Aljada

## Descripción del Proyecto
Este proyecto consiste en el desarrollo de un chatbot institucional orientado a resolver dudas frecuentes de los alumnos y usuarios del IES Aljada. El objetivo es facilitar el acceso a información relevante como horarios, becas, trámites administrativos y datos de secretaría de forma rápida e interactiva.

El chatbot será integrado en la página web del centro y se apoyará en un sistema de datos estructurados almacenados en formato JSON dentro del repositorio de GitHub.

---

## Integrantes del Equipo

- **[Javier Jiménez]** – Data Manager (Gestión de datos y JSON)
- **[Daniel Rabadán]** – Frontend Developer (Interfaz web e integración)
- **[Javier Navarro]** – QA & DevOps (Control de calidad, documentación y GitHub)

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- JSON (Base de datos)
- Voiceflow (Diseño del chatbot)
- Git & GitHub (Control de versiones)
- Visual Studio Code

---

## Estructura del Proyecto
Chatbot-institucional/
├── .github/ # Configuración de Issues y Pull Requests
├── data/ # Datos del chatbot
│ ├── main_data.json # Base de datos principal
│ └── mock_data.json # Datos de prueba
├── src/ # Código fuente
│ ├── index.html # Interfaz principal
│ ├── css/ # Estilos
│ └── js/ # Lógica del frontend
├── schemas/ # Validación de datos
│ └── model.json # Esquema JSON
├── docs/ # Documentación técnica
│ ├── manual_usuario.md
│ └── instalacion.md
├── README.md # Documentación principal
└── .gitignore # Archivos ignorados por Git

---

## Funcionamiento del Proyecto

El chatbot funciona a partir de un archivo JSON que contiene preguntas, intenciones y respuestas. Este archivo es consumido por Voiceflow mediante una API que accede directamente al contenido alojado en GitHub.

El flujo básico del chatbot es:
Inicio → Saludo → Selección de opción:

Horarios
Becas
Secretaría
→ Respuesta automática → Fin

---

## Instalación y Uso

1. Clonar el repositorio:
https://github.com/JavielilloHub/Chatbot-Institucional.git

2. Abrir el proyecto en Visual Studio Code

3. Ejecutar el archivo `index.html` en el navegador

4. Asegurarse de que el chatbot de Voiceflow esté correctamente integrado

---

## Integración con Voiceflow

El chatbot utiliza Voiceflow para gestionar el flujo conversacional. La información se obtiene mediante una llamada a la API usando la URL RAW del archivo JSON en GitHub:


---

## Normas de Trabajo (Workflow)

- No trabajar directamente sobre la rama `main`
- Crear ramas por funcionalidad:
  - `feature/json-data`
  - `feature/frontend-ui`
  - `fix/errors`

- Uso obligatorio de Pull Requests
- Revisión de código por otro miembro del equipo
- Commits semánticos:
  - `feat:` nueva funcionalidad
  - `fix:` corrección de errores
  - `docs:` documentación

---

## Estado del Proyecto

🟡 En desarrollo

---

## Documentación Adicional

Consultar la carpeta `/docs` para:
- Manual de usuario
- Guía de instalación
- Uso de IA en el desarrollo del proyecto

---

## Objetivos

- Facilitar la comunicación entre el centro y los alumnos
- Automatizar respuestas a preguntas frecuentes
- Integrar soluciones de IA en un entorno educativo
- Aplicar buenas prácticas de desarrollo colaborativo

---



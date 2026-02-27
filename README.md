# 🎮 Docker Clicker Game

¡Bienvenido al **Docker Clicker Game**! Este es un proyecto didáctico diseñado para mostrar cómo orquestar una aplicación web completa (Frontend, Backend y Base de Datos) utilizando **Docker Compose**.

El juego es sencillo: regístrate, haz todos los clics que puedas y guarda tu puntuación para aparecer en el ranking global.

---

## 🚀 Características principales

* **Autenticación Segura:** Registro e inicio de sesión con cifrado de contraseñas mediante `bcryptjs`.
* **Persistencia de Datos:** Uso de una base de datos **PostgreSQL** para almacenar usuarios y puntuaciones.
* **Contenedores Linux:** Arquitectura basada en microservicios totalmente aislados.
* **Leaderboard:** Ranking en tiempo real con los 5 mejores jugadores.

---

## 🛠️ Requisitos previos

Antes de empezar, asegúrate de tener instalado en tu máquina:

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

## 📦 Instalación y Despliegue

Sigue estos pasos para levantar el proyecto en menos de un minuto:

1.  **Clona este repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    cd tu-repositorio
    ```

2.  **Construye y levanta los contenedores:**
    ```bash
    docker-compose up --build
    ```

3.  **Accede al juego:**
    Abre tu navegador y ve a: `http://localhost:3000`

---

## 📂 Estructura del Proyecto

* `server.js`: Servidor API con Express y lógica de conexión a la base de datos.
* `public/index.html`: Interfaz de usuario y lógica del juego (vanilla JS).
* `Dockerfile`: Configuración de la imagen de Node.js.
* `docker-compose.yml`: Definición de los servicios de aplicación y base de datos.
* `package.json`: Dependencias del proyecto (`express`, `pg`, `bcryptjs`).

---

## ⚙️ Stack Tecnológico

| Componente | Tecnología |
| :--- | :--- |
| **Backend** | Node.js (Express) |
| **Base de datos** | PostgreSQL 15 |
| **Seguridad** | Bcryptjs (Hashing de contraseñas) |
| **Infraestructura** | Docker & Docker Compose |

---

## 📝 Notas adicionales

* La base de datos se inicializa automáticamente al arrancar el contenedor por primera vez.
* Si deseas reiniciar los datos por completo, puedes ejecutar `docker-compose down -v` (esto borrará los volúmenes).

---

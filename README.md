🖱️ Docker Clicker Game

¡Bienvenido! Este es un proyecto de juego full-stack minimalista diseñado para demostrar la orquestación de contenedores mediante Docker Compose. El sistema incluye gestión de usuarios (registro/login) y una tabla de puntuaciones persistente.
🚀 Características

    Frontend: Interfaz web sencilla integrada en el servidor.

    Backend: API REST construida con Node.js y Express.

    Seguridad: Cifrado de contraseñas mediante bcryptjs.

    Base de Datos: Persistencia de datos con PostgreSQL.

    Infraestructura: Despliegue automatizado con Docker Compose.

🏗️ Arquitectura del Sistema

El proyecto se divide en dos servicios principales:

    app: El contenedor Linux que corre el servidor Node.js.

    db: El motor de base de datos PostgreSQL que almacena usuarios y récords.

🛠️ Instalación y Despliegue

Para ejecutar este proyecto, solo necesitas tener instalados Docker y Docker Compose.

    Clona el repositorio:
    Bash

    git clone https://github.com/tu-usuario/nombre-del-repo.git
    cd nombre-del-repo

    Levanta los contenedores:
    Bash

    docker-compose up --build

    ¡A jugar!:
    Abre tu navegador en http://localhost:3000.

📂 Estructura del Proyecto
Plaintext

├── public/
│   └── index.html      # Interfaz del juego y lógica cliente
├── Dockerfile          # Receta para la imagen de Node.js
├── docker-compose.yml  # Orquestación de App y Base de Datos
├── package.json        # Dependencias (Express, PG, Bcryptjs)
├── server.js           # Lógica del servidor y conexión a DB
└── README.md           # Estas instrucciones que estás leyendo

📝 Notas de Configuración

    Variables de entorno: La conexión se gestiona mediante la variable DATABASE_URL definida en el docker-compose.yml.

    Persistencia: Si deseas que los datos sobrevivan al borrar los contenedores, recuerda añadir un volumen a la base de datos en el archivo compose.

🤝 Contribuciones

Si tienes ideas para mejorar la mecánica del juego (¡tal vez un Snake o un Tetris!), siéntete libre de abrir un Pull Request o una Issue.

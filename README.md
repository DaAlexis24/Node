# PROYECTO INICIAL CON NODE

## Jueves 30/01/2025

### Configuración inicial de un servidor Node con TS

1. Crear una carpeta e iniciar un proyecto de node `npm init -y`
2. Creamos el fichero _.editorconfig_
3. Creamos el fichero _.gitignore_
4. Instalar TS y los tipos de Node `npm i -D  typescript @types/node`
5. Generar el fichero _tsconfig_ con `npx tsc --init`
6. Configuramos el fichero _tsconfig_ colocando los siguientes parámetros:
    1. "target": "ESNext"
    2. "module": "ESNext"
    3. "rootDir": "./src"
    4. "moduleResolution": "node10"
    5. "outDir": "./dist"
7. Creamos las carpetas **src** y **dist** en la raíz del proyecto.
8. Editamos los scripts del _package.json_ añadiendo el script **build** con referencia a TS en modo _watch_: `tsc -w`
9. Creamos el fichero de reglas _eslintconfig_ con `npm init @eslint/config@latest`
10. Instalamos **Vitest** en nuestro proyecto: `npm install -D vitest`
11. Creamos el fichero `vite.config.js` utilizando lo que aparece en su web:

    ```js
    import { defineConfig } from 'vitest/config';

    export default defineConfig({
        test: {
            // ...
        },
    });
    ```

12. Editamos _package.json_ añadiendo los siguientes scripts:
    1. "test": "vitest run"
    2. "test:c": "vitest run --coverage"
    3. "lint": "eslint . --ext .ts"
13. Editamos _tsconfig_: "types": ["vitest/globals"]
14. Opcional: Inicializar un Repositorio de Git

### Node. Introducción

Node es un entorno de ejecución para JS sin la necesidad de utilizar un navegador, es un ecosistema de paquetes de JS debido a que viene con **npm**. Esta construido con el motor JS V8 de Chrome

#### Características

- Nos permite ejecutar JS en el lado del servidor
- Su motor es muy rápido debido a que esta construido en C++
- Multiplataforma
- Ejecuta código asíncrono y orientado a objetos

#### Código bloqueante

Son las operaciones de entrada/salida (E/S), estás impactan en el rendimiento debido a la alta latencia de ese tipo de operaciones.

## Viernes 31/01/2025

### Entorno de ejecución Node

Node es un comando que arranca este proceso en nuestro sistema operativo, ya no en el navegador.

### Procesos

Nos permite entrar dentro del Sistema Operativo, esto respeta los permisos que tenga el usuario.

Nos entrega información relevante:

- argv: Nos proporciona los argumentos del archivo que estamos ejecutando y donde se encuentra node dentro del programa.
- env: Nos muestras las variables de entorno del sistema.

### Cross Env

Ahora cuando hagamos una instrucción, si la utilizamos va a universalizar los scripts para que se pueden ejecutar en cualquier terminal sin problemas

### Fichero ".env"

Es primordial ya que ahí guardaremos los accesos al servidor, lo vamos a ocultar en el _.gitignore_

### Dotenv

Librería que nos ayuda a la hora de enlazar nuestro fichero .env a los documentos JS/TS que estaremos utilizando en nuestro proyecto.

### Node REPL (Read-Eval-Print-Loop)

Es el entorno interactivo que permite ejecutar código JS en tiempo real, con esto podemos realizar muchas cosas.

### Stdin y stdout

Es la manera como el usuario interactúa con el terminal. Son los **streams de datos** y estos permiten leer y escribir datos de forma asíncrona.

POSIX define 3 streams: entradas, salidas y errores

JS no cuenta con esto, pero esta es una ventaja ya que podemos crear este sub stream y adaptarlo para que funcione.

### Input: Stadin

Es la **orientación a objetos** de Node

### Creación de un CLI (Command Line Interface)

Node es perfecto para crear estos scripts haciendo lo siguiente:

- Hace el comando ejecutable
- Procesa los argumentos y los datos que se van a utilizar

#### Creación de un comando ejecutable

Esto se hace configurando un _shebang_ al inicio del fichero, es el siguiente: `#!/usr/bin/env node`

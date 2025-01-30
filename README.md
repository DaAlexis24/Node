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
    import { defineConfig } from "vitest/config";

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

#### Event Loop

import { resolve, join } from 'path';
import fs from 'fs';

// resolve nos da la oportunidad de realizar un path relativo o absoluto
const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'test.txt');

// {
//     const file = join(dataPath, 'test.txt');
//     fs.writeFileSync(file, 'Hola mundo');

//     const content = fs.readFileSync(file, { encoding: 'utf-8' });
//     console.log(content);
// }

// Leer un fichero asíncrono, con callbacks dentro de callbacks

fs.writeFile(file, 'Exterminate, exterminaaaate', (error) => {
    if (error) {
        console.error(error);
    }
    console.log('Archivo escrito');
    fs.readFile(file, { encoding: 'utf-8' }, (error, content) => {
        if (error) {
            console.error(error);
        }
        console.log('Archivo leído');
        console.log(content);
    });
});


const fsPromise = require('fs/promises');

async function example() {
    let filehandle;
    try {
        filehandle = await fsPromise.open('./test.txt', 'r');
        console.log('fsPromise', filehandle.fd);
        console.log(await filehandle.readFile({ encoding: 'utf8' }));
    } finally {
        if (filehandle) await filehandle.close();
    }
}

example();
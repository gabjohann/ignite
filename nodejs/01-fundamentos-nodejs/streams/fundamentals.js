// Streams => leitura pequenas partes de um dado antes da leitura do arquivo por completo

/* 
  Exemplo:
    Upload de um arquivo de 1GB para o servidor.
    Conforme o arquivo for subindo, já é feita a escrita no banco. 
    Não se espera o arquivo terminar o upload para então fazer a escrita no banco. 
    Esse processo é simultâneo.
*/

// Toda porta de entrada ou saída é uma Stream no node

// req e res são streams

/* 
process.stdin.pipe(process.stdout); // stream no terminal
*/
import { Readable } from 'node:stream';

// toda stream readable tem o método read como obrigatório

class OnToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null); // .push() método para fornecer informações da stream
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000); // a cada 1 segundo ele fornece o dado recebido
  }
}

new OnToHundredStream().pipe(process.stdout);

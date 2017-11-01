let download = require('download-file')
const files = require('./files');
let colors = require('colors');

const BASE_URL = 'https://cdn.servel.cl/padronesdefinitivos/padron/'

let filesDownloaded = 0;

for (let file in files) {

  let options = {
    directory: `./2017/${files[file].region}`,
    filename: `${file}.pdf`
  }

  let url = BASE_URL + files[file].id;

  setTimeout(() => {
    console.log((`Downloading ${file}`).blue);
    download(url, options, err => {
      if (err) throw err
      console.log((`${filesDownloaded} Downloaded ${file}`).green);
    })
  }, 500 * filesDownloaded)
  filesDownloaded++;
}
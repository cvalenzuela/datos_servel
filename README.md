# Scrapping los datos públicos del Servel

## “Esta información no puede tener un uso comercial y sanciona con multas a quienes vendan el padrón o hagan un uso comercial(...)” <sup>[1](http://www.t13.cl/radio/politica/conexion-tele13/noticia/servel-se-publican-padrones-electorales-chile-y-extranjero)</sup>

Link público: https://cdn.servel.cl/padronesdefinitivos/padron.html

Para obtener todos los links, nombres y ids en la consola de js.
```javascript
let accordion = document.querySelectorAll('#accordion')

let regiones = Array.from(accordion[0].children).filter((e,i) => {
  if(i%2 != 1){
    return e
  }
})

let comunas_temp = Array.from(accordion[0].children).filter((e,i) => {
	if(i%2){
		return e
	}
})

let comunas = {}
comunas_temp.forEach((region,i) => {
	Array.from(region.children).forEach(comuna => {
    comunas[comuna.innerText] = {
      region: regiones[i].innerText,
      id: comuna.childNodes[0].name
		}
	})
})

copy(comunas)
```
El resultado quedará copiada en el portapapeles.

Luego de pegarlo en un documento, ejecutar `index.js`

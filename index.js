require('dotenv').config();
const{ inquirerMenu,leerInput, pausa,listarLugares} =require ('./helpers/inquirer.js');
const Busquedas = require ('./models/busqueda.js')

const main = async () => {

const busquedas = new Busquedas();
let opt;

do {

  opt = await inquirerMenu ();
  switch (opt) {
    case 1:
         // Mostrar mensaje
         const termino = await leerInput('Ciudad:');

        // Buscar lugares
        const lugares = await busquedas.ciudad(termino);

        // seleccionar el lugar
        const id = await listarLugares(lugares);
        if(id==='0')continue;
       
        const lugarSel= lugares.find( l=>l.id === id);

         //guardardb
         busquedas.agregarHistorial(lugarSel.nombre);

        // Clima
        const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng)
        
        // Mostrar resultados
        console.clear();
        console.log('\nInformacion de la ciudad\n'.magenta);
        console.log('Ciudad:',lugarSel.nombre.green);
        console.log('Lat:',lugarSel.lat);
        console.log('Lng:',lugarSel.lng);
        console.log('Temperatura:',clima.temp);
        console.log('Minima:',clima.min);
        console.log('Maxima:',clima.max);
        console.log('Estado del Clima:',clima.desc.blue);

        break;
  
       case 2:
            busquedas.historialCapitalizado.forEach((lugar,i)=> {
              const idx = `${ i+1 }.`.red;
              console.log(`${idx} ${lugar}`);
            })

       break;
  }

if (opt !== 0) await pausa();

} while (opt !== 0)

}



 main ()
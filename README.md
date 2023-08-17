# Aplicación de Clima en la Consola

Esta es una aplicación de línea de comandos creada con Node.js que te permite obtener información del clima de diferentes ciudades utilizando las APIs de OpenWeather y Mapbox. La aplicación utiliza las dependencias `axios`, `colors`, `dotenv` y `inquirer`.

## Funcionamiento

1. Ejecuta la aplicación con el comando:

npm start

2. Aparecerá un menú interactivo en la consola que te permitirá elegir entre dos opciones:

- **Buscar Ciudad**: Ingresa el nombre de una ciudad y la aplicación buscará información sobre el clima en esa ubicación.

- **Historial**: Verás un historial de las ciudades previamente buscadas.

3. Para buscar una ciudad:

- Ingresa el nombre de la ciudad cuando se te solicite.
- La aplicación se conectará a la API de Mapbox para obtener las coordenadas de la ciudad.
- Luego, utilizará las coordenadas para hacer una solicitud a la API de OpenWeather y mostrará información detallada sobre el clima actual.

4. Después de cada búsqueda exitosa, la ciudad se agregará al historial.

## Dependencias

- **axios**: Librería para hacer solicitudes HTTP a APIs externas.
- **colors**: Permite agregar colores a la salida en la consola.
- **dotenv**: Carga variables de entorno desde el archivo `.env`.
- **inquirer**: Crea una interfaz interactiva en la consola para seleccionar opciones.

## Configuración de Claves API

Asegúrate de tener las claves de API necesarias para las plataformas de Mapbox y OpenWeather. Crea un archivo `.env` en el directorio raíz.


# Reto Técnico: Procesamiento de Transacciones Bancarias (CLI)

## Introducción:
	Este reto técnico se ha desarrollado con JavaScript (Node.js), el cual procesa un archivo CSV 
   que contiene transacciones bancarias.
	La aplicación genera un reporte que incluya:

	La aplicación muestra el siguiente reporte final en la terminal: 

	Reporte de Transacciones
	-------------------------------------------------------
	Balance Final: 10,985.85
	Transacción de Mayor Monto: ID = 222  monto = 499.69
	Conteo de Transacciones de Crédito: 508 y Débito: 492      ```
   ```
## Instrucciones de ejecución
   1. Descargar la aplicación

   2. Instalar dependencias:
      Ejecutar en la terminal: 
      npm install 
      npm install csv-parser

   3. Ejecutar la aplicación en la terminal:
      node procesarCSV.js

## Enfoque y Solución
   Para procesar el archivo CSV se usó el módulo "csv-parser", debido a que simplifica el manejo de archivos CSV, mejora el rendimiento y se entiende con claridad el código.    

## Estructura del Proyecto
   - Se tiene el archivo procesarCSV.js, el cual es el que procesa todos los datos que está en el archivo data.csv.
   - El archivo README.md es el contiene información sobre la aplicación. 
   - Los demás archivos son generados al instalar las dependencias del proyecto.
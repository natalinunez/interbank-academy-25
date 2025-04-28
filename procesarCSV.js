const fs = require('fs');  
const csv = require('csv-parser');  

let totalCredito = 0;  
let totalDebito = 0;  
let totalTransaccionesCredito = 0; // Contador para transacciones de Crédito  
let totalTransaccionesDebito = 0; // Contador para transacciones de Débito  
let maxTransaccion = { id: null, monto: 0 }; // Objeto para la transacción máxima  

fs.createReadStream('data.csv')  
    .pipe(csv())  
    .on('data', (row) => {  
        const monto = parseFloat(row.monto);  
        
        // Sumar créditos, débitos y contar transacciones  
        if (row.tipo === 'Crédito') {  
        totalCredito += monto;  
        totalTransaccionesCredito++; // Incrementa el contador de Créditos  
        } else if (row.tipo === 'Débito') {  
        totalDebito += monto;  
        totalTransaccionesDebito++; // Incrementa el contador de Débitos  
        }  
        
        // Verificar si la transacción actual es la máxima  
        if (monto > maxTransaccion.monto) {  
            maxTransaccion.id = row.id;  
            maxTransaccion.monto = monto;  
        }  
    })  
    .on('end', () => {  
        const resultado = totalCredito - totalDebito;  
        console.log("Reporte de Transacciones");
        console.log("-------------------------------------------------------");        
        console.log(`Balance Final: ${resultado.toFixed(2)}`);  
        console.log(`Transacción de Mayor Monto: ID = ${maxTransaccion.id}  monto = ${maxTransaccion.monto.toFixed(2)}`);  
        console.log(`Conteo de Transacciones de Crédito: ${totalTransaccionesCredito} y Débito: ${totalTransaccionesDebito}`);          
    })  
    .on('error', (error) => {  
        console.error(`Error al procesar el archivo: ${error.message}`);  
    });  
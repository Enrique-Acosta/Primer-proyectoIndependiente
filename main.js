const precioMinimoReciente= Number (prompt("¿Cual es el precio minimo reciente?(inicio de la tendencia alcista)"));
const precioMaximoActual= Number(prompt("¿Cual es el precio maximo actual?"));
const rangoEntrePrecios= precioMaximoActual-precioMinimoReciente;
const porcentajeDeRetroceso=[0.382,0.50,0.60];
const resultados=[];


const calcularPosibleRebote=(precioMaximo, rango)=>{
       console.log(porcentajeDeRetroceso);
       console.log(resultados);
       
        for (let i = 0; i < porcentajeDeRetroceso.length; i++) {
                const multiplicacion= rango*porcentajeDeRetroceso[i];
                const valorDelRebote= precioMaximo-multiplicacion;
                resultados.push(valorDelRebote)
        }
          
        const posiblesRebotes= alert("Los posibiles rebotes pueden se en:\n$ "+ resultados.join("\n $ "))
    
    
}

calcularPosibleRebote(precioMaximoActual, rangoEntrePrecios);



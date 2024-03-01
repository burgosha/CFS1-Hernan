console.log("----------------------------");
console.log("----------------------------");
console.log("|    Cocinar una torta     |");
console.log("----------------------------");
console.log("----------------------------");
console.log("Ingredientes: ");
console.log(" 2 huevos \n 1 taza de azúcar \n 1/2 taza de aceite \n 2 tazas harina leudante \n 3/4 taza leche");
console.log("----------------------------");
console.log("Pasos:");
console.log("----------------------------");
console.log("1. En un bol, romper los 2 huevos, agregar la taza de azúcar y la esencia de vainilla.");
console.log("2. Batir aproximadamente 1 minuto.");
console.log("3. Añadir el aceite y mezclar.");
console.log("4. Agregar una taza de harina y volver a mezclar.");
console.log("5. Agregar la leche y mezclar todo con cuidado.");
console.log("6. Agregar la taza de harina restante y mezclar por un minuto más.");
console.log("7. De modo optativo, para saborizar, agregar ralladura de limón o naranja.");
console.log("8. Precalentar horno a 160°C");
console.log("9. Enharinar un molde, colocar la mezcla y calentar por 40 min en horno a 160°C");
console.log("10. Servir.");
console.log("----------------------------");
var receta = {
    nombre: "Cocinar una torta",
    ingredientes: ["2 huevos", " 1 taza de azúcar", "1/2 taza de aceite", "2 tazas harina leudante", "3/4 taza leche"],
    pasos: ["1. En un bol, romper los 2 huevos, agregar la taza de azúcar y la esencia de vainilla.", "2. Batir aproximadamente 1 minuto.", "3. Añadir el aceite y mezclar.", "4. Agregar una taza de harina y volver a mezclar.", "5. Agregar la leche y mezclar todo con cuidado.", "6. Agregar la taza de harina restante y mezclar por un minuto más.", "7. De modo optativo, para saborizar, agregar ralladura de limón o naranja.", "8. Precalentar horno a 160°C", "9. Enharinar un molde, colocar la mezcla y calentar por 40 min en horno a 160°C", "10. Servir."]
};
function imprimirReceta(receta) {
    console.log("--------------------------------");
    console.log("Receta: " + receta.nombre);
    console.log("--------------------------------");
    console.log("Ingredientes: ");
    receta.ingredientes.forEach(function (ingrediente) {
        console.log("- " + ingrediente);
    });
    console.log("--------------------------------");
    console.log("Pasos:");
    receta.pasos.forEach(function (paso) {
        console.log(paso);
    });
    console.log("--------------------------------");
}
imprimirReceta(receta);


  export const formatearFecha = (original) => {
    const array = original.split(" ");
    const fecha = array[0];
    const hora = array[1];
    const anio = fecha.split("-")[0];
    const mes = fecha.split("-")[1];
    const dia = fecha.split("-")[2];

    const horas = hora.split(":")[0];
    const minutos = hora.split(":")[1];

    return dia + "/" + mes + "/" + anio + " " + horas + ":" + minutos;
 };

 export const getDia = (original) => {
    const array = original.split(" ");
    const fecha = array[0];
    const hora = array[1];
    const anio = fecha.split("-")[0];
    const mes = fecha.split("-")[1];
    const dia = fecha.split("-")[2];

    const horas = hora.split(":")[0];
    const minutos = hora.split(":")[1];

    return dia + "/" + mes + "/" + anio;
 };

 export const getHora = (original) => {
    const array = original.split(" ");
    const fecha = array[0];
    const hora = array[1];
    const anio = fecha.split("-")[0];
    const mes = fecha.split("-")[1];
    const dia = fecha.split("-")[2];

    const horas = hora.split(":")[0];
    const minutos = hora.split(":")[1];

    return horas + ":" + minutos;
 };
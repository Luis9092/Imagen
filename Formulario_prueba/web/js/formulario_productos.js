/* global Swal */

const formulario = document.getElementById('formulario2');
const inputs = document.querySelectorAll('#formulario2 input');

$("#tbl_productos").on("click", "tr td", function (evt)
{
    var target, id, id_producto, producto, descripcion, imagen, precio_costo, precio_venta, existencia, fecha_ingreso, marca;
    target = $(event.target);
    
    id = target.parent().data('id');
    id_producto = target.parent().data('id_pues');
    
    producto = target.parent("tr").find("td").eq(0).html();
    descripcion = target.parent("tr").find("td").eq(1).html();
    // imagen = target.parent("tr").find("td").eq(2).html();
    precio_costo = target.parent("tr").find("td").eq(3).html();
    precio_venta = target.parent("tr").find("td").eq(4).html();
    existencia = target.parent("tr").find("td").eq(5).html();
    fecha_ingreso = target.parent("tr").find("td").eq(6).html();
   // marca=target.parent("tr").find("td").eq(7).html();
    $("#txt_id_producto").val(id);
    $("#txt_producto").val(producto);
    $("#txt_descripcion").val(descripcion);
    //      $("#txt_imagen").val(imagen);
    $("#txt_costo").val(precio_costo);
    $("#txt_venta").val(precio_venta);
    $("#txt_existencia").val(existencia);
    $("#txt_fecha_ingreso").val(fecha_ingreso);
    $("#drop_marcas").val(id_producto);
    $("#modal_producto44").modal('show');
});






const expresiones = {
//nombre: /^[A-Za-z0-9\s]+$/ // Letras y espacios, pueden llevar acentos.
nombre: /^[a-zA-Z0-9,.!? ]*$/ 
};
const campos = {
    nombre: false
};
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "txt_producto":
            validarCampo(expresiones.nombre, e.target, 'txt_producto');
            break;
        case "txt_descripcion":
            validarCampo(expresiones.nombre, e.target, 'txt_descripcion');
            break;
    }
};
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
function recargar() {
    document.location.reload();
}


'use strict';
const btn_agregar = document.querySelector('#btn_agregar');
const btn_modificar = document.querySelector('#btn_modificar');
let validar = () => {
    let inputs_requerido = document.querySelectorAll('#formulario [required]');
    let error = false;
    for (let i = 0; i < inputs_requerido.length; i++) {
        if (inputs_requerido[i].value === '') {
            error = true;
        } else {
            inputs_requerido[i].classList.remove('input_error2');
        }
    }
    return error;
};
let validar2 = () => {
    let inputs_requerido2 = document.querySelectorAll('#formulario2 [required]');
    let error2 = false;
    for (let i = 0; i < inputs_requerido2.length; i++) {
        if (inputs_requerido2[i].value === '') {
            error2 = true;
        } else {
            inputs_requerido2[i].classList.remove('input_error2');
        }
    }
    return error2;
};
let obtener_datos = () => {
    let error = validar();
    if (error) {
        error44();
    } else {

        correcto();
    }
};
let obtener_datos2 = () => {
    let error2 = validar2();
    if (error2) {
        error44();
    } else {
        correcto();
    }
};
function error44() {
    Swal.fire({
        icon: 'error',
        title: 'Error!!',
        html: '<h5 style=color:red><br><b>Debe Llenar los campos correctamente</b></h5>',
        // confirmButtonColor: '#a52a2a'
        showConfirmButton: true,
        confirmButtonColor: '#ff0000'
    });
}

function correcto() {
    Swal.fire({
        icon: 'success',
        title: 'Excelente!!',
        html: '<h5 style=color:lime><br><b>Datos Ingresados Correctamente</b></h5>',
        //   background: "#1e2122",
        showConfirmButton: false

    });
}
btn_agregar.addEventListener('click', obtener_datos);
btn_modificar.addEventListener('click', obtener_datos2);

function confirmar2(evt) {

    Swal.fire({
        title: 'Eliminar',
        text: "Desea eliminar el registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value === true) {
            Swal.fire({
                title: 'Eliminado',
                html: '<h5 style=color:lime><br><b>Datos Eliminados Correctamente!!"</b></h5>',
                icon: 'success',
                showConfirmButton: false
            });

            $("#btn_eliminar").click();
        } else {
            Swal.fire({
                confirmButtonColor: '#d33',
                icon: 'error',
                title: 'Cancelado',
                text: 'Datos No Eliminados'

            });
        }
    });
    return false;
}

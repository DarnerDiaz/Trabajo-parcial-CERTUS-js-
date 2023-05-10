$(document).ready(function() {
    $('#formulario').submit(function(event) {
        event.preventDefault();

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var correo = $('#correo').val();
        var genero = $('#genero').val();
        var fecha_nacimiento = $('#fecha_nacimiento').val();

        if (nombre === '' || apellido === '' || correo === '' || genero === '' || fecha_nacimiento === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (!validarCorreo(correo)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!confirm('¿Está seguro de enviar los datos?')) {
            return;
        }

        alert('Los datos se enviaron correctamente. ¡Gracias por su interés!');
    });
});

function validarCorreo(correo) {
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

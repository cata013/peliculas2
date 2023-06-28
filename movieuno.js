function comentario() {
    let nombre = document.getElementById('nombre').value;
    let comentario = document.getElementById('coment').value;
    let texto = '<h4>' + nombre + ': ' + '</h4>' + '<p>' + comentario + '</p>';
    document.getElementById('agregar').innerHTML += texto;
    console.log(nombre + ': ' + comentario);
  }

  $(document).ready(function() {
    $("#submit").click(function() {
        //abre el modal
        $('#progresoModal').modal('show');

        //inicia la barra de progreso
        let progress = 0;
        let interval = setInterval(function() {
            progress += 20; //Aumenta el progreso en 20% cada segundo
            $("#progressBar").css('width', progress + '%').attr('aria-valuenow', progress);

            //Cuando la barra de progreso llega al 100%, detiene el intervalo, cierra el modal y muestra la alerta
            if (progress >= 100) {
                clearInterval(interval);
                $('#progresoModal').modal('hide');
                alert('¡Tu descarga está a punto de comenzar!');
            }
        }, 1000); // 1000 milisegundos = 1 segundo
    });
});

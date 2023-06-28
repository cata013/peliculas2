function showDateTime() {
    let now = new Date();
    let dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    $('footer p').text('Gracias por visitar mi página web. Fecha y hora actual: ' + dateTime);
}

$(document).ready(function() {
    console.log("aaa")
    $('#myForm').on('submit', function(e) {
        e.preventDefault();
        let name = $('#name').val();
        alert('Gracias ' + name + '!, se ha enviado tu mensaje');
    });

    showDateTime();
    setInterval(showDateTime, 1000);
  });
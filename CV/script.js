$(document).ready(function() {
        var url = 'https://randomuser.me/api/';

        $.get(url, function( data ) {

            $('#name').html(data.results[0].name.first + ' ' + data.results[0].name.last);
            $('#image').attr('src', data.results[0].picture.large);
            $('#country').html(data.results[0].location.country);
            $('#phone').html(data.results[0].phone);
            $('#email').html(data.results[0].email);
            $('#age').html(data.results[0].dob.age);
            $('#date').html(data.results[0].dob.date[0] + data.results[0].dob.date[1] + data.results[0].dob.date[2] + data.results[0].dob.date[3]
                + data.results[0].dob.date[4] + data.results[0].dob.date[5] + data.results[0].dob.date[6] + data.results[0].dob.date[7] + data.results[0].dob.date[8] + data.results[0].dob.date[9])
            $('#username').html(data.results[0].login.username);
        });
});

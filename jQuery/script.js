$(document).ready(function() {

    $('#btn').click(function() {
        var name = $('#nameValue').val();
        var url = 'https://api.nationalize.io?name=' + name;

        $.get(url, function( data ) {
           $('#result').html(data.country[0].country_id);
        });
    });
});
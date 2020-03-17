//Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
//Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
//Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
//In base a cosa scegliamo nella select vedremo i corrispondenti cd.

$(document).ready(function() {
    var source = $('#template-card').html();
    var templateCard = Handlebars.compile(source);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function (data) {
            //console.log(data);
            var albumTotali = data.response;
            for (var i = 0; i < albumTotali.length; i++) {
                var albumSingolo = albumTotali[i];
                console.log(albumSingolo);
                var albumSingoloTemplate = {
                    immagineAlbum: albumSingolo.poster,
                    nomeAlbum: albumSingolo.title,
                    autore: albumSingolo.author,
                    anno: albumSingolo.year,
                    genere: albumSingolo.genre
                }
                var album = templateCard(albumSingoloTemplate);
                $('.container-card').append(album);
            }


        },
        error:function () {
            alert('Ma dove vuoi andare');
        }
    })

    $('.select-genere').change









});

$( document ).ready(function(){

    $( window ).resize(function() {
        $('#conteudo').width(($('#conteudo').height() / 16) * 9);
      });

    $('#conteudo').width(($('#conteudo').height() / 16) * 9);
});
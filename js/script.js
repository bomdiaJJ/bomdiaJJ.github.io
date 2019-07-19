$( "#socorro" ).click(function() {
    console.log('a');
  });

  $( "#content" ).click(function() {
    console.log('a');
  });
  $( "#nav" ).click(function() {
    console.log('a');
  });



$( "#banner" ).one( "click", function() {
    $( this ).css( "width", "200" );
  });
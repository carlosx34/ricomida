$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
  });
  
  
  $(function () {
  
      $("a").click(function(event){
        if (this.hash !== "") {
          event.preventDefault();
  
          var gato = this.hash;
  
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });
  
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
  
    });
  
    $(document).ready(function(){
  
      $(".titulo").on("dblclick", function(){
  
          $(this).css("color", "red");
      });
    });
  
    $(document).ready(function(){
  
      $(".card-title").on("click", function(){
  
          $(this).parent().find(".card-text").toggle();
      });
  });
$(document).ready(function(){

    $(".carousel-button").click(function(){
        if(!$(this).hasClass("carousel-button-active")){
            $(".carousel-button").removeClass("carousel-button-active")
            $(this).addClass("carousel-button-active")

            $(".carousel-footer").hide(250)
            $(".carousel-desc").hide(250)

            if($(this).data("id") == 1){
                $(".id-1").show(250)
                $(".main-text").show(250)

            } else if ($(this).data("id") == 2){ 
                $(".id-2").show(250)
                $(".main-text").hide(250)
                $(".carousel-footer.id-2").css({display: "flex"})

            }else if ($(this).data("id") == 3){ 
                $(".id-3").show(250)
            $(".main-text").hide(250)
            $(".carousel-footer.id-3").css({display: "flex"})
                
            }else if ($(this).data("id") == 4){ 
                $(".id-4").show(250)
                $(".main-text").hide(250)
                $(".carousel-footer.id-4").css({display: "flex"})
            }

        }
    })


    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 350;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
    
    $("body").scroll(function(){
        reveal()
    })

      
})
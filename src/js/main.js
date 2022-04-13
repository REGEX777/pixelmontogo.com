var button = document.querySelectorAll(".carousel-button");

function fadeOutEffect(target) {
    var fadeTarget = document.querySelectorAll(target);
    fadeTarget.forEach(e => {
        var fadeEffect = setInterval(function () {
            if (!e.style.opacity) {
                e.style.opacity = 1;
            }
            if (e.style.opacity > 0) {
                e.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                e.classList.add("hide-element")
                setTimeout(() => {
                    e.style.opacity = 1 
                }, 10);
            }
        }, 50);
    })
}
function fadeInEffect(target) {
    var fadeTarget = document.querySelectorAll(target);
    fadeTarget.forEach(e => {

        var fadeEffect2 = setInterval(function () {
            if (!e.style.opacity) {
                e.style.opacity = 1;
            }
            if (e.style.opacity < 1) {
                e.style.opacity += 0.1;
            } else {
                clearInterval(fadeEffect2);
            e.classList.remove("hide-element")

            }
        }, 100);
    })
}

    button.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains("carousel-button-active")){

                button.forEach(e => {
                    e.classList.remove("carousel-button-active")
                })
                this.classList.add("carousel-button-active")
    
                    fadeOutEffect(".carousel-footer")
                    fadeOutEffect(".carousel-desc")
                    if(parseInt(this.dataset.id) === 1){
                        fadeInEffect(".id-1")
                        fadeInEffect(".main-text")
                    } else if (parseInt(this.dataset.id) === 2){ 
                        fadeInEffect(".id-2")
                        fadeOutEffect(".main-text")
                    }else if (parseInt(this.dataset.id) === 3){ 
                        fadeInEffect(".id-3")
                        fadeOutEffect(".main-text")
                        
                    }else if (parseInt(this.dataset.id) === 4){ 
                    
                        fadeInEffect(".id-4")
                        fadeOutEffect(".main-text")
                    }
               
    
            }
        });

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
    document.querySelector("body").addEventListener('scroll', function(e) {
        reveal()
    })

    const downloadLink = document.getElementById('download-pixelmon');
    const platform = document.getElementById('platform');
    if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
        downloadLink.href = "https://cdn.pixelmontogo.com/launcher/PixelmonToGoLauncher-mac.dmg";
        platform.textContent = "DOWNLOAD PIXELMON (MAC)";
    } else if (navigator.userAgent.indexOf('Linux') !== -1) {
        downloadLink.href = "https://cdn.pixelmontogo.com/launcher/Pixelmon%20To%20Go%20Launcher.AppImage";
        platform.textContent = "DOWNLOAD PIXELMON (LINUX)";
    } else {
        downloadLink.href = "https://cdn.pixelmontogo.com/launcher/Pixelmon%20To%20Go%20Launcher%20Setup.exe";
        platform.textContent = "DOWNLOAD PIXELMON (WINDOWS)";
    }
 



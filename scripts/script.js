$(document).ready(function() {
    //Ejemplo pares impares
    $("#pares").click(function() {
        $(".numeros:odd").css("border","3px solid red")
    });

    $("#impares").click(function() {
        $(".numeros:even").css("border","3px solid blue") 
    })

    $("#reiniciar").click(function() {
        $(".numeros").css("border","none")
    })

    

    //EJEMPLOS SELECTORES INDICES
    $("#first").click(function() {
        $(".refrescos:first").css("border","3px solid red")
    })

    $("#last").click(function() {
        $(".refrescos:last").css("border","3px solid blue")
    })

    $("#eq").click(function() {
        $(".refrescos:eq(4)").css("border","3px solid green")
    })

    $("#menorque").click(function() {
        $(".refrescos:lt(3)").css("border","3px solid yellow")
    })

    $("#mayorque").click(function() {
        $(".refrescos:gt(4)").css("border","3px solid brown")
    })

    $("#entre").click(function() {
        $(".refrescos").slice(1,3).css("border","3px solid purple")
    })


    //EJEMPLOS SELECTORES CONTENIDO
    $("#contains").click(function() {
        $("p:contains(Lipsum)").css("color","red")
    })
    $("#has").click(function() {
        $("p:has(i)").css("color","blue")
    })
    $("#not").click(function() {
        $("p:not(.parrafo)").css("color","green")
    })


    //EJEMPLOS SELECTORES HERENCIA
    $("#primerhijo").click(function() {
        $("#padre1 p:first-child").css("background-color","yellow")
    })

    $("#ultimohijo").click(function() {
        $("#padre2 p:last-child").css("background-color","yellow")
    })

    $("#segundohijo").click(function() {
        $("#padre1 p:nth-child(2)").css("background-color","yellow")
    })

    $("#penultimohijo").click(function() {
        $("#padre2 p:nth-last-child(2)").css("background-color","yellow")
    })


    //EJEMPLOS MANIPULACION DOM
    $("#cambiar").click(function() {
        $(".parrafo1").text("El párrafo ha cambiado su contenido.")
    })
    $("#obtener").click(function() {
        alert($(".parrafo1").text())
    })

    $("#obtenertext").click(function() {
        alert($(".muestra").text())
    })
    $("#obtenerhtml").click(function() {
        alert($(".muestra").html())
    })
    $("#obtenertextinputmuestra").click(function() {
        alert($("#textareamuestra").val())
    })


    $("#text").click(function() {
        alert($("form input:text").val())
    })
    $("#radio").click(function() {
        alert($("form input:radio:checked").val())
    })
    $("#checkbox").click(function() {
        alert($("form input:checkbox:checked").val())
    })
    $("#select").click(function() {
        alert($("form select").val())
    })
    $("#textcambiar").click(function() {
        $("form input:text").val("Rubén Roldán Cantón")
    })
    $("#selectcambiar").click(function() {
        $("form select").val("+18")
    })
    $("#muestracolor").click(function() {
        alert($(".parrafocambiarcolor").attr("alt"))
    })
    $("#cambiacolor").click(function() {
        $(".parrafocambiarcolor").attr("alt","Alt cambiado")
    })

    
    $("#obtenerpepe").click(function() {
        alert($("#ejemplocss p:first-child").css("background-color"))
    })
    $("#obtenerjuan").click(function() {
        alert($("#ejemplocss p:last-child").css("background-color"))
    })
    $("#cambiardos").click(function() {
        $("#ejemplocss p:first-child").css("background-color","pink")
        $("#ejemplocss p:last-child").css("background-color","yellow")
    })



    // EJEMPLOS EVENTOS
    $(".iescelia").click(function() {
        alert("Has hecho click sobre la imagen!")
    })

    $("#shinchan img").click(function() {
        $("#shinchan p").text("Has hecho click en la imagen.");
        $("#shinchan .mensaje").css("background-color","lightsalmon");
    })

    $("#misae img").dblclick(function() {
        $("#misae p").text("Has hecho doble click en la imagen.");
        $("#misae .mensaje").css("background-color","lightsalmon");
    })

    $("#hiroshi img").mousedown(function () { 
        $("#hiroshi p").text("Has pulsado la imagen.");
        $("#hiroshi .mensaje").css("background-color","lightgreen");
    });
    $("#hiroshi img").mouseup(function () { 
        $("#hiroshi p").text("Has soltado la imagen.");
        $("#hiroshi .mensaje").css("background-color","lightsalmon");
    });

    $("#himawari img").mouseover(function () { 
        $("#himawari p").text("Has entrado en la imagen");
        $("#himawari .mensaje").css("background-color","lightgreen");
    });
    $("#himawari img").mouseout(function () { 
        $("#himawari p").text("Has salido en la imagen");
        $("#himawari .mensaje").css("background-color","lightsalmon");
    });

    $("#kazama input").focusin(function() {
        $("#kazama p").text("Has hecho focus");
        $("#kazama .mensaje").css("background-color","lightgreen");
    })
    $("#kazama input").focusout(function() {
        $("#kazama p").text("Has dejado de hacer focus");
        $("#kazama .mensaje").css("background-color","lightsalmon");
    })


    var contMouseEnter = 0;
    $("#padre").mouseenter(function() {
        contMouseEnter++;
        $("#contador").text(contMouseEnter);
    })


    $("#keydown").keydown(function(e) {
        $("#pruebaeventosteclado").text($("#pruebaeventosteclado").text() + e.which);
    })



    $("input[name=nombre]").focusin(function() {
        $("input[name=nombre]").css("background-color","lightskyblue")
    })
    $("input[name=nombre]").focusout(function() {
        if($(this).val()=="") {
            $("input[name=nombre]").css("background-color","lightsalmon")
            alert("No puedes dejar el campo vacío.")
        }
        else {
            $("input[name=nombre]").css("background-color","lightgreen")
        }
    })
    $("input:radio").change(function() {
        alert("Y la culpa no era mía ni donde estaba ni cómo vestía...")
    })
    $("form").submit(function() {
        alert("Enviaste el formulario!")
    })



    $("#conjunto").on("click mouseover", function() {
        $("#parradosinsertados").append("<p>Se añade texto pulsando o pasando por encima.</p>")
    })
    $("#conjunto2").on("click mouseover", function() {
        $("#parradosinsertados2").append("<p>Se añade texto pulsando o pasando por encima.</p>")
    })
    $("#desconjunto").click(function() {
        $("#conjunto2").off("mouseover")
    })



    $("#hover").hover(
        function() {$("#hover").css("background-color","lightgreen")},
        function() {$("#hover").css("background-color","lightskyblue")}
    )



    //EJEMPLOS EFECTOS
    $(".cambiaisla").click(function() {
        $("#islatentaciones").animate({width:"600px"},3000,'swing',function() {alert("Se acabó!")})
    })

    $("#fadeout").click(function() {
        $("#lqsa").fadeOut(2000);
    })
    $("#fadein").click(function() {
        $("#lqsa").fadeIn(3000, function() {alert("Se mostró")});
    })
    $("#fadetoggle").click(function() {
        $("#lqsa").fadeToggle(2000);
    })
    $("#fadeto").click(function() {
        $("#lqsa").fadeTo(3000,0.9);
    })


    $("#hide").click(function() {
        $("#puigdemont").hide(2000);
    })
    $("#show").click(function() {
        $("#puigdemont").show(1000);
    })
    $("#toggle").click(function() {
        $("#puigdemont").toggle(2000);
    })


    $("#slideup").click(function() { 
        $("#viejavisillo").slideUp(3000);
    });
    $("#slidedown").click(function() { 
        $("#viejavisillo").slideDown(3000);
    });
    $("#slidetoggle").click(function() { 
        $("#viejavisillo").slideToggle(3000);
    });


    $("#addclass").click(function() {
        $("#007").addClass("punteado")
    })
    $("#removeclass").click(function() {
        $("#007").removeClass("punteado")
    })
    $("#toggleclass").click(function() {
        $("#007").toggleClass("punteado")
    })


    $("#blind").click(function() {
        $("#realmadrid img").toggle("blind","slow")
    })
    $("#bounce").click(function() {
        $("#barcelona img").toggle("bounce","slow")
    })
    $("#shake").click(function() {
        $("#psg img").toggle("shake","slow")
    })
    $("#clip").click(function() {
        $("#united img").toggle("clip","slow")
    })
    $("#drop").click(function() {
        $("#leeds img").toggle("drop","slow")
    })
    $("#explode").click(function() {
        $("#bayern img").toggle("explode","slow")
    })
    $("#puff").click(function() {
        $("#chelsea img").toggle("puff","slow")
    })
    $("#fade").click(function() {
        $("#almeria img").toggle("fade","slow")
    })
    $("#fold").click(function() {
        $("#athletic img").toggle("fold","slow")
    })
    $("#highlight").click(function() {
        $("#borussia img").toggle("highlight","slow")
    })
    $("#pulsate").click(function() {
        $("#astonvilla img").toggle("pulsate","slow")
    })
    $("#slide").click(function() {
        $("#arsenal img").toggle("slide","slow")
    })



    //EJEMPLOS DRAGGABLE
    $("#draggable").click(function() {
        $("#todrag").draggable();
    })
    $("#axisx").click(function() {
        $("#todrag").draggable({axis: "x"});
    })
    $("#axisy").click(function() {
        $("#todrag").draggable({axis: "y"});
    })
    $("#delay").click(function() {
        $("#todrag").draggable({delay: "1000"});
    })
    $("#containment").click(function() {
        $("#todrag").draggable({containment: "parent"});
    })
    $("#handle").click(function() {
        $("#todrag").draggable({handle: "p"});
    })
    $("#cancel").click(function() {
        $("#todrag").draggable({cancel: "p"});
    })
    $("#disabled").click(function() {
        $("#todrag").draggable({disabled: "true"});
    })
    $("#opacity").click(function() {
        $("#todrag").draggable({opacity: "0.5"});
    })
    $("#revert").click(function() {
        $("#todrag").draggable({revert: true});
    })
    $("#cursor").click(function() {
        $("#todrag").draggable({cursor: "move"});
    })


    $("#start").click(function() {
        $("#todrag2").draggable({
            start: function() { $(this).find("p").text("Estamos volando!") },
            stop: function(){ $(this).find("p").text("Hemos aterrizado") }
        });
    })
});
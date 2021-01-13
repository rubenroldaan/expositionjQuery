$(document).ready(function() {
    //Ejemplo pares impares
    $("#pares").click(function() {
        $(".numeros:even").css("border","3px solid red")
    });

    $("#impares").click(function() {
        $(".numeros:odd").css("border","3px solid blue") 
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
});
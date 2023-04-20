function Entrar(){
    var Nombre=$("#Name").val();
    var email=$("#email").val();
    var password=$("#password").val();
    if (Nombre=="paula" && email=="paula@UFPSO" && password=="1234"){
        alert("USUARIO CORECTO");
    }
    else {
        alert("USUARIO INCORRECTO");
    }
}
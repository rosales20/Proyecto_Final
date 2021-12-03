
		function verificar() {
            var usuario = document.getElementById("usuario").value;
            var pass = document.getElementById("contraseña").value;


			if (usuario=="joel" && pass=="123456") {
                window.open("index.html");
				
			} else if (usuario== "" && pass== "") {
                alert("falta llenar datos")
                
			}
		 }

	//	alert("Bienvenido al portal de Institutos Educacionales Asociados");

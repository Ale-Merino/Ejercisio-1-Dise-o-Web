class saludo {
     constructor() {
     }

     saludar() {
          return alert("¡¡EL MEJOR CAFÉ DE EL SALVADOR!! ");
     }
}

const b = () => {
     const c = new saludo(); 
     return c.saludar();
}

function obtener() {
     const nombre = document.getElementById("nombre").value;
     const apellido = document.getElementById("apellido").value;
     const dui = document.getElementById("dui").value;
     const genero = document.getElementById("genero").value;
     const telefono = document.getElementById("telefono").value;
     const email = document.getElementById("email").value;
     const departamento = document.getElementById("departamento").value;
     const direccion = document.getElementById("direccion").value;

     console.log(dui, nombre, apellido, genero, telefono, email, departamento, direccion);

     alert("nombre" + nombre + ", este formulario fue enviado con exito")

     formulario.reset();
}
const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
  boton.addEventListener("click", ()=>{
    const botonApretado =boton.textContent;

    if(pantalla.textContent.length >= 12){
      alert('No se puede introducir mas de 11 digitos');
      return pantalla.textContent = pantalla.textContent.slice(0,-1);
    }

    if(boton.id === 'limpiar'){
      return pantalla.textContent = "0";
    }

    if(boton.id === 'borrar'){
      if(pantalla.textContent.length === 1 || (pantalla.textContent === 'Error')){
        return pantalla.textContent = '0';
      }else{
        return pantalla.textContent = pantalla.textContent.slice(0,-1);
      }
    }

    if(boton.id === 'coma'){
      if(pantalla.textContent.includes(',')) return;
    }

    if(boton.id === 'igual'){
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = 'Error';
      }
      return;
    }

    if(pantalla.textContent === "0" || (pantalla.textContent === 'Error')){
      pantalla.textContent = botonApretado;
    }else{
      pantalla.textContent += botonApretado;
    }
    
  })
})
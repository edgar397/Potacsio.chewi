var Email = document.getElementById('Email.html');
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
  Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  // Letras, numeros, guion y guion_bajo
  Nombre: /^[a-zA-ZÀ-ÿ\s]{1,14}$/,
  // Letras y espacios, pueden llevar acentos.
  Contraseña: /^.{4,12}$/,
  // 4 a 12 digitos.
  Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  Telefono: /^\d{7,10}$/ // 7 a 10 numeros.

};
var campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
};
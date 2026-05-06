function validarContraseña(contraseña) {
  if (contraseña.length < 8) {
    console.log(false);
    return false;
  }

  const tieneMayuscula = /[A-Z]/.test(contraseña);
  const tieneNumero = /[0-9]/.test(contraseña);

  if (!tieneMayuscula || !tieneNumero) {
    console.log(false);
    return false;
  }

  console.log(true);
}

validarContraseña(`Amedvanegas1`);

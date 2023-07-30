
function validationPassword(password){
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validationUserName(name){
  const regex = /^[a-zA-Z0-9_-]{4,20}$/;
  return regex.test(name);
}

function validationCampo(campo){
  const regex = /[a-zA-Z]/;
  return regex.test(campo);
}

export const addAccount = (data) => {

  const {password, rol, typeAccount, userName, users} = data;

  let errors = [];

  if(users.length < 1){
    errors.push("Tiene que haber al menos 1 usuario");
  }
  if(!validationPassword(password)){
    errors.push("La contraseña no es valida, se recomienda usar numeros y letras mayusculas");
  }
  if(!validationUserName(userName)){
    errors.push("El nombre de usuario no es valido");
  }
  if(!validationCampo(rol) ){
    errors.push("Tienes que seleccionar un rol");
  }
  if(!validationCampo(typeAccount)){
    errors.push("Tienes que seleccionar un tipo de cuenta");
  }


  return errors;
}


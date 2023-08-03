
export const addRol = (data) => {

  const {name, permissions} = data;
  const name_rol = name.trim();

  let errors = [];

  if(permissions.length < 1){
    errors.push("Tiene que haber al menos 1 permiso");
  }
  if(name_rol == "" || name.length < 7){
    errors.push("El nombre del rol no puede estar vacio, y tiene que tener al menos 7 caracteres");
  }


  return errors;
}


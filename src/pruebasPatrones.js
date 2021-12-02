var patronCodigoPostal = /^([0-9]{5})?$/;

var entrada = prompt(``);

document.write(patronCodigoPostal.test(entrada));
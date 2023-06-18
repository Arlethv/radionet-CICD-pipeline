const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const { name, email, telefono, mensaje } = JSON.parse(event.body);

  try {
    if (!name || !email || !telefono || !mensaje) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Faltan llenar los campos requeridos' }),
      };
    }

    const respuesta = {
      statusCode: 200,
      body: JSON.stringify({ message: 'El formulario se ha enviado con éxito' }),
    };

    return respuesta;
  } catch (error) {
    const respuesta = {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al procesar el formulario' }),
    };

    return respuesta;
  }
};

exports.handler = AWS.Lambda.createFunction({
    FunctionName: 'funcionLambda',
  }, exports.handler);

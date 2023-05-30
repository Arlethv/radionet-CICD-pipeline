import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RadioNet text', () => {
  render(<App />);
  const textElement = screen.getByText('RadioNet');
  expect(textElement).toBeInTheDocument();
});

function validateFields(name, email, phone, message) {
  if (name === '') {
    return 'El campo de nombre es obligatorio';
  }

  if (email === '') {
    return 'El campo de correo electrónico es obligatorio';
  }

  return null;
}

describe('Prueba de validación de campos', () => {
  it('Debe retornar un mensaje de error si el campo de nombre está vacío', () => {
    // Ejecutar la función de validación
    const errorMessage = validateFields('', 'test@example.com', '1234567890', 'Mensaje de prueba');

    // Verificar si se retorna el mensaje de error esperado
    expect(errorMessage).toBe('El campo de nombre es obligatorio');
  });

  it('Debe retornar un mensaje de error si el campo de correo electrónico está vacío', () => {
    // Ejecutar la función de validación
    const errorMessage = validateFields('Nombre', '', '1234567890', 'Mensaje de prueba');

    // Verificar si se retorna el mensaje de error esperado
    expect(errorMessage).toBe('El campo de correo electrónico es obligatorio');
  });

  // Agrega más pruebas según sea necesario
});

 
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Muestra los campos del formulario", () => {
    render(<App />);

    // Verificar que los campos de formulario estén presentes
    expect(screen.getByLabelText("Nombre Completo")).toBeInTheDocument();
    expect(screen.getByLabelText("Correo Electrónico:")).toBeInTheDocument();
    expect(screen.getByLabelText("Teléfono:")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enviar" })).toBeInTheDocument();
  });

  it("Muestra mensajes de error cuando el formulario se envía con datos no válidos", async () => {
    render(<App />);

    // Simular envío del formulario sin completar los campos requeridos
    fireEvent.click(screen.getByRole("button", { name: "Enviar" }));

    // Verificar que se muestren los mensajes de error
    expect(
      await screen.findByText("El nombre es obligatorio")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("El correo electrónico es obligatorio")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("El numero de telefono es obligatorio")
    ).toBeInTheDocument();
  });

  it("Envía el formulario cuando se ingresan datos válidos", async () => {
    render(<App />);

    // Completar los campos requeridos
    fireEvent.change(screen.getByLabelText("Nombre Completo"), {
      target: { value: "Yoselyn Vaquedano" },
    });
    fireEvent.change(screen.getByLabelText("Correo Electrónico:"), {
      target: { value: "yoselyn@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Teléfono:"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByLabelText("Mensaje:"), {
      target: { value: "Hola, esto es un mensaje de prueba" },
    });

    // Simular envío del formulario
    fireEvent.click(screen.getByRole("button", { name: "Enviar" }));

    // Verificar que se muestre el mensaje de éxito
    expect(
      await screen.findByText("¡Envío del formulario exitoso!")
    ).toBeInTheDocument();
  });
});

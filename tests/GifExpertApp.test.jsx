import { GifExpertApp } from "../src/GifExpertApp"
import { fireEvent, render, screen } from "@testing-library/react";



describe('Pruebas en <GifExpertApp/>', () => {
  
  test('No debe agregar una  categoría repetida',() => {

    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');//Buscar el input 
    const form = screen.getByRole('form');

    //Simulacion de escribir en el input y enviar el formulario
    fireEvent.input(input, {target: {value: 'One Punch'}});//Disparar un evento
    fireEvent.submit(form);//Lanzar evento Submit

    const categorias = screen.getAllByText("One Punch");
    expect(categorias.length).toBe(1);

  });
})

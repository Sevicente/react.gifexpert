import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
    
        render (<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');//Buscar el input 

        fireEvent.input(input, {target: {value: 'Saitama'}} )//Disparar un evento
        
        expect(input.value).toBe('Saitama');
       


    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
    
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn()//Mock(simulación de una función)

        render (<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});//Disparar un evento
        fireEvent.submit(form);//Lanzar evento Submit

        expect( input.value ).toBe('');//Esperar que el input este vacio despues de lanzar el onSubmit

        expect( onNewCategory ).toHaveBeenCalled();//Comprobar que la función ha sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //Se ha llamado una única vez
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);//Se ha llamado con el valor de inputValue


    });

    test('No debe de llamar el onNewCategory si el input está vacio', () =>{

        const onNewCategory = jest.fn()//Mock(simulación de una función)

        render (<AddCategory onNewCategory={onNewCategory}/>);

    
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);//Ha sido llamado 0 veces ya que inpute está vacio


    })
  
})

import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState( '' );

  const onInputChange = (event) => {
    setInputValue(event.target.value);//Coger el valor introducido en el input
  }

  const onSubmit = (event) =>{
    event.preventDefault();

    if( inputValue.trim().length <= 1) return; //Si en el input se añeden menos de dos carateres no se introduce en la lista

    onNewCategory( inputValue.trim());//Actualizar las categorías añadiendo una nueva
    setInputValue(''); //Borrar input al darle enter
  }

  return (
   <form onSubmit={ onSubmit }>
       <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={  onInputChange }
        />
   </form>
   
  )
}


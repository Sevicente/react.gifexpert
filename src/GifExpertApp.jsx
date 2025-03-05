import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'One Punch' ]);

const onAddCategory = (newCategory) =>{

    if( categories.includes(newCategory) ) return; //Si ya existe la nueva categoría no se inserta

    setCategories([ newCategory, ...categories  ])//Mantenemos las categorias anteriores y añdimos la nueva
    //setCategories( cat => [ ...cat, newCategory]); Otra manera de añadir una nueva categoría
}


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = {(event) => onAddCategory(event)}
        />

        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
                categories.map((category) =>(
                    
                       <GifGrid key={category} category={category}/>
                    ))
            }

        </ol>

    </>
  )
}



import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {    
    
    const [images, setImages] = useState([]);//array de imagenes
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
      useEffect( ()=>{
        getImages();
    
      }, [] )  //Hook para disparar efectos secundarios ( se llama solo una vez [](al cargar la página) a la función getGifs)


return{
    images,
    isLoading
}

}



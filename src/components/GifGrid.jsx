import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {



const {images, isLoading } = useFetchGifs( category );

  
return (
    <>
      <h3>{category}</h3>
      {
          isLoading && <h2>Cargando...</h2> //Si isLoading es true

      }
      <ol>
        <div className="card-grid">
            {
                images.map((image) => ( //Desestructuración de la imagen sacando el id y su título
                    <GifItem key={image.id}
                    {...image} />//para esparcir todas la propiedades que tiene image y enviarlas todas
                ))
            }
        </div>
        
      </ol>
      
    </>
  )
}


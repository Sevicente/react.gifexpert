import { GifGrid } from "../../src/components/GifGrid";
import { render, screen} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');//Para poder evaluar un hook

describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () =>{

        useFetchGifs.mockReturnValue({ //Evaluar el Hook useFetch
            images:[], //Cuando se muestra el isLoadin no han de haber imagenes
            isLoading: true //Ha de estar a true
        });

        render( <GifGrid category ={category}/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category));
        
    });


    test('debe mostrar items cuando se cargan las imágenes', () =>{

        const gifs = [
        {
            id:'ABC',
            title: 'Saitama',
            url:'https://localhost/saitama.jpg'
        },
        {
            id:'123',
            title: 'Goku',
            url:'https://localhost/goku.jpg'
        }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs, //Ahora una vez cargadas las imagenes el array tiene que contener imagenes
            isLoading: false //EL isLoading ha de estar en false
        });

        render( <GifGrid category ={category}/>);
        expect( screen.getAllByRole('img').length).toBe(2)
        
        
    });



})

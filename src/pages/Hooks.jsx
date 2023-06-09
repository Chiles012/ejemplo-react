import { useState, useEffect, useCallback, useRef } from "react";
import Button from "../Button";

const Hooks = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);

    const refInput = useRef(null);

    const creatUsuario = useCallback(() => {
        console.log('Creacion de usuarios');
    }, []);

    // ejecutar cada vez que un elemento combie
    useEffect(() => {
        console.log('Infinit useEffect');
    })

    // ejecuta por primara vez ocasion se muestra el componente / 2
    useEffect(() => {
        console.log('first useEffect');
    }, [])

    // ejecuta cuando el valor de count es cambiado
    useEffect(() => {
        console.log('state useEfect')
        console.log(refInput.current.value)
    }, [count])

    return (
        <>
            <h1>
                Hooks
            </h1>
            <input ref={refInput} type="text" placeholder="correo" />
            <Button
                text='Incrementar count'
                event={() => setCount(count + 1)}
            />
            <Button
                event={() => setValue(value + 2)}
                text='Incrementar value' 
            />
        </>
    )

}

export default Hooks;
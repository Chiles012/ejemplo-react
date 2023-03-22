import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Hola desde Home</h1>
            <Link to='/about'>Ir about</Link>
        </>
    )
}

export default Home
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Hola desde Home</h1>
            <Link to='/about'>Ir about</Link>
            <br/>
            <Link to='/hooks'>Ir hooks</Link>
        </>
    )
}

export default Home
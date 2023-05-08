import {Link} from 'react-router-dom'
const Productos = () =>{
return(
    <section>
        <nav>
            <ul>
                <Link to={'/Index'}>Home</Link>
                <Link to={'/Control'}>Control de clientes</Link>
                <Link to={'/Productos'}>Productos</Link>
                <Link to={'/Proveedores'}>Proveedores</Link>

            </ul>
        </nav>

    </section>
)

}

 export default Productos;
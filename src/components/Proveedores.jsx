import {Link} from 'react-router-dom';
const proveedores =
[
    {
    "id": 1,
    "nombre": "alberto",
    "apellido": "suarez"
    },
    {
       "id" : 2,
       "nombre" : "santiago",
        "apellido": "jaramillo"
    }
    
]
const Proveedores = () =>{
return(
    <section>
        <nav>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/Control'}>Control de clientes</Link>
                <Link to={'/Productos'}>Productos</Link>
                <Link to={'/Proveedores'}>Proveedores</Link>

            </ul>
        </nav>
        {
                proveedores.map  (proveedor =>
                <section className='proveedores'>
                    <p>{proveedor.id}</p>
                    <p>{proveedor.nombre}</p>
                    <p>{proveedor.apellido}</p>
                </section> 

                )
         }

    </section>
)

}

 export default Proveedores;
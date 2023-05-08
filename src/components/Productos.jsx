import {Link} from 'react-router-dom'
const productos =
[
    {
    "id": 1,
    "nombre": "caja",
    "valor": "20000"
    },
    {
       "id" : 2,
       "nombre" : "chocolate",
        "valor": "50000"
    }
    
]
const Productos = () =>{
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
                productos.map  (producto =>
                <section className='producto'>
                    <p>{producto.id}</p>
                    <p>{producto.nombre}</p>
                    <p>{producto.valor}</p>
                </section> 

                )
         }

    </section>
)

}

 export default Productos;
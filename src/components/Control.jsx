import {Link} from 'react-router-dom'
const controles =
[
    {
    "id": 1,
    "nombre": "calitos",
    "apellido": "rivera"
    },
    {
       "id" : 2,
       "nombre" : "juan",
        "apellido": "arroyave"
    }
    
]
const Control = () =>{
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
                controles.map  (control =>
                <section className='control'>
                    <p>{control.id}</p>
                    <p>{control.nombre}</p>
                    <p>{control.apellido}</p>
                </section> 

                )
         }


    </section>
)

}

 export default Control;
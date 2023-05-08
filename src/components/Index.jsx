import {Link} from 'react-router-dom'
const Index =  () => {
    return(
        <section>
            <body>
                
            </body>
           <nav>
                <ul>
                   
                    <Link to={'/Index'}>Home</Link>
                    <Link to={'/Control'}>Control de clientes</Link>
                    <Link to={'/Productos'}>Productos</Link>
                    <Link to={'/Proveedores'}>Proveedores</Link>

                </ul>
            </nav>
            <p>
                

            </p>
        </section>

    );
}

export default Index;
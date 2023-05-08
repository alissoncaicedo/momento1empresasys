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
           <section className='fondo'>
            <img src='../src/img/fondo.jpg' alt='fondo'/>
           </section>
        </section>

    );
}

export default Index;
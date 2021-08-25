import { Fragment } from 'react';
import Link from 'next/link'
function HomePage(){
    return (
    <Fragment><h1>SPORTS</h1>  
    <li> <Link href='sports/why-Kevin-Durant-is-the-GOAT'> Why Kevin Durant is the GOAT</Link></li>
        
    </Fragment>);
}

export default HomePage;
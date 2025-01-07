
import Link from "next/link";

function Navbar() {
    return ( 
        <nav>
            <ul>
                <li>
                    image
                </li>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/monteasuapizza'>Monte a sua pizza</Link>
                </li>
                <li>
                    <Link href='/combos'>Combos</Link>
                </li>
                <li>
                    <Link href='/drinks'>Bebidas</Link>
                </li>
                <li>
                    <Link href='/contact'>Contato</Link>
                </li>
                <li>
                    <Link href='/myaccont'>Minha conta</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;
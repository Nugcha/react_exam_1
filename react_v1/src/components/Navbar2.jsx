import styles from './Navbar2.module.css'
import{House, UserPen, FolderKanban, Contact} from 'lucide-react';
        

function Navbar2(){

    return(
        <nav className = 'styles.nav'>
            <p> JORDAN IDROVO </p>
            <ul>
                <li> <House/> </li>
                <li> <UserPen/>About Me </li>
                <li> <FolderKanban/> Projects </li>
                <li> <Contact/> Contacts </li>
            </ul>
        </nav>
    );
}

export default Navbar2;

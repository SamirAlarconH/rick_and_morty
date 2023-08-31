import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom'

const Nav = ({onSearch, setAccess}) => {
    
    const HandleLogOut = () =>{
        setAccess(false)
    }
    
    return(
        <nav>
            <div>
              <Link to = '/about' >ABOUT</Link>
              <Link to = '/home' >HOME</Link>
              <Link to = '/favorites' >Favorite</Link>
            </div>
                
                <button onClick={HandleLogOut}>Log Out</button>
            <SearchBar onSearch={ onSearch}/>
            </nav>
    
         
    )
}

export default Nav;
import SearchBar from 'components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'

const Nav = ({ onSearch, setAcces }) =>{
    const handleLogOut = () => {
        setAcces (false)
    }

    return (
        <nav className={StyleSheet.nav}>

            <div className={style.btns}>
                <Link to = '/about'> ABOUT </Link>
                <Link to = '/home'> HOME </Link>
                <Link to = '/favorites'> FAVORITES </Link>
            </div>

            <button onClick ={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav
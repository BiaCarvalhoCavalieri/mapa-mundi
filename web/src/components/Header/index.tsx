import './styles.css'
import worldIcon from '../../assets/www.png'

export const Header = () => {
  
    return (
        <>
            <header className='container-header content-flex justify-between align-center'>
                <img className='header-logo' src={worldIcon} height="80px"/>
                <h2 className='header-title'>Countries Around the World</h2>
            </header>
        </>

  )
}
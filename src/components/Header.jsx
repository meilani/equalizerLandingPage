import Logo from '../assets/logo.svg'
const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className='sr-only'>equalizer</h1>
                <img 
                    src={Logo}
                    alt="equalizer"
                    width="146"
                    height="32"
                />
            </div>
        </header>
    )
}

export default Header
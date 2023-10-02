import Logo from '../assets/logo.svg'
import SocialLinks from './SocialLinks'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <img 
                        src={Logo}
                        alt="equalizer"
                        width="146"
                        height="32"
                    />
                    <p>
                        All rights reserved © Equalizer {year} <br />
                        Have any problems? Contact us via social media or email us at <a href="mailto:equalizer@example.com">equalizer@example.com</a>
                    </p>
                </div>
                <div className="right">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
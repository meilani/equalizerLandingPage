import PhoneImg from '../assets/illustration-app.png'
import PremiumCard from './PremiumCard'

const DownloadSection = () => {
    return (
        <section className="download-section">
            <div className="container">
                <div className="background"></div>
                <img 
                    src={PhoneImg}
                    alt="a phone showing the equalizer treble boost interface"
                    width="312"
                    height="642"
                    loading='lazy'
                    className='phone-img'
                />
                <PremiumCard />
            </div>
        </section>
    )
}

export default DownloadSection
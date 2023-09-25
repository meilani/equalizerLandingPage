import AppleIcon from '../assets/icon-apple.svg'
import AndroidIcon from '../assets/icon-android.svg'

const PremiumCard = () => {
    return (
        <div className="premium-card">
            <h2>Premium EQ</h2>
            <p>
                Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
            </p>
            <p>
                <span>$4</span> / month
            </p>
            <div className="btn-group">
                <a className="btn apple-btn" href="https://apps.apple.com" target="_blank" rel="noreferrer">
                    <img 
                        src={AppleIcon}
                        alt="apple logo"
                        width="17"
                        height="20"
                        loading='lazy'
                    />
                    iOS Download
                </a>
                <a className="btn android-btn" href="https://play.google.com" target="noreferrer">
                    <img 
                        src={AndroidIcon}
                        alt="android logo"
                        width="17"
                        height="20"
                        loading='lazy'
                    />
                    Android Download
                </a>
            </div>
        </div>
    )
}

export default PremiumCard
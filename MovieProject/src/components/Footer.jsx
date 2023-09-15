import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"

function Footer() {

    return ( 
        <>
        <div className='footer-icons'>
            <a href='https://twitter.com/furkanshnn_' className='twitter-icon'>
            <TwitterIcon fontSize='large'/>
            </a>
            <a href='https://www.instagram.com/furkanshnn_/' className='instagram-icon'>
            <InstagramIcon fontSize='large'/>
            </a>
        </div>
        <p className='text'>All Rights Reserved. | Furkan Şahin </p>
        </>
    );
}

export default Footer;



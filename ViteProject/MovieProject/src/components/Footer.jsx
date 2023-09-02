import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"

function Footer() {

    return ( 
        <>
        <div className='footer-icons'>
            <a href='https://twitter.com/furkanshnn_'>
            <TwitterIcon fontSize='large' color='success'/>
            </a>
            <a href='https://www.instagram.com/furkanshnn_/' className='instagram-icon'>
            <InstagramIcon fontSize='large' color='success'/>
            </a>
        </div>
        <p className='text'>Bütün Hakları Saklıdır. | Furkan Şahin </p>
        </>
    );
}

export default Footer;



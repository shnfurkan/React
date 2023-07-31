import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// https://mui.com/ dan alınmıştır, önce ana ekrandakini install yaptık daha sonra icon bölümünden bir daha install ettik.

function Footer() {
    return (  
        <div className="footer">
            <div className="socialMedia">        
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
            </div>
            <p> Tüm Haklari Saklidir. | BurgerYiyelim </p>

        </div>
    );
}

export default Footer;



 
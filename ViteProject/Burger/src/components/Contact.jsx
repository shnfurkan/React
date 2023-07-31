import '../styles/Contact.css'
import Banner from '../assets/banner.png'

function Contact() {
    return (  
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage: `url(${Banner})`}}>
            </div>
            <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
            <label>Ad Soyad</label>
            <input placeholder='Lütfen ad soyad giriniz.'/>
            <label>Email</label>
            <input placeholder='Lütfen email giriniz.'/>
            <label>Mesajiniz</label>
            <textarea placeholder='Lütfen mesajinizi giriniz.' rows={5}/>
        </form>
            </div>
            
        </div>
    );
}

export default Contact;

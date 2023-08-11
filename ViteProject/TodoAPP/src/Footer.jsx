function Footer() {
    const date = new Date();
    return (  
        <div>
            <footer className="footer">
                <p>Copyright {date.getFullYear()} | Furkan Şahin</p>
            </footer>
        </div>
    );
}

export default Footer;



import {comingData} from "./Types"

function Request(proops:comingData) {
    
    let message = "";
            if(proops.deger === "loading") {
                message = "Yükleniyor";
            }
            if(proops.deger === "true") {
                message = "Giriş Başarili";
            }
            if(proops.deger === "error") {
                message = "Hata Hata";
            }
    
    return (  
        <div> {message}</div>
    );
}

export default Request;


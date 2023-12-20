import axios from "axios";
import "../styles/Note.css"
import { useState } from "react";
import { showNotification } from "../Notification";
import { useUser } from '../UserContext';

function Note() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const { user } = useUser();

    const handleButtonSubmit = async (e) => {
        e.preventDefault();

    if (!title || !text || !category) {
        showNotification('warning', 'Alanlar boş olamaz', 'Uyarı', 2000);
            return;
    }

    const noteData = {
        Title: title,
        Text: text,
        Category: category,
    };

    const response = await axios.post('http://localhost:3000/notes', noteData)
        if(response) {
            showNotification('success', 'Başarılı bir şekilde oluşturuldu.', 'Bilgi', 1500);
    }

    setTitle("")
    setText("")
    setCategory("")
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className='addNote'>
            {user ? <form className="formNote">
                <h1>Not eklemek ister misin?</h1>
                <div>
                <label>Not Başlığı:</label>
                <input onChange={handleChangeTitle} value={title} type='text' name='noteTitle' className="note"/>
                </div>
                <div>
                <label>Not Içeriği:</label>
                <textarea onChange={handleChangeText} value={text} type='text' name='noteText' className="note" style={{resize:"none"}}/>
                </div>
                <div>
                <label>Kategori:</label>
                <input onChange={handleChangeCategory} value={category} type='text' name='noteCategory' className="note"/>
                </div>
                <button className="buttonAddNote" type='submit' onClick={handleButtonSubmit}>Not Listesine Ekle</button>
            </form> : <></>}
        </div>
    );
}
export default Note;
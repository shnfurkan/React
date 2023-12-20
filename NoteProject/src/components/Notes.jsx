import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Notes.css"
import { showNotification } from '../Notification';
import { useUser } from '../UserContext';

const Notes = ({ userId }) => {
  const [notes, setNotes] = useState([]);
  const [searchNotes, setsearchNotes] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const { user } = useUser();

  useEffect(() => {

    if (!user) {
      showNotification('error', 'Giriş yapmadınız!', 'Hata', 3000);
      return;
    }

    const getNotes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/notes', {
          params: {
            userId,
          },
        });
        setNotes(response.data);

      } catch (error) {
        console.error('Error taking notes:', error);
      }
    };
    getNotes();
  }, [userId]);

  useEffect(() => {

    if (searchNotes) {
      const filtered = notes.filter((task) => task.Category.toLowerCase().includes(searchNotes.toLowerCase()));
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  },[searchNotes,notes])

  const handleDelete = async (id) => {

    const deletedNotes = notes.filter((value)=> {
      return value.id !== id
    })
    setNotes(deletedNotes);

    const response = await axios.delete(`http://localhost:3000/notes/${id}`)
  }

  return (
    <>
    {user ? <div className='containerSearch'>
        <div className='search-group'>
          <h2>Notlar:</h2>
            <input className='inputs' placeholder='Aradığınız kategoriyi yazınız' value={searchNotes} onChange={(event) => setsearchNotes(event.target.value)}/>
        </div>
        </div> : <></>}

    <div className='notes'>
            {
                filteredNotes.map((value,index)=> {
                    return (
                        <div key={index} className='notesList'>
                            <h3>Not Başlığı:</h3>
                            {value.Title}
                            <h3>Not Içeriği:</h3>
                            {value.Text}
                            <h3>Kategori:</h3>
                            {value.Category} <br/>
                            <button className='deleteNote' onClick={ () => handleDelete(value.id)}>Notu Sil</button>
                        </div>
                    )
                })
            }
        </div>
      </>
  );
};

export default Notes;
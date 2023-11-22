import React, { useState } from 'react';
import axios from 'axios';
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Soubor byl úspěšně nahrán.');
    } catch (error) {
      console.error('Chyba při nahrávání souboru:', error);
    }
  };

  return (
    <div>
        <label className='file_upload' for="file">Vybrat Soubor</label>
      <input id='file' type="file" onChange={handleFileChange} />
      <button className='btn_file' onClick={handleUpload}>Nahrát soubor</button>
      
    </div>
  );
};

export default FileUpload;
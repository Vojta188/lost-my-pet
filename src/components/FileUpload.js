import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./FileUpload.css";
import Form from './Form';


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [getMetadata,setGetMetadata] = useState(null)

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





  //get Metadata

  function zkratitCislo(cislo, delka) {
    return cislo.toString().slice(0, delka);
  }



useEffect(()=>{
  if (file) {
    const fileSizeInBytes = file.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024; // převod na kilobajty
    const fileSizeInMegabytes = fileSizeInKilobytes / 1024; // převod na megabajty

    console.log('Velikost souboru v bajtech:', fileSizeInBytes);
    console.log('Velikost souboru v kilobajtech:', fileSizeInKilobytes);
    console.log('Velikost souboru v megabajtech:', zkratitCislo(fileSizeInMegabytes,2));
   if(fileSizeInMegabytes>1)
   {setGetMetadata(" Soubor vybrán: " +zkratitCislo(fileSizeInMegabytes,4)+" MB ")}
   else{
    setGetMetadata(" Soubor vybrán: " + zkratitCislo(fileSizeInKilobytes,3)+" KB ")
   }
  }
})
  

 
  




  return (
    <div className='file_div'>
        <label className='file_upload' for="file">Vybrat Soubor</label>
      <input id='file' type="file" onChange={handleFileChange} />
      <button className='btn_file' onClick={handleUpload}>Nahrát soubor</button><br/>
      
 <p className='file_size'>{getMetadata}</p>
      
    </div>
  );
};

export default FileUpload;
import { useState, useEffect, FormEvent } from 'react';
import * as C from './App-styled';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from "./services/photos";
import { Photo } from './types/photos';

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0){
      setUploading(true);
      const resul = await Photos.insert(file);
      setUploading(false);

      if(resul instanceof Error){
        alert(`${resul.name} - ${resul.message}`);
      }else{
        const newPhotoList = [...photos];
        newPhotoList.push(resul);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDelete = async (name: string) => {
    await Photos.deletePhoto(name);
    getPhotos()
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando.. ⏳"}
        </C.UploadForm>

        {loading &&
          <C.ScreenWarning>
            <div className='emoji'>✋</div>
            <div>Carregando..</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDelete} />
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>📂</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  )
}

export default App;
import { Photo } from "../types/photos";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async () => {
    const list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);
console.log(photoList)
    for(let i in photoList.items){
        const photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl,
        });
    }

    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
        const randomName = createId();
        const newFile = ref(storage, `images/${randomName}_${file.name}`);
        
        const upload = await uploadBytes(newFile, file);
        const photoUrl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoUrl } as Photo;
    }else{
        return new Error('Tipo de arquivo não permitido.');
    }
}

export const deletePhoto = async (name: string) => {
    const photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}
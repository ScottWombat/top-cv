import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '~/store/index';
import {actions} from '~/store/cv-reducer'
const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const UploadImage =()=>{
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          //dispatch(actions.updateTemplate({'template': result}))
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);
    return (
        <>
      <form>
        <p>
          <label htmlFor='image'> Browse images  </label>
          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
          />
        </p>
        <p>
          <input type="submit" value="Upload" />
        </p>
      </form>
      {fileDataURL ?
        <p className="img-preview-wrapper">
          {
            <img src={fileDataURL} alt="preview" />
          }
        </p> : null}
    </>
    )
}

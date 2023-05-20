import { useContext, useEffect, useState } from 'react';
import TipTap from './Tiptap';
import DOMPurify from 'dompurify';
import { useNavigate, useParams } from 'react-router-dom';
import { SERVER_URL } from '../config';
import { UserContext } from '../App';
import DialogBox from './DialogBox';



function EventCreationForm4({ clickedNext, setClickedNext, photos, setPhotos }) {
  const [item, setItem] = useState("");

  const addPhotos = () => {
    console.log(item);
    setPhotos((oldphotos) => {

      return [...oldphotos, item]
    })
    setItem("")
  }

  const deletePhoto = (id) => {
    setPhotos((oldphotos) => {
      return oldphotos.filter((arrElem, index) => {
        return index != id;
      })
    })
  }

  const Photo = (props) => {
    return (
      <div class=" flex items-center">
        <p class="focus:0 block  w-full rounded-lg bg-stone-800  mt-4 p-2.5  text-gray-400 focus:outline focus:outline-gray-600 sm:p-5 sm:text-3xl md:p-5 md:text-3xl lg:p-3  lg:text-base">
          {props.value}
        </p>
        <button class="rounded mt-4 bg-red-500 px-4 py-3 font-bold text-white hover:bg-red-700 w-24" onClick={() => {
          props.deletePhoto(props.id)
        }}>Remove</button>
      </div>)
  }


  return (
    <div className="!h-max  bg-stone-900">
      <div class=" bg-teal-lightest flex w-full items-center justify-center font-sans">
        <div class=" m-4 w-full rounded p-6 shadow">
          <div class="mb-4">
            <div class="mt-4 flex">
              <input
                className="focus:0 block w-3/4 w-full rounded-lg bg-stone-800  p-2.5  text-gray-400 focus:outline focus:outline-gray-600 sm:p-5 sm:text-3xl md:p-5 md:text-3xl lg:p-3 lg:text-base"
                placeholder="Photo URL"
                value={item}
                onChange={(e) => { setItem(e.target.value) }}
              />
              <button class="rounded w-24 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={addPhotos}>Add photo</button>

            </div>
            {photos.map((member, index) => {
              return (< Photo key={index} id={index} value={member} deletePhoto={deletePhoto} />)
            })}
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCreationForm4;

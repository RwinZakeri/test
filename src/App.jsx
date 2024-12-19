
import './App.css'
import {useState} from "react";
function App() {
    const [optionValue, setOptionValue] = useState('0')
    const changeHandler = (e)=>{
        setOptionValue(e.target.value)
    }

    const imgAddres = ()=>{
        switch (optionValue){
            case '360' : return '/heart-360.png'
            case '480' : return '/heart-480.png'
            case '720' : return '/heart-720.png'
            case '1080' : return '/heart-1080.png'
            case '4k' : return '/heart-4k.jpg'
        }
    }
    console.log(optionValue)
    console.log(imgAddres())

  return (
    <>
        <div>
            <h1>please choose the quality (:</h1>
        </div>
        <div>
            <select onChange={changeHandler}>
                <option value={"0"}></option>
                <option value={"360"}>360</option>
                <option value={"480"}>480</option>
                <option value={"720"}>720</option>
                <option value={"1080"}>1080</option>
                <option value={'4k'}>4k</option>
            </select>
        </div>

        <div className={'myImgParent'}>
            {imgAddres() == '/heart-4k.jpg' && <h2>you 💜🫂❤️</h2> }

            {
                imgAddres() == '/heart-1080.png' ? (
                    <img src={imgAddres() && '/heart-1080.png'} className={'myImg2'}/>
                ) : (
                    <img src={imgAddres()} className={'myImg'}/>

                )
            }
        </div>
    </>
  )
}

export default App

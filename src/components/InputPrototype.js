import React, {useState} from 'react';
import './inputComponents.js/Input.css';

const InputPrototype = ({inputName, pClass, inputClass, labelClass, smallText, pClass2, inputPlaceholder, inputValue, inputType}) => {
        const [inputLabel] = useState('Label');
    return (
        <div className='prototype'>
           <p className={pClass}>{inputName}</p>
           <label className={labelClass} htmlFor="">{inputLabel}</label>
           <input 
           className={inputClass} 
           type={inputType} 
           placeholder={inputPlaceholder}
           value={inputValue}
           />
           <p className={pClass2}>{smallText}</p>
        </div>
    )
}

export default InputPrototype

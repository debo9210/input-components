import React, {useState} from 'react';
import InputPrototype from '../InputPrototype';
import './Input.css';

const Input = () => {
    const [error] = useState(true);
    return (
        <div>
            <div className="Container">
                <InputPrototype 
                    inputName='<Input />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />
                
                <InputPrototype 
                    inputName='&:hover'
                    pClass='Text Text2'
                    labelClass='Label'
                    inputClass='InputClass InputClass2'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

                <InputPrototype 
                    inputName='&:focus'
                    pClass='Text Text2'
                    labelClass='Label Label2'
                    inputClass='InputClass InputClass3'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />


                <InputPrototype 
                    inputName='<Input error/>'
                    pClass='Text'
                    labelClass='Label'
                    inputClass={error ? 'InputClassError' : 'InputClass'}
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />
                
                <InputPrototype 
                    inputName='&:hover'
                    pClass='Text Text2'
                    labelClass='Label'
                    inputClass='InputClass InputClass2'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

                <InputPrototype 
                    inputName='&:focus'
                    pClass='Text Text2'
                    labelClass='Label Label3'
                    inputClass={error ? 'InputClassError' : 'InputClass'}
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

                <InputPrototype 
                    inputName='<Input disabled />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass InputClassDisabled'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />
            </div>

            <div className="Container2">
            <InputPrototype 
                    inputName='<Input helperText=”Some interesting text” />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    smallText='Some interesting text'
                    pClass2='Text3'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

            <InputPrototype 
                    inputName='<Input helperText=”Some interesting text” error />'
                    pClass='Text'
                    labelClass='Label Label3'
                    inputClass={error ? 'InputClassError' : 'InputClass'}
                    smallText='Some interesting text'
                    pClass2='Text3 Label3'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

            <InputPrototype 
                    inputName='<Input />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

            <InputPrototype 
                    inputName='<Input />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputPlaceholder='PlaceHolder'
                    inputType='text'
                    />

            <InputPrototype 
                    inputName='<Input startIcon />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputPlaceholder='PlaceHolder'
                    inputType='tel'
                    />

            <InputPrototype 
                    inputName='<Input endIcon />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputPlaceholder='PlaceHolder'
                    inputType='email'
                    />

            <InputPrototype 
                    inputName='<Input value=”text” />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass'
                    inputValue='Text'
                    inputType='text'
                    />                                 
                    
            </div>

            <div className="Container2">
                <InputPrototype 
                        inputName='<Input size=”sm” />'
                        pClass='Text'
                        labelClass='Label'
                        inputClass='InputClass InputSmall'
                        inputPlaceholder='PlaceHolder'
                        inputType='text'
                        />

                <InputPrototype 
                        inputName='<Input size=”md” />'
                        pClass='Text'
                        labelClass='Label'
                        inputClass='InputClass'
                        inputPlaceholder='PlaceHolder'
                        inputType='text'
                        />
            </div>

            <InputPrototype 
                    inputName='<Input fullWidth />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass InputFullWidth'
                    inputValue='Text'
                    inputType='text'
                    /> 


                <InputPrototype 
                    inputName='<Input multiline row=”4” />'
                    pClass='Text'
                    labelClass='Label'
                    inputClass='InputClass InputFullHeight'
                    inputPlaceholder='PlaceHolder'
                    inputType='textarea'
                    />

                

        </div>
    )
}

export default Input

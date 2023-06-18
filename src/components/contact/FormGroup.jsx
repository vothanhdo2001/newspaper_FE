import React, { useEffect, useRef } from 'react';

const FormGroup = ({pClass, label, type, name, rows, value, onChange }) => {

    const inputElement = useRef();

    const InputFocusUI = () => {
        const selectElm = inputElement.current;
        const parentElm = inputElement.current.parentElement;

        selectElm.addEventListener('focusin', (e) => {
            parentElm.classList.add("focused");
        })
        selectElm.addEventListener('focusout', (e) => {
            if (!selectElm.value) {
                parentElm.classList.remove("focused");
            }
        })
    }

    useEffect(() => {
        InputFocusUI();
    }, []);

    return ( 
        <div className={`form-group ${pClass}`}>
            {label ? <label>{label}</label> : ""}
            {type === "textarea" ? 
            <textarea type={type} name={name} ref={inputElement} rows={rows ?? 3}  
            value={value}
            onChange={onChange}>
            </textarea> : 
            <input type={type} name={name} ref={inputElement} required 
            value={value}
            onChange={onChange} /> 
            }
        </div>
    );
}
 
export default FormGroup;
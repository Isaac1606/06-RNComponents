import { useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {

    const [inputValues, setInputValues] = useState(initialState);

    const handleInputChanges = <K extends Object>(value: K, key: keyof T) => {
        setInputValues({
            ...inputValues,
            [key]: value,
        });
    }

    return { 
        inputValues,
        handleInputChanges
    }

}
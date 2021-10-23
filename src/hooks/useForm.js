import react, { useState } from "react";

const useForm = (initialFieldValues, validateOnChange = false, validate) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const inputChangeHandler = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

        // *Tweaks for validation onChange
        if (validateOnChange)
            validate({ [name]: value });
    }

    const resetForm = () => {
        setValues(initialFieldValues);
        setErrors({});
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        inputChangeHandler

    }
}

export default useForm;
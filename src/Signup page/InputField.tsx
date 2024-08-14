import React from 'react';

interface InputFieldProps {
    label: string;
    type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text' }) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <>
            <label htmlFor={id} className="mt-14 ml-3.5 max-md:mt-10 max-md:ml-2.5">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                className="shrink-0 self-stretch mt-5 ml-3.5 w-full h-px border border-gray-200 border-solid"
                aria-label={label}
            />
        </>
    );
};

export default InputField;
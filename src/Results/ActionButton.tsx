import React from 'react';

interface ActionButtonProps {
    text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
    return (
        <button className="self-stretch px-14 py-12 my-auto w-full text-xl font-extrabold text-white bg-teal-800 bg-opacity-70 rounded-[100px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            {text}
        </button>
    );
};

export default ActionButton;
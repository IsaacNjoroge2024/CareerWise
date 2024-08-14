import React from 'react';

interface FormField {
    label: string;
    type: string;
    value: string;
    hasIcon?: boolean;
}

const formFields: FormField[] = [
    { label: "First Name", type: "text", value: "Isaac" },
    { label: "Last Name", type: "text", value: "Njoroge" },
    { label: "Email", type: "email", value: "Isaac.njoroge@gmail.com", hasIcon: true },
    { label: "Address", type: "text", value: "Kahawa Sukari, 1st North Avenue" },
    { label: "Contact Number", type: "tel", value: "+254715121888" },
    { label: "Password", type: "password", value: "sbdfbnd65sfdvb s", hasIcon: true },
];

const ProfileForm: React.FC = () => {
    return (
        <form className="flex flex-col mt-0 mr-11 max-w-full text-2xl w-[770px] max-md:mt-0 max-md:mr-2.5">
            {formFields.map((field, index) => (
                <div key={index} className="mb-4">
                    <label htmlFor={`field-${index}`} className="block mt-4 text-2xl font-semibold text-zinc-900">
                        {field.label}
                    </label>
                    <div className={`flex flex-wrap gap-5 justify-between py-5 pr-20 pl-7 mt-1.5 w-full font-medium whitespace-nowrap bg-white rounded-md border-2 border-solid border-zinc-500 text-zinc-500 max-md:px-5 ${field.type === 'password' ? 'bg-white' : ''}`}>
                        <input
                            type={field.type}
                            id={`field-${index}`}
                            value={field.value}
                            className="bg-transparent border-none outline-none w-full"
                            aria-label={field.label}
                        />
                        {field.hasIcon && (
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14c0b5af72be7e38f6af2be7d1c2aa0ac662a4b5f813f48b56f421ac2cf59448?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 rounded-none aspect-[0.86] w-[31px]" />
                        )}
                    </div>
                </div>
            ))}
            <div className="flex gap-5 justify-between mt-4 max-w-full text-2xl font-semibold whitespace-nowrap text-zinc-900 w-[417px]">
                <label htmlFor="city">City</label>
                <label htmlFor="state">State</label>
            </div>
            <div className="flex mt-1.5 font-medium whitespace-nowrap text-zinc-500">
                <div className="flex flex-1 flex-auto gap-10 py-3.5 pr-20 pl-7 bg-white rounded-md border-2 border-solid border-zinc-500 max-md:px-5">
                    <input type="text" id="city" value="Naiorbi" className="bg-transparent border-none outline-none" aria-label="City" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae63293642280c5d3b823d84dc08195685058c4b0e58bbabe1bff768f90f39a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-12 aspect-square" />
                </div>
                <div className="flex flex-1 flex-auto gap-10 py-3.5 pr-20 pl-7 bg-white rounded-md border-2 border-solid border-zinc-500 max-md:px-5">
                    <input type="text" id="state" value="Nairobi" className="bg-transparent border-none outline-none" aria-label="State" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bc2b59b671b608bd5de1dcade4225e4ec6496533f645df56e253fbbf98a0904?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 aspect-[1.02] w-[49px]" />
                </div>
            </div>
            <div className="flex gap-px mt-12 max-w-full text-3xl whitespace-nowrap w-[363px] max-md:mt-10">
                <button type="button" className="px-12 py-3 text-orange-500 bg-white rounded-md border-2 border-orange-500 border-solid max-md:px-5">
                    Cancel
                </button>
                <button type="submit" className="px-6 py-3 font-semibold text-white bg-orange-500 rounded-md max-md:px-5">
                    Save
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;
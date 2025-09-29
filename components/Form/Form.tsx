"use client";
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    interest: '',
    name: '',
    phoneNumber: 0,
    customerEmail: '',
    message: '',
};

type FieldsType = {
    name: 'interest' | 'name' | 'customerEmail' | 'message' | 'phoneNumber' ;
    type: 'text' | 'textArea' | 'select' | 'email' | 'tel';
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    interest: string;
    name: string;
    phoneNumber: number;
    customerEmail: string;
    message: string;
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        interest: '',
        name: '',
        phoneNumber: 0,
        customerEmail: '',
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'text-2xl text-white'}>Thanks! </h2>
                <p className='text-white'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();

        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            {
                interest: values.interest,
                message: values.message,
                name: values.name,
                phoneNumber: values.phoneNumber,
                customerEmail: values.customerEmail,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                setValues(initialValues);
                setMessageSent('succeed');
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form `}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field, index)=> {
                    const { name, type, label, placeholder } = field;

                    switch (type) {
                        case 'textArea':
                            return (
                                <section className={'mb-4'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={8}
                                        cols={40}
                                        className='resize-none py-3 border-b text-white lg:w-full lg:max-w-[500px] w-full max-w-[70vw] md:max-w-[525px] border-b-[#89ADCD] focus:outline-none focus:placeholder:text-white/70 placeholder:text-white'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        case 'tel':
                            return (
                                <section className='mb-4' key={index}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-3 lg:w-full lg:max-w-[500px] text-white w-full max-w-[70vw] md:max-w-[525px] border-b border-b-[#89ADCD] focus:outline-none focus:placeholder:text-white/70 placeholder:text-white'}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            );
                        default:
                            return (
                                <section className='mb-4' key={index}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-3 lg:w-full lg:max-w-[500px] text-white w-full max-w-[70vw] md:max-w-[525px] border-b border-b-[#89ADCD] focus:outline-none focus:placeholder:text-white/70 placeholder:text-white'}
                                        onChange={handleChange}
                                        value={values[name]}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            )
                    }
                })
            }
            {renderSentMessage()}
            <button
                disabled={isAPILoading}
                value={submitButtonLabel ? submitButtonLabel : 'Enviar'}
                type="submit"
                className={` ${isAPILoading ? 'opacity-50' : ''} mx-auto cursor-pointer px-16 gap-4 py-3 bg-white border-solid border border-[#f3f3f3] hover:text-[#f3f3f3] hover:bg-transparent duration-300 rounded-xl text-lg font-medium shadow-2xl `}
            >
                {submitButtonLabel}
            </button>
        </form>
    )
};

export default MyCustomForm

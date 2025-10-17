"use client";
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    yourName: '',
    email: '',
    number: 0,
    message: '',
};

type FieldsType = {
    name: 'yourName' | 'email' | 'number' | 'message' ;
    type: 'text' | 'textArea' | 'email' | 'number';
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
    yourName: string;
    number: number;
    email: string;
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
        yourName: '',
        number: 0,
        email: '',
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'text-2xl text-white'}>Gracias! </h2>
                <p className='text-white'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Algo salió Mal</h2>
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


    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();

        const formToSend = new FormData();

        formToSend.append('name', values.yourName);
        formToSend.append('number', values.number.toString());   
        formToSend.append('email', values.email);    
        formToSend.append('message', values.message);
        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            formToSend,
            {
                headers: {
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                if (response.data.status === 'mail_sent') {
                    setValues(initialValues);
                    setMessageSent('succeed');
                } else {
                    // Maneja otros estados de CF7 como 'validation_failed' o 'mail_failed'
                    const errorMessage = response.data.message || 'Error de envío de CF7.';
                    setMessageDescription(errorMessage);
                    setMessageSent('error');
                }
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(`Error de red: ${error.message}`);
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form px-16`}
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
                                        rows={4}
                                        cols={40}
                                        className='resize-none py-3 border-b text-white lg:w-full lg:max-w-[500px] w-full max-w-[70vw] md:max-w-[525px] border-b-[#89ADCD] focus:outline-none focus:placeholder:text-white/70 placeholder:text-white'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        case 'number':
                            return (
                                <section className='mb-4' key={index}>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-3 lg:w-full lg:max-w-[500px] appearance-none text-white w-full max-w-[70vw] md:max-w-[525px] border-b border-b-[#89ADCD] focus:outline-none focus:placeholder:text-white/70 placeholder:text-white'}
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

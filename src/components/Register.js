import React, {useEffect, useState} from 'react';
import Alert from "./Alert";
import {contestRightNow} from "../shared/utils/fetchapi";
import {useLocation, useNavigate} from "react-router-dom";

function Register(props) {

    const location = useLocation();
    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('red');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const data = location.state.data;
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDocument = (e) => {
        setDocument(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    useEffect(() => {

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            'user_document_number': document,
            'user_full_name': name,
            'user_phone_number': phone,
            'ticket_number': data.ticket_number,
            'lottery_master_id': data.lottery_master_id,
            'commerce_code': data.commerce_code,
            'branch_code': data.branch_code,
        }
        const response = await contestRightNow(payload);
        if (response.status) {
            navigate('/play', {state: {data: response.data}})
        }else{
            setError(true);
            setMessage(response.message);
        }
    }

    return (
        <div className="form">
            <div className="flex justify-center py-4">
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
                    {data.commerce_name}
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                {message && <Alert color={color} message={message}/>}
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre Completo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    required
                                    autoFocus
                                    onChange={handleName}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="document" className="block text-sm font-medium leading-6 text-gray-900">
                                Documento
                            </label>
                            <div className="mt-2">
                                <input
                                    id="document"
                                    name="document"
                                    type="number"
                                    required
                                    onChange={handleDocument}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefono
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required
                                    onChange={handlePhone}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
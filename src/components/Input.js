import {useState} from "react";
import {prospectByTicket} from "../shared/utils/fetchapi";
import Alert from "./Alert";
import {useNavigate} from "react-router-dom";

export default function Input() {

    const [ticket, setTicket] = useState('');
    const [color, setColor] = useState('red');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onHandleChangeNumeric = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setTicket(value);
    }

    const onClickButton = async (e) => {
        e.preventDefault();
        const response = await prospectByTicket(ticket);
        if (response.status){
            navigate('/register', {state: {data: response.data}})
        }else{
            setColor('red');
            setMessage(response.message)
            setTicket('')
        }
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">

            {message && <Alert color={color} message={message} />}

            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="relative mb-2">
                        <label
                            htmlFor="ticket"
                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                            Ingrese numero de ticket
                        </label>
                        <input
                            type="text"
                            name="ticket"
                            id="ticket"
                            autoFocus
                            value={ticket}
                            onChange={onHandleChangeNumeric}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="000-000-0000"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={onClickButton}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                        >
                            Voy a tener suerte
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { XCircleIcon } from '@heroicons/react/20/solid'
import {useEffect, useState} from "react";

export default function Alert ({color, message})  {
    const [messageAlert, setMessageAlert] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessageAlert(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [message]);

    return (
        <>
            {messageAlert &&
                    <div className="my-2">
                        <div className={`rounded-md bg-${color}-50 p-4`}>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">{message}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
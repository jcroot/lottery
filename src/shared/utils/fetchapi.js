import axios from "axios";

const ApiManagement = process.env.REACT_APP_API_MANAGEMENT || "http://186.122.249.38:8080/lottery"

export const prospectByTicket = (ticket_number) => {
    const apiURL = `${ApiManagement}/lottery/prospect-by-ticket-number/${ticket_number}`;

    return axios
        .get(apiURL, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });
}

export const contestRightNow = (payload) => {
    const apiURL = `${ApiManagement}/lottery/contest-right-now`;
    const config = {
        headers: { 'Content-Type': 'application/json' },
    }

    return axios
        .post(apiURL, payload, config)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });
}
import React, {useEffect, useState} from 'react';
import {Wheel} from "react-custom-roulette";
import {useLocation} from "react-router-dom";

function Roulette(props) {

    const location = useLocation();
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const storeData = location.state.data;

    const data = [
        {id: 0, option: "SI"},
        {id: 1, option: "NO"},
        {id: 2, option: "NO"},
        {id: 3, option: "NO"},
        {id: 4, option: "NO"},
        {id: 5, option: "NO"}
    ];

    const handleSpinClick = () => {
        if (!mustSpin){
            if (storeData.user_win){
                setPrizeNumber(1);
            }else{
                const newPrizeNumber = Math.floor(Math.random() * data.length);
                setPrizeNumber(newPrizeNumber);
            }
            setMustSpin(true);
        }
    }

    useEffect(() => {
        handleSpinClick();
    }, []);

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[550px]">
            <div className="flex justify-center py-4">
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
                    {storeData.commerce_name}
                </h2>
            </div>
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    outerBorderColor={["#f2f2f2"]}
                    outerBorderWidth={[25]}
                    innerBorderColor={["#f2f2f2"]}
                    radiusLineColor={["#dedede"]}
                    radiusLineWidth={[10]}
                    textColors={["#ffffff"]}
                    fontSize={[50]}
                    perpendicularText={[true]}
                    backgroundColors={[
                        "#F22B35",
                        "#F99533",
                        "#24CA69",
                        "#514E50",
                        "#46AEFF",
                        "#9145B7"
                    ]}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                />
            </div>
        </div>
    );
}

export default Roulette;
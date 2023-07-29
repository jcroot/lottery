import React, {useState} from 'react';
import {Wheel} from "react-custom-roulette";

function Roulette(props) {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const data = [
        {id: 1, option: "SI"},
        {id: 2, option: "NO"},
        {id: 3, option: "NO"},
        {id: 4, option: "NO"},
        {id: 5, option: "NO"},
        {id: 6, option: "NO"}
    ];

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[550px]">
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
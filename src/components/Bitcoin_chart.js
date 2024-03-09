
import { createChart } from 'lightweight-charts';
import upArrow from '../images/up_pol.png'
import btc from '../images/btc.png'
import React, { useEffect, useRef } from 'react';


export default function BtcChart(props){ 

    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth, height: chartContainerRef.current.clientHeight } );
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                },
                width: chartContainerRef.current.clientWidth,
                height: 460,
            });
            chart.timeScale().fitContent();

            const lineSeries =  chart.addLineSeries({ color: '#2962FF' });
            lineSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return(
        <div className="p-[1rem] rounded-md w-[61vw]  bg-[#fff]"> 
            <div className="flex flex-row items-center ">
                <span>
                <img src={btc} alt="btc"/></span>
                <span className="ml-[2rem] bg-[#808A9D] w-[5rem] h-[2.5rem] flex flex-row justify-center rounded-lg  items-center text-white font-[600] ">Rank #1</span>
            </div>


            <div className="my-[2rem]  flex flex-col items-start "> 

                <div className="flex flex-row w-[61vw] items-center"> 

                    <div className="mr-[1rem] font-[600] text-[1.75rem] ">$46,953.04</div>
                    <div className="mr-[1rem] w-[5rem] h-[1.5rem] bg-[#EBF9F4] rounded-md flex flex-row items-center justify-center  "> 
                        <div><img src={upArrow} alt="uptrade" /></div>
                        <div className="ml-[0.5rem] text-[#14B079]">2.51%</div> 
                    </div>
                    <div className="text-[#768396] text-[0.9rem]">(24H)</div>

                </div>
                <div className="font-[600]"> &#8377;46,953,04 </div>

            </div>


            <div className="h-[5rem] w-[100%] border-t-2 border-grey-500 flex flex-row justify-between items-center">
                <span className="font-[600] "> Bitcoin Price Chart(USD)</span>
                <span>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">1H</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">24H</button>
                   <button className="w-[2rem] className text-[#0141CF] font-semibold text-[0.8rem] bg-[#E2ECFE] rounded-xl">7D</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">1M</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">3M</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">6M</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">1Y</button>
                   <button className="w-[2rem] className text-[#768396] font-semibold text-[0.8rem]">ALL</button>
                </span>

            </div>
            
            <div id="container w-[100%] h-[60rem]" ref={chartContainerRef}>
            </div>

        </div>
        
    );
}
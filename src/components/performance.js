import frame2 from '../images/Frame2.png'
import svgMargin from '../images/SVG_margin.png'
// import FundElement from './FundElements'
import FundElements from './fundElements'


export default () => {
    return (
        <div className="p-[1rem] pb-[3rem] rounded-md w-[61vw] bg-[#fff]">
            <div className="mb-[2rem] text-[1.5rem] font-bold ">Performance</div>
            <img className="w-[100%] mb-[2rem]" src={frame2} />


            <span className="text-[#44475B] text-[18.91px] font-bold flex flex-row items-center">
                <p>Fundamentals</p>
                <img className=" h-[20px]" src={svgMargin} />
            </span>

            <div className=" w-[100%] flex flex-row justify-between">

                <div>

                    <FundElements data="Bitcoin Price" value="$16815.46" />
                    <FundElements data="24th Low / 24th High" value="$16382.07 / $16,874.12" />
                    <FundElements data="7d Low / 7d High" value="$16382.07 / $16,874.12" />
                    <FundElements data="Trading Volume" value="$23,249,202,782" />
                    <FundElements data="Mid Cap Rank" value="#1" />
                </div>

                <div>

                    <FundElements data="Mid Cap" value="$23,249,202,782" />
                    <FundElements data="Mid Cap Dominance" value="38.342%" />
                    <FundElements data="Volume / Market Cap" value="0.0718" />

                    <div className=" w-[24rem] flex flex-row justify-between border-b-2 border-grey-500 items-center h-[3.5rem]">
                        <span className="text-[1rem] text-[#768396]">All-Time High</span>
                        <span className="text-[1rem]">
                            <span className="flex flex-row gap-1 justify-end">
                                <span>$69,044.77</span>
                                <span className="text-red-500">-75.6%</span>
                            </span>
                            <span>Nov 10, 2021(about 1 year)</span>
                        </span>
                    </div>

                    <div className=" w-[24rem] flex flex-row justify-between border-b-2 border-grey-500 items-center h-[3.5rem]">
                        <span className="text-[1rem] text-[#768396]">All-Time Low</span>
                        <span className="text-[1rem]">
                            <span className="flex flex-row gap-1 justify-end">
                                <span>$69,044.77</span>
                                <span className="text-green-500">24729.1%</span>
                            </span>
                            <span>Jul 6, 2013(over 9 years)</span>
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

import Performance from "./performance";

export default () => {
    return(

        <div className="w-[61vw] text-[19px] ">
            <div className="border-b-2 border-grey-500 py-[2rem]">
                <span className="text-[19px] mr-[2rem] pb-[1rem] font-bold text-[#0141CF] border-b-4 border-[#0141CF] "> Overview </span>
                <span className=" font-[19px] mr-[2rem] pb-[1rem]"> Fundamentals </span>
                <span className=" mr-[2rem] pb-[1rem]"> New Insights </span>
                <span className=" mr-[2rem] pb-[1rem]"> Sentiments </span>
                <span className=" mr-[2rem] pb-[1rem]"> Team </span>
                <span className=" mr-[2rem] pb-[1rem]"> Technicals </span>
                <span className=" mr-[2rem] pb-[1rem]"> Tokenomics </span>
            </div>
            <Performance/>
        </div>
    );
}

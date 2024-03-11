export default (props) => {
    return(
        <div className=" w-[24rem] flex flex-row justify-between border-b-2 border-grey-500 items-center h-[3.5rem]">
            <span className="text-[1rem] text-[#768396]">{props.data}</span>
            <span className="text-[1rem]">{props.value}</span>
        </div>
    )
}

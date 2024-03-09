import startImg from '../images/Frame.png'
import rightArrow from '../images/ArrowRight.png'

export default function SidePanel() {
    return (
        <div className="px-[2rem] bg-[#0052FE] w-[28vw] h-[32rem] text-white rounded-[1rem] flex flex-col justify-center items-center">

            <div clasName="pw-[23.25rem]">

                <div className="text-[1.5rem] text-center font-[700]">
                    Get Started with KoinX for free
                </div>
                <div className="mt-[1rem] text-[0.9rem] text-justify">

                    With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.
                </div>

            </div>

            <img className="h-[11rem] w-[10.3rem] mt-[1.5rem] " src={startImg} alt="start" />
             
               <button className="mt-[1rem] bg-[#fff] w-[14.8rem] h-[3rem] flex flex-row justify-center rounded-md  items-center text-[#0F1629] font-[600] cursor-pointer">Get Started for FREE 
               <img className="h-[1rem] w-[1rem] object-cover ml-[0.5rem]"  src={rightArrow} />
               </button>


        </div>
    );
}
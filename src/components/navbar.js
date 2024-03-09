import logo from '../images/KoinX_logo.png'

export default function navbar() {
    return (
      
      <div className="w-[100vw] h-[5rem] bg-[#fff] flex flex-row items-center shadow-md">

            <div className="pl-[3.5rem] w-[50%]">
            <img src={logo} className="w-[6rem] h-[1.5rem]" alt="logo" />
            </div>

            <div className="w-[30%] flex flex-row font-semibold justify-between items-center">
                    <span className="cursor-pointer">Crypto Taxes</span>
                    <span className="cursor-pointer">Free Tools</span>
                    <span className="cursor-pointer">Resource Center</span>
            </div>

            <div className="w-[20%] flex flex-row justify-center">
               <div className="bg-[#1B4AEF] w-[8.5rem] h-[2.5rem] flex flex-row justify-center rounded-lg  items-center text-white font-[600] cursor-pointer">Get Started</div>
            </div>

      </div>
    );
  }  
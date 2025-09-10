import chaveirosecic from "./img/chaveirosecurity-img.png"
import whatsappic from "./icon/whatsappicon-riajulislam.png"

function Footer(){

    return(

        <>
        <footer classname="">
                <div className="w-[100%] h-[40vh]">

                    <div className="flex flex-col justify-around items-center w-[100%] h-[40vh]">
                        <img className="w-[100px]" src={chaveirosecic} alt="" />
                        <p className="bg-[yellow] text-black text-[23px] font-extrabold p-6 rounded-full hover:cursor-pointer"><a href="">Entre em Contato</a></p>

                    </div>

                </div>
        </footer>
        </>

    )

}

export default Footer
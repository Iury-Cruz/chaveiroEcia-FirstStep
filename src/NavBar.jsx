import chaveic from "./img/chaveirinho-img.png"

function NavBar (){

    return(

        <>
            <div className="w-[100%]">
                <nav className="flex justify-around items-center w-[100%]">
                    <li className="w-[20%]">
                        <img className="w-[50px]" src={chaveic} alt="" />
                    </li>
                    <li className="w-[40%]">
                        <p className="text-center p-2 rounded-lg bg-yellow-400 text-black font-bold hover:cursor-pointer" ><a href="">Serviços</a></p>
                    </li>
                </nav>
            </div>
        
        </>

    )
}

export default NavBar
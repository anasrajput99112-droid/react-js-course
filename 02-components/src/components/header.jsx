import Loginbtn from "./components/loginBtn.jsx";

function header() {
    return (
        <>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="font-bold text-xl">
                    Amazon
                </h1>
                <nav>
                    <ul className="flex space-x-4 text-sm">
                        <li className="bg-gray-500 py-[4px] px-[10px] rounded-[10px]">Home</li>
                        <li className="bg-gray-500 py-[4px] px-[10px] rounded-[10px]">Products</li>
                        <li className="bg-gray-500 py-[4px] px-[10px] rounded-[10px]">Contact</li>
                    </ul>
                    <Loginbtn />
                </nav>
            </header>
        </>
    )
}

export default header;
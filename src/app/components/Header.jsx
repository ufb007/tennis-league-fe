import { useAppContext } from "../context/AppContext";

export default function Header() {
    const { user } = useAppContext();

    return (
        <>
            <header>
                <div className="topBar bg-primary md:flex justify-center items-center z-1 hidden">
                    <div className="w-8/12 font-thin">
                        <ul className="text-secondary flex flex-row justify-end">
                            <li>My Account</li>
                        </ul>
                    </div>
                </div>
                <div className="bottomBar bg-white flex sm:justify-center z-0">
                    <div className="flex flex-row justify-between items-center w-full ml-5 md:w-8/12 md:m0">
                        <div className="logo">
                            Logo Goes here
                        </div>
                        <div className="hidden md:block">
                            <ul className="menu font-thin">
                                <li onClick={() => navigate("/tournaments/upcoming")}>Leagues<div></div></li>
                                <li onClick={() => navigate("/players")}>Players<div></div></li>
                                <li onClick={() => navigate("/fixtures")}>Fixtures<div></div></li>
                            </ul>
                        </div>
                        {/* <div className="burger md:hidden py-5 pr-5">
                            <CiMenuBurger className="text-4xl"></CiMenuBurger>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    );
}

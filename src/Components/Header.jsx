function Header() {

    const navClickHandler = () => {
        document.querySelector("nav").classList.toggle("hidden")

    }

    const navList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Resume",
            link: "/resume"
        }
    ]
    return (
        <>
            <header
                className="px-10 py-5 md:flex items-center justify-between bg-[#000000] text-white"
            >
                <div
                    className="flex items-center justify-between gap-5"
                >
                    <section className="font-bold font-Poppins italic">

                        <h1
                            className="text-3xl"
                        >
                            Sahil Ghadigaonkar
                        </h1>
                        <p
                            className="text-xl"
                        >
                            A <span className="text-[#008080] font-bold p-1">Full Stack</span> Developer
                        </p>
                    </section>
                    <button
                        className="md:hidden block p-2 text-white"
                        onClick={navClickHandler}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" fill="white">
                            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                        </svg>
                    </button>
                </div>
                <nav
                    className="md:block hidden transition font-MontSerrat"
                >
                    <ul
                        className="md:flex gap-10"
                    >
                        {
                            navList.map((item) => {
                                return (
                                    <li
                                        key={item.name}
                                        className="p-2 m-1"
                                    >
                                        <a
                                            href={item.link}
                                            className="text-lg font-bold p-3 m-1 hover:text-[#008080] transition"
                                            onClick={navClickHandler}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Header;
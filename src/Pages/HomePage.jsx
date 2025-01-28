function HomePage() {

    return (
        <main className="lg:w-[800px] md:p-20 p-5 rounded-xl shadow-xl md:mx-10 m-3 md:flex justify-between items-center justify-self-center self-center text-[#333333] bg-gradient-to-tr from-white to-gray-300 via-slate-100">
            <section
                className="md:w-1/2 text-xl md:pr-5 p-2 animate-fade-in-left"
            >
                <h3><i>Turning Ideas into Impactful Code: A Passionate IT Graduate,
                    <br />NCC Alumnus, and
                    <br />Kabaddi Enthusiast
                    <br /><span className="font-bold text-[#008080]">Building Seamless Web Solutions.</span>
                </i></h3>
            </section>
            <section
                className="rounded-xl overflow-hidden w-54 h-54 md:w-[300px] md:h-[300px] shadow-lg animate-fade-in-right transition-all mt-5 md:mt-0"
            >
                <img
                    src='/photo-01.jpg'
                    alt="profile-pic-01"
                    className=" hover:scale-105 hover:opacity-90 transition-all"
                />
            </section>

        </main>
    );
}

export default HomePage;
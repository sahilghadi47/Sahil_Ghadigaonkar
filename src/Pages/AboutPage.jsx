
function AboutPage() {
    return (
        <main
            className="flex lg:flex-row flex-col justify-center gap-20 items-center bg-gradient-to-l from-[#000000] to-[#272626] text-[#e4e0e0] md:w-4/5  justify-self-center p-5 shadow-[0_50px_100px_-12px_rgba(0,0,0,0.25)] shadow-gray-900 rounded-md ">
            <section className="relative">
                <a href="https://github.com/sahilghadi47" target="_blank" rel="noreferrer">
                    <div className="group relative w-56">
                        <img
                            src="/githubCopy.jpeg"
                            alt="github_profile_pic"
                            className="rounded-full transition duration-500 ease-in-out group-hover:opacity-60 group-hover:scale-110"
                        />
                        <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-700 text-gray-100">
                            Visit Github profile
                        </p>
                    </div>
                </a>
            </section>

            <section className="md:w-1/2">
                <h1 className="lg:text-3xl text-lg italic font-pacifico">Hello, I'm Sahil Ghadigaonkar👋</h1>
                <h3 className="font-semibold lg:text-lg text-base">About Me</h3>
                <p className="mt-1">
                    I am a recent Information Technology graduate with a strong foundation in full stack, front-end, and back-end web development. Here's a quick rundown of my skills and experiences:
                    Skilled in web development. Proficient in creating and maintaining dynamic websites. Former NCC cadet, proud representative of RDC 2023. Alumnus of Mumbai University.
                </p>
                <ul className="list-inside list-disc mt-2 lg:block hidden">
                    <li className="mt-1">😎 <b>Interested In:</b> Web Development, Reading self-help books, Trekking, kabaddi</li>
                    <li className="mt-1">🌐 <b>Frontend:</b> Skilled in React.js, Redux/toolkit, JavaScript (ES6), HTML/CSS, and TailwindCSS</li>
                    <li className="mt-1">💾 <b>Backend:</b> Proficient in Express.js, Node.js, Mongoose, and JWT , RestfullAPI</li>
                    <li className="mt-1">🗄️ <b>Database:</b> Experienced with MongoDB</li>
                    <li className="mt-1">🏅 <b>Leadership and Discipline:</b> Former NCC Cadet-Captain of NCC Naval unit Thane and proud representative of Maharashtra state at the Republic Day Parade in Delhi</li>
                    <li className="mt-1">📚 <b>Currently Learning:</b> Continuously enhancing my development capabilities and contributing to innovative projects</li>
                </ul>
            </section>
        </main>
    )

}
export default AboutPage
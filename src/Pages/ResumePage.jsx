import React from 'react';

export default function ResumePage() {
    return (
        <main className='lg:h-[800px] h-[600px]'>
            <section
                className="flex flex-col rounded-xl shadow-xl md:mx-10 m-3 bg-gradient-to-tr from-white via-slate-100 to-gray-300  h-full md:w-[70%] w-screen justify-self-center self-center"
            >
                <object
                    data="/sahil_resume.pdf"
                    type="application/pdf"
                    className="h-full w-full p-5"
                >
                    Your browser does not support PDFs. <a href="/sahil_resume.pdf">Download the PDF</a>.
                </object>
            </section>
        </main>
    );
}

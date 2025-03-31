import React from 'react';

const Footer = () => {
    return (
        <footer className="px-3 pt-4 laptop:px-9 border-t-2 bg-gray-50 border-t-chemisphere border-2">
            <div className="grid gap-10 row-gap-6 laptop:mt-8 mb-8 laptop:mx-4 mobile:grid-cols-1 laptop:grid-cols-3">
                {/* Company Info */}
                <div>
                    <a href="#" className="inline-flex items-center">
                        <img
                            src="/c.png"
                            alt="logo"
                            className="h-8 w-8"
                        />
        
                    </a>
                    <div className="mt-6 laptop:max-w-xl">
                        <p className="text-sm text-gray-800">
                       


                        Struggling with Math and Science? What if we told you it could be your biggest advantage in exams?

At Chemisphere, we dont just teach science — we make it your strongest subject! Led by Chandan Biswas, a seasoned professor and CEO of Chemisphere, we have mentored 15,000+ students for JEE, NEET, MHCET, and Class 12 boards, with 1,000+ IITians and medical professionals achieving success under our guidance.

                        </p>
                    </div>
                </div>

                {/* Popular Links */}
                <div className="flex flex-col laptop:gap-8 mobile:gap-4 text-sm">
                    <a href='#about' className="text-base font-bold tracking-wide text-gray-900">About</a>
                    <a href='#classes' className="text-base font-bold tracking-wide text-gray-900">Classes</a>
                    <a href='#stats' className="text-base font-bold tracking-wide text-gray-900">Stats</a>
                    <a href='#contact' className="text-base font-bold tracking-wide text-gray-900">Contact</a>

                </div>

                {/* Company Links */}
                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        COMPANY IS ALSO AVAILABLE ON
                    </p>
                    <div className="flex items-center gap-1 px-2">
                        <a href="https://play.google.com/store/apps/details?id=com.chemisphereApp.app"  target="__blank" className="w-full min-w-xl">
                            <img
                                src="https://mcqmate.com/public/images/icons/playstore.svg"
                                alt="Playstore Button"
                                className="h-10"
                               
                            />
                        </a>
                        <a target="__blank"
                            className="w-full min-w-xl"
                            href="https://www.youtube.com/@Chemisphere"
                        >
                            <img
                                src="https://mcqmate.com/public/images/icons/youtube.svg"
                                alt="Youtube Button"
                                className="h-28"

                            />
                        </a>
                    </div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a className='text-blue-600 underline' href="mailto:info@chemisphere.in" title="send email">
                            info@chemisphere.in
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t laptop:flex-row laptop:mx-4">
                <p className="text-sm text-gray-600 mobile:text-center">© Copyright 2024 Chemisphere. All rights reserved.</p>
                <ul className="flex mobile:flex-col laptop:flex-row mb-3 laptop:mb-0 mobile:space-y-0 mobile:space-x-5 laptop:text-center">
                  
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

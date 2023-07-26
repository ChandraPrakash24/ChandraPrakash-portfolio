import React from "react";

function Footer() {
    return (
        <>
            <div className="px-8 lg:px-8">
                <footer className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
                    <div className="ml-[-0.60rem]">
                        <ul className="flex">
                            <li title="Github">
                                <a href="https://youtu.be/DtUtbtuA_60" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon name="github" type="logo" color="#8e8e8e" ></box-icon>
                                </a>
                            </li>
                            <li title="Instagram">
                                <a href="https://youtu.be/Z1K4BUtHsO4?t=16" clzassName="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon type="logo" name="instagram" color="#8e8e8e"></box-icon>
                                </a>
                            </li>
                        <li title="Whatsapp">
                                <a href="https://api.whatsapp.com/send/?phone=917898992791&text&type=phone_number&app_absent=0" className="font-normal text-gray-900 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg transition-all">
                                    <box-icon type="logo" name="whatsapp" color="#8e8e8e"></box-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-9 h-9 text-gray-900 dark:text-gray-400 transition-all">
                        <span>©2023</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;
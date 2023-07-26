import React from "react";

function Portfolio() {
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <div class="relative overflow-hidden group">
                    <img class="w-full h-auto transition duration-500 ease-in-out transform group-hover:scale-105" src="https://github.com/ChandraPrakash24/StormWeaver/raw/main/images/ss5.png" alt="Project image" />
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div class="absolute bottom-0 left-0 p-4">
                        <h2 class="text-white font-bold text-xl mb-2">StormWeaver</h2>
                        <p class="text-white text-base mb-4">A weather forcast app.</p>
                        <a href="https://storm-weaver.vercel.app/" target="_blank" rel="noreferrer" class="inline-block bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition duration-300 ease-in-out">Demo</a>
                    </div>
                </div>
                <div class="relative overflow-hidden group">
                    <img class="w-full h-auto transition duration-500 ease-in-out transform group-hover:scale-105" src="https://user-images.githubusercontent.com/107044253/250281937-c85d5dde-2742-453c-ac4e-c0b91a210a63.png" alt="Project image" />
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div class="absolute bottom-0 left-0 p-4">
                        <h2 class="text-white font-bold text-xl mb-2">Portfolio</h2>
                        <p class="text-white text-base mb-4">This portfolio website showcases the skills and experiences I have gained.</p>
                        <a href="https://chandraprakash24.github.io/Portfolio/" target="_blank" rel="noreferrer" class="inline-block bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition duration-300 ease-in-out">Demo</a>
                    </div>
                </div>
                <div class="relative overflow-hidden group">
                    <img class="w-full h-auto transition duration-500 ease-in-out transform group-hover:scale-105" src="https://github.com/ChandraPrakash24/Amazon-Frontend-Clone/raw/main/images/Screenshot%201.png" alt="Project image" />
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div class="absolute bottom-0 left-0 p-4">
                        <h2 class="text-white font-bold text-xl mb-2">Frontend of Shoping Website</h2>
                        <p class="text-white text-base mb-4">This project allowed me to explore the intricacies of front-end development and dive into the world of e-commerce design.</p>
                        <a href="https://amazon-frontend-clone-vanila.netlify.app/" target="_blank" rel="noreferrer" class="inline-block bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition duration-300 ease-in-out">Demo</a>
                    </div>
                </div>
                <div class="relative overflow-hidden group">
                    <img class="w-full h-auto transition duration-500 ease-in-out transform group-hover:scale-105" src="https://user-images.githubusercontent.com/107044253/250116897-9f10a68e-d512-4724-b4f9-247b86b35863.png" alt="Project image" />
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div class="absolute bottom-0 left-0 p-4">
                        <h2 class="text-white font-bold text-xl mb-2">Simon-Game</h2>
                        <p class="text-white text-base mb-4">A vanila Javascript game.</p>
                        <a href="https://chandraprakash24.github.io/Simon-game/" target="_blank" rel="noreferrer" class="inline-block bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-300 transition duration-300 ease-in-out">Demo</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Portfolio;
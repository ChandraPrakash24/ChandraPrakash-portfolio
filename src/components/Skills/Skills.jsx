import React from 'react'

function Skills() {
    const skills = ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Vite'];

    const devtools = ['Bootstrap ', 'Tailwind', 'Github', 'Codepen', 'Terminal', 'Vercel', 'Netlify'];
    
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl md:text-2xl  mb-1 text-black dark:text-white">
                    Skills
                </h1>
                <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
                I possess a wide range of technical skills that enable me to develop and deliver high-quality web applications. Here are some of the key skills that I bring to the table.

                Firstly, I have a strong command of HTML, CSS, and JavaScript, which form the foundation of modern web development. I am skilled in creating well-structured HTML markup, styling web pages with CSS, and implementing interactive features using JavaScript.
                </p>
                <div className='mt'>
                    <p>Here are a few technologies i work with:
                        <ul className="skills-list">
                            {skills.map((skill, i) => <li key={i} className="relative mb-5 pl-6">{skill}</li>)}
                        </ul>
                    </p><br />
                    <p>Here are few of my Dev tools:
                        <ul className="skills-list">
                            {devtools.map((tools, i) => <li key={i} className="relative mb-5 pl-6">{tools}</li>)}
                        </ul>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Skills
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Work',
    description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    As someone striving to produce better work in the future, here are a few summaries of what I've done and the companies I've worked for.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Arina Digital</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Mid. Level Web Developer
                </p>
                <p>
                    I joined <a href="https://arinadigital.com" target={"_blank"}>Arina Digital</a> to contribute significantly to several major development projects.
                    My role involved utilizing a variety of technologies including React, PHP, SCSS, and WordPress. Arina Digital is on its path to becoming one of Turkey's top digital agencies, and I am confident in its potential to achieve this goal. The company exhibits professionalism in its office culture, business approach, and discipline. I have been involved in the development process of several major projects, showcasing my skills and contributing to the company's growth.<br />
                    These projects include work for high-profile clients like
                </p>
                <ul>
                    <li>
                        <a href="https://milangaz.com.tr/en/" target={"_blank"}>Milangaz</a>
                    </li>
                    <li>
                        <a href="https://www.gtech.com.tr/en/home/" target={"_blank"}>GTech</a>
                    </li>
                    <li>
                        <a href="https://www.advanco.com/" target={"_blank"}>Advanco</a>
                    </li>
                    <li>
                        <a href="https://www.eclit.com/" target={"_blank"}>Eclit</a>
                    </li>
                    <li>
                        <a href="https://www.mbis.com.tr/en/" target={"_blank"}>MBIS</a>
                    </li>
                </ul>
                <p>
                    My experience at Arina Digital has been a testament to my technical abilities and commitment to excellence in the digital domain.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Creodive</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Full Stack Developer, Jan. 2023 — Feb. 2023
                </p>
                <p>
                    My second corporate experience, which propelled me into my adventure in Istanbul, Turkey. I continued to work by developing custom themes and plugins with WordPress. I didn't spend a lot of time there due to various reasons. I needed to keep moving step by step towards my goals. I require an environment where I can showcase and present my skills. It was one of the companies that I enjoyed working with.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Uc Yirmiiki</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Full Stack Developer, Dec. 2021 — Jan. 2023
                </p>
                <p>
                    I joined Uc Yirmiiki, my first corporate job, based in Adana, Turkey. This corporate company is one of the leading firms in its region. I developed websites for many major companies. The languages I used in development were PHP, Laravel, and Javascript. I grasped the CMS structure and developed websites with CRUD operations.
                </p>
            </div>
        </section>
    );
}

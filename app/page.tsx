import Image from 'next/image';
import thirdprofile from 'public/images/home/thirdprofile.jpg';
import secondprofile from 'public/images/home/secondprofile.jpg';
import newprofile from 'public/images/home/newprofile.jpg';
import mrhacker from 'public/images/home/mrhacker.jpeg';
import fourpic from 'public/images/home/4-picture.jpg';
import fivepic from 'public/images/home/5-picture.jpg';
import { Suspense } from 'react';
import Link from 'next/link';


function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                hey, I'm Can 👋
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`I was born in Adana/Turkey, and my journey into the digital world began at the age of 6, thanks to my father and our first computer. What started with playing games soon evolved into a passion for web development. During my middle school years, I developed a keen interest in programming. While machine languages didn't captivate me, the realm of web development did.`}
            </p>
            <div className="prose prose-neutral dark:prose-invert">
            <p className="prose prose-neutral dark:prose-invert">
                {`You can view my `}
                <Link href="/work">work</Link>
                {` through this link. When asked to choose between frontend and backend development, my admiration lies unequivocally with backend development.`}
            </p>
            </div>
            <div className="columns-2 sm:columns-3 gap-4 my-8">
                <div className="relative h-40 mb-4">
                    <Image
                        alt="A confident young man with a casual hairstyle, wearing a white t-shirt and a light jacket, stands with crossed arms in a modern office environment, with the company logo visible in the background."
                        src={newprofile}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80 mb-4 sm:mb-0">
                    <Image
                        alt="A man enveloped in a cozy blanket is focused on coding on his computer, with elegant patterned curtains in the background allowing natural light to illuminate the room."
                        src={mrhacker}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                    />
                </div>
                <div className="relative h-40 sm:h-80 sm:mb-4">
                    <Image
                        alt="A cheerful young man wearing a cozy sherpa jacket smiles broadly, with a serene landscape and an open car door in the background, suggesting the start of an adventure."
                        src={fivepic}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                    />
                </div>
                <div className="relative h-40 mb-4 sm:mb-0">
                   <Image
                        alt="A cheerful young man wearing a cozy sherpa jacket smiles broadly, with a serene landscape and an open car door in the background, suggesting the start of an adventure."
                        src={secondprofile}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                        src={fourpic}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80">
                    <Image
                        alt="A man in casual attire walks through a lush nursery, surrounded by an array of potted plants and greenery under a bright blue sky."
                        src={thirdprofile}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    In my professional work, I frequently use languages such as PHP, JavaScript, TypeScript, Node.js, HTML, and SCSS. My preference for databases lies with MongoDB and MySQL. I specialize in <b>server-side development</b> and implementing <b>security updates</b> in projects.
                </p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Additionally, I have a keen interest in artificial intelligence, particularly in its teaching and application aspects, which I often incorporate into my daily life.
                </p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Throughout my career, I have played significant roles in large-scale projects and have successfully developed and launched over <b>50+ websites</b>. Recently, I was honored to be selected as a <b>Google Developer Expert</b> in the Cloud domain.
                </p>
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/cancartisan"
                    >
                        <ArrowIcon />
                        <p className="h-7 ml-2">follow me</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:canswartz@icloud.com"
                    >
                        <ArrowIcon />
                        <p className="h-7 ml-2">contact</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

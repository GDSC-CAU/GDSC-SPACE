// 'use client'
// import React, { useRef, useEffect, useState } from 'react';
// import Image from 'next/image'
// import Link from 'next/link'

// export default function ProjectCard( any) {
//     const textDirection = isReverse ? "items-end" : "items-start"
//     const LScrollDirection = isReverse ? "-translate-x-full" : "-translate-x-0"
//     const RScrollDirection = isReverse ? "-translate-x-0" : "-translate-x-full"

//     const [isVisible, setIsVisible] = useState(false);
//     const ImageRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5,
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, options);

//         if (ImageRef.current) {
//             observer.observe(ImageRef.current);
//         }

//         return () => {
//             if (ImageRef.current) {
//                 observer.unobserve(ImageRef.current);
//             }
//         };
//     }, []);

//     return (
//         <main className={`relative grid grid-cols-2  w-full items-center justify-between gap-3`} dir={isReverse ? '' : 'rtl'} >
//             <div className="group relative">
//                 <Link href="/blog/1">
//                     <div
//                         ref={ImageRef}
//                         className={`relative overflow-hidden transition-all duration-1000 ease-in-out transform ${
//                             isVisible ? 'translate-x-0' :LScrollDirection
//                             }`} >
//                         <div
//                             className={` flex transition-all duration-1000 ease-in-out transform ${
//                                 isVisible ? 'translate-x-0' : 'translate-x-full'
//                                 }`}>
//                             <Image
//                                 src="https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg"
//                                 alt="pixabay picture3"
//                                 priority
//                                 layout="responsive"
//                                 width={663}
//                                 height={718}
//                                 style={{ borderRadius: '15px' }}
//                                 className={`transition duration-300 ease-in-out filter ${
//                                     isVisible ? 'group-hover:brightness-90' : ''
//                                     }`}
//                             />
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//             <div
//                 ref={ImageRef}
//                 className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${
//                     isVisible ? 'transform translate-x-0' : RScrollDirection
//                     }`} >
//                 <div
//                     className={`flex transition-all duration-1000 ease-in-out transform ${
//                         isVisible ? 'translate-x-0' : 'translate-x-full'
//                         }`}>
//                     <div className='group relative grid grid-rows-2 '>

//                         <div className={`max-x-prose flex flex-col w-full items-end ${textDirection}`}>

//                             <h1 className="text-4xl font-bold mb-5">{name}</h1>
//                             <h2 className="text-xs">{d1}</h2>
//                             <h3 className="text-xs">{d2}</h3>

//                         </div>

//                         <div className={`relative mt-5`}>
//                             <Image
//                                 src="https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg"
//                                 alt="pixabay picture3"
//                                 priority
//                                 layout='responsive'
//                                 width={664}
//                                 height={180}
//                                 style={{ borderRadius: '15px' }}
//                             />
//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </main>

//     )
// }
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

interface MAIN_PROJECT_DATA {
    PROJECT_DESCRIPTION: string
    PROJECT_IMAGE: string
    PROJECT_IMAGE_SUB: string
    PROJECT_SUBTITLE: string
    PROJECT_TITLE: string
}

export default function ProjectCard({
    PROJECT_TITLE,
    PROJECT_IMAGE,
    PROJECT_IMAGE_SUB,
    PROJECT_DESCRIPTION,
    PROJECT_SUBTITLE,
    isReverse,
}: any | MAIN_PROJECT_DATA) {
    const project: MAIN_PROJECT_DATA = {
        PROJECT_TITLE: 'Wiro',
        PROJECT_IMAGE: 'https://cdn.pixabay.com/photo/2023/08/11/18/35/flowers-8184126_1280.jpg',
        PROJECT_IMAGE_SUB: 'https://cdn.pixabay.com/photo/2023/08/05/15/15/waves-8171279_1280.jpg',
        PROJECT_DESCRIPTION: '파이팅....',
        PROJECT_SUBTITLE: '미안..',
    }
    const textDirection = isReverse ? 'items-end' : 'items-start'
    const LScrollDirection = isReverse ? '-translate-x-full' : '-translate-x-0'
    const RScrollDirection = isReverse ? '-translate-x-0' : '-translate-x-full'

    const [isVisible, setIsVisible] = useState(false)
    const ImageRef = useRef(null)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        if (ImageRef.current) {
            observer.observe(ImageRef.current)
        }

        return () => {
            if (ImageRef.current) {
                observer.unobserve(ImageRef.current)
            }
        }
    }, [])

    return (
        <main
            className={`relative grid w-full  grid-cols-2 items-center justify-between gap-3`}
            dir={isReverse ? '' : 'rtl'}
        >
            <div className="group relative">
                <Link href="/blog/1">
                    <div
                        ref={ImageRef}
                        className={`relative overflow-hidden transition-all duration-1000 ease-in-out${
                            isVisible ? 'translate-x-0' : LScrollDirection
                        }`}
                    >
                        <div
                            className={` flex transition-all duration-1000 ease-in-out ${
                                isVisible ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <Image
                                src={project.PROJECT_IMAGE}
                                alt="pixabay picture3"
                                priority
                                layout="responsive"
                                width={663}
                                height={718}
                                style={{ borderRadius: '15px' }}
                                className={`transition duration-300 ease-in-out${
                                    isVisible ? 'group-hover:brightness-90' : ''
                                }`}
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div
                ref={ImageRef}
                className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${
                    isVisible ? 'translate-x-0' : RScrollDirection
                }`}
            >
                <div
                    className={`flex transition-all duration-1000 ease-in-out${
                        isVisible ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="group relative grid grid-rows-2 ">
                        <div className={`max-x-prose flex w-full flex-col items-end ${textDirection}`}>
                            <h1 className="mb-5 text-4xl font-bold">{project.PROJECT_TITLE}</h1>
                            <h2 className="text-xs">{project.PROJECT_SUBTITLE}</h2>
                            <h3 className="text-xs">{project.PROJECT_DESCRIPTION}</h3>
                        </div>

                        <div className={`relative mt-5`}>
                            <Image
                                src={project.PROJECT_IMAGE_SUB}
                                alt="pixabay picture3"
                                priority
                                layout="responsive"
                                width={664}
                                height={180}
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

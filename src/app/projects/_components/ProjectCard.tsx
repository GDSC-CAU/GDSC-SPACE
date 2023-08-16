//import Image from 'next/image'
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function ProjectCard(props: any) {
    return (
        <main>
            <div className="flex-center flex w-full flex-row items-center justify-center p-6">
                <div className="w-1/2 ">
                    <Image
                        src={props.picture}
                        alt="윈도우 사진"
                        priority={true}
                        style={{
                            //    width:"100%",
                            //    height : 'auto',
                            borderRadius: '15px',
                        }}
                        width={663}
                        height={718}
                    />
                </div>

                <div className="relative flex w-1/2 flex-col p-6">
                    <div className="h-30 flex w-full flex-col justify-items-start">
                        <h1 className="text-3xl">{props.name}</h1>
                        <h2 className="text-s">{props.d1}</h2>
                        <h3 className="text-xs">{props.d2}</h3>
                    </div>

                    <div className="h-20 w-full border bg-white"></div>
                </div>
            </div>
        </main>
    )
}

// // import Image from 'next/image'
// import Link from 'next/link'
// import Image from 'next/legacy/image';
// import { relative } from 'path';
// const imageStyle = {
//     borderRadius: '10%',
//     width : '100%',
//     hiehgt: 'auto'
// }

// export default function ProjectCard(props: any) {
//     return (
//         <main>
//             {props.bool ? (
//                 <div className="flex flex-row gap-6 ">
//                     {/* left : image */}
//                     <div
//                         style={{
//                             height: 310,
//                             width: 220,
//                             position: 'relative',
//                         }}
//                     >
//                         <Link href="/projects/1">
//                             <Image
//                                 src={props.picture}
//                                 alt="윈도우 사진"
//                                 style={imageStyle}
//                                 layout="fill"
//                                 priority={true}

//                             />
//                         </Link>
//                     </div>

//                     {/* right : name */}
//                     <div className="flex flex-col">
//                     <Link
//                             href="/projects/1"
//                         >
//                         <div
//                             style={{
//                                 height: 150,
//                                 width: 180,
//                                 position: 'relative',
//                             }}
//                         >
//                             <h1>{props.name}</h1>
//                             <h2>{props.description}</h2>
//                         </div>

//                             <div
//                                 className="items-center rounded-2xl border bg-white"
//                                 style={{
//                                     height: 160,
//                                     width: 180,
//                                     position: 'relative',
//                                 }}
//                             >
//                                 dskflsd
//                             </div>
//                         </Link>
//                         <div></div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex flex-row-reverse gap-6 ">
//                 {/* left : image */}
//                 <div
//                     style={{
//                         height: 310,
//                         width: 220,
//                         position: 'relative',
//                     }}
//                 >
//                     <Link href="/projects/1">
//                         <Image
//                             src={props.picture}
//                             //width={250}
//                             //height={400}
//                             alt="윈도우 사진"
//                             style={imageStyle}
//                             layout="fill"
//                             priority={true}
//                         />
//                     </Link>
//                 </div>

//                 {/* right : name */}
//                 <div className="flex flex-col">
//                 <Link
//                         href="/projects/1"
//                     >
//                     <div
//                         style={{
//                             height: 150,
//                             width: 180,
//                             position: 'relative',
//                         }}
//                     >
//                         <h1>{props.name}</h1>
//                         <h2>{props.description}</h2>
//                     </div>

//                         <div
//                             className="items-center rounded-2xl border bg-white"
//                             style={{
//                                 height: 160,
//                                 width: 180,
//                                 position: 'relative',
//                             }}
//                         >
//                             dskflsd
//                         </div>
//                     </Link>
//                     <div></div>
//                 </div>
//             </div>

//   )}
//         </main>

//     )
// }

// // import Image from 'next/image'
// import Link from 'next/link'
// import Image from 'next/legacy/image';
// import { relative } from 'path';
// const imageStyle = {
//     borderRadius: '10%',
//     width : '100%',
//     hiehgt: 'auto'
// }

// export default function ProjectCard(props: any) {
//     return (
//         <main>
//             {props.bool ? (
//                 <div className="flex flex-row gap-6 ">
//                     {/* left : image */}
//                     <div
//                         style={{
//                             height: 310,
//                             width: 220,
//                             position: 'relative',
//                         }}
//                     >
//                         <Link href="/projects/1">
//                             <Image
//                                 src={props.picture}
//                                 alt="윈도우 사진"
//                                 style={imageStyle}
//                                 layout="fill"
//                                 priority={true}

//                             />
//                         </Link>
//                     </div>

//                     {/* right : name */}
//                     <div className="flex flex-col">
//                     <Link
//                             href="/projects/1"
//                         >
//                         <div
//                             style={{
//                                 height: 150,
//                                 width: 180,
//                                 position: 'relative',
//                             }}
//                         >
//                             <h1>{props.name}</h1>
//                             <h2>{props.description}</h2>
//                         </div>

//                             <div
//                                 className="items-center rounded-2xl border bg-white"
//                                 style={{
//                                     height: 160,
//                                     width: 180,
//                                     position: 'relative',
//                                 }}
//                             >
//                                 dskflsd
//                             </div>
//                         </Link>
//                         <div></div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="flex flex-row-reverse gap-6 ">
//                 {/* left : image */}
//                 <div
//                     style={{
//                         height: 310,
//                         width: 220,
//                         position: 'relative',
//                     }}
//                 >
//                     <Link href="/projects/1">
//                         <Image
//                             src={props.picture}
//                             //width={250}
//                             //height={400}
//                             alt="윈도우 사진"
//                             style={imageStyle}
//                             layout="fill"
//                             priority={true}
//                         />
//                     </Link>
//                 </div>

//                 {/* right : name */}
//                 <div className="flex flex-col">
//                 <Link
//                         href="/projects/1"
//                     >
//                     <div
//                         style={{
//                             height: 150,
//                             width: 180,
//                             position: 'relative',
//                         }}
//                     >
//                         <h1>{props.name}</h1>
//                         <h2>{props.description}</h2>
//                     </div>

//                         <div
//                             className="items-center rounded-2xl border bg-white"
//                             style={{
//                                 height: 160,
//                                 width: 180,
//                                 position: 'relative',
//                             }}
//                         >
//                             dskflsd
//                         </div>
//                     </Link>
//                     <div></div>
//                 </div>
//             </div>

//   )}
//         </main>

//     )
// }

import Image from 'next/image'
import Link from 'next/link'

const imageStyle = {
    borderRadius: '10%',
    // width : '100%',
    // hiehgt: 'auto'
}

export default function ProjectList(props: any) {
    return (
        <main>
            {props.bool ? (
                <div className="flex flex-row gap-6 ">
                    {/* left : image */}
                    <div
                        style={{
                            height: 310,
                            width: 220,
                            position: 'relative',
                        }}
                    >
                        <Link href="/projects/1">
                            <Image
                                src={props.picture}
                                //width={250}
                                //height={400}
                                alt="윈도우 사진"
                                style={imageStyle}
                                layout="fill"
                                priority={true}
                            />
                        </Link>
                    </div>

                    {/* right : name */}
                    <div className="flex flex-col">
                        <div
                            style={{
                                height: 150,
                                width: 180,
                                position: 'relative',
                            }}
                        >
                            <h1>{props.name}</h1>
                            <h2>{props.description}</h2>
                        </div>
                        <Link
                            /* to={`/projects/${id}`}> */
                            href="/projects/1"
                        >
                            <div
                                className="items-center rounded-2xl border bg-white"
                                style={{
                                    height: 160,
                                    width: 180,
                                    position: 'relative',
                                }}
                            >
                                dskflsd
                            </div>
                        </Link>
                        <div></div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row gap-6 ">
                    {/* right : name */}
                    <div className="flex flex-col">
                        <div
                            style={{
                                height: 150,
                                width: 180,
                                position: 'relative',
                            }}
                        >
                            <h1>{props.name}</h1>
                            <h2>{props.description}</h2>
                        </div>
                        <Link
                            /* to={`/projects/${id}`}> */
                            href="/projects/1"
                        >
                            <div
                                className="items-center rounded-2xl border bg-white"
                                style={{
                                    height: 160,
                                    width: 180,
                                    position: 'relative',
                                }}
                            >
                                dskflsd
                            </div>
                        </Link>
                    </div>
                    {/* left : image */}
                    <div
                        style={{
                            height: 310,
                            width: 220,
                            position: 'relative',
                        }}
                    >
                        <Link href="/projects/1">
                            <Image
                                src={props.picture}
                                //width={250}
                                //height={400}
                                alt="윈도우 사진"
                                style={imageStyle}
                                layout="fill"
                                priority={true}
                            />
                        </Link>
                    </div>
                </div>
            )}
        </main>
        // <main className="flex h-full w-full flex-col items-center p-24">
        //     <p>This is Project List</p>
        //     <Link href="/projects/1">Project 1</Link>
        //     <Link href="/projects/2">Project 2</Link>
        // </main>
    )
}
//---------------------------

// import Link from 'next/link'
// import Image from 'next/image'

// const imageStyle={
//     borderRadius: '10%',
//     // width : '100%',
//     // hiehgt: 'auto'

// }

// export default function ProjectList(props : any) {
//     return (
//         <main>
//             <div className="flex flex-row gap-6 ">
//                 {/* left : image */}
//                 <div>
//                     <Link
//                         href="/projects/1">
//                             <Image src={props.picture}
//                                    //width={250}
//                                    //height={400}
//                                    alt="윈도우 사진"
//                                    width={200}
//                                    height={400}
//                                    style={imageStyle}

//                                    />
//                     </Link>
//                 </div>

//                 {/* right : name */}
//                 <div className="flex flex-col">
//                     <div>
//                         <h1>{props.name}</h1>
//                         <h2>{props.description}</h2>
//                     </div>
//                         <Link
//                         /* to={`/projects/${id}`}> */
//                         href="/projects/1">
//                                 <div className="items-center border rounded-lg bg-white">
//                                     dskflsd</div>
//                         </Link>
//                     <div>

//                     </div>

//                 </div>
//             </div>
//         </main>
//         // <main className="flex h-full w-full flex-col items-center p-24">
//         //     <p>This is Project List</p>
//         //     <Link href="/projects/1">Project 1</Link>
//         //     <Link href="/projects/2">Project 2</Link>
//         // </main>
//     )
// }

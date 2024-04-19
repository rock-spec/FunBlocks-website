import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface EngineCardComponentProps {
    imageUrl: string;
    title: string;
    onClick: () => void;
}

const EngineCardComponet = (props: EngineCardComponentProps) => {
    const { imageUrl, title } = props;

    return (
        <Link href={`/engine/${title}`}>
            <div className="gap-6 shadow-sm flex flex-col"> {/* Make it a flex container */}
                {/* First Column: Image */}
                <div className="rounded-lg relative">
                    <div className="rounded-md border border-[#161616]">
                        <Image
                            className='object-cover'
                            src={imageUrl}
                            alt="Image"
                            width={427}
                            height={237}
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </div>
                {/* Second Column: Text */}
                <div className="flex-1 flex flex-col justify-center items-start">
                    <div className="text-neutral-900 text-lg font-bold font-['Cabin'] leading-snug">
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EngineCardComponet;

import React from 'react';
import Image from 'next/image';
import { Tag } from '../Tag/Tag';
import Link from 'next/link';

export interface GameCardComponentProps {
    game_id: string;
    engine: string;
    engine_logo: string;
    imageUrl: string;
    title: string;
    description?: string;
    tags: string[];
    onClick: () => void;
}

const GameCardComponet = (props: GameCardComponentProps) => {
    const { imageUrl, title, tags, engine, description, onClick, engine_logo, game_id } = props;

    return (
        <Link href={`/game/${game_id}`}>
            <div className="gap-6 shadow-sm flex flex-col "> {/* Make it a flex container */}
                {/* First Column: Image */}
                <div className="rounded-lg relative">
                    <div className="rounded-md border border-[#161616]">
                        <Image
                            className='object-cover h-[180px]'
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
                    <div className="text-neutral-900 text-md font-bold font-['Cabin'] leading-snug">
                        {title}{description && ` : ${description}`}
                    </div>
                    <br />
                    <div className="self-stretch justify-start items-end gap-1 inline-flex">
                        {
                            tags.map((tag, index) => (
                                <Tag text={tag} key={index} type={'relevance'} linkto='engine' />
                            ))
                        }
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default GameCardComponet;

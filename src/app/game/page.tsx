'use client'

import { GameColumn } from '@/components/Games/GameColumn';
import React, { useEffect, useState } from 'react';
import { trpc } from '../_trpc/client';
import { UseQueryResult } from '@tanstack/react-query';

const Game = () => {

    // Fetching game data using trpc
    const { data: gameData, error, status } = trpc.gameData.useQuery();

    // State to store game data
    // const [games, setGames] = useState([]);

    // // Effect to update games when gameData changes
    // useEffect(() => {
    //     if (status === 'success' && gameData) {
    //         setGames(gameData);
    //     }
    // }, [gameData, status]);




    return (

        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-x-5">


            {/* Left Column */}
            <div className="border border-black bg-floralWhite  hidden p-5 w-[285px] h-full flex-col justify-start items-start gap-5 md:inline-flex ">
                <div className="self-stretch h-[33px] flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="p-2.5 bg-stone-300 justify-center items-center flex">
                            <div className="text-neutral-900 text-lg font-bold font-['OffBit Trial'] uppercase leading-snug tracking-tight">Filters</div>
                        </div>
                        <div className="text-center text-blue-700 text-lg font-bold font-['OffBit Trial'] tracking-tight">Clear All</div>
                    </div>
                </div>
                <div className="w-[230px] h-[0px] border border-neutral-900 border-opacity-20"></div>
                <div className="self-stretch h-[696px] flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch h-[276px] flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch h-64 flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="w-[230px] text-neutral-900 text-xl font-bold font-['Cabin'] leading-[25px]">ENGINE</div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-4 h-4 left-0 top-0 absolute">
                                    </div>
                                </div>
                            </div>
                            <div className="h-[211px] flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch h-[180px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Aragus</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Dojo</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Keystone</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">MUD v1</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">MUD v2</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Paima</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900">
                                            <div className="w-[11.11px] h-[8.33px] left-[4.17px] top-[5.83px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-blue-700 text-base font-bold font-['OffBit Trial'] tracking-tight">+32 More</div>
                            </div>
                        </div>
                        <div className="w-[230px] h-[0px] border border-neutral-900 border-opacity-20"></div>
                    </div>
                    <div className="self-stretch h-[156px] flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch h-[136px] flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch h-8 py-[18px] bg-stone-50 border-b-2 border-neutral-900 justify-between items-center inline-flex">
                                <div className="text-stone-400 text-base font-normal font-['Cabin'] leading-tight">Search Blockchain</div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-4 h-4 left-0 top-0 absolute">
                                    </div>
                                </div>
                            </div>
                            <div className="h-[84px] flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Play-to-Earn</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Decentralized</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900">
                                            <div className="w-[11.11px] h-[8.33px] left-[4.17px] top-[5.83px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">DAOs</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[230px] h-[0px] border border-neutral-900 border-opacity-20"></div>
                    </div>
                    <div className="self-stretch h-56 flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch h-56 flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="w-[230px] text-neutral-900 text-xl font-bold font-['Cabin'] leading-[25px]">GAME STUDIO</div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-4 h-4 left-0 top-0 absolute">
                                    </div>
                                </div>
                            </div>
                            <div className="h-[179px] flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch h-[148px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Aragus</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900">
                                            <div className="w-[11.11px] h-[8.33px] left-[4.17px] top-[5.83px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Curio</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Dojo</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900">
                                            <div className="w-[11.11px] h-[8.33px] left-[4.17px] top-[5.83px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">MUD</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900" />
                                    </div>
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="w-[145px] opacity-80 text-neutral-900 text-base font-medium font-['Cabin'] leading-tight">Obelisk</div>
                                        <div className="w-5 h-5 relative rounded-sm border border-neutral-900">
                                            <div className="w-[11.11px] h-[8.33px] left-[4.17px] top-[5.83px] absolute">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-blue-700 text-base font-bold font-['OffBit Trial'] tracking-tight">+32 More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Column  */}
            {
                status === "success" ? (<GameColumn data={gameData} />) : ""
            }
        </div>

    );
}


export default Game;

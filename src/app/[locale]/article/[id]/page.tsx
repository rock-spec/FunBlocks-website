
// import { trpcServer } from '@/app/_trpc/trpcServer';
import { trpcServer } from '../../_trpc/trpcServer';
import { ArticleDetailsColumn } from '@/components/Articles/ArticleDetailsColumn';
import { Column } from '@/components/Column/Column';
import React from 'react';


export const dynamic = 'force-dynamic'

const ArticleDetails = async ({ params }: { params: { id: string } }) => {

    const id = params.id; // Access the dynamic id parameter
    const data = await trpcServer().articleDetailsData(id)

    const { relatedArticles, game } = data.relatedData
    console.log(relatedArticles);



    return (
        <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between gap-x-5">

            {/* Main Column  */}
            <ArticleDetailsColumn data={data} />
            {/* {JSON.stringify(articlesDetails)} */}

            {/* Right Column */}
            <div className='flex-col justify-items-start items-center h-fit'>
                <Column variant='game' title='Related Game' responsive onButtonClick={() => { }}
                    columnItems={game?.map(game => ({
                        id: game?.gameid,
                        variant: "game",
                        tags: [game?.engineid, game?.gamestudioid],
                        title: game?.game_name,
                        imageUrl: game?.pic
                    }))}
                />
                {/* for space between them */}
                <div className='h-[24px] w-full'></div>
                <Column variant='article' title='Article' responsive onButtonClick={() => { }}
                    columnItems={
                        relatedArticles?.map((article: any) => ({
                            id: article?.articleid,
                            variant: "article",
                            tags: [],
                            title: article?.content?.title,
                            imageUrl: article?.content?.image
                            ,
                        }))
                    }
                />
            </div>
        </div>
    );
};

export default ArticleDetails;

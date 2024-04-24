import getHomeData from '@/controllers/homePageControllers';
import { publicProcedure, router } from './trpc';
import { getGameAllData } from '@/controllers/gamePageController';
import { getNewsData } from '@/controllers/newsPageController';
import { getarticlesData } from '@/controllers/articlePageController';
import { getVideosData } from '@/controllers/videoPageController';
import { getEventsData } from '@/controllers/eventPageController';
import { getEnginesData } from '@/controllers/enginePageController';
import { getArticleDetailPageData } from '@/controllers/articleDetailPageController';
import { z } from 'zod';
import { getEventDetailPageData } from '@/controllers/eventDetailPageController';
import { getGameDetailPageData } from '@/controllers/gameDetailPageController';
import { getGameRelatedData } from '@/controllers/utilControllers';
import { getnewsDetailPageData } from '@/controllers/newsDetailPageController';
import { getvideoDetailPageData } from '@/controllers/videoDetailPageController';
import { getEngineDetailPageData } from '@/controllers/engineDetailPageController';
import { getSliderData } from '@/controllers/sliderController';



export const appRouter = router({

    //sliderRoutes
    // sliderData: publicProcedure.query(async () => {
    //     const sliderData = await getSliderData()
    //     return sliderData
    // }),

    // main pages routes 
    homeData: publicProcedure.query(async () => {
        const homeData = await getHomeData()
        return homeData
    }),
    gameData: publicProcedure.query(async () => {
        const gameData = await getGameAllData()
        return gameData
    }),
    newsData: publicProcedure.query(async () => {
        const newsData = await getNewsData()
        return newsData
    }),
    articleData: publicProcedure.query(async () => {
        const articleData = await getarticlesData()
        return articleData
    }),
    videoData: publicProcedure.query(async () => {
        const videoData = await getVideosData()
        return videoData
    }),
    eventData: publicProcedure.query(async () => {
        const eventData = await getEventsData()
        return eventData
    }),
    engineData: publicProcedure.query(async () => {
        const engineData = await getEnginesData()
        return engineData
    }),

    // detail pages routes 
    articleDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const articleDetailsData = await getArticleDetailPageData(input)
        return articleDetailsData
    }),
    newsDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const newsDetailsData = await getnewsDetailPageData(input)
        return newsDetailsData
    }),
    eventDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const eventDetailsData = await getEventDetailPageData(input)
        return eventDetailsData
    }),
    gameDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const gameDetailsData = await getGameRelatedData(input)
        return gameDetailsData
    }),
    videoDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const videoDetailsData = await getvideoDetailPageData(input)
        return videoDetailsData
    }),
    engineDetailsData: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const engineDetailsData = await getEngineDetailPageData(input)
        return engineDetailsData
    })
});


export type AppRouter = typeof appRouter
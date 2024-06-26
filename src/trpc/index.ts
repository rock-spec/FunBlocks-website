import getHomeData from "@/controllers/homePageControllers"
import { publicProcedure, router } from "./trpc"
import { getBlockchains, getGameStudios, getEngines, getGames, getGamesAllData, getAllSidebarOptions } from "@/controllers/gamePageController"
import { getNewsData } from "@/controllers/newsPageController"
import { getarticlesData, getfeaturedArticles } from "@/controllers/articlePageController"
import { getVideosData } from "@/controllers/videoPageController"
import { getEventsData } from "@/controllers/eventPageController"
import { getEnginesData } from "@/controllers/enginePageController"
import { getArticleDetailPageData } from "@/controllers/articleDetailPageController"
import { z } from "zod"
import { getEventDetailPageData } from "@/controllers/eventDetailPageController"
// import { getGameDetailPageData } from "@/controllers/gameDetailPageController"
import { getGameRelatedData, getCategories, getGameRelatedDataForOthers } from "@/controllers/utilControllers"
import { getnewsDetailPageData } from "@/controllers/newsDetailPageController"
import { getvideoDetailPageData } from "@/controllers/videoDetailPageController"
import { getEngineDetailPageData } from "@/controllers/engineDetailPageController"
import { getSliderData } from "@/controllers/sliderController"
import getSearchData from "@/controllers/searchController"
import { type Locale } from "@/i18n.config"
import Sidebar from "@/components/Games/Sidebar"

const localeSchema = z.string().refine((val) => val === "en" || val === "zh", {
    message: "Invalid locale",
})

const idAndLocaleSchema = z.object({
    id: z.string(),
    locale: localeSchema,
})

const queryAndLocaleSchema = z.object({
    query: z.string(),
    locale: localeSchema,
})

// filter schema for game
const gameFilterOptionsSchema = z.object({
    blockchainIds: z.string().optional(),
    engineIds: z.string().optional(),
    gameStudioIds: z.string().optional(),
    query: z.string().optional(),
    sort: z.string().optional(),
    locale: localeSchema,
    page: z.number().default(0), // Page number for pagination
    pageSize: z.number().default(5),
})

const pageFilterSchemaWithLocale = z.object({
    query: z.string().optional(),
    categoryid: z.string().optional(),
    sort: z.string().optional(),
    locale: localeSchema,
    page: z.number().default(0), // Page number for pagination
    pageSize: z.number().default(5), // Number of items per page  
})

const pageFilterSchema = z.object({
    query: z.string().optional(),
    categoryid: z.string().optional(),
    sort: z.string().optional(),
    page: z.number().default(0), // Page number for pagination
    pageSize: z.number().default(5)
})

export const appRouter = router({
    //sliderRoutes
    // sliderData: publicProcedure.query(async () => {
    //     const sliderData = await getSliderData()
    //     return sliderData
    // }),

    // main pages routes
    homeData: publicProcedure.input(z.string()).query(async ({ input }) => {
        const homeData = await getHomeData(input)
        return homeData
    }),
    gameData: publicProcedure.input(gameFilterOptionsSchema).query(async ({ input }) => {
        console.log(input);
        
        const filters = {
            blockchainIds: input.blockchainIds ? input.blockchainIds.split(",") : [],
            engineIds: input.engineIds ? input.engineIds.split(",") : [],
            gameStudioIds: input.gameStudioIds ? input.gameStudioIds.split(",") : [],
            sort: input.sort ? input.sort : "",
            query: input?.query ? input?.query : "",
            page: input.page,
            pageSize: input.pageSize
        }
        const gamesData = await getGamesAllData(filters)
        return gamesData
    }),
    sidebarOptions: publicProcedure.query(async() => {
        const options = await getAllSidebarOptions()
        return options
    }),
    blockchains: publicProcedure.query(async () => {
        const blockchains = await getBlockchains()
        return blockchains
    }),
    gameStudios: publicProcedure.query(async () => {
        const gameStudios = await getGameStudios()
        return gameStudios
    }),
    engines: publicProcedure.query(async () => {
        const engines = await getEngines()
        return engines
    }),
    newsData: publicProcedure.input(pageFilterSchemaWithLocale).query(async ({ input }) => {
        const newsData = await getNewsData(input)
        return newsData
    }),

    articleData: publicProcedure.input(pageFilterSchemaWithLocale).query(async ({ input }) => {
        const articleData = await getarticlesData(input)
        return articleData
    }),
    videoData: publicProcedure.input(pageFilterSchema).query(async ({ input }) => {
        const videoData = await getVideosData(input)
        return videoData
    }),
    eventData: publicProcedure.input(pageFilterSchema).query(async ({ input }) => {
        const eventData = await getEventsData(input)
        return eventData
    }),
    engineData: publicProcedure.input(pageFilterSchema).query(async ({ input }) => {
        const engineData = await getEnginesData(input)
        return engineData
    }),

    // detail pages routes
    articleDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const articleDetailsData = await getArticleDetailPageData(input)
        return articleDetailsData
    }),
    newsDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const newsDetailsData = await getnewsDetailPageData(input)
        return newsDetailsData
    }),
    eventDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const eventDetailsData = await getEventDetailPageData(input)
        return eventDetailsData
    }),
    gameDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const { id, locale } = input
        const gameDetailsData = await getGameRelatedDataForOthers(id, locale)
        return gameDetailsData
    }),
    videoDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const videoDetailsData = await getvideoDetailPageData(input)
        return videoDetailsData
    }),
    engineDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const engineDetailsData = await getEngineDetailPageData(input)
        return engineDetailsData
    }),
    searchPage: publicProcedure.input(queryAndLocaleSchema).query(async ({ input }) => {
        const { query, locale } = input
        const engineDetailsData = await getSearchData(query, locale)
        return engineDetailsData
    }),
    newsSearchData: publicProcedure.input(z.string()).query(async (qry) => {
        const { input } = qry
        console.log(input)
        // const newsData = await getNewsData()
        return ["qry"]
    }),
    featuredArticles: publicProcedure.input(localeSchema).query(async ({ input }) => {
        const featuredArticles = await getfeaturedArticles(input)
        return featuredArticles
    }),
    fetchCategories: publicProcedure.query(async () => {
        const categories = await getCategories()
        return categories
    }),
})

export type AppRouter = typeof appRouter
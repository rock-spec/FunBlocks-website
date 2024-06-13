import getHomeData from "@/controllers/homePageControllers"
import { publicProcedure, router } from "./trpc"
import { getBlockchains, getGameStudios, getEngines, getGameAllData } from "@/controllers/gamePageController"
import { getNewsData } from "@/controllers/newsPageController"
import { getarticlesData, getfeaturedArticles } from "@/controllers/articlePageController"
import { getVideosData } from "@/controllers/videoPageController"
import { getEventsData } from "@/controllers/eventPageController"
import { getEnginesData } from "@/controllers/enginePageController"
import { getArticleDetailPageData } from "@/controllers/articleDetailPageController"
import { z } from "zod"
import { getEventDetailPageData } from "@/controllers/eventDetailPageController"
// import { getGameDetailPageData } from "@/controllers/gameDetailPageController"
import { getGameRelatedData, getCategories } from "@/controllers/utilControllers"
import { getnewsDetailPageData } from "@/controllers/newsDetailPageController"
import { getvideoDetailPageData } from "@/controllers/videoDetailPageController"
import { getEngineDetailPageData } from "@/controllers/engineDetailPageController"
import { getSliderData } from "@/controllers/sliderController"
import getSearchData from "@/controllers/searchController"
import { type Locale } from "@/i18n.config"

const localeSchema = z.string().refine((val) => val === "en" || val === "zh", {
    message: "Invalid locale",
})

const idAndLocaleSchema = z.object({
    id: z.string(),
    locale: localeSchema,
})

const FilterOptionsSchema = z.object({
    blockchainIds: z.string().optional(),
    engineIds: z.string().optional(),
    gameStudioIds: z.string().optional(),
    locale: localeSchema,
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
    gameData: publicProcedure.input(FilterOptionsSchema).query(async ({ input }) => {
        const filters = {
            blockchainIds: input.blockchainIds ? input.blockchainIds.split(",") : [],
            engineIds: input.engineIds ? input.engineIds.split(",") : [],
            gameStudioIds: input.gameStudioIds ? input.gameStudioIds.split(",") : [],
        }
        const gameData = await getGameAllData(filters, input.locale)
        return gameData
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
    newsData: publicProcedure.input(localeSchema).query(async ({ input }: { input: Locale }) => {
        const newsData = await getNewsData(input)
        return newsData
    }),
    // articleData: publicProcedure.query(async (opts:any) => {
    //     const articleData = await getarticlesData(opts)
    //     return articleData
    // }),
    articleData: publicProcedure.input(localeSchema).query(async ({ input }: { input: Locale }) => {
        const articleData = await getarticlesData(input)
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
        const gameDetailsData = await getGameRelatedData(id, locale)
        return gameDetailsData
    }),
    videoDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({input}) => {
        const videoDetailsData = await getvideoDetailPageData(input)
        return videoDetailsData
    }),
    engineDetailsData: publicProcedure.input(idAndLocaleSchema).query(async ({ input }) => {
        const engineDetailsData = await getEngineDetailPageData(input)
        return engineDetailsData
    }),
    searchPage: publicProcedure.input(z.string()).query(async (opts) => {
        const { input } = opts
        const engineDetailsData = await getSearchData(input)
        return engineDetailsData
    }),
    newsSearchData: publicProcedure.input(z.string()).query(async (qry) => {
        const { input } = qry
        console.log(input)
        // const newsData = await getNewsData()
        return ["qry"]
    }),
    featuredArticles: publicProcedure.query(async () => {
        const featuredArticles = await getfeaturedArticles()
        return featuredArticles
    }),
    fetchCategories: publicProcedure.query(async () => {
        const categories = await getCategories()
        return categories
    })
})

export type AppRouter = typeof appRouter
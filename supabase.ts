import { createClient, SupabaseClient } from '@supabase/supabase-js';

// // Supabase configuration
const SUPABASE_URL = process.env["NEXT_PUBLIC_SUPABASE_URL"] as string;
const SUPABASE_KEY = process.env["NEXT_PUBLIC_SUPABASE_KEY"] as string;



class SupabaseInstance {
    static from(arg0: string) {
        throw new Error("Method not implemented.");
    }
    static supabase: SupabaseClient<any, "public", any>

    static getSupabaseInstance() {
        if (!this.supabase) {
            this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        }
        return this.supabase
    }
}

export default SupabaseInstance



// import SupabaseInstance from "../../../supabase";

// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function fetchData(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     let supabase = SupabaseInstance.getSupabaseInstance();
//     try {
//         const { community_name } = req.query;

//         let { data: community, error } = await supabase
//             .from("ForumCommunity")
//             .select("*")
//             .eq("community", community_name)
//             .single();

//         if (error) {
//             throw new Error(error.message);
//         }

//         res.status(200).json({
//             data: community,
//         });
//     } catch (error: any) {
//         throw new Error("error：" + error.message);
//     }
// }
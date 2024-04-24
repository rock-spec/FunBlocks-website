import SupabaseInstance from "../../supabase";

const supabase = SupabaseInstance.getSupabaseInstance()



export const getSliderData = async () => {

    let { data: slider, error } = await supabase
        .from('slider')
        .select('*')



    if (slider) {
        return slider
    } else
        return []
}


import ReactPlayer from "./Reactplayer"

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
    return <ReactPlayer width={"857px"} height={"487px"} url={videoUrl} controls={true} />
}

export default VideoPlayer

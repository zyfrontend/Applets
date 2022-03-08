import httpRequest from "./index"

export function getVideos(offset, limit = 10){
    return httpRequest.get("/top/mv", { offset, limit})
}
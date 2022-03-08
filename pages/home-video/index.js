// pages/home-video/logs.js
import { getVideos } from "../../service/api"
Page({
    data: {
        videos: []
    },
    onLoad: async function (options) {
        const res = await getVideos(0)
        this.setData({videos: res.data.data})
    },
})
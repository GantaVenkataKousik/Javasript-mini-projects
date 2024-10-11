const express = require('express')
const ytdl = require('ytdl-core')
const fs = require('fs')

const app = express()

function downloadYouTubeVideo (url, fileName) {
  fetch(url)
    .then(res => res.blob())
    .then(async file => {
      const videoStream = ytdl(url, { quality: 'highestaudio' })
      const writeStream = fs.createWriteStream(`./downloads/${fileName}`)

      videoStream.pipe(writeStream)

      writeStream.on('finish', () => {
        console.log(`Video downloaded successfully as ${fileName}.`)
      })

      writeStream.on('error', err => {
        console.error('Error downloading video:', err)
        fs.unlinkSync(`./downloads/${fileName}`)
      })
    })
    .catch(() => {
      console.error('Failed to download the YouTube video.')
    })
}

// Example usage
const videoUrl = 'https://www.youtube.com/watch?v=gXuzkwRivfg'
const fileName = 'video.mp4' // Change the file name as needed

downloadYouTubeVideo(videoUrl, fileName)

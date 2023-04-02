const aiData = require('../website/data/index.json')

let data = aiData.map((item) => {
    return item.image_paths.map((image_path, i) => {
        image_path = image_path.replace('results/experiment-1/images/', '')
        return {
            ...item,
            image_path,
            image_path_i: i + 1
        }
    })
}).flat()

data = data.slice(0, 20)

// ../zora-drop/
// - /media contains images
// - _tokens.csv contains the metadata

const fs = require('fs')
const path = require('path')

const mediaDir = path.join(__dirname, '../zora-drop/media')
const tokensPath = path.join(__dirname, '../zora-drop/_tokens.csv')

console.log(mediaDir)

// write the media
if(1) {
    data.map((item) => {
        console.log(item.image_path)
        const src = path.join(__dirname, '../website/public/images/' + item.image_path)
        const dest = path.join(mediaDir, item.image_path)
    
        // fs.mkdirSync(path.dirname(dest), { recursive: true })
        fs.copyFileSync(src, dest)
    })
}

// convert value to a string, escaping any quotes, and thus escaping any commas in the process.
const escapeCsv = (value) => {
    return `"${val.replace(/"/g, '""')}"`
}

// write the csv
const attributes = [
    'Take Prompt',
    'Scene Prompt',
    'Image Prompt',
].map(attr => `attributes[${attr}]`).join(',')
const cols = 'name,description,media,' + attributes

const rows = data.map((item, i) => {
    const name = `${item.take.text} (#${item.take.nft_id}/${item.image_path_i})`
    const description = item.scene_desc
    const media = item.image_path
    console.log(media)

    const row = [
        name, 
        description, 
        media,
        // attributes,
        item.take.text,
        item.scene_desc,
        item.image_prompt,
    ].map(escapeCsv).join(",")

    return row
})

const csv = [cols, ...rows].join('\n')
fs.writeFileSync(tokensPath, csv)



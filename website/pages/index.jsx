import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'


const aiData = require('../data/index.json')

const data = aiData.map((item) => {
  return item.image_paths.map((image_path, i) => {
    image_path = '/' + image_path.replace('results/experiment-1/', '')
    return {
      ...item,
      image_path,
      image_path_i: i + 1
    }
  })
}).flat()


export default function Home() {
  return (
    <>
      <Head>
        <title>The Take Modern</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="container">
          <div>
            <h2>Take Modern</h2>
            <p>The Take Modern is a collection of 532 generative art pieces. It's a collaboration between a mimetic social media, a text-based generative AI, and an image-based generative AI.</p>
            <p>Each hot take was made by a human, and then the ChatGPT AI was given the take and a prompt to generate a scene. The scene was then translated into an image prompt, and rendered by another AI, DALL-E, into a PNG image.</p>
            <p>The piece questions the differences between internet hive minds, generative AI, and human creativity. It also questions the role of the artist in the age of AI.</p>

            <p><strong>Read more:</strong></p>
            <a className="page-link-box" href="https://mirror.xyz/nakamofo.eth/lqAgkVCg_RYDws7ocK4NRcbXhNv_nyqHkIG2EuSadLQ">
              <div>
                The creative process
              </div>
            </a>
          </div>


          {data.map((item, i) => {
            if (i > 100) return null
            return <div className="image">
              <Image src={item.image_path} loading="lazy" width={512} height={512} />
              <div className="caption">
                <h3>
                  <span className="title">{item.take.text}</span>
                </h3>
                <span className="date"><a href={`https://take-xyz.vercel.app/t/${item.take.nft_id}`}>no. {item.take.nft_id}/{item.image_path_i}</a></span>
                <p>{item.scene_desc}</p>
              </div>
            </div>
          })}
          
          </div>

      </main>
    </>
  )
}

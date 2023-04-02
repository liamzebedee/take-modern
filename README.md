the take modern
===============

![image](https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeidazcfy4iar27irauhkqjg53znxkmmnzniwlsbgkc42bbzhpsw2pe&w=1080&q=75)

The AI generated art auto hegemony.

## Run.

```sh
# load pipenv
source ./env/bin/activate
# load openai api key
source .env
# install deps
pipenv install

# now run
python code/gen.py
```

## Notes.

None of this works together yet, but drawing some notes here on how it fits together:

```md
takes are scraped from take.xyz app into `data/takes.json`
`code/gen.py` reads `takes.json`, generates images and index.js in `results/`
this data is copied manually into `website/`
`zora-drop.js` reads from `results` and outputs into `zora-drop/`
```
# OpenEVSE card for Home Assistant

![image](assets/card.png)
![image](assets/card2.png)

This is a Lovelace custom card for @firstof9 [OpenEVSE integration](https://github.com/firstof9/openevse)

## Installation

### HACS (recommended)

( NOT YET AVAILABLE )
This card is available in [HACS](https://hacs.xyz/) (Home Assistant Community Store).
<small>_HACS is a third party community store and is not included in Home Assistant out of the box._</small>

### Manual install

Add openevse-card.js from dist directory to /local/community/openevse-card/openevse-card.js in HA.
Then add ressource from UI ( upper right pencil icon, then 3 dots menu ) :
"/local/community/openevse-card/openevse-card.js"
Javascript module

## Build

install requirements:

```bash
npm -i
```

build:

```bash
npm run build
```

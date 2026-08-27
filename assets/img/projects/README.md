# Project screenshots

The card cover and the detail-page gallery both read from here. Filenames are
referenced by `assets/js/data.js` — dropping a file in with the right name is
enough, no code change needed.

## Format

| | |
|---|---|
| Card cover | 1280 × 720 WebP (16:9, cropped from the top of the page) |
| Gallery shot | 1280 × 800 WebP, uncropped |
| Quality | `-quality 80–82`, which keeps a page screenshot under ~120 kB |

The covers are dimmed and desaturated in CSS (`.card__shot`) so a bright
product page does not fight the dark card; hover restores the real colours.
Feed them full-brightness sources.

```bash
# cover: crop the top 16:9 out of a 1440×900 @2x shot, then downscale
magick shot.png -crop 2880x1620+0+0 +repage -resize 1280x720 -quality 82 name.webp

# gallery: no crop
magick shot.png -resize 1280x800 -quality 80 name.webp
```

## Present

| File | Project |
|---|---|
| `otosleszek.webp` | Ötösleszek AI — cover |
| `otosleszek-tantargyak.webp`, `otosleszek-arak.webp` | Ötösleszek AI — gallery |
| `shop.webp` | Hajnalhozó Webshop — cover |
| `shop-wines.webp`, `shop-tasting.webp`, `shop-vineyards.webp` | Webshop — gallery |
| `helenpanzio.webp` | Helén Panzió — cover |
| `panzio-en.webp`, `panzio-wellness.webp` | Helén Panzió — gallery |
| `hajnalhozo-app.webp` | Hajnalhozó App — cover (**the sign-in screen; replace**) |

## Wanted

Three cards still have no usable cover. Drop the files in under these names
and they appear — `hajnalhozo-app.webp` is already wired, the other two need
their `cover:` line in `data.js` pointed at the new file.

| File | Project | Good subject |
|---|---|---|
| `hajnalhozo-app.webp` | Hajnalhozó App | The dashboard, the parcel map, or a tank/fermentation chart — anything behind the login. Blur or seed any real customer data first. |
| `home-automation.webp` | Home & Site Automation | A Home Assistant dashboard, or the wireless bridge / cellar hardware itself. |
| `homelab.webp` | Homelab Platform | A Grafana board, the Proxmox node view, or ArgoCD's application tree. |

Gallery shots for those three are welcome too — name them
`home-automation-2.webp`, `homelab-2.webp` and so on, then add them to the
project's `detail.gallery` array.

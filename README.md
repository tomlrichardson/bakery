## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `./.cloudcannon/prebuild` | Runs prebuild locally (clones the lake data)     |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## TODO:

- ### Homepage
  - Contact form
    - hook the form up to CC
  - Map below form
  - Setup color variables data file
  - BG and text color for diff sections
  - Setup style variables file and write it to pages/[\...slug]
    - Page max width
    - Header height
    - Page padding
  - Less padding at smaller screens
  - Animation on hero text
    - Fade in
    - Shadow subtly popping out
  - Add secondary button on hero
  - Video bg on hero
  - Add hover states to hero buttons
  - Add hover states to icons in icon grid
  - Make hamburger full screen and do lil animation
  - Slider-by-day component that requires a date input that we use JS to grab the correct slide for each day
- ### Where to buy our loaves
  - Cafe base menu L/R
    - Each cafe has contact info including an address which links to the map below
  - Taste nature menu Slider with cta, with link to map
  - Sliders need to be flippable, but still display text first on mobile 🥲
  - Sliders need more controls eg. autoplay, pagination, next & prev.
  - Map with all the places you can buy a loaf (peek at Venture template's map)
    - Different (custom?) map icons for
      - Taste Nature
      - Maggies, Duck, Goodfoodco
      - All the places we supply
    - Pins need to have links for the cards above to anchor link to
- ### Wholesale
  - Left Right with an explanation & Wholesale Menu
  - Cafe grid
  - Map with all the wholesale customers
  - Form
- ### What
  - What we do left rights
  - Gallery
- ### Stretch goals
  - Individual 'stat' page for every bread
  - Some kind of ordering system, if not a full shop with help from a serverless function

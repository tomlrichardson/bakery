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
  - bg and text color for diff sections
  - CC landing page style rounded corners for sections
  - Less padding at smaller screens
  - Slider-by-day component that requires a date input that we use JS to grab the correct slide for each day
- ### Where to buy our loaves
  - Cafe base menu L/R
  - Taste nature menu Slider with cta
  - Map with all the places you can buy a loaf (peek at ventures)
    - Different (custom?) icons for Taste Nature and the cafes
- ### Wholesale
  - Information with cta to form
  - Full Wholesale Menu
  - Cafe grid
  - Map with all the wholesale customers
  - Form
- ### What
  - What we do left rights
  - Cafe grid
- ### Stretch goals
  - Individual 'stat' page for every bread
  - Some kind of ordering system, if not a full shop with help from a serverless function

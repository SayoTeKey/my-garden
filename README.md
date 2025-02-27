# My Garden

## How to clone and install

(You need node installed)

```bash
git clone "ssh-url"
cd my-garden
npm install
npm run dev
```

## Folder structure:

```
├── package-lock.json
├── package.json
├── public
│ └── vite.svg
├── src
│ ├── App.jsx
│ ├── assets
│ │ ├── fonts
│ │ │ └── Roboto_Condensed
│ │ └── pictures
│ ├── components
│ │ ├── layout
│ │ │ ├── Footer
│ │ │ └── Nav
│ │ │ ├── Nav.css
│ │ │ └── Nav.jsx
│ │ └── pages
│ │ ├── About
│ │ │ ├── About.css
│ │ │ └── About.jsx
│ │ ├── Contact
│ │ │ ├── Contact.css
│ │ │ └── Contact.jsx
│ │ ├── Home
│ │ │ ├── Home.css
│ │ │ └── Home.jsx
│ │ ├── Impressum
│ │ │ ├── Impressum.css
│ │ │ └── Impressum.jsx
│ │ ├── NotFound
│ │ │ ├── NotFound.css
│ │ │ └── NotFound.jsx
│ │ └── Privacy
│ │ ├── Privacy.css
│ │ └── Privacy.jsx
│ ├── css
│ │ ├── fonts.css
│ │ ├── globals.css
│ │ ├── reset.css
│ │ └── theme.css
│ └── main.jsx
└── vite.config.js

```

## Resources:

- https://reactrouter.com/start/library/installation
- https://v5.reactrouter.com/web/guides/quick-start

## FYI, Installed packages:

- react-router-dom: ttps://www.npmjs.com/package/react-router-dom

## TODO:

[] Generate basic html css for privacy and impressum pages.
[] Define which pages the sites need
[x] Setup react-router-dom
[] Generate basic data for plants page
[] create main logic of plants page

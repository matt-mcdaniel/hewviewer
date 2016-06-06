# Hex Viewer
Parse HTML, XML, text editor themes (.tmTheme) and other documents to extract all Hex values and then view the values and colors in a local server.

## Setup
Clone the repository and change working directory.
```
git@github.com:matt-mcdaniel/hexviewer.git && cd hexviewer
```

Run `hexviewer.js` with the path to the file as your argument.
```
node hexviewer.js /absolute/path/to/file.tmTheme
```

Open `localhost:3000` in your browser.
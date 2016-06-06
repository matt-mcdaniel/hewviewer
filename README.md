# Hex Viewer
Parse any document (HTML, CSS, tmTheme, etc) to extract all Hex values and then view the values and colors in a local server.

## Use Case
When modifying theme files, or trying to create a color palette from an existing css file, I often find myself needing a list of all of the hex values within a document. It's easy enough for me to search the document for a hex value, but sometimes I want to see the actual color outputs of those hex values. I've developed a node script that uses regular expressions to search for hex values and concurrently displays the colors.

![image of hex values and respective colors](http://i.imgur.com/EWZVxlg.jpg)

## Setup
Clone the repository and change working directory.
```
git@github.com:matt-mcdaniel/hexviewer.git && cd hexviewer
```

Install dependencies.
```
npm install
```

Run `hexviewer.js` with the path to the file as your argument.
```
node hexviewer.js /absolute/path/to/file.css
```

Open `localhost:3000` in your browser.

---

Alternatively, merely copy `hexviewer.js` and run it with node, specifying the absolute path to the file in question.

```
node hexviewer.js /absolute/path/to/file.css
```

License
----

MIT
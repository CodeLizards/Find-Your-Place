# Oh, the places you'll go! 

A simple app to search the google places library and display results!
## Usage
### Run Locally

`npm install`

### Serve your files on a webpack server 

`npm start`

Then go to localhost:8080.

### For Development to hotload file changes

`webpack`

`webpack --watch`

## Tech Stack and Justifications

### React with Webpack, Babel, npm

I chose React because building an simple clientside app that consists mostly of views, I thought it would be clean and simple without too much state management for overall lightweight and clean code. I also chose it because given the time frame (4 hours), I could build out the views quickly. I also considered AngularJS but I thought for a smaller project a light views framwork would be better. However, in retrospect, I had a lot of difficulties with React and Google Maps API so for quick protyping, I think Angular would have made more sense especially because they are both made by google so they would have played nicely. 

### Google Maps Javascript API with Places Library

I chose the google maps javascript API because of the specifications of the project and because I wanted to show a map and have all the additional build in functions that come with the places library such as maps and autocomplete

### Bootstrap
I chose to delve more into javascript for this application so I wanted to have a quick and easy grid layout and automatic media queries with resizing. 

## Views Architecture
![Sorry, the schema image cannot be displayed. View it at http://i.imgur.com/aSb0AEa.png](http://i.imgur.com/aSb0AEa.png)

## Further Features for better UX

For a better UX, I would implement the autocomplete functionality that the Google Javascript API provides. I ran out of time and was unable to complete that feature. I also thought having a list of places to save for the user would be a good feature. 

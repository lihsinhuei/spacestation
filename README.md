# Main function: 
<span style="color:rgb(107, 16, 121),background: white"> show the real-time location of the international space station and an interactive QA section </span>

Check the live web [here](https://lihsinhuei.github.io/spacestation/)!

-------------------------------
## Note:
One of the API used in this project is using HTTP(insecure), thus it causes "mixed content" issue on GitHub Page(using secure HTTPS).
When an HTTPS website references insecure (HTTP) resources, [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) issue happens. 

Therefore, to see the data updated correctly, you might have to change the browser setting. (Follow the instruction shown in a red block on the website)

-------------------------------


# What are used in this project: 
- ReactJS/Create React App
- HTML
- CSS/CSS grid
- [ISS data API](http://open-notify.org/) (it's the API causes mixed content issue here)
- [leaflet](https://leafletjs.com/)(a map API)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

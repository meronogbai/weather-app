/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const apiKey = '3f4751a98d27d8f410e99e9589eaf508';\nasync function getWeatherData(location) {\n  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;\n  const data = await fetch(endpoint);\n  const weatherData = await data.json();\n  return weatherData;\n}\n\nasync function formattedWeatherData(location) {\n  const data = await getWeatherData(location);\n  return {\n    temp: data.main.temp,\n    city: data.name,\n    country: data.sys.country,\n  };\n}\nformattedWeatherData('jeddah').then(res => console.log(res));\n\n//# sourceURL=webpack://weather-app/./src/index.js?");
/******/ })()
;
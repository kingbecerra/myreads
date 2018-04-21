# React Project - myreads
A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

The project is based on the Udacity myreads starter template: https://github.com/udacity/reactnd-project-myreads-starter


## What You're Getting
Functional application that you can use to categorize your books:
* Currently reading
* Want to read
* Read

## Backend Server

Provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Customization
A rating system has been added to this project. The ratings are provided by the backend server.

## Customization
A rating system has been added to this project. The ratings are provided by the backend server.

# Cloned in the following computers
MyReads has been cloned in the following PCs:

| PC            | DATE           | PATH                                                                                         |
| ------------- | -------------- | -------------------------------------------------------------------------------------------- |
| MiniMAC       | Apr 19, 2018   | Documents/DevelopmentMiniMac/React/myreads                                                   |
| Surface Pro 4 | 2017           |                                                                                              |


## Acknowledgments

* Udacity React Nanodegree program
* React-Starts module. https://www.npmjs.com/package/react-stars

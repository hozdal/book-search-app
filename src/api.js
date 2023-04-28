import axios from "axios";

const search = (searchTerm) =>
  axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&printType=books&orderBy=newest&maxResults=40`
  );

export default search;

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5f26640885msha7c0a98cf0c210cp14c8e2jsnfd82381f8109",
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_KEY
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

import axios from "axios";

// const url = `https://breakingbadapi.com/api/characters?name=Walter%20White`
export const fetchData = async (text) => {
  return await axios.get(
    `https://breakingbadapi.com/api/characters?name=${text}`
  );
};

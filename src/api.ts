import axios, { AxiosResponse } from "axios";

export async function fetchAnime(): Promise<any> {
  try {
    const res: AxiosResponse<any> = await axios.get(
      "http://localhost:4567/titles"
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchCharacters(): Promise<any> {
  try {
    const res: AxiosResponse<any> = await axios.get(
      "http://localhost:4567/charalists"
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

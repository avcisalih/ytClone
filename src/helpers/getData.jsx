import axios from "axios";

// İstek için gerekli ayarlar
const options = {
  headers: {
    "X-RapidAPI-Key": "045cc92e3dmshd04b6cef276db22p11123ejsna8d033c4fa0c",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

// Yapılan bütün isteklerin ortak olarak başlangıç kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

/*
Parametre olarak aldığı url e istek atıp Geriye elde ettiği verileri döndüren
*/
export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);

    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir hata oluştur", err);
  }
};

import axios from "axios";

const BASE_URL =
  "https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json";
export const getBigFiveTestData = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

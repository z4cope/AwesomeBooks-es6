import { DateTime } from "../node_modules/luxon/src/luxon.js";

const getDate = () => {
  const dateWrapper = document.querySelector(".date");
  const date = DateTime.now();
  const { year } = date;
  const { month } = date;
  const { day } = date;
  dateWrapper.innerText = `${year}/${month}/${day}`;
};

export default getDate;

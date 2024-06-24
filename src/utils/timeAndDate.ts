import { TimeData } from "../types";

export const getTime = (ms: number) => {
  const date = new Date(ms);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const getCurrentDate = () => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
};

export const getRemainingTime = (time: number) => {
  const currentTime = new Date().getTime();
  const remainingTime = time - currentTime;

  const date = new Date(remainingTime);

  const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
  const timer = date.toISOString().split("T")[1].split(".")[0];

  return `${days}:${timer}`;
};

export const getNewTimerValue = (oldValue: TimeData) => {
  const totalTime =
    1000 *
      (+oldValue.s.join("") +
        +oldValue.m.join("") * 60 +
        +oldValue.h.join("") * 3600) -
    1000;

  if (totalTime < 0) return 0;

  const newTime = new Date(totalTime)
    .toISOString()
    .split("T")[1]
    .split(".")[0]
    .split(":");
  const h = newTime[0].split("");
  const m = newTime[1].split("");
  const s = newTime[2].split("");

  return { h, m, s };
};

export const getMemorizedTime = (time: null | TimeData) => {
  if (!time) return "Remember timer";

  return `${time.h.join("")}:${time.m.join("")}:${time.s.join("")}`;
};

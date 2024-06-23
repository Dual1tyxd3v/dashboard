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

type Props = {
  type: "h" | "m" | "s";
  time: number;
};
export const getTimerValue = ({ type, time }: Props) => {
  const formatedTime = new Date(time)
    .toISOString()
    .split("T")[1]
    .split(".")[0]
    .split(":");

  switch (type) {
    case "h": {
      return formatedTime[0].split("");
    }
    case "m": {
      return formatedTime[1].split("");
    }
    case "s": {
      return formatedTime[2].split("");
    }
    default:
      return ["0", "0"];
  }
};

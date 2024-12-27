import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function Result() {
  const [searchParams] = useSearchParams();
  const rank = searchParams.get("rank");

  const message = useMemo(() => {
    if (rank === "bronze") {
      return "まだまだですな";
    } else if (rank === "silver") {
      return "もう少し！";
    } else if (rank === "gold") {
      return "お見事！！";
    } else {
      return "お見事";
    }
  }, [rank]);

  const rankImage = useMemo(() => {
    if (rank === "bronze") {
      return "/public/bronze.png";
    } else if (rank === "silver") {
      return "/public/silver.png";
    } else if (rank === "gold") {
      return "/public/gold.png";
    } else {
      return "/public/bronze.png";
    }
  }, [rank]);

  return (
    <div className="flex h-screen w-screen flex-col justify-end bg-base-200">
      <div className="absolute inset-0 m-auto flex w-[700px] items-center justify-center">
        <img className="mask mask-circle" src={rankImage} alt="rank" />
      </div>
      <div className="chat chat-start">
        <img
          className="w-80"
          alt="ramen_tenin"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifk-v6oovaeO438JuH55DE0rUmy82Ltg5LJE9nuw-VbDoTD7bga5dNxf-U51-aHhYGirD4kR0twNxC9kZ48VzI_wD01Hpt7flGrHeW0T_aUZvmJut6ZkPX_CbZVLW2ATocgd2ILrv1BXee/s400/ramen_tenin.png"
        />
        <div className="chat-bubble text-5xl">{message}</div>
      </div>
    </div>
  );
}

export default Result;

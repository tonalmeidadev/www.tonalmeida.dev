import Link from "next/link";
import { useEffect, useState } from "react";

import axios from "axios";
import { cva } from "class-variance-authority";
import { format } from "date-fns";

const led = cva("flex h-[10px] w-[10px] rounded-full", {
  variants: {
    variant: {
      green: "bg-lime-700",
      red: "bg-red-600",
    },
  },
});

const SAO_PAULO_TIME_API_URL =
  "http://worldtimeapi.org/api/timezone/America/Sao_Paulo";

async function fetchSaoPauloTime() {
  const response = await axios.get(SAO_PAULO_TIME_API_URL);
  const datetime = new Date(response.data.datetime);
  const formattedTime = format(datetime, "HH");
  return formattedTime;
}

export function Notification() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    async function checkAvailability() {
      const saoPauloTime = await fetchSaoPauloTime();
      const hour = parseInt(saoPauloTime);
      if (hour >= 8 && hour <= 23) {
        setIsAvailable(false);
      } else {
        setIsAvailable(true);
      }
    }

    checkAvailability();
  }, []);

  return (
    <Link
      href={
        isAvailable
          ? "https://api.whatsapp.com/send?phone=5511960245642"
          : "mailto:oi@tonalmeida.dev"
      }
      className="flex w-fit items-center justify-center gap-1"
    >
      <div className={led({ variant: isAvailable ? "green" : "red" })} />

      <span className="font-custom text-[10px] uppercase leading-3 tracking-widest">
        {isAvailable ? "Available now" : "Not available now"}
      </span>
    </Link>
  );
}

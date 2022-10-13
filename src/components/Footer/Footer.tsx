import { component$, useStore, useClientEffect$ } from "@builder.io/qwik";
import { Icon } from "@components/Global";

export const Footer = component$(() => {
  const clock = useStore({
    hour: 0,
    min: 0,
  });

  useClientEffect$(() => {
    const updateClock = () => {
      const now = new Date();
      clock.hour = now.getHours();
      clock.min = now.getMinutes();
    };
    updateClock();
    const tmrId = setInterval(updateClock, 1000);
    return () => clearInterval(tmrId);
  });

  const h = clock.hour.toString().padStart(2, "0");
  const m = clock.min.toString().padStart(2, "0");

  const currentTime = h + ":" + m;

  return (
    <footer class="flex items-center bg-surface-900 px-2 pt-[2px]">
      <p class="flex items-center gap-1 text-[0.5rem] text-surface-400">
        <Icon className="text-[0.5rem]">schedule</Icon>
        {currentTime}
      </p>
    </footer>
  );
});

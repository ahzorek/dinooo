import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx";

export default function Home(props: PageProps) {
  const count = useSignal(3);
  console.log(props);
  console.log(Deno.env.get("GEOIP"));
  
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <IconBrandDeno class="w-40 h-40" />
        <Counter count={count} />
      </div>
    </div>
  );
}

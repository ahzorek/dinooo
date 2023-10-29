import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx";

export default function Home(props: PageProps) {
  // const count = useSignal(3);
  // console.log(props.state);
  // const ip = props.state.ip
  
  // const res = await fetch(`https://ipapi.co/${ip}/json/ `)
  // const data = await res.json()

  // console.log(data);
  
  
  return (
    <div class="px-4 py-8 mx-auto bg-[#b0bfff]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <IconBrandDeno class="w-40 h-40" />
        {/* <Counter count={count} /> */}
        {props.state.ip}
      </div>
    </div>
  );
}

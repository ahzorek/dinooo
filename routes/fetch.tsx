import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx";


async function getCoord(ip) {
  const res = await fetch(`https://ipapi.co/${ip}/json/ `)
  const data = await res.json()
  return data
}


export default async function Fetch(_req: Request, ctx: RouteContext) {
  const { ip } = ctx.state
  const coord = await getCoord(ip)

  const key = Deno.env.get('OPENWEATHER')

  const { latitude, longitude } = coord;

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`)
  const data = await res.json()

  console.log(data);
    
  return (
    <div class="px-4 py-8 mx-auto bg-[#b0bfff]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <IconBrandDeno class="w-40 h-40"/>
        <h1 class="text-3xl font-bold">and God said: Let DATA BE FETCHED.</h1>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

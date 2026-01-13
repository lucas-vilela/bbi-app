// "use client"
// import { Label } from "@/components/ui/label"
// import {
//   RadioGroup,
//   RadioGroupItem,
// } from "@/components/ui/radio-group"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator";
// import { ExternalLink, Hammer, PackageCheck } from "lucide-react";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function Home() {
//   const [link, setLink] = useState('https://mav-qa.outback.com');
//   const [env, setEnv] = useState('mav-qa.');
//   const [brand, setBrand] = useState('outback');


//   useEffect(() => {
//     setLink(`https://${env}${brand}.com`)
//   }, [env, brand])



//   return (
//     <main className="flex flex-col gap-4 min-h-screen w-full p-10">
//       <div className="w-full">
//         <Card className="w-full">
//           <CardHeader>
//             <CardTitle>Card Title</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//             <CardAction>Card Action</CardAction>
//           </CardHeader>
//           <CardContent>
//             <Link target="_blank" href={link}>
//               <span className="flex items-center gap-2 font-medium">
//                 https://{env && env}{brand}.com<ExternalLink size={12} />
//               </span>
//             </Link>
//           </CardContent>
//           <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter>
//         </Card>
//       </div>
//       <div className="w-full flex gap-4">
//         <div className="w-xs">
//           <Card className="w-full max-w-sm">
//             <CardHeader>
//               <CardTitle>Ambiente</CardTitle>
//               <CardDescription>Escolha qual será o ambiente.</CardDescription>
//               {/* <CardAction>Card Action</CardAction> */}
//             </CardHeader>
//             <CardContent>

//               <RadioGroup defaultValue="mav-qa." >
//                 <p className="flex gap-2 items-center"><span><Hammer size={14} /></span> Low</p>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="mav-dev." id="development" onClick={(e) => { setEnv(e.target.value) }} />
//                     <Label htmlFor="development">Development</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">Dev</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="mav-qa." id="quality" onClick={(e) => { setEnv(e.target.value) }} />
//                     <Label htmlFor="quality">QA</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     {/* <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">Qa</p> */}
//                   </div>
//                 </div>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="mav-stg." id="stage" onClick={(e) => { setEnv(e.target.value) }} />
//                     <Label htmlFor="stage">Stage</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">Stg</p>
//                   </div>
//                 </div>
//                 <Separator className="my-4" />

//                 <p className="flex gap-2 items-center"><span><PackageCheck size={14} /></span> High</p>

//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="mav-preview." id="preview" onClick={(e) => { setEnv(e.target.value) }} />
//                     <Label htmlFor="preview">Preview</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     {/* <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">Prd</p> */}
//                   </div>
//                 </div>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="" id="production" onClick={(e) => { setEnv(e.target.value) }} />
//                     <Label htmlFor="production">Production</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">Prd</p>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </CardContent>
//             {/* <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter> */}
//           </Card>

//         </div>
//         <div className="w-xs">
//           <Card className="w-full max-w-sm">
//             <CardHeader>
//               <CardTitle>Marca</CardTitle>
//               <CardDescription>Escolha qual será a marca do restaurante.</CardDescription>
//               {/* <CardAction>Card Action</CardAction> */}
//             </CardHeader>
//             <CardContent>

//               <RadioGroup defaultValue="outback">
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="outback" id="outback" onClick={(e) => { setBrand(e.target.value) }} />
//                     <Label htmlFor="outback">Outback</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">OBS</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="carrabbas" id="carrabbas" onClick={(e) => { setBrand(e.target.value) }} />
//                     <Label htmlFor="carrabbas">Carrabba's</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">CIG</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="bonefishgrill" id="bonefish" onClick={(e) => { setBrand(e.target.value) }} />
//                     <Label htmlFor="bonefish">Bonefish Grill</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">BFG</p>
//                   </div>
//                 </div>
//                 <Separator className="my-4" />
//                 <div className="flex justify-between rounded-md transition-all duration-300 hover:bg-slate-100 py-1 pl-1 pr-4 w-full">
//                   <div className="flex items-center gap-3">
//                     <RadioGroupItem value="dine-rewards" id="dine-rewards" onClick={(e) => { setBrand(e.target.value) }} />
//                     <Label htmlFor="dine-rewards">Dine Rewards</Label>
//                   </div>
//                   <div className="flex gap-2">
//                     <Separator orientation="vertical" />
//                     <p className="text-sm leading-none font-medium w-7">DR</p>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </CardContent>
//             {/* <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter> */}
//           </Card>

//         </div>
//       </div>
//     </main>
//   );
// }
// import MyCarouselSize from "@/components/my/MyCarousel";
// import MyForm from "@/components/my/MyForm";
// import MyMorphingPopoverCustomTransitionVariants from "@/components/my/MyMorphingPopover";
// import MyClock from "@/components/my/MySlidingNumber";
import { Button } from "@/components/ui/button";
// import { info } from "console";
import Link from "next/link";

export default function Home() {
  let data = {
    moeda: 1800,
    telefone: 984058779
  }
  const novaAba = true
  const env = 'preview'

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="rounded-md p-2 flex flex-col gap-4">
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu`}><Button className="w-full cursor-pointer">Generic</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/restaurant/category/47481`}><Button className="w-full cursor-pointer">Generic - To Go boozy beverages</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/restaurant/category/x`}><Button className="w-full  bg-red-500 cursor-pointer">Generic - category invalid</Button> </Link>
          </div>
          <div className="rounded-md p-2 flex flex-col gap-4">
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucus`}><Button className="w-full cursor-pointer">Secaucus</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucus/category/0`}><Button className="w-full cursor-pointer">Secaucus - category 0</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucus/category/42909`}><Button className="w-full cursor-pointer">Secaucus - desserts</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucus/category/977391`}><Button className="w-full bg-red-500 cursor-pointer">Secaucus - category invalid</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucusx`}><Button className="w-full bg-pink-700 cursor-pointer">Secaucus - restaurant invalid</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucusx/category/42909`}><Button className="w-full bg-pink-700 cursor-pointer">Secaucus - restaurant invalid category valid</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/secaucusx/category/97731`}><Button className="w-full bg-amber-500 cursor-pointer">Secaucus - restaurant and category invalid</Button> </Link>
          </div>
          <div className="rounded-md p-2 flex flex-col gap-4">
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tyler`}><Button className="w-full cursor-pointer" >Tyler</Button>  </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tyler/category/0`}><Button className="w-full cursor-pointer" >Tyler - category 0</Button>  </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tyler/category/42910`}><Button className="w-full cursor-pointer" >Tyler - kids menu</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tyler/category/392581`}><Button className="w-full bg-red-500 cursor-pointer">Tyler - category invalid</Button>  </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tylerx`}><Button className="w-full bg-pink-700 cursor-pointer">Tyler - restaurant invalid</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tylerx/category/42910`}><Button className="w-full bg-pink-700 cursor-pointer">Tyler - restaurant invalid category valid</Button> </Link>
            <Link target={novaAba ? '_blank' : ''} className="w-full" href={`https://mav-${env}.outback.com/menu/tylerx/category/39255`}><Button className="w-full bg-amber-500 cursor-pointer">Tyler - restaurant and category invalid</Button> </Link>

          </div>
        </div>


        {/* <MyCarouselSize />
        <MyMorphingPopoverCustomTransitionVariants />
        <MyClock />
        <MyForm data={data} /> */}
      </main >

    </div >
  );
}


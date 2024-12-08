// import React from 'react'
// import Image from 'next/image'
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function page() {
//   return (
//     <div className='w-full flex'>
//      <div className="first hidden sm:flex w-[25%]">
//         <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
//       </div>
//       <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//         <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
//             <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
//                 <div>
//                     <Image src={'/View.png'} alt='' width={492} height={360}/>

//                 </div>
//                 <div className=' flex items-center justify-between gap-2 lg:gap-0'>
//                 <Image src={'/View 1.png'} alt='' width={148} height={124}/>
//                 <Image src={'/View 2.png'} alt='' width={148} height={124}/>
//                 <Image src={'/View 3.png'} alt='' width={148} height={124}/>
//                 </div>
//             </div>
//             <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
//   <Image
//     src={"/Detail Car (1).png"}
//     alt="Detail Car"
//     width={492}
//     height={392}
//     className="w-full h-auto rounded-t-xl object-cover"
//   />

//   <div className="p-4 flex  items-center gap-4">
//     <div className="flex items-center justify-between w-full">
//       <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
//         $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
//       </h1>
//     </div>
//     <Link href={"/payment"}>
//       <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
//         Rent Now
//       </button>
//     </Link>
//   </div>
// </div>
//         </section>
//         <section className=' w-full flex items-center justify-center'>
//             <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex'/>
//             <Image src={'/Reviews (1).png'} alt='' width={492} height={384} className=' md:hidden'/>
//         </section>
//         <section className="popular w-full flex flex-col gap-5">
//         <div className="first w-full flex items-center justify-between px-10 xl:px-14">
//           <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
//           <Link href={"/categories"}>
//             <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
//               View All
//             </h1>
//           </Link>
//         </div>
//         <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sport</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>

         
//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sport</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/car (1).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
//             </CardFooter>
//           </Card>

        
//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>Sedan</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>
//         </div>
//       </section>
//       <section className="popular w-full flex flex-col gap-5">
//         <div className="first w-full flex items-center justify-between px-10 xl:px-14">
//           <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
//           <Link href={"/categories"}>
//             <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
//               View All
//             </h1>
//           </Link>
//         </div>
//         <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
//         <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>

          
//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv.png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>

          
//           <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//             <CardHeader>
//               <CardTitle className="w-full flex items-center justify-between">
//                 All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
//               </CardTitle>
//               <CardDescription>SUV</CardDescription>
//             </CardHeader>
//             <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//               <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//               <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//             </CardContent>
//             <CardFooter className="w-full flex items-center justify-between">
//               <p>
//                 $99.00/<span className="text-gray-500">day</span>
//               </p>
//               <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
//             </CardFooter>
//           </Card>

//         </div>
//       </section>
//       </div>
//     </div>
//   )
// }




import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";
import { Input } from "@/app/component/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">Phone Number</label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Address</label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

    
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <Image src={"/Pick - Up (1).png"} alt="Pick Up" width={92} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="fourth">
              <Image src={"/Drop - Off (1).png"} alt="Drop Off" width={104} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Image src={"/Credit Card.png"} alt="Credit Card" width={804} height={308} />
            <Image src={"/PayPal.png"} alt="PayPal" width={804} height={56} />
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={804} height={56} />
          </CardContent>
        </Card>

      
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <Image src={"/Confirmation.png"} alt="Confirmation" width={804} height={136} />
            <Link href={'/admin'}>
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
              Rent Now
            </button></Link>
            
            <Image src={"/Safe Data.png"} alt="Safe Data" width={548} height={100} />
          </CardContent>
        </Card>
      </div>
      <div className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">
        <Image src={"/Rental Summary.png"} alt="Rental Summary" width={492} height={568} className=" lg:w-[492px] h-[568px]"  />
      </div>
    </div>
  );
}
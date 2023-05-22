import Image from "next/image"

export function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="m-auto flex shrink-0 flex-col gap-4 px-6 text-gray-600 md:max-w-6xl md:flex-row">
        <div className="md:w-1/2">
          <Image src="/img/owls.png" alt="A picture of some owls" width={612} height={344} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">A beautiful about us</h2>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis
            delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id
            consequatur atque doloremque!
          </p>
          <p className="mt-4 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus
            nesciunt dicta veniam aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </div>
  )
}

// <div className="bg-white py-16">
//   <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//     <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
//       <div className="">
//         <Image className="lg:w-5/12" src="/img/owls.png" alt="A picture of some owls" width={612} height={344} />
//       </div>
//       <div className="md:w-7/12 lg:w-6/12">
//         <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">A beautiful about us</h2>
//         <p className="mt-6 text-gray-600">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
//           perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
//           Officiis id consequatur atque doloremque!
//         </p>
//         <p className="mt-4 text-gray-600">
//           Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus
//           nesciunt dicta veniam aspernatur quam mollitia.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

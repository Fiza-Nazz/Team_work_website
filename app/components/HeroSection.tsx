// app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#fefefe] py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-end justify-between w-full relative gap-4">
          {/* Model 1 */}
          <div className="w-44 h-[500px] relative">
            <Image
              src="/images/image21.png"
              alt="Model 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Model 2 */}
          <div className="w-44 h-[500px] relative">
            <Image
              src="/images/image7.png"
              alt="Model 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 py-4 z-10">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wide">MEJIWOO</h1>
            <p className="text-xl text-gray-600 mt-1 mb-2">미지우</p>
            <div className="w-12 h-[2px] bg-gray-500 mx-auto mb-4" />
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              make your everyday look prettier
              <br />
              with MEJIWOO Korean Made
            </p>
          </div>

          {/* Model 3 */}
          <div className="w-44 h-[500px] relative">
            <Image
              src="/images/image 10.png"
              alt="Model 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Model 4 */}
          <div className="w-44 h-[500px] relative">
            <Image
              src="/images/image 20.png"
              alt="Model 4"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Tablet + Mobile View */}
        <div className="lg:hidden flex flex-col gap-6 items-center text-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-40 h-[400px]">
              <Image src="/images/image21.png" alt="Model 1" fill className="object-cover" />
            </div>
            <div className="relative w-40 h-[400px]">
              <Image src="/images/image7.png" alt="Model 2" fill className="object-cover" />
            </div>
          </div>

          <div className="px-4">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wide">MEJIWOO</h1>
            <p className="text-lg text-gray-600 mt-1 mb-2">미지우</p>
            <div className="w-12 h-[2px] bg-gray-500 mx-auto mb-3" />
            <p className="text-gray-600 text-sm leading-relaxed">
              make your everyday look prettier
              <br />
              with MEJIWOO Korean Made
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-40 h-[400px]">
              <Image src="/images/image10.png" alt="Model 3" fill className="object-cover" />
            </div>
            <div className="relative w-40 h-[400px]">
              <Image src="/images/image20.png" alt="Model 4" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#fefefe] py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-center items-end gap-8 xl:gap-12 relative">
          <div className="flex-shrink-0">
            <img src="/images/image 21.png" alt="Model 1" className="h-[480px] xl:h-[520px] object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/image 7.png" alt="Model 2" className="h-[500px] xl:h-[540px] object-contain" />
          </div>

          {/* Center Text */}
          <div className="text-center px-6 py-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-2 tracking-wider">MEJIWOO</h1>
            <p className="text-gray-600 mb-3 text-lg tracking-wide">미지우</p>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-sm xl:text-base text-gray-600 leading-relaxed max-w-xs">
              make your everyday look prettier <br />
              with MEJIWOO Korean Made
            </p>c:\Users\Fizza\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\AC10EC1ACE51B2D973CD87973A98D3AB\WhatsApp Image 2025-06-12 at 04.30.06_5557862a.jpg
          </div>

          <div className="flex-shrink-0">
            <img src="/images/image 10.png" alt="Model 3" className="h-[480px] xl:h-[520px] object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/image 20.png" alt="Model 4" className="h-[460px] xl:h-[500px] object-contain" />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center">
          <div className="flex justify-center items-end gap-6 mb-8">
            <img src="/images/image 21.png" alt="Model 1" className="h-[350px] object-contain" />
            <img src="/images/image 7.png" alt="Model 2" className="h-[370px] object-contain" />
          </div>

          <div className="text-center mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wider">MEJIWOO</h1>
            <p className="text-gray-600 mb-3 text-lg tracking-wide">미지우</p>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 leading-relaxed">
              make your everyday look prettier <br />
              with MEJIWOO Korean Made
            </p>
          </div>

          <div className="flex justify-center items-end gap-6">
            <img src="/images/image 10.png" alt="Model 3" className="h-[350px] object-contain" />
            <img src="/images/image 20.png" alt="Model 4" className="h-[330px] object-contain" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="/images/image 21.png" alt="Model 1" className="h-[280px] w-full object-contain" />
            <img src="/images/image 7.png" alt="Model 2" className="h-[280px] w-full object-contain" />
          </div>

          <div className="text-center mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-6 mx-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wider">MEJIWOO</h1>
            <p className="text-gray-600 mb-3 tracking-wide">미지우</p>
            <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 leading-relaxed">
              make your everyday look prettier <br />
              with MEJIWOO Korean Made
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/image 10.png" alt="Model 3" className="h-[280px] w-full object-contain" />
            <img src="/images/image 20.png" alt="Model 4" className="h-[280px] w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
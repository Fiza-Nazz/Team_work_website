// components/TestimonialCard.tsx
import Image from 'next/image';

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({ image, name, title, review, rating }: TestimonialProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border max-w-[360px] h-[620px] flex flex-col items-center">
      <div className="w-full h-[300px] relative rounded-md overflow-hidden">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>

      <div className="mt-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[15px] font-semibold">{title}</h3>
          <p className="text-[13px] text-gray-500 mt-1">- {name}</p>

          <div className="flex justify-center mt-1">
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index} className="text-yellow-400 text-[14px]">★</span>
            ))}
          </div>
        </div>

        <p className="text-[13px] text-gray-600 mt-3 leading-relaxed px-2">"{review}"</p>
      </div>
    </div>
  );
}

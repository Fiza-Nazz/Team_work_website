// components/TestimonialSection.tsx
import TestimonialCard from './TestimonialCard';

export default function TestimonialSection() {
  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">What They Said</h2>

      <div className="flex justify-center gap-8 flex-wrap">
        <TestimonialCard
          image="/image_01.jpg"
          name="Lisa"
          title="Essence Long Denim"
          review="I like this pants. It's nice and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes."
          rating={5}
        />
        <TestimonialCard
          image="/image_02.jpg"
          name="Celine"
          title="Andcable Knit Top"
          review="I like knitted materials, bought this shirt because the design is very pretty and comfortable to wear casually. The material is so neat and good. I love shopping here and I’ll be a frequent customer at the store."
          rating={5}
        />
        <TestimonialCard
          image="/image_03.jpg"
          name="Tiffany"
          title="Candy Stripe Boxy"
          review="This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha."
          rating={5}
        />
      </div>
    </div>
  );
}

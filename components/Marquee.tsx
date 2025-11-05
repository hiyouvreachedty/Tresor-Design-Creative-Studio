
import React from 'react';

const logos = [
  'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg',
  'https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg',
];

const MarqueeItem: React.FC = () => (
  <div className="flex-shrink-0 flex items-center justify-center space-x-16 mx-8">
    {logos.map((logo, index) => (
      <img key={index} className="h-8 object-contain" src={logo} alt={`Client Logo ${index + 1}`} />
    ))}
  </div>
);

const Marquee: React.FC = () => {
  return (
    <div className="relative mt-24 w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#111111]"></div>
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#111111]"></div>
      <div className="flex animate-marquee">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </div>
  );
};

export default Marquee;

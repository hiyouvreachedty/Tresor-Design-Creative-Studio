import React, { useState } from 'react';

const marqueePhrases = [
  "Design Everything", "Adopt New Realities", "Use Your Headlights", "Make It Matter",
  "Rally Others On", "Choose the Future", "Seek Out Shadows", "Reverse Engineer with Curiosity",
  "Garner Conviction", "Dream Without Limits"
];

const MarqueeContent: React.FC = () => (
  <div className="flex-shrink-0 flex items-center">
    {marqueePhrases.map((phrase, index) => (
      <React.Fragment key={index}>
        <span className="px-4 text-xs tracking-wider font-black uppercase">{phrase}</span>
        <span className="px-4 text-xs tracking-wider font-black text-gray-500">//</span>
      </React.Fragment>
    ))}
  </div>
);

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -200, y: -200 });
  };

  return (
    <header className="relative z-10 shrink-0">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-4">
            <div className="spinner1">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="spinner2"></div>
            <div className="spinner3"></div>
        </div>

        <div 
          className="flex-1 mx-4 h-6 overflow-hidden relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dimmed, Blurred Layer */}
          <div className="absolute inset-0 flex items-center text-gray-600" style={{ filter: 'blur(1.5px)' }}>
             <div className="animate-marquee whitespace-nowrap flex">
                {Array.from({ length: 4 }).map((_, i) => <MarqueeContent key={i} />)}
             </div>
          </div>
          {/* Highlighted, Glowing Layer */}
          <div 
            className="absolute inset-0 flex items-center text-[--color-off-white] transition-all duration-300 ease-out"
            style={{
              clipPath: `circle(80px at ${mousePosition.x}px ${mousePosition.y}px)`,
              textShadow: '0 0 8px rgba(245, 245, 245, 0.5)',
            }}
          >
             <div className="animate-marquee whitespace-nowrap flex">
                {Array.from({ length: 4 }).map((_, i) => <MarqueeContent key={i} />)}
             </div>
          </div>
        </div>
        <button onClick={onContactClick} className="contact-btn rounded-md font-bold text-xs">
          CONTACT
        </button>
      </div>
      <div className="flex items-center justify-center py-4">
        <h1 className="text-center text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none text-[--color-off-white] uppercase" style={{fontFamily: "'Inter', sans-serif"}}>
          TRESOR DESIGN
        </h1>
      </div>
      <div className="w-full border-b border-white/20"></div>
       <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .contact-btn {
            --c: #000; /* text color */
            background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
              var(--color-neon-green); /* background color */
            color: #0000;
            border: none;
            transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
            text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
              calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
            outline-offset: .1em;
            transition: 0.3s;
            padding: 0.5rem 1rem;
          }

          .contact-btn:hover,
          .contact-btn:focus-visible {
            --_p: 0%;
            --_i: 1;
          }

          .contact-btn:active {
            text-shadow: none;
            color: var(--c);
            box-shadow: inset 0 0 9e9q #0005;
            transition: 0s;
          }
          
          /* Spinner 1 animation */
          .spinner1 {
            position: relative;
            width: 28px;
            height: 28px;
            animation: spinner1-anim 1.25s infinite linear;
          }

          .spinner1 div {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-left: 1.8px solid transparent;
            border-right: 1.8px solid transparent;
            border-bottom: 5.4px solid var(--color-neon-green);
            transform-origin: center 5.4px;
          }

          .spinner1 div:before,
          .spinner1 div:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            display: block;
            border-left: 5.4px solid transparent;
            border-right: 5.4px solid transparent;
            border-bottom: 3.6px solid var(--color-neon-green);
          }

          .spinner1 div:before {
            transform: translate(-5.4px, 3.6px) rotate(35deg);
          }

          .spinner1 div:after {
            transform: translate(-5.4px, 3.6px) rotate(-35deg);
          }

          .spinner1 div:nth-child(1) { transform: translate(-50%, -5.4px) rotate(51.42857deg) translate(0, 320%); }
          .spinner1 div:nth-child(2) { transform: translate(-50%, -5.4px) rotate(102.85714deg) translate(0, 320%); }
          .spinner1 div:nth-child(3) { transform: translate(-50%, -5.4px) rotate(154.28571deg) translate(0, 320%); }
          .spinner1 div:nth-child(4) { transform: translate(-50%, -5.4px) rotate(205.71429deg) translate(0, 320%); }
          .spinner1 div:nth-child(5) { transform: translate(-50%, -5.4px) rotate(257.14286deg) translate(0, 320%); }
          .spinner1 div:nth-child(6) { transform: translate(-50%, -5.4px) rotate(308.57143deg) translate(0, 320%); }
          .spinner1 div:nth-child(7) { transform: translate(-50%, -5.4px) rotate(360deg) translate(0, 320%); }

          @keyframes spinner1-anim {
            to {
              transform: rotate(360deg);
            }
          }

          /* Spinner 2 animation */
          .spinner2 {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            color: var(--color-neon-green);
            background: linear-gradient(currentColor 0 0) center/100% 2px,
                        linear-gradient(currentColor 0 0) center/2px 100%,
                        radial-gradient(farthest-side,#0000 calc(100% - 4px),currentColor calc(100% - 3px)),
                        radial-gradient(circle 4px,currentColor 94%,#0000 0);
            background-repeat: no-repeat;
            animation: spinner2-anim 1s infinite linear;
            position: relative;
          }

          .spinner2::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: inherit;
            transform: rotate(45deg);
          }

          @keyframes spinner2-anim {
            to {
              transform: rotate(.5turn);
            }
          }

          /* Spinner 3 animation */
          .spinner3 {
            position: relative;
            width: 28px;
            height: 28px;
            transform: rotate(45deg);
            overflow: hidden;
          }
          .spinner3:after{
            content: '';
            position: absolute;
            inset: 4px;
            margin: auto;
            background: var(--color-background);
          }
          .spinner3:before{
            content: '';
            position: absolute;
            inset: -8px;
            margin: auto;
            background: var(--color-neon-green);
            animation: spinner3-anim 2s linear infinite;
          }
          @keyframes spinner3-anim {
            0%,10% {
              transform: translate(-32px, -32px) rotate(-45deg)
            }
            90%,100% {
              transform: translate(32px, 32px) rotate(-45deg)
            }
          }
        `}</style>
    </header>
  );
};

export default Header;
import GiftButton from "./GiftButton";
import Cake from "./Cake";
import Sparkles from "./Sparkles";
export default function GlassCard({ opened, setOpened }) {
    return (
        <div className="relative flex flex-col items-center">
            
            {opened && <Sparkles />}
            <div
  className={`
    w-85
    ${opened ? "h-130" : "h-64"}
    rounded-4xl
    border border-white/15
    bg-white/10
    backdrop-blur-xl
    shadow-2xl
    flex flex-col items-center justify-between
    p-8 
    transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
    animate-float
    before:absolute
before:inset-0
before:rounded-4xl
before:bg-linear-to-b
before:from-white/10
before:to-transparent
before:pointer-events-none
relative overflow-hidden
  `}
>          
{!opened && (
  <>
    <div className="text-6xl mb-6">🎁</div>

    <h2 className="text-2xl font-serif text-white">
      for Kudirat
    </h2>

    <p className="mt-3 text-zinc-400 text-center max-w-xs">
      Alabi made something for you.
    </p>
  </>
)}  
            {opened && (
  <h1 className="text-4xl font-serif text-white mb-4">
    Happy Birthday!
  </h1>
)}
{opened && (
  <div
    className="
      transition-all duration-700 delay-300
      opacity-100 translate-y-0
    "
  >
    <Cake />
  </div>
)}
{opened && (
  <p
    className="
      text-zinc-300 text-center
      transition-all duration-700 delay-700
      opacity-100 translate-y-0
    "
  >
    Happy Birthday, Kudirat! 🎉

I know this is a little different... maybe even a little childish,

I wasn't really sure what to write here, but I hope this little project gives you a reason to smile today.

I hope you have a really good day, and I hope this new age treats you kindly.

Take care of yourself, and enjoy your day. 🌹

— Alabi
  </p>
)}
            
            </div>
<div
  className={`
    mt-8
    overflow-hidden
    transition-all duration-500
    ${
      opened
        ? "opacity-0 scale-75 h-0 mt-0"
        : "opacity-100 scale-100 h-auto mt-8"
    }
  `}
>
  <GiftButton onClick={() => setOpened(true)} />
</div>
       </div>
        
    );
}
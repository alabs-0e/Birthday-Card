export default function GiftButton({ onClick }) {
    return (
        <button onClick={onClick} className=" mt-8 px-8 py-3 rounded-full bg-linear-to-r from-violet-300 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/30 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-violet-400/40 hover:shadow-xl">
            Open →
        </button>
    );
}
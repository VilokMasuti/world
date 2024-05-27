
const MagicButon = ({  title,
      icon,
      position,
      handleClick,
      otherClasses,}:{  title: string;
            icon: React.ReactNode;
            position: string;
            handleClick?: () => void;
            otherClasses?: string;}) => {
  return (
      <button
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={handleClick}
    >
      <span className="" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`
             flex   px-7 text-sm font-medium tracking-wider ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  )
}

export default MagicButon
export default function ColumnRule() {
  return (
    <div className="flex items-center justify-center gap-4 mx-auto w-full max-w-[220px] opacity-75 my-4">
      <div className="flex-1 h-px bg-stoneline" />
      <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] flex-shrink-0">
        <path
          d="M6 21h12M7 21V8h10v13M4 8h16L12 3z"
          stroke="#A9793D"
          strokeWidth="1.3"
        />
      </svg>
      <div className="flex-1 h-px bg-stoneline" />
    </div>
  );
}

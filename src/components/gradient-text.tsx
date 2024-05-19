import clsx from "clsx";

const GradientText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        "select-none bg-gradient-to-r from-violet-500 via-cyan-600 to-emerald-500 bg-size-200 bg-clip-text bg-pos-100 font-title text-8xl text-transparent transition-all duration-500 ease-in-out group-hover:bg-pos-0",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;

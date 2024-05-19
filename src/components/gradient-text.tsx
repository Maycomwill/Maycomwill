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
        "bg-size-200 bg-pos-100 group-hover:bg-pos-0 select-none bg-gradient-to-r from-violet-500 via-cyan-600 to-emerald-500 bg-clip-text font-title text-8xl text-transparent transition-all duration-500 ease-in-out",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;

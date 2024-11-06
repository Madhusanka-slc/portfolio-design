import { twMerge } from 'tailwind-merge'; // Ensure tailwind-merge is imported
import grainImage from '@/assets/images/grain.jpg';

export const Card = ({ className, children, ...other }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 " +
        "after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-10 after:outline after:-outline-offset-2 " +
        "after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};

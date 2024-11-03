import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import HeroOrbit from '@/components/HeroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Shapes from '@/components/Shapes'

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <HeroOrbit size={800} rotation={-72} >
          <StarIcon className="size-28 text-emerald-300"></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} >
          <StarIcon className="size-12 text-emerald-300"></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} >
          <StarIcon className="size-8 text-emerald-300"></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} >
          <SparkleIcon className="size-8 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} >
          <SparkleIcon className="size-5 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} >
          <SparkleIcon className="size-10 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} >
          <SparkleIcon className="size-14 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} >
          <SparkleIcon className="size-3 rounded-full text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} >
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} >
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <div className='lg:size-[1220px] md:size-[1120px] size-[1020px] shape-center'>
        <Shapes color={"#0d1117"} intensity={20} distort={0.8} speed={2} />
        </div>
        <div className='lg:size-[1120px] md:size-[1020px] size-[920px] shape-center'>
        <Shapes color={"#0d1117"} intensity={15} distort={0.6} speed={2} />
        </div>
        <div className='lg:size-[1020px] md:size-[920px] size-[820px] shape-center'>
        <Shapes color={"#0d1117"} intensity={10} distort={0.6} speed={2} />
        </div>
        <div className='lg:size-[820px] md:size-[720px] size-[620px] shape-center'>
        <Shapes color={"#0d1117"} intensity={7} distort={0.6} speed={2} />
        </div>
      </div>



      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt='Person peeking from behind laptop'></Image>
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialized in transforming designs into functional, high-performing web applications. Let's discuss your next projects.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

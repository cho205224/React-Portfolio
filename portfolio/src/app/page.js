import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="items-center justify-items-center
                    container mx-auto p-8 pb-20 sm:p-20
                    font-[family-name:var(--font-geist-sans)]">
      <div className="items-center justify-items-center relative">
        <div className="opacity-10">
          <div className="absolute top-0 left-0 sm:w-[600px] sm:h-[600px] 
                          w-[300px] h-[300px] bg-purple-700/50 rounded-full
                          blur-3xl">

          </div>
          <div className="absolute top-4 left-4 sm:w-[400px] sm:h-[400px] 
                          w-[150px] h-[150px] bg-purple-500/60 rounded-full
                          blur-2xl">

          </div>
          <div className="absolute top-8 left-8 sm:w-[300px] sm:h-[300px] 
                          w-[100px] h-[100px] bg-purple-400/70 rounded-full
                          blur-2xl">

          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-light">
          Christopher Ho 
        </h1>
        <h2 className="text-3xl text-purple-600">
            Software Engineer
        </h2>
        <p className="mt-6 text-xl text-grey-300 leading-8">
          Stuff about me put here
        </p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-purple-500/30
                             border border-gray-600
                             hover:border-purple-500 font-medium">About Me</button>
          <button className="px-8 py-3 rounded-lg bg-purple-500/30
                             border border-gray-600
                             hover:border-purple-500 font-medium">Contact</button>
        </div>
      </div>
      <ProjectSection />
    </div>
  );
}

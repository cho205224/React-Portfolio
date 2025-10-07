const ProjectSection = () => {
    const projects = [
        {
            title: "MapChat",
            tags: ["React", "Firebase"]
        },
        {
            title: "Smart Meter Data Encryption",
            tags: ["React", "Firebase"]
        },
        {
            title: "Sentiment Analysis LR/NB",
            tags: ["Python"]
        },
        {
            title: "One-Dimensonal Wave Equation",
            tags: ["Julia"]
        }
    ];
    return (
        <section 
            id="projects" 
            className="items-center justify-items-center px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-cent">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index}
                         className="bg-gray-800/30 backdrop-blur-sm rounded-lg 
                                    p-6 border border-gray-700/50 hover:border-purple-500/50
                                    transition-colors hover:shadow-sm">
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                            <div className="flex flex-warp gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-0.5 text-xs rounded-full
                                                  bg-purple-500/20 text-purple-200 border
                                                  border-purple-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection;
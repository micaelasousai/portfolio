export const HomeSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight"> 
                    <span className="opacity-0 animate-fade-in"> Hi,</span>
                    <span className="opacity-0 animate-fade-in-delay-1"> I'm</span>
                    <span className="text-foreground opacity-0 animate-fade-in-delay-2"> Micaela</span>
                    <span className="opacity-0 animate-fade-in-delay-3"> Sousa</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    A software developer with a data-driven mindset and a love for learning, dedicated to turning complex business problems into effective solutions for clients.
                </p>

            </div>
        </div>
    </section>;
};
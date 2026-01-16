import professionalPic from "../assets/professional_pic.jpg";

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                    <div className="space-y-6">
                        <h3></h3>
                        <p>
                            I’m a computer science graduate with experience in software development and data analytics. 
                            I’ve built everything from fraud detection pipelines to full-stack apps and dashboards across industries like fintech and music. 
                            I enjoy collaborating with teams and learning new technologies.
                        </p>
                    </div>
                    <img src={professionalPic} alt="Professional picture" className="w-80"/>
                </div>
            </div>            
        </section>);
};
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div
                        className="hero h-96"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/c3dNQxQ/istockphoto-1498170916-612x612.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="animate__animated animate__swing mb-5 text-5xl font-bold">Join Hands, Make a Difference</h1>
                                <p className="mb-5">
                                Empowering communities through the spirit of volunteerism. Whether it's lending a hand, sharing your skills, or supporting a noble cause, every effort counts. Together, let's create meaningful change and build a brighter future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div
                        className="hero h-96"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/Lr7v342/istockphoto-1996175547-612x612.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="animate__animated animate__wobble mb-5 text-5xl font-bold">Empowering Lives</h1>
                                <p className="mb-5">
                                Discover the power of collaboration and community service. Volunteers join forces to organize and deliver essential resources, bringing hope and support to those in need. Together, we can inspire change and uplift communities for a better tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div
                        className="hero h-96"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/HGXyQ4W/istockphoto-2153149091-612x612.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="animate__animated animate__tada mb-5 text-5xl font-bold">Planting Hope for a Greener Future</h1>
                                <p className="mb-5">
                                Join our volunteer community in creating a sustainable tomorrow. Through tree planting and environmental conservation, we nurture the earth and foster greener spaces for generations to come. Be part of the change—every tree planted today shapes a healthier planet for the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;
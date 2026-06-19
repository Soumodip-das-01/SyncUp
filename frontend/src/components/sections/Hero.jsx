import Button from "../ui/Button";

export default function Hero() {
    return (
        <>
            <section className="min-h-[70vh] flex items-center justify-center px-6 flex-col py-32">
                <div className="max-w-4xl text-center">
                    <h1 className="text-6xl text-white mb-6">
                        Connect.
                        <span className="text-sky-500">
                            {" "}Share.
                        </span>
                        <span className="text-violet-500">
                            {" "}Sync.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10">
                        Real-time chat.
                        Dynamic social feeds.
                        Meaningful connections.

                        Built for the next generation..
                    </p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button className="px-7 py-3">
                        Get Started
                    </Button>
                    <Button variant="ghost">
                        Learn More
                    </Button>
                </div>
            </section>
        </>
    )
}
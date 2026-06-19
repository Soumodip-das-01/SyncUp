import { MessageCircle, Image, Bell } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <MessageCircle size={40} />,
            title: "Real Time Chat",
            desc: "Connect instantly with friends and family"
        },
        {
            icon: <Image size={40} />,
            title: "Social Feed",
            desc: "Share your moments and discover new stories"
        },
        {
            icon: <Bell size={40} />,
            title: "Instant Notifications",
            desc: "Never miss messages, likes or updates"
        }
    ]
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-4 text-gray-600">
                    Why SyncUp?
                </h2>
                <p className="text-gray-400 text-center mb-16">
                    Everything you need to stay connected
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="p-8 rounded-3xl border border-gray-800 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2">
                                <div className="text-sky-500 mb-6">
                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-gray-700">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400">
                                    {feature.desc}
                                </p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section >
    )
}
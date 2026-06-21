export default function Stats() {
    const stats = [
        { value: "10K+", label: "Messages Sent" },
        { value: "50K+", label: "Posts Shared" },
        { value: "1M+", label: "Connections Made" },
    ];

    return (
        <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl border border-gray-800"
                        >
                            <h2 className="text-5xl font-bold text-sky-500 mb-4">
                                {stat.value}
                            </h2>

                            <p className="text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}
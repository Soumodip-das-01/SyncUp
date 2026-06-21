import Button from "../ui/Button";

export default function CTA() {
    return (
        <section className="text-gray-600 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-5xl font-bold">
                    Ready to Join SyncUp
                </h2>
                <p className="text-gray-400 mb-8">
                    Connect with friends, share moments,
                    and chat in real time.
                </p>
                <Button>
                    Get Started
                </Button>
            </div>
        </section>
    )
}
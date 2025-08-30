import { Button } from "./button"

export default () => {
    return (
        <div className="flex flex-col justify-between bg-primary/90 p-4 rounded-2xl h-50 promotion">
            <div className="promote-text">
                <h1 className="font-bold uppercase">Upgrade to Pro</h1>
                <h2 className="font-semibold text-2xl">
                    <span className="text-black/50 line-through">$20</span> <span>$15</span>/mo
                </h2>
            </div>
            <p className="w-8/12">
                Get access to all premium features and content
            </p>
            <div className="action">
                <Button className="bg-white hover:bg-gray-100 text-black">Upgrade now</Button>
            </div>
        </div>
    )
}
import { Link } from "react-router"
import { Button } from "./ui/button"

export default () => {
    return (
        <div className="flex flex-col justify-between bg-primary/90 p-4 rounded-2xl h-55 promotion">
            <div>
                <h1 className="font-bold uppercase">Upgrade to Pro</h1>
                <h2 className="font-semibold text-2xl">
                    <span className="text-black/50 line-through">Rp. 750K</span> <span>Rp. 100K</span> /mo
                </h2>
            </div>
            <p className="mb-4 w-8/12">
                Get access to all premium features and content
            </p>
            <div className="action">
                <Button asChild className="bg-white hover:bg-gray-100 text-black">
                    <Link to="/profile/members-benefits">Upgrade now</Link>
                </Button>
            </div>
        </div>
    )
}
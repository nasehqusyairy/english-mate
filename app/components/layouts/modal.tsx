import { ArrowLeft } from "lucide-react";
import { Outlet, useMatches, useNavigate } from "react-router"
import ModalTransition from "../modal-transition";

export default () => {
    const matches = useMatches();
    const { title } = matches[matches.length - 1].handle as any;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <ModalTransition>
            <header className="app-header-container">
                <div className="flex items-center gap-4 app-header">
                    <button onClick={handleBack} className="text-primary"><ArrowLeft size={24} /></button>
                    <h1 className="font-bold">{title}</h1>
                </div>
            </header>
            <Outlet />
        </ModalTransition>
    )
}
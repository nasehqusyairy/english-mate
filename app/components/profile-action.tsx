import { ChevronRight, type LucideProps } from "lucide-react"
import { Link } from "react-router";
import { Switch } from "./ui/switch";
import { useEffect, useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import type { LucideIcon } from "~/models/lucide-icon";

export type ProfileActionProps = {
    title: string;
    icon: LucideIcon;
    to?: string;
    onClick?: () => void;
    target?: "modal" | "switch" | "dialog";
    defaultChecked?: boolean;
    onMount?: (setIsChecked: (checked: boolean) => void) => void;
} & Partial<AlertDialogParentProps>

type AlertDialogParentProps = {
    children: React.ReactNode;
    className?: string;
    dialogConfig: DialogConfig;
}

type DialogConfig = {
    title: string;
    description: string;
    ConfirmText: string;
    onConfirm: () => void;
};

const AlertDialogParent = (props: AlertDialogParentProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className={props.className}>
                {props.children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{props.dialogConfig.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {props.dialogConfig.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={props.dialogConfig.onConfirm}>{props.dialogConfig.ConfirmText || "Confirm"}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default (props: ProfileActionProps) => {

    const Parent = props.to ? Link : props.dialogConfig ? AlertDialogParent : "button";

    const [isChecked, setisChecked] = useState(false);

    const handleOnClick = () => {
        if (props.target === "switch") {
            setisChecked(!isChecked);
        }
        props.onClick?.();
    }

    useEffect(() => {
        props.onMount?.(setisChecked);
    }, []);

    return (
        <Parent dialogConfig={props.dialogConfig!} onClick={handleOnClick} to={props.to!} className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b w-full cursor-pointer">

            <div className="flex gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                    <props.icon size={16} />
                </div>
                <span>{props.title}</span>
            </div>
            {props.target === "switch"
                ? <Switch checked={isChecked} />
                : <ChevronRight size={16} />
            }
        </Parent>
    )
}
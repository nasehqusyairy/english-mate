import { ChevronRight, FileText, HelpCircle, Key, LogOut, Medal, User } from "lucide-react"
import { Button } from "~/components/ui/button"
import UpgradeProCard from "~/components/ui/upgrade-pro-card"

export default () => {
    return (
        <main>
            <section className="px-4 pt-3">
                <div className="p-4 border rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded-full size-15 text-primary shrink-0">
                            <User size={25} />
                        </div>
                        <div className="flex-auto gap-0.5 grid">
                            <h1 className="font-bold truncate">Mohammad Nasyikh Al-Qusyairy</h1>
                            <p className="flex items-center gap-1 text-muted">
                                <Medal size={16} /> Basic
                            </p>
                        </div>
                        <Button className="shrink-0">Edit</Button>
                    </div>
                </div>
            </section>

            <section className="px-4">
                <UpgradeProCard />
            </section>

            <div className="mb-4 text-muted text-sm">
                <div className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b cursor-pointer">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                            <Key size={16} />
                        </div>
                        <span>Change Password</span>
                    </div>
                    <ChevronRight size={16} />
                </div>
                <div className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b cursor-pointer">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                            <FileText size={16} />
                        </div>
                        <span>Transaction History</span>
                    </div>
                    <ChevronRight size={16} />
                </div>
                <div className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b cursor-pointer">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                            <Medal size={16} />
                        </div>
                        <span>Member's Benefit</span>
                    </div>
                    <ChevronRight size={16} />
                </div>
                <div className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b cursor-pointer">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                            <HelpCircle size={16} />
                        </div>
                        <span>Help</span>
                    </div>
                    <ChevronRight size={16} />
                </div>
                <div className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b cursor-pointer">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                            <LogOut size={16} />
                        </div>
                        <span>Log Out</span>
                    </div>
                    <ChevronRight size={16} />
                </div>
            </div>

            <div className="p-4 text-muted text-xs">
                <p>Version 1.0.0</p>
                <p>© 2023 English Mate. All rights reserved.</p>
            </div>

        </main>
    )
}

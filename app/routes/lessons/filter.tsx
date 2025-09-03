import { useNavigate } from "react-router";
import OrderChoices from "~/components/order-choices";
import TagCheckboxes from "~/components/tag-checkboxes";
import { Button } from "~/components/ui/button"
import { orderKeys, tags } from "~/lib/samples";

export const handle = {
    title: "Lesson Filter"
}

export default () => {

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        navigate(-1);
    };

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="px-4 pt-4">
                        <h2 className="mb-2 font-bold">Sort by</h2>
                        <OrderChoices items={orderKeys.filter(item => item.value !== "datetime" && item.value !== "price")} />
                    </div>
                    <div className="px-4">
                        <h2 className="mb-2 font-bold">Method</h2>
                        <OrderChoices items={[
                            {
                                value: "asc",
                                label: "Ascending"
                            },
                            {
                                value: "desc",
                                label: "Descending"
                            }
                        ]} />
                    </div>
                    <div className="px-4">
                        <h2 className="mb-2 font-bold">Tags</h2>
                        <TagCheckboxes items={tags} />
                    </div>
                    <footer className="app-footer-container">
                        <div className="justify-end p-4 app-footer">
                            <Button>Apply</Button>
                        </div>
                    </footer>
                </form>
            </main>
        </>
    )
}

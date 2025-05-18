import { useSearchParams } from "react-router-dom";

export default function MovieSearch() {
    const [, setSearchParams] = useSearchParams();

    const handleSubmit = event => {
        event.preventDefault();
        const query = event.target.elements.query.value.trim();
        if (query) {
            setSearchParams({ query });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
import { useData } from "../state/DataContext";

export function ItemsPageNumber() {
    const { setPageNumber, pagesTotal, pageNumber } = useData()

    return <>
        <label>
            Page
            <input style={{ width: 60 }} type="number" value={pageNumber} min='1' max={pagesTotal} onChange={(e) => { setPageNumber(e.target.value) }} />
        </label>
    </>
}
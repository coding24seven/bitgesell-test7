import Items from "../components/Items";
import { ItemsPageNumber } from "../components/ItemsPageNumber";
import { ItemsSearch } from "../components/ItemsSearch";

export function ItemsContainer() {
    return <>
        <ItemsSearch />
        <ItemsPageNumber />
        <Items />
    </>
}
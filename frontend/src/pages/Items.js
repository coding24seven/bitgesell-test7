import ItemsList from "../components/ItemsList";
import { ItemsPageNumber } from "../components/ItemsPageNumber";
import { ItemsSearch } from "../components/ItemsSearch";

export function Items() {
  return <>
    <ItemsSearch/>
    <ItemsPageNumber/>
    <ItemsList/>
  </>
}
import Item from "./Item";
import { useRecoilValue } from "recoil";
import { products as productState, selectedPageState } from "../data";

const Grid = () => {
  const pageNumber = useRecoilValue(selectedPageState);
  const products = useRecoilValue(productState);
  const i = (pageNumber - 1) * 9;
  const j = Math.min(pageNumber * 9, products.length);
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-10 h-[70dvh] w-4/5 mx-auto">
      {products.slice(i, j).map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Grid;

import { useRecoilState } from "recoil";
import { selectedPageState } from "../data";

const Page = ({ pageNumber }: { pageNumber: number }) => {
  const [selectedPageNumber, setSelectedPageNumber] =
    useRecoilState(selectedPageState);
  return (
    <button
      className={
        pageNumber === selectedPageNumber
          ? "border mx-2 w-10 bg-blue-200"
          : "border mx-2 w-10 hover:bg-blue-200"
      }
      onClick={() => setSelectedPageNumber(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};
export default Page;

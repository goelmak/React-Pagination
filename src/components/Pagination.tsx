import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPageState, products } from "../data";
import { useEffect, useReducer } from "react";
import backIcon from "../assets/backIcon.svg";
import frontIcon from "../assets/frontIcon.svg";
import Page from "./Page";

const calculateInitialRange = (totalPages: number) => ({
  start: 1,
  end: Math.min(3, totalPages),
});

const reducer = (
  state: { start: number; end: number },
  action: { type: string; totalPages?: number }
) => {
  switch (action.type) {
    case "back":
      return { start: state.start - 1, end: state.end - 1 };

    case "forward":
      return { start: state.start + 1, end: state.end + 1 };

    case "reset":
      return calculateInitialRange(action?.totalPages || 0);

    default:
      return state;
  }
};

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useRecoilState(selectedPageState);
  const productArray = useRecoilValue(products);
  const totalPages = Math.ceil(productArray.length / 9);
  const maxPages = Math.min(3, totalPages);
  const initialRange = {
    start: 1,
    end: Math.min(3, maxPages),
  };

  const [range, dispatch] = useReducer(reducer, initialRange);

  const handleBackWard = () => {
    if (selectedPage === range.start) {
      if (selectedPage === 1) {
        return;
      } else {
        setSelectedPage((s) => s - 1);
        dispatch({ type: "back" });
      }
    } else {
      setSelectedPage((s) => s - 1);
    }
  };

  const handleForWard = () => {
    if (selectedPage === range.end) {
      if (selectedPage === Math.ceil(productArray.length / 9)) {
        return;
      } else {
        setSelectedPage((s) => s + 1);
        dispatch({ type: "forward" });
      }
    } else {
      setSelectedPage((s) => s + 1);
    }
  };

  const pages = [];
  for (let p = range.start; p <= range.end; p++) {
    pages.push(<Page key={p} pageNumber={p} />);
  }

  useEffect(() => {
    dispatch({ type: "reset", totalPages });
  }, [productArray]);

  return (
    <div className="flex flex-row justify-center items-center mt-20">
      <button
        className="border font-bold bg-blue-200 p-1 hover:bg-blue-700"
        onClick={handleBackWard}
      >
        <img src={backIcon} alt="Back" />
      </button>
      {pages}
      <button
        className="border font-bold bg-blue-200 p-1 hover:bg-blue-700"
        onClick={handleForWard}
      >
        <img src={frontIcon} alt="Forward" />
      </button>
    </div>
  );
};

export default Pagination;

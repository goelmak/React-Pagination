import { useSetRecoilState } from "recoil";
import { products, url } from "../data";
import { useEffect } from "react";

const FetchingData = () => {
  const setProducts = useSetRecoilState(products); // Use the correct atom
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setProducts(json.products);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    };
    fetchingData();
  }, []);
  return <></>;
};
export default FetchingData;

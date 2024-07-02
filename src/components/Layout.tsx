import Grid from "./Grid";
import Pagination from "./Pagination";

const Layout = () => {
  return (
    <>
      <div className="text-center font-bold my-3">My Products</div>
      <Grid></Grid>
      <Pagination></Pagination>
    </>
  );
};
export default Layout;

import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import Product from "./Product";
import Pagination from "./Pagination";

const FeaturedProducts = () => {
  let { dataList, loading } = useFetch("products");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = ({ selected }) => setCurrentPage(selected + 1);




  return (
    <>
      <Helmet>
        <title>Fresh Cart Store</title>
      </Helmet>

      <div className="container py-5">
        <div className="row">
        
          <div className="d-flex justify-content-between">
            <h3 className="text-main fw-bold">Our Products :</h3>
            <div>
              <h3>
                <Link className="text-main" to="products">
                  See All
                </Link>
              </h3>
            </div>
          </div>

          {loading ? <Loader /> : currentItems.map((product) => <Product key={product._id} product={product} />)}

          <Pagination pageCount={Math.ceil(dataList.length / itemsPerPage)} handlePageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;



import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from "../actions/productActions";

const ProductsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");

  const productSave = useSelector((state) => state.userSignin);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setCategory(product.category);
    setBrand(product.brand);
    setCountInStock(product.count_in_stock);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: id,
      name,
      price: +price,
      brand,
      category,
      count_in_stock: +countInStock,
      description,
    }

    if (image) {
      updatedProduct.image_url = `/images/${image?.slice(12)}`;
    }
    
    dispatch(
      saveProduct({
        ...updatedProduct
      })
    );
    window.location.reload();
    
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <>
      <div className="content content-margined">
        <div className="product-header">
          <h3>Products</h3>
          <button className="button primary" onClick={() => openModal({})}>
            Create Product
          </button>
        </div>
        {modalVisible && (
          <div className="form">
            <form onSubmit={submitHandler}>
              <ul className="form-container">
                <li>
                  <h2>
                    {id ? "Update Product" : "Create Product"}
                  </h2>
                </li>
                <li>
                  {loadingSave && <div>Loading...</div>}
                  {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                  <label htmlFor="name">Name</label>
                  <input
                    value={name || ""}
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="price">Price</label>
                  <input
                    value={price || ""}
                    type="text"
                    name="price"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="image">Image</label>
                  <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.value)} />
                </li>
                <li>
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    value={brand || ""}
                    name="brand"
                    id="brand"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="countInStock">Count In Stock</label>
                  <input
                    type="text"
                    value={countInStock || ""}
                    name="countInStock"
                    id="countInStock"
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    value={category || ""}
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="description">Description</label>
                  <input
                    name="description"
                    value={description || ""}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </li>
                <li>
                  <button className="button primary" type="submit">
                    {id ? "Update" : "Create"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalVisible(false)}
                    className="button secondary"
                    type="button"
                  >
                    Back
                  </button>
                </li>
              </ul>
            </form>
          </div>
        )}

        <div className="product-list">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>COUNT IN STOCK</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index+1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.count_in_stock}</td>
                  <td>{product.brand}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => openModal(product)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="button"
                      onClick={() => deleteHandler(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsScreen;

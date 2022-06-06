function getProduct(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/sohee063/-hnmshoppingmall2/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // setProductList(data);
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/sohee063/-hnmshoppingmall2/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProduct, getProductDetail };

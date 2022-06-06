function getProduct(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/sohee063/-hnmshoppingmall2/products?q=${searchQuery}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // setProductList(data);
  };
}

export const productAction = { getProduct };

function ItemizedProduct({ item }) {
  return (
    <>
      <div className="itemizedProduct">
        {/* Page Layout: 3 images, Title, Description, Quantity, Total, 'Add to Chart' Button */}
        <img src={(item.image_url_1, item.image_url_2, item.image_url_3)} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.quantity}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
}

export default ItemizedProduct;

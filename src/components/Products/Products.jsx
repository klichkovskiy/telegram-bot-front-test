import Card from '../Card/Card';

function Products(props) {
  return (
    <section className="products">
      {props.category.map((card) =>
            <Card
              key={card.id}
              name={card.name}
              price={card.price}
              discount={card.discount}
              img={card.img}
              composition={card.composition}
            />
          )}
    </section>
  )
}

export default Products;
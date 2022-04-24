function Card(props) {
  return (
    <article className="card">
      <h3 className="card__name">{props.name}</h3>
      <img src={props.img} className="card__img" alt={props.name} />
      <p className="card__price">{props.price} руб.</p>
      <p className="card__price">{props.discount} руб.</p>
      <p>{props.composition}</p>
    </article>
  )
}

export default Card;
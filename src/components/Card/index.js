import './styles.css'

export function Card(props) {
  return (
    <div className="card_home_item">
      <img src={props.personagem.image} className="image_card" />
      <h1 className='item_card_title'>{props.personagem.title}</h1>
      <p>{props.personagem.description}</p>
    </div>
  )
}
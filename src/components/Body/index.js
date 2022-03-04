import './styles.css'

import { Card } from '../Card'

import { personagens } from '../../data';

export default function Body() {
  return (
    <>
      <h1 className="title_home">Personagens de Harry Potter</h1>

      <div className='container_card_home'>

        {
          personagens.map((item) => (
            <Card key={item.id} personagem={item} />
          ))
        }


      </div>
    </>
  )
}
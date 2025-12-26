import type { chai } from '../types';
import { Chaicard } from './Chaicard';

interface ChaiListProps {
  items : chai[];
}

export function ChaiList({items} : ChaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <Chaicard key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.isSpecial} />
      ))}
    </div>
  )
}

export default ChaiList

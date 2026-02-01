import { ShoppingCart } from 'lucide-react';

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo">E-Shop</div>
        <ul>
            <li className="active"><a href="#">Aceuil</a></li>
            <li><a href="#">Nouveautés</a></li>
            <li><a href="#">Solde</a></li>
            <li><a href="#">Contact</a></li>
            <span className="indiceContaine">
              <ShoppingCart color="#ff295e" size={20}/>
              <span className="shopIndice">2</span>
            </span>
        </ul>
        
    </nav>
    </div>
  )
}

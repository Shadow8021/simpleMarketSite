import {donnees} from './data.js'
import Contenaire from '../Contenaire'
export default function Produits() {
  return (
 <Contenaire className="section_produits">
   
            {donnees.map((el,index)=>{
                return(
            <div key={index} className="produit" id="produits">
                <div className="card">
                    <div className="img">
                        <img src={el.image} alt="produitImg"/>
                    </div>
                    <div className="info">
                        <span className="desc">{el.desc}</span>
                        <span className="titre">{el.nom}</span>
                    </div>
                    <div className="achat">
                        <span className="prix">{el.prix}$</span>
                        <button>Acheter</button>
                    </div>
                </div>
            </div>
                )
            })}
 </Contenaire>
  )
}

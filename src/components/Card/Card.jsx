import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions"
import {connect} from "react-redux"
import {useState,useEffect} from "react"

 function Card({id,name,species, image,gender,onClose,addFav,removeFav,myFavorites}) {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav(id,name,species, image,gender,onClose);
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites]);


   return (
      <div>
       
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

         <button onClick={() => onClose(id)}>X</button>


         <Link to = {`/detail/${id}`}>
         <h2>
            {name}
         </h2>
         </Link>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
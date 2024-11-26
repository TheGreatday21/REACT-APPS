import profile_pic from "./assets/profile.png"

function Card(){
    return(
      <div className = "card">
        <img className = "card_image" alt = "This is a profile picture of Tech Savvy Uganda " src = {profile_pic}></img>
        <h2 className="card-title">
          Tech Savvy Uganda
        </h2>
        <p className = "card-text">
          Iam the worlds greatest technician to ever live 
        </p>
      </div>
    );
}

export default Card
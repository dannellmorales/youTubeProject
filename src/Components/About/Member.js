import "./AboutTeam.css";

const Member = ({ id, firstName, lastName, title, description, profilePicture }) => {
    
    let name = `${firstName} ${lastName}`;

    return (
        <article className="team-info-container">
            <div className="about-us">
                <h3 className="about-name">{name}</h3>
                <h4 className="about-title">{title}</h4>
                <div>  
                    <img className="about-img" src={profilePicture} width="230px" alt="profile-pic" />
                </div>

             
            </div>
            <div className="bio">
                <h5 className="about-bio">Bio</h5>
                <p className="about-description">{description}</p>
            </div>  
        </article>
    );
};

export default Member;
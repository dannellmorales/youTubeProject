import { Component } from "react";
import Member from "./Member";
import "./AboutPage.css";

const AboutPage = () => {
    const team = [
        {
            id: "person1",
            firstName: "Soma",
            lastName: "Majumder",
            title: "Software Developer",
            description: "Hello everyone, my name is Soma Majumder, and I am a Pursuit Fellow.",
            profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQExFFmBxWMlNw/profile-displayphoto-shrink_800_800/0/1516998034985?e=1660780800&v=beta&t=5Z19w_Enf5awAW7mxluBHGYXR8GwpXRgneheScnEUYs"
        },
        {
            id: "person2",
            firstName: "Olayinka",
            lastName: "Fakanbi",
            title: "Software Developer",
            description: "Hello everyone, my name is Olayinka Fakanbi, and I am a Pursuit Fellow.",
            profilePicture: "https://avatars.githubusercontent.com/u/45779209?v=4"
        },
        {
            id: "person3",
            firstName: "Dan-ell",
            lastName: "Morales",
            title: "Software Developer",
            description: "Hello everyone, my name is Dan-ell Morales, and I am a Pursuit Fellow.",
            profilePicture: "https://avatars.githubusercontent.com/u/75141026?v=4"
        }
     ];
  
        return(
            <section className="about-team">
             <h1>About Us</h1>
                <p>{team.map((member) => (
            <Member key={member.id} id={member.id} firstName={member.firstName} lastName={member.lastName} title={member.title} description={member.description} profilePicture={member.profilePicture}/>
        ))}</p>
             {/* <div className="teams-info">{teamList}</div> */}
            </section>
        )
    
}

export default AboutPage;
const ProfileCard = () => {
  const name = "Taukir Alam ";
  const language = "Javascripts";
  const bio = "I love building web apps with React and exploring new tech.";
  const imageurl =
    "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg";

  const hobbies = ["coding", "gaming", "Reading", "Playing guiter"];
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1> welcome to {name}'s proflie</h1>
      <img
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "150px",
          marginBottom: "1rem",
        }}
        src={imageurl}
        alt="profile "
      />
      <p>Bio :{bio}</p>
      <h1> Hobbies </h1>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
};
export default ProfileCard;

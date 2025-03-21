export default function Comments() {
  const comments = [
    {
      id: 1,
      name: "Andressa Silva",
      text: "O aprendizado com os kits ficou muito mais fácil!",
      img: "/assets/userImages/user1.png",
    },
    {
      id: 2,
      name: "Uriel Werneck",
      text: "Os kits são incríveis! Me ajudaram muito nas aulas.",
      img: "/assets/userImages/user2.png",
    },
    {
      id: 3,
      name: "Tcheul's Layra",
      text: "Super recomendo! Material de qualidade.",
      img: "/assets/userImages/user3.png",
      hidden: true,
    },
  ];

  return (
    <section className="flex flex-row justify-center items-center m-[5vw]">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className={` ${
            comment.hidden ? "hidden  md:flex" : ""
          } flex-col bg-white rounded-2xl max-w-60 h-auto shadow-md mx-[2vw] py-2 px-4  `}
        >
          <div className="flex flex-row items-center">
            <img
              src={comment.img}
              alt={comment.name}
              className="rounded-full w-6"
            />
            <h1 className="pl-2 font-bold text-[#0B2D4B] text-[16px]">
              {comment.name}
            </h1>
          </div>
          <p className="text-[14px] text-[#5A5A5A] mt-2">{comment.text}</p>
        </div>
      ))}
    </section>
  );
}

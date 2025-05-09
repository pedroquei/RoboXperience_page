export default function Comments() {
  const comments = [
    {
      id: 1,
      name: "Andressa Silva",
      text: "O aprendizado com o kit ficou muito mais fácil!",
      img: "/assets/userImages/user1.png",
    },
    {
      id: 2,
      name: "Uriel Werneck",
      text: "O kit me ajudou bastante nas aulas.",
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
          } flex-col bg-white rounded-2xl shadow-md h-30 sm:h-25 w-[50vw] max-w-[200px]   p-2 m-1 `}
        >
          <div className="flex flex-row items-center">
            <img
              src={comment.img}
              alt={comment.name}
              className="rounded-full w-8"
            />
            <h1 className="pl-2 font-bold text-[#0B2D4B] text-sm">
              {comment.name}
            </h1>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-2">{comment.text}</p>
        </div>
      ))}
    </section>
  );
}

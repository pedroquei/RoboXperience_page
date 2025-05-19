export default function Comments() {
  const comments = [
    {
      id: 1,
      name: "Andressa Silva",
      text: "O aprendizado com o kit ficou muito mais fácil!",
      img: "/assets/userImages/user1.webp",
    },
    {
      id: 2,
      name: "Uriel Werneck",
      text: "O kit me ajudou bastante nas aulas.",
      img: "/assets/userImages/user2.webp",
    },
    {
      id: 3,
      name: "Tcheul's Layra",
      text: "Super recomendo! Material de qualidade.",
      img: "/assets/userImages/user3.webp",
      hidden: true,
    },
  ];

  return (
    <section className="flex flex-row justify-center items-center my-10 mx-[5vw] sm:m-[5vw]">
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
              loading="lazy"
              className="rounded-full w-8"
            />
            <h1 className="pl-2 font-bold text-[#0B2D4B] text-sm">
              {comment.name}
            </h1>
          </div>
          <p className="text-sm text-gray-600 mt-2">{comment.text}</p>
        </div>
      ))}
    </section>
  );
}

import Link from "next/link";

export default function About(props) {
  return (
    <div>
      <h1>Users</h1>
      {props.user.map((el) => {
        return (
          <Link href={`Users/${el.id}`} key={el.id}>
            <p>{el.name}</p>
            <p>{el.email}</p>
          </Link>
        );
      })}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
}

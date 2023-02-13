export default function About(props) {
  return (
    <div>
      <h1>Dynamic</h1>

      <div key={props.id}>
        <p>{props.user.name}</p>
        <p>{props.user.email}</p>
        <ul>
          Address
          <li>{props.user.address.street}</li>
          <li>{props.user.address.city}</li>
          <li>{props.user.address.suite}</li>
        </ul>
        <p>phone : {props.user.phone}</p>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let serverSideProps = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  let data = await serverSideProps.json();
  return {
    props: {
      user: data,
    },
  };
}

import styles from "../../styles/Users.module.css"
import Link from "next/link"
export const getStaticProps = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users/")
  const data = await res.json()

  return {
    props: {  
      users: data
    }
  }
    
  
}

const Users = ({users}) => {
  return (
    <>
      <h2>This is Dare test route</h2>
     {
       users.map(user => (
         <Link href={`/users/${user.id}`} key={user.id}>
            <a>
            <p className={styles.single}>
            {user.name}
            </p>
            </a>
         </Link>
       ))
     }
    </>
  );
};

export default Users;

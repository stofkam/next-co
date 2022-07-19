import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/User.module.scss'
export default function User({ user }) {
    const { query } = useRouter()

    return (
        <MainContainer keywords={user.name} className={styles.user}>
            <h1>{user.name} with id {query.id}</h1>
        </MainContainer >
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user }, // will be passed to the page component as props
    }
}
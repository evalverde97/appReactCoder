import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate('/')
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={handlerClick}> logout</button>
        </div>
    )
}
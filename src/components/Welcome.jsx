import '../css/Welcome.css'

const Welcome = (props) => {
    return(
        <>
        <h1>Hello, {props.username}!</h1>
        </>
    )
}

export default Welcome;
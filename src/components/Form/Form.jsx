

const Form = () => {
    return (
        <form>
            <label htmlFor="email">Email: </label>
            <inmput type = "text" name = 'email' />
            <label htmlFor="password">Password: </label>
            <input type = "text" name = 'password'/>


            <button>Submit</button>
        </form>

    )
}

export default Form
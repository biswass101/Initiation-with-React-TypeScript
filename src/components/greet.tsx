type GreetProps = {
    name: string,
    mesageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn  ? 
                    `Welcome ${props.name}, You have ${props.mesageCount} unread message` 
                    : `welcome guest`
                }
            </h2>
        </div>
    )
}
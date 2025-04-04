type GreetProps = {
    name: string,
    mesageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { mesageCount = 10 } = props;
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn  ? 
                    `Welcome ${props.name}, You have ${mesageCount} unread message` 
                    : `welcome guest`
                }
            </h2>
        </div>
    )
}
import {GoogleLoginButton} from './styles'


type ButtonProps = {
    action: () => void;
}

const GoogleButton = ({action} : ButtonProps) => {
    return (
        <>
            <GoogleLoginButton
                onClick={action}
            >
                Fazer Login com o Google
            </GoogleLoginButton>
        </>
    )
}

export default GoogleButton
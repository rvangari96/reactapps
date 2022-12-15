import { GoogleLogout } from "react-google-login";

const clientId = "479384257497-v6jverhaqhe76jbo0l6oiifspkavmfdk.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {

    }

    const onFailure = (res) => {

    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout
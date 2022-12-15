import GoogleLogin from "react-google-login";

const clientId = "479384257497-v6jverhaqhe76jbo0l6oiifspkavmfdk.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Profile data", res.profileObj)
        console.log("Token data", res.tokenObj)
    }

    const onFailure = (res) => {
        console.log("Error", res)
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    )
}

export default Login
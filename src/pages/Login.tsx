import { Unity, useUnityContext } from "react-unity-webgl";
import "./game.css";
function Login(){
    const { unityProvider } = useUnityContext({
        loaderUrl: "/BuildLogin.loader.js",
        dataUrl: "/BuildLogin.data.unityweb",
        frameworkUrl: "/BuildLogin.framework.js.unityweb",
        codeUrl: "/BuildLogin.wasm.unityweb",
    });
    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Login</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    )
}
export default  Login;
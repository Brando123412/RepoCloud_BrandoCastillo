import { Unity, useUnityContext } from "react-unity-webgl";
function Game3(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/JuegoPregunta.loader.js",
        dataUrl: "/JuegoPregunta.data.unityweb",
        frameworkUrl: "/JuegoPregunta.framework.js.unityweb",
        codeUrl: "/JuegoPregunta.wasm.unityweb",
    });

    function SceneHelPer(){
        sendMessage("SceneHelper","ReloadScene");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Question</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={SceneHelPer}>ReiniciarScena</button>
                </div>
            </div>
        </div>
    )
}
export default  Game3;

import { Unity, useUnityContext } from "react-unity-webgl";
function Game4(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Juego2Brando.loader.js",
        dataUrl: "/Juego2Brando.data.unityweb",
        frameworkUrl: "/Juego2Brando.framework.js.unityweb",
        codeUrl: "/Juego2Brando.wasm.unityweb",
    });

    function SceneHelPer(){
        sendMessage("SceneHelper","ReloadScene");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Run</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={SceneHelPer}>ReiniciarScena</button>
                </div>
            </div>
        </div>
    )
}
export default  Game4;

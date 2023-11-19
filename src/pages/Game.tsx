import { Unity, useUnityContext } from "react-unity-webgl";
function Game(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/BuildUnity.loader.js",
        dataUrl: "/BuildUnity.data.unityweb",
        frameworkUrl: "/BuildUnity.framework.js.unityweb",
        codeUrl: "/BuildUnity.wasm.unityweb",
    });
    function HandleClickSpawnEnemies(){
        sendMessage("GameObject","SpawnEnemies");
    }

    {/*function SceneHelPer(){
        sendMessage("SceneHelper","ReloadScene");
    }*/}

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Run run boom</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={HandleClickSpawnEnemies}>Spanw Enemies</button>
                </div>
                {/*<button onClick={SceneHelPer}>ReiniciarScena</button>*/}
            </div>
        </div>
    )
}
export default  Game;

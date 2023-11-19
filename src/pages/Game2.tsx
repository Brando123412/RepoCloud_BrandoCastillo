import { Unity, useUnityContext } from "react-unity-webgl";
function Game2(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/JuegoMemoria.loader.js",
        dataUrl: "/JuegoMemoria.data.unityweb",
        frameworkUrl: "/JuegoMemoria.framework.js.unityweb",
        codeUrl: "/JuegoMemoria.wasm.unityweb",
    });
    {/*function HandleClickSpawnEnemies(){
        sendMessage("GameObject","SpawnEnemies");
    }*/}

    function SceneHelPer(){
        sendMessage("SceneHelper","ReloadScene");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Memori cards</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                {/*<button onClick={HandleClickSpawnEnemies}>Spanw Enemies</button>*/}
                <button onClick={SceneHelPer}>ReiniciarScena</button>
                </div>
            </div>
        </div>
    )
}
export default  Game2;

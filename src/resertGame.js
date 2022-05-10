function ResetGame({ColorArray,setChosenArray,setPoints}){
    const ResetGamee = () => {
        for (let i = 0; i < 6; i++) {
          document.querySelector("." + ColorArray[i]).style.background = "black"
        }
        setChosenArray([])
        setPoints(0)
      }
    return(
        <button className={"buttonToReset"} onClick={ResetGamee}>Reset Game</button>
    )
}
export default ResetGame;
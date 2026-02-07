import NoteContext from "./noteContext";

const NoteState = () => {
    return (
        <NoteState.Provider >
            {props.children}
        </NoteState.Provider>
    )
}


export default NoteState
import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }
    const nameChange = () => {
        console.log('asdasdasd')
    }
    const focusLost = () => {

    }

    return <div>Alex
        <textarea onChange={nameChange}
                  onBlur={focusLost}
        ></textarea>
        <input onChange={onAgeChanged}/>
        <button name='delete' onClick={deleteUser}>x</button>
        <button name='save' onClick={deleteUser}>x</button>
    </div>
}
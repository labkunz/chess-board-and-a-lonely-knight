import React from "react";

//引入設定檔和使用useDrag
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

//西洋棋騎士元件

function Knight() {
    //collecting function
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    }));

    //<span>♘</span>
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: "bold",
                cursor: "move"
            }}
        >
            ♘
        </div>
    )
}

export default Knight;
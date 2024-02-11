import React from "react";
import Square from "./Square";

//規則判定拿來至此
import { canMoveKnight, moveKnight } from "./Game"; 

//在這裡實現useDrop
import { ItemTypes } from "./Constants";
import { useDrop } from "react-dnd";

//樣式元件
import Overlay from "./Overlay";

export default function BoardSquare ({ x, y, children }) {
    //把renderSquare的部分功能拆分至此
    const black = (x + y) % 2 === 1;

    //connecting function
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: monitor => ({
           isOver: !!monitor.isOver(), 
           canDrop: !!monitor.canDrop()
        }),
    }), [x, y]);

    return (
        <div
            ref={drop}
            style={{
                position: "relative",
                width: "100%",
                height: "100%"
            }} 
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}
import React from "react";
import Square from "./Square";

//規則判定拿來至此
import { canMoveKnight, moveKnight } from "./Game"; 

//在這裡實現useDrop
import { ItemTypes } from "./Constants";
import { useDrop } from "react-dnd";

export default function BoardSquare ({ x, y, children }) {
    //把renderSquare的部分功能拆分至此
    const black = (x + y) % 2 === 1;

    //connecting function
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
        collect: monitor => ({
           isOver: !!monitor.isOver(), 
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
            {isOver && (
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: "yellow"
                }} />
            )}
        </div>
    )
}
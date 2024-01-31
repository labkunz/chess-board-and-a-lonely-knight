import React from "react";
import Square from "./Square";
import Knight from "./Knight";

//棋盤元件

//用此func來管理整面棋盤
function renderSquare(x, y, [knightX, knightY]) {
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <Square black={black}>{piece}</Square>
}

export default function Board({ knightPosition }) {
    return (
        <div
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            {/* 可以想像這裡是只有一格的棋盤 */}
            {/* <Square black>
                <Knight />
            </Square> */}

            {/* 現在嘗試產生三格棋盤 */}
            {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)}
        </div>
    )
}
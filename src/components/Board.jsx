import React from "react";
import Square from "./Square";
import Knight from "./Knight";

//棋盤元件

//用此func來管理整面棋盤
function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return (
        <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
            <Square black={black}>{piece}</Square>
        </div>
    );
}

export default function Board({ knightPosition }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {/* 可以想像這裡是只有一格的棋盤 */}
            {/* <Square black>
                <Knight />
            </Square> */}

            {/* 現在嘗試產生三格棋盤 */}
            {/* {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)} */}

            {/* 直接根據棋盤格數來產生 */}
            {squares}
        </div>
    )
}
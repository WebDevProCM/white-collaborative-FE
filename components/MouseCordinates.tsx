"use client";
import React, { useEffect, useRef, useState } from 'react'

function MouseCordinates() {
    const [cordinates, setCordinates] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() =>{
        const mouseMoveHanlder = (event: MouseEvent) =>{
            if(isMouseDown){
                setCordinates((prev) => ({x: event.clientX, y: event.clientY}));
                let bounding = canvasRef.current?.getBoundingClientRect()!
                canvasRef.current?.getContext("2d")?.lineTo(cordinates.x - bounding.left, cordinates.y - bounding.top);
            }
        }

        const mouseDownHandler = (event: MouseEvent) =>{
            if(event.button === 0){
                setIsMouseDown(true);
                setCordinates((prev) => ({x: event.clientX, y: event.clientY}));
                let bounding = canvasRef.current?.getBoundingClientRect()!
                canvasRef.current?.getContext("2d")?.beginPath();
                canvasRef.current?.getContext("2d")?.moveTo(cordinates.x - bounding?.left, cordinates.y - bounding?.top);
            }
        }

        const mouseUpHandler = () =>{
            setIsMouseDown(false);
            canvasRef.current?.getContext("2d")?.stroke();
        }

        window.addEventListener("mousemove", mouseMoveHanlder);
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);

        return () =>{
            window.removeEventListener("mousemove", mouseMoveHanlder);
            window.removeEventListener("mousedown", mouseDownHandler);
            window.removeEventListener("mouseup", mouseUpHandler);
        }

    }, [isMouseDown]);

  return (
    <canvas id="myCanvas" width="500px" height="500px" ref={canvasRef} className="border-2 border-white border-solid" />
  )
}

export default MouseCordinates
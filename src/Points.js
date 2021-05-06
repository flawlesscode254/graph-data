import React from 'react'
import "./App.css"

function Points(props) {
    return (
            <div className="points" style={{
                    width: 40,
                    height: props.rise,
                    backgroundColor: "red",
                    cursor: "pointer"
                }} >
            </div>
    )
}

export default Points

import React from "react";
import SplitPane from "react-split-pane";
import Extras from "./Extras";

const Split = () => {
    return(
        <SplitPane split="horizontal" minSize={50}>
            <div style={{background:'red', height:'100%', width: '100%', flex:true}}>
                <Extras></Extras>
            </div>
            <div style={{background:'gray', height:'100%'}}></div>
        </SplitPane>
    );
}

export default Split;
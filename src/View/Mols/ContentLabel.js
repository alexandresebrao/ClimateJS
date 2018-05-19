import React from "react";
import Label from "../Atoms/Label";
import Info from "../Atoms/Info";

export default function(props) {
    return (
        <div>
            <Label>{props.label}</Label>
            <Info value={props.value} metric={props.metric} />
        </div>
    )
};
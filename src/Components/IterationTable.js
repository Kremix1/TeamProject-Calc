import React, {useState} from "react";
import { RenderTable } from "./RenderTable";

export const IterationTable = (data, setData) => {
    return(<RenderTable data={data} setData={setData}/>)
}
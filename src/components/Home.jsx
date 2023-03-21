import React from "react";
import Section from "./Section";


export default function Home(){
    return(
        <div>
            <Section title="Model S" bgImg="model-s.jpg"/>
            <Section title="Model Y" bgImg="model-y.jpg"/>
            <Section title="Model X" bgImg="model-x.jpg"/>
            <Section title="Solar Panel" bgImg="solar-panel.jpg"/>
            <Section title="Solar Roof" bgImg="solar-roof.jpg"/>
            <Section title="Accessories" bgImg="accessories.jpg"/>
        </div>
    );
}
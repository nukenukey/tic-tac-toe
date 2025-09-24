'use client';
import { useState } from "react";
import { getSelected, setSelected } from "./Board";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const options = ["human v human", "human v computer"];

    function select(str: string): void {
        setSelected(str);
        setIsOpen(false);
    }

    function getClass(val: string): string {
        if (val === getSelected()) {
            return "selected";
        }
        return "not";
    }

    function dropDownToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={() => { dropDownToggle() }}>{getSelected()}</button>
            {isOpen && (
                <div>
                    {options.map((val: string, ind: number) => {
                        return (<button
                            className={getClass(val)}
                            onClick={() => { select(val) }}
                            key={ind}
                        >
                            {val}
                        </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Menu;

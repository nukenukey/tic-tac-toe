'use client';
import { useState } from "react";
type options = "human v human" | "human v computer";

function Menu({ selected, setSelected }: { selected: string, setSelected: (val: string | ((prevVal: string) => string)) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const buttons: options[] = ["human v human", "human v computer"];

    function select(str: string): void {
        setSelected(str);
        setIsOpen(false);
    }

    function getClass(val: string): string {
        if (val === selected) {
            return "selected";
        }
        return "not";
    }

    function dropDownToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={() => { dropDownToggle() }}>{selected}</button>
            {isOpen && (
                <div>
                    {buttons.map((val: string, ind: number) => {
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

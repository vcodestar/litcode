import React, { useEffect, useState } from "react";
import LinkComponent from "./LinkComponent";
import MenuHeader from "./MenuHeader";
import { loadWriteups } from "./loadWriteups";

function CMenu() {
    const [links, setLinks] = useState([]);
    const writeups = import.meta.glob('/src/languages_menus/c_writeups/*.jsx');

    useEffect(() => {
        loadWriteups(writeups, 'c_writeups').then((links) => {
            setLinks(links);
        });
    }, []);

    return (
        <div>
            <MenuHeader name="C" />
            <LinkComponent links={links} />
        </div>
    );
}

export default CMenu;

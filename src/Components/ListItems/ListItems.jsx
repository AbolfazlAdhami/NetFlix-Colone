import React from "react";
import Wrapper from "../../HOC/Wrapper";

import "./ListItems.scss";
function ListItems({ index }) {
        return (
                <Wrapper>
                        <div className={`listItems ${(index + 1) % 2 == 0 ? "e" : "o"}`}>ListItems</div>
                </Wrapper>
        );
}

export default ListItems;

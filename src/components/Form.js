import React from "react";

const Form = ()=> {
return (
<div>
<header>
        <h3>ADD NEW BOOK</h3>
    </header>
    <form>
        <input type="text" placeholder="Book-title" /> &nbsp;
        <input type="text" placeholder="Author" /> &nbsp;
        <button type="submit">ADD BOOK</button>
    </form>
</div>
)
}
export default Form;
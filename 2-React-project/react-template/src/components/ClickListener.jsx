const ClickListener = () => {
    // Defining handleClick inside the ClickListener component.
    // const handleClick = () => {
    // console.log("Clicked!");
    // };
    const handleClick = (event) => {
        console.log(event);
    };
    

    return (
    <>
        <button onClick={handleClick}>Click Me!</button>
    </>
    );
};


export default ClickListener;
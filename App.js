
    // const heading = React.createElement("h1",{id:"title"},"Namaste React by Javascript");
    // const heading2 = React.createElement("h2",{id:"title"},"Namaste React by Javascript");
    const heading = React.createElement("h1",{id:"title"},"Heading1");
    const heading2 = React.createElement("h2",{id:"title"},"Heading2");
    const container= React.createElement("div",{id:"container"},[heading,heading2])//when we have to pass in multiple child,use array
{/* what is there will be a many id ,
=> react will override there existing in there root , and react will replace it with whatever you give inside render*/}

    console.log(heading);  // it gives plane js object,react element is an object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //react element is nothing but an object
    // passing react element inside root
    root.render(container);
    //render is modified your DOM ,Modifier
    //root is a place where react runs


//isolated state

import React from "react";

const ProjectContext = React.createContext({
    title: "",
    description: "",
    demo: "",
    repo: ""
})

export default ProjectContext;
const projects = [
    {
        title: "YelpCamp",
        image: "./yelpcamp.png",
        links: {
            demo: "https://skykaiyelpcamp.onrender.com/",
            github: "https://github.com/SkyKai1018/yelpcamp",
        },
        skills: [
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "3rd party API",
            "Git",
            "Render",
            "HTML",
            "CSS",
            "Bootstrap",
            "EJS",
            "Render",
            "Passport.js",
            "Cloudflare"
        ],
        functions: [
            "提供創建帳戶功能，可以選擇訪客或用戶模式",
            "用戶可以新增、編輯及刪除露營地的數據，但只能修改該用戶所上傳的數據",
            "用戶可以在每個露營地頁面的評論區留下多條評論",
            "每個用戶可以為每個露營地留下一條1到5星的評價",
            "用戶的新增編輯刪除都會更新到資料庫中",
            "每個露營地頁面都嵌入了Mapbox地圖"
        ]
    },
    {
        title: "更新中...",
        image: "更新中...",
        links: {
            demo: "#",
            github: "#",
        },
        skills: [
            "更新中..."
        ],
        functions: [
            "更新中..."
        ]
    }
]

function Project() {
    return (
        <div className="Project mb-3">
            <div className="row">
                <div className="Project-col col-md-10 offset-md-1 px-4 py-4">
                    <h1 className="mb-3">Project</h1>
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-md-6 mb-3" key={index}>
                                <div className="card project-card shadow">
                                    <img src={project.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title mb-3">{project.title}</h5>
                                        <div className="mb-3">
                                            {project.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="badge rounded-pill bg-dark me-1">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <h6>功能介紹</h6>
                                        <ul>
                                            {project.functions.map((functionItem, functionIndex) => (
                                                <li key={functionIndex}>{functionItem}</li>
                                            ))}
                                        </ul>
                                        <a href={project.links.demo} className="card-link">demo</a>
                                        <a href={project.links.github} className="card-link">github</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Project;
const skills = [
    [
        {
            category: '軟體開發技能',
            skills: [
                'CSS',
                'Bootstrap',
                'HTML',
                'Git',
                'SVN',
                'C#',
                'python',
                'JavaScript',
                'node.js',
                'React',
                'Express.js',
                'MongoDB',
                'ejs.js',
            ]
        },
        {
            category: '協作與工具',
            skills: [
                'confluence',
                'markdown',
                'jira',
                'docker',
                'CI/CD'
            ]
        },
        {
            category: '其他',
            skills: [
                'final cut pro',
                '攝影',
                '剪輯',
                '影片腳本撰寫',
                '影片剪輯',
                'office'
            ]
        }
    ]
]

function Skills() {
    return (
        <div className="Skills mb-3">
            <div className="row">
                <div className="Skills-col col-md-10 offset-md-1 px-4 py-4">
                    <h1 className="mb-3">技能</h1>
                    <div className="row d-flex justify-content-around ">
                        <div className="skills-col rounded py-2 shadow bg-body">
                            <h4>前後端程式</h4>
                            <span class="badge rounded-pill bg-secondary me-2">C#</span>
                            <span class="badge rounded-pill bg-secondary me-2">JavaScript</span>
                            <span class="badge rounded-pill bg-secondary me-2">node.js</span>
                            <span class="badge rounded-pill bg-secondary me-2">React</span>
                            <span class="badge rounded-pill bg-secondary me-2">Express.js</span>
                            <span class="badge rounded-pill bg-secondary me-2">Bootstrap</span>
                            <span class="badge rounded-pill bg-secondary me-2">HTML</span>
                            <span class="badge rounded-pill bg-secondary me-2">CSS</span>
                            <span class="badge rounded-pill bg-secondary me-2">MongoDB</span>
                            <span class="badge rounded-pill bg-secondary me-2">MySQL</span>
                        </div>
                        <div className="skills-col rounded py-2 shadow bg-body">
                            <h4>開發工具</h4>
                            <span class="badge rounded-pill bg-secondary me-2">Git</span>
                            <span class="badge rounded-pill bg-secondary me-2">SVN</span>
                            <span class="badge rounded-pill bg-secondary me-2">Trello</span>
                            <span class="badge rounded-pill bg-secondary me-2">Notion</span>
                            <span class="badge rounded-pill bg-secondary me-2">Obsidian</span>
                            <span class="badge rounded-pill bg-secondary me-2">Linux</span>
                            <span class="badge rounded-pill bg-secondary me-2">AWS</span>
                            <span class="badge rounded-pill bg-secondary me-2">Docker</span>
                            <span class="badge rounded-pill bg-secondary me-2">CI/CD</span>
                            <span class="badge rounded-pill bg-secondary me-2">Confluence</span>
                            <span class="badge rounded-pill bg-secondary me-2">Jira</span>

                        </div>
                        <div className="skills-col rounded py-2 shadow bg-body">
                            <h4>其他</h4>
                            <span class="badge rounded-pill bg-secondary me-2">MS Office</span>
                            <span class="badge rounded-pill bg-secondary me-2">Macro</span>
                            <span class="badge rounded-pill bg-secondary me-2">NC code</span>
                            <span class="badge rounded-pill bg-secondary me-2">PLC</span>
                            <span class="badge rounded-pill bg-secondary me-2">影片拍攝剪輯</span>
                            <span class="badge rounded-pill bg-secondary me-2">影片腳本</span>
                            <span class="badge rounded-pill bg-secondary me-2">FinalCutPro</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
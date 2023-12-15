const educations = [
    {
        school: "中山大學",
        department: "機械與機電工程 金屬成形實驗室",
        degree: "碩士",
        year: "2013/1 - 2020/8",
        descriptions: [
            "設計旋轉壓縮成形機，並與廠商溝通確保交期確定",
            "使用Deform 3D對旋轉壓縮成形進行有限元素分析",
            "利用旋轉壓縮成形機進行金屬粉末成形研究"
        ],
        projects: [
            "旋轉壓縮於金屬粉末成形之有限元素分析_第一作者",
            "AMPT 2019 _ 金屬粉末成形旋轉壓縮成形_第三作者,報告者",
            "CSME 2019 _ 熱風爐熱傳及熱應力分析 _報告者",
            "TSTP 2019 _ 論文統整及編輯"
        ],
        link: "",
        image: "./nsysu-logo.jpeg",
    },
    {
        school: "中山大學",
        department: "機械與機電工程系",
        degree: "學士",
        year: "2013/9 - 2017/5",
        descriptions: [
            "利用Dynaform 對管件液壓成形進行研究分析",
            "使用田口方法對成形最佳化進行研究"
        ],
        projects: [],
        link: "",
        image: "./nsysu-logo.jpeg",
    },
    {
        school: "台北市立成功高中",
        degree: "普通科",
        year: "2010/9 - 2013/5",
        descriptions: [],
        projects: [],
        link: "",
        image: "./cksh-logo.jpeg",
    }
]

function Education() {
    return (
        <div className="Education mb-3" >
            <div className="row">
                <div className="Education-col col-md-10 offset-md-1 px-4 py-4">
                    <h2 className="mb-3">學歷</h2>
                    <div className="row">
                        {educations.map((education, index) => (
                            <div className="col-md-12">
                                <div className="card border-1 mb-3 education-listcard shadow">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-md-1'>
                                                <img src={education.image} alt="SkyKai" className="card-img-top custom-image-size border border-2" />
                                            </div>
                                            <div className='col-md-8 px-4'>
                                                <h5 className="card-title ">{education.school}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted px-1">{education.department}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted px-1">{education.degree},  {education.year}</h6>
                                                <p className="card-text px-1">
                                                    <h6>相關學習</h6>
                                                    <ul>
                                                        {education.descriptions.map((des, index) => (
                                                            <li key={index}>{des}</li>
                                                        ))}
                                                    </ul>
                                                </p>
                                                <p className="card-text px-1">
                                                    <h6>相關成果</h6>
                                                    <ul>
                                                        {education.projects.map((des, index) => (
                                                            <li key={index}>{des}</li>
                                                        ))}
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div ></div>
            </div>
        </div>
    )
}

export default Education;
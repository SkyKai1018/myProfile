import { useParams } from 'react-router-dom';

const Htmls = [];
try {
    for (let index = 1; index <= 100; index++) {
        const html = require(`./component/posts/${index}.js`).default;
        Htmls.push(html);
    }
} catch (error) {
    console.error(error); // 在控制台中顯示錯誤訊息
}

function Blog() {
    const id = useParams().id; // 取得動態參數的值
    let componentToRender = null;
    if (id >= 1 && id <= 10) {
        const ComponentToRender = Htmls[id - 1];
        componentToRender = <ComponentToRender />;
    } else {
        componentToRender = <div>找不到頁面</div>
    }

    return (
        <div>
            {componentToRender}
        </div>
    );
}

export default Blog; 
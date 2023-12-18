import { useParams } from 'react-router-dom';

const Htmls = Array.from({ length: 2 }, (_, index) => require(`./component/posts/${index + 1}.js`).default);

function Blog() {
    const id = useParams().id; // 取得動態參數的值
    let componentToRender = null;
    if (id >= 1 && id <= 10) {
        const ComponentToRender = Htmls[id - 1];
        componentToRender = <ComponentToRender />;
    } else {
        componentToRender = <div>找不到頁面</div>;
    }

    return (
        <div>
            {componentToRender}
        </div>
    );
}

export default Blog; 
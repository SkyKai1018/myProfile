//暫時不使用
// import { useParams } from 'react-router-dom';

// const Htmls = [];
// try {
//     for (let index = 1; index <= 100; index++) {
//         const html = require(`./component/posts/${index}.js`).default;
//         Htmls.push(html);
//     }
// } catch (error) {
//     console.error(error); // 在控制台中顯示錯誤訊息
// }

// function Blog() {
//     const id = useParams().id; // 取得動態參數的值
//     let componentToRender = null;

//     if (id === undefined) {
//         componentToRender = (
//             <>
//                 <div className='col-12 mb-3'>
//                     <h1>h1</h1>
//                 </div>

//                 <div className='col-12 mb-3'>
//                     <h1>h2</h1>
//                 </div>
//             </>
//         );
//         console.log(componentToRender)
//     }
//     else if (id >= 1 && id <= Htmls.length) {
//         const ComponentToRender = Htmls[id - 1];
//         componentToRender = <ComponentToRender />;
//     } else {
//         componentToRender = <div>找不到頁面</div>
//     }

//     return (
//         <>
//             <div className="row">
//                 <div className="Education-col col-md-10 offset-md-1 px-4 py-4 mb-3">
//                     {componentToRender}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Blog; 
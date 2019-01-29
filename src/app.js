/* NoteApp是一个nesting组件继承React.Component, 它包含了header组件, notes组件, action组件 */
class NoteApp extends React.Component {
    /* 通过render函数返回一个模版给当前的组件 */
    render() {
        return (
            /* 返回一个模版定义所有需要插入更新的元素 */
            /* 通过引用组件的名字将其包装在模版中作为
             * DOM元素
             */
            <div>
                <h2>NoteApp Demo</h2>
                <Header />
                <Notes />
                <Action />
            </div>
        ); 
    }
}

/* 定义NoteApp组件的第一个组件, 将其包装在tag中渲染出来 */
class Header extends React.Component {
    render() {
        return (
            <h4>Notes管理系统</h4>
        ); 
    }
}

/* 定义NoteApp的第二个组件Notes, Notes组件是一个nesting组件, 它包含了3个note单独的组件单元 */
class Notes extends React.Component {
    render() {
        return (
            /* 将Note组件名字引用到template中 */ 
            <div>
                Notes:
                <ol>
                    <li><Note /></li>
                    <li><Note /></li>
                    <li><Note /></li>
                </ol>
            </div>
        );
    }
}

/* 定义一个单独单元的Note组件 */ 
class Note extends React.Component {
    render() {
        return (
            <div>
                笔记 
                <button style={{margin: 5}}>remove</button>
            </div>
        );
    }
}

/* 定义NoteApp的最后一个组件 */
class Action extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={submit}>
                    <input type="text" name="noteForm" />
                    <button>add</button>
                </form>
                <br />

                <button onClick={removeAll}>Remove All</button>
            </div>
        ); 
    }
}

/* 为事件声明函数 */ 
const submit = () => {}
const removeAll = () => {}

/* 找到DOM元素的入口 */ 
const appRoot = document.getElementById("app"); 
/* 将组件(返回的模版)渲染到DOM元素的入口 */ 
ReactDOM.render(<NoteApp />, appRoot); 
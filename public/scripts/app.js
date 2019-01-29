"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* NoteApp是一个nesting组件继承React.Component, 它包含了header组件, notes组件, action组件 */
var NoteApp = function (_React$Component) {
    _inherits(NoteApp, _React$Component);

    function NoteApp() {
        _classCallCheck(this, NoteApp);

        return _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).apply(this, arguments));
    }

    _createClass(NoteApp, [{
        key: "render",

        /* 通过render函数返回一个模版给当前的组件 */
        value: function render() {
            return (
                /* 返回一个模版定义所有需要插入更新的元素 */
                /* 通过引用组件的名字将其包装在模版中作为
                 * DOM元素
                 */
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "NoteApp Demo"
                    ),
                    React.createElement(Header, null),
                    React.createElement(Notes, null),
                    React.createElement(Action, null)
                )
            );
        }
    }]);

    return NoteApp;
}(React.Component);

/* 定义NoteApp组件的第一个组件, 将其包装在tag中渲染出来 */


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h4",
                null,
                "Notes\u7BA1\u7406\u7CFB\u7EDF"
            );
        }
    }]);

    return Header;
}(React.Component);

/* 定义NoteApp的第二个组件Notes, Notes组件是一个nesting组件, 它包含了3个note单独的组件单元 */


var Notes = function (_React$Component3) {
    _inherits(Notes, _React$Component3);

    function Notes() {
        _classCallCheck(this, Notes);

        return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
    }

    _createClass(Notes, [{
        key: "render",
        value: function render() {
            return (
                /* 将Note组件名字引用到template中 */
                React.createElement(
                    "div",
                    null,
                    "Notes:",
                    React.createElement(
                        "ol",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(Note, null)
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(Note, null)
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(Note, null)
                        )
                    )
                )
            );
        }
    }]);

    return Notes;
}(React.Component);

/* 定义一个单独单元的Note组件 */


var Note = function (_React$Component4) {
    _inherits(Note, _React$Component4);

    function Note() {
        _classCallCheck(this, Note);

        return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
    }

    _createClass(Note, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "\u7B14\u8BB0",
                React.createElement(
                    "button",
                    { style: { margin: 5 } },
                    "remove"
                )
            );
        }
    }]);

    return Note;
}(React.Component);

/* 定义NoteApp的最后一个组件 */


var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: submit },
                    React.createElement("input", { type: "text", name: "noteForm" }),
                    React.createElement(
                        "button",
                        null,
                        "add"
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { onClick: removeAll },
                    "Remove All"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

/* 为事件声明函数 */


var submit = function submit() {};
var removeAll = function removeAll() {};

/* 找到DOM元素的入口 */
var appRoot = document.getElementById("app");
/* 将组件(返回的模版)渲染到DOM元素的入口 */
ReactDOM.render(React.createElement(NoteApp, null), appRoot);

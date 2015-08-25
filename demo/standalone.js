import {ProseMirror} from "../src/edit/main"
import {Pos, Node, rangeHasStyle, style} from "../src/model"
import {fromDOM} from "../src/convert/from_dom"

window.ProseMirror = ProseMirror
window.Pos = Pos
window.Node = Node
window.fromDOM = fromDOM
window.rangeHasStyle = rangeHasStyle
window.style = style

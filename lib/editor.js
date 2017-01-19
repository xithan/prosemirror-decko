import {EditorState} from "prosemirror-state"
import {MenuBarEditorView} from "prosemirror-menu"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser, DOMSerializer} from "prosemirror-model"
import {schema as baseSchema} from "prosemirror-schema-basic"
import {exampleSetup, buildMenuItems} from "prosemirror-example-setup"
import {addListNodes} from "prosemirror-schema-list"

let schema = new Schema({
	nodes: addListNodes(baseSchema.nodeSpec, "paragraph block*", "block"),
	marks: baseSchema.markSpec
});

let proseMirrorMap = {};
export function getProseMirror(id) {
  return proseMirrorMap[id];
};

export function getPMContent(id) {
  let pm = proseMirrorMap[id];
  let fragment = DOMSerializer.fromSchema(schema).serializeFragment(pm.editor.state.doc.content);
  let tmp = document.createElement("div");
  tmp.appendChild(fragment);
  return tmp.innerHTML
};

let parser = (slot) => {
            var content = $(slot).find('.card-content').val();
            let domNode = document.createElement("div");
            domNode.innerHTML = content;
            return DOMParser.fromSchema(schema).parse(domNode);
}

export function createProseMirror(id, opts) {
  var place = document.getElementById(id);
  proseMirrorMap[id] = new MenuBarEditorView(place, {
  	floatingMenu: true,
    //menuContent: buildMenuItems(schema).fullMenu,
  	state: EditorState.create({
        //schema: schema,
  		doc: parser(place),
        plugins: exampleSetup({schema: schema})
  	}),
  	onAction: function(action) {
      proseMirrorMap[id].updateState(proseMirrorMap[id].editor.state.applyAction(action))
  	}
  })
  return proseMirrorMap[id];
};

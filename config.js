System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "prosemirror": "npm:prosemirror@0.10.1",
    "prosemirror-example-setup": "npm:prosemirror-example-setup@0.17.0",
    "prosemirror-menu": "npm:prosemirror-menu@0.17.0",
    "prosemirror-model": "npm:prosemirror-model@0.17.0",
    "prosemirror-schema-basic": "npm:prosemirror-schema-basic@0.17.0",
    "prosemirror-schema-list": "npm:prosemirror-schema-list@0.17.0",
    "prosemirror-state": "npm:prosemirror-state@0.17.0",
    "prosemirror-view": "npm:prosemirror-schema-list@0.17.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:argparse@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:linkify-it@1.2.4": {
      "uc.micro": "npm:uc.micro@1.0.3"
    },
    "npm:markdown-it@6.1.1": {
      "argparse": "npm:argparse@1.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "linkify-it": "npm:linkify-it@1.2.4",
      "mdurl": "npm:mdurl@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uc.micro": "npm:uc.micro@1.0.3"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:prosemirror-commands@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0",
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror-dropcursor@0.17.0": {
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-view": "npm:prosemirror-view@0.17.0"
    },
    "npm:prosemirror-example-setup@0.17.0": {
      "prosemirror-commands": "npm:prosemirror-commands@0.17.0",
      "prosemirror-dropcursor": "npm:prosemirror-dropcursor@0.17.0",
      "prosemirror-history": "npm:prosemirror-history@0.17.0",
      "prosemirror-inputrules": "npm:prosemirror-inputrules@0.17.0",
      "prosemirror-keymap": "npm:prosemirror-keymap@0.17.0",
      "prosemirror-menu": "npm:prosemirror-menu@0.17.0",
      "prosemirror-schema-list": "npm:prosemirror-schema-list@0.17.0",
      "prosemirror-schema-table": "npm:prosemirror-schema-table@0.17.0",
      "prosemirror-state": "npm:prosemirror-state@0.17.0"
    },
    "npm:prosemirror-history@0.17.0": {
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0",
      "rope-sequence": "npm:rope-sequence@1.2.2"
    },
    "npm:prosemirror-inputrules@0.17.0": {
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror-keymap@0.17.0": {
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "w3c-keyname": "npm:w3c-keyname@1.1.5"
    },
    "npm:prosemirror-menu@0.17.0": {
      "crel": "npm:crel@3.0.0",
      "prosemirror-commands": "npm:prosemirror-commands@0.17.0",
      "prosemirror-history": "npm:prosemirror-history@0.17.0",
      "prosemirror-view": "npm:prosemirror-view@0.17.0"
    },
    "npm:prosemirror-model@0.17.0": {
      "orderedmap": "npm:orderedmap@1.0.0"
    },
    "npm:prosemirror-schema-basic@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0"
    },
    "npm:prosemirror-schema-list@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror-schema-table@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0",
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror-state@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror-transform@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0"
    },
    "npm:prosemirror-view@0.17.0": {
      "prosemirror-model": "npm:prosemirror-model@0.17.0",
      "prosemirror-state": "npm:prosemirror-state@0.17.0",
      "prosemirror-transform": "npm:prosemirror-transform@0.17.0"
    },
    "npm:prosemirror@0.10.1": {
      "browserkeymap": "npm:browserkeymap@1.0.1",
      "markdown-it": "npm:markdown-it@6.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "subscription": "npm:subscription@3.0.0"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rope-sequence@1.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

import * as ts from 'typescript';
/** vsc-base method
 * @description
 * Find is a direct parsedChild that matches conditions in a callback\
 * See also [tsHasChild](http://vsc-base.org/#tsHasChild) \
 * See also [tsFindGrandChild](http://vsc-base.org/#tsFindGrandChildNode)
 * @see [tsFindChildNode](http://vsc-base.org/#tsFindChildNode)
 * @vscType ts
 * @oneLineEx const childNode = vsc.tsFindChild(node, childNodeTestCallback })
 * @ex
const childNode = vsc.tsFindChild(node, (childNode)=> vsc.tsIdVariable(childNode, {
   name:/^varName$/,
   isConst: true
}))
 * @returns ts.Node | undefined
 */
export declare const tsFindChild: (node: ts.Node, callback: (child: ts.Node) => boolean) => ts.Node | undefined;
/** vsc-base method
 * @description
 * Test if direct parsedChild that matches conditions in a callback \
 * Using [tsFind](http://vsc-base.org/#tsFind) \
 * See also [tsHasGrandChild](http://vsc-base.org/#tsHasGrandChild)
 * @see [tsHasChild](http://vsc-base.org/#tsHasChild)
 * @vscType ts
 * @oneLineEx const child = vsc.tsHasChild(node, childNodeTestCallback })
 * @ex
const hasChild = vsc.tsHasChild(node, (childNode) => vsc.tsIsVariable(childNode, {
   name:/^varName$/,
   isConst: true
}))
 * @returns boolean
 */
export declare const tsHasChild: (node: ts.Node, callback: (child: ts.Node) => boolean) => boolean;
/** vsc-base method
 * @description
 * Test if it has all children or grandChildren (child's child) that matches conditions in a callback \
 * Using [tsHasChild](http://vsc-base.org/#tsHasChild)
 * @see [tsHasChildren](http://vsc-base.org/#tsHasChildren)
 * @vscType ts
 * @oneLineEx const childNode = vsc.tsHasChildren(node, [childNodeTestCallback1, childNodeTestCallback2])
 * @ex
// find a variable any where within the parent node, that is a const and has a staring name of: varName
const hasGrandChildNode = vsc.tsHasChildren(node, [
   childNode => vsc.tsIsVariable(childNode, { name:/^varName1/ }),
   childNode => vsc.tsIsVariable(childNode, { name:/^varName2/ })
})
 * @returns ts.Node | undefined
 */
export declare const tsHasChildren: (node: ts.Node, callbacks: ((child: ts.Node, depth: number) => boolean)[]) => boolean;
/** vsc-base method
 * @description
 * Find a child or grandChild (child's child) that matches conditions in a callback\
 * @see [tsFindGrandChild](http://vsc-base.org/#tsFindGrandChild)
 * @vscType ts
 * @oneLineEx const childNode = vsc.tsFindGrandChild(node, childNodeTestCallback)
 * @ex
// find a variable any where within the parent node, that is a const and has a staring name of: varName
const childNode = vsc.tsFindGrandChild(node, (childNode) => vsc.tsIsVariable(childNode, {
   name:/^varName/,
   isConst: true
}))
 * @returns ts.Node | undefined
 */
export declare const tsFindGrandChild: (node: ts.Node, callback: (child: ts.Node, depth: number) => boolean) => ts.Node | undefined;
/** vsc-base method
 * @description
 * Test if it has  a child or grandChild (child's child) that matches conditions in a callback \
 * Using [tsFindGrandchild](http://vsc-base.org/#tsFindGrandchild)
 * @see [tsHasGrandChild](http://vsc-base.org/#tsHasGrandChild)
 * @vscType ts
 * @oneLineEx const found = vsc.tsFindGrandChild(node, childNodeTestCallback)
 * @ex
// find a variable any where within the parent node, that is a const and has a staring name of: varName
const found = vsc.tsHasGrandChild(node, (childNode) => vsc.tsIsVariable(childNode, {
   name:/^varName/,
   isConst: true
}))
 * @returns boolean
 */
export declare const tsHasGrandChild: (node: ts.Node, callback: (child: ts.Node, depth: number) => boolean) => boolean;
/** vsc-base method
 * @description
 * Test if it has all Children or grandChildren (child's child) that matches conditions in a callback \
 * Using [tsFindGrandchild](http://vsc-base.org/#tsFindGrandchild)
 * @see [tsHasGrandChildren](http://vsc-base.org/#tsHasGrandChildren)
 * @vscType ts
 * @oneLineEx const found = vsc.tsHasGrandChildren(node, [childNodeTestCallback1, childNodeTestCallback2])
 * @ex
// find a variable any where within the parent node, that is a const and has a staring name of: varName
const found = vsc.tsHasGrandChildren(node, [
   childNode => return vsc.tsIsVariable(childNode, { name:/^varName1/ }),
   childNode => return vsc.tsIsVariable(childNode, { name:/^varName2/ })
})
 * @returns boolean
 */
export declare const tsHasGrandChildren: (node: ts.Node, callbacks: ((child: ts.Node, depth: number) => boolean)[]) => boolean;
/** vsc-base method
 * @description
 * Find a parent or ancestor (parent's parent) that matches conditions in a callback
 * @see [tsFindAncestor](http://vsc-base.org/#tsFindAncestor)
 * @vscType ts
 * @oneLineEx const ancestor = vsc.tsFindAncestor(node, ancestorNodeTestCallback)
 * @ex
// find a function with name 'someCaller'
const ancestor = vsc.tsFindAncestor(node, (childNode) => vsc.tsIsFunction(childNode, {
   name:/^someCaller$/
}))
 * @returns ts.Node | undefined
 */
export declare const tsFindAncestor: (node: ts.Node, callback: (ancestor: ts.Node, depth: number) => boolean) => ts.Node | undefined;
/** vsc-base method
 * @description
 * Test if it has a parent or ancestor (parent's parent) that matches conditions in a callback \
 * Using [tsFindAncestor](http://vsc-base.org/#tsFindAncestor)
 * @see [tsHasAncestor](http://vsc-base.org/#tsHasAncestor)
 * @vscType ts
 * @oneLineEx const hasAncestor = vsc.tsHasAncestor(node, ancestorNodeTestCallback)
 * @ex
// find a function with name 'someCaller'
const hasAncestor = vsc.tsHasAncestor(node, (childNode) => vsc.tsIsFunction(childNode, {
   name:/^someCaller$/
}))
 * @returns boolean
 */
export declare const tsHasAncestor: (node: ts.Node, callback: (ancestor: ts.Node, depth: number) => boolean) => boolean;
/** vsc-base method
 * @description
 * Test is it has all ancestors (parent's parent) that matches conditions in a callback \
 * Using [tsFindAncestor](http://vsc-base.org/#tsFindAncestor)
 * @see [tsHasAncestors](http://vsc-base.org/#tsHasAncestors)
 * @vscType ts
 * @oneLineEx const hasAncestor = vsc.tsHasAncestor(node, ancestorNodeTestCallback)
 * @ex
// find a function with name 'someCaller'
const hasAncestor = vsc.tsHasAncestor(node, (childNode) => vsc.tsIsFunction(childNode, {
   name:/^someCaller$/
}))
 * @returns boolean
 */
export declare const tsHasAncestors: (node: ts.Node, callbacks: ((ancestor: ts.Node, depth: number) => boolean)[]) => boolean;
/** vsc-base method
 * @description
 * Test is a node is a object property (node: ts.PropertyAssignment) \
 * Optional test for its name with a string or regexp. \
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * Optional value can be tested against a string, a number (with a string, number or regexp). \
 * See [tsIsValue](http://vsc-base.org/#tsIsValue)
 * @see [tsMatchObjectProperty](http://vsc-base.org/#tsMatchObjectProperty)
 * @vscType ts
 * @oneLineEx const objNode = vsc.tsMatchObjectProperty(node, options)
 * @ex
const objNode = vsc.tsMatchObjectProperty(node, { name: /^keyName$/ })
 * @returns ts.PropertyAssignment | undefined
 */
export declare const tsMatchObjectProperty: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    variableName?: RegExp | string;
    parentObjectPropertyName?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.PropertyAssignment | undefined;
/** vsc-base method
 * @description
 * Test if a node is a function \
 * (node: ts.isArrowFunction, ts.isFunctionExpression or ts.isFunctionDeclaration) \
 * Optional test for its name with a string or regexp. \
 * (For ArrowFunction's and FunctionExpression's it will test for a variable declaration that points to the function) \
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchFunction](http://vsc-base.org/#tsMatchFunction)
 * @vscType ts
 * @oneLineEx const funcNone = vsc.tsMatchFunction(node, options)
 * @ex
const funcNone = vsc.tsMatchFunction(node, { name: /^myCaller$/ })
 * @returns ts.ArrowFunction | ts.FunctionExpression | ts.FunctionDeclaration | undefined
 */
export declare const tsMatchFunction: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.ArrowFunction | ts.FunctionExpression | ts.FunctionDeclaration | undefined;
/** vsc-base method
 * @description
 * Test is a node is a variable declaration (node: ts.VariableDeclaration) \
 * Optional test for its name with a string or regexp, \
 * Optional test if its a const, let or var. \
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * Optional value can be tested against a string, a number (with a string, number or regexp). \
 * See [tsIsValue](http://vsc-base.org/#tsIsValue)
 * @see [tsMatchVariable](http://vsc-base.org/#tsMatchVariable)
 * @vscType ts
 * @oneLineEx const varNode = vsc.tsMatchVariable(node, options)
 * @ex
const varNode = vsc.tsMatchVariable(node, { name: /^myCaller$/ })
 * @returns ts.VariableDeclaration | undefined
 */
export declare const tsMatchVariable: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    isConst?: boolean;
    isLet?: boolean;
    isVar?: boolean;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.VariableDeclaration | undefined;
/** vsc-base method
 * @description
 * Test is a node is a identifier (node: ts.Identifier) \
 * Optional test for its name with a string or regexp, \
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchIdentifier](http://vsc-base.org/#tsMatchIdentifier)
 * @vscType ts
 * @oneLineEx const identifierNode = vsc.tsMatchIdentifier(node, options)
 * @ex
const identifierNode = vsc.tsMatchIdentifier(node, { name: /^myCaller$/ })
 * @returns ts.Identifier | undefined
 */
export declare const tsMatchIdentifier: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
}) => ts.Identifier | undefined;
/** vsc-base method
 * @description
 * Test is a node is an interface (node: ts.InterfaceDeclaration) \
 * and optional test for its name with a string or regexp. \
 * Optional test for hasAncestor and hasGrandchild. \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchEnum](http://vsc-base.org/#tsMatchEnum)
 * @vscType ts
 * @oneLineEx const interfaceNode = vsc.tsMatchInterface(node, options)
 * @ex
const interfaceNode = vsc.tsMatchInterface(node, { name: /^myCaller$/ })
 * @returns ts.EnumDeclaration | undefined
 */
export declare const tsMatchInterface: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.InterfaceDeclaration | undefined;
/** vsc-base method
 * @description
 * Test is a node is an type reference (node: ts.TypeReferenceNode) \
 * and optional test for its name with a string or regexp. \
 * Optional test for hasAncestor and hasGrandchild. \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchEnum](http://vsc-base.org/#tsMatchEnum)
 * @vscType ts
 * @oneLineEx const typeRefNode = vsc.tsMatchTypeRef(node, options)
 * @ex
const typeRefNode = vsc.tsMatchTypeRef(node, { name: /^myCaller$/ })
 * @returns ts.TypeReferenceNode | undefined
 */
export declare const tsMatchTypeRef: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.TypeReferenceNode | undefined;
/** vsc-base method
 * @description
 * Test is a node is an enum  declaration (node: ts.EnumDeclaration) \
 * and optional test for its name with a string or regexp. \
 * Optional test for hasAncestor and hasGrandchild. \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchEnum](http://vsc-base.org/#tsMatchEnum)
 * @vscType ts
 * @oneLineEx const enumNode = vsc.tsMatchEnum(node, options)
 * @ex
const enumNode = vsc.tsMatchEnum(node, { name: /^myCaller$/ })
 * @returns ts.EnumDeclaration | undefined
 */
export declare const tsMatchEnum: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.EnumDeclaration | undefined;
/** vsc-base method
 * @description
 * Test is a node is a enum member (node: ts.EnumMember) \
 * and optional test for its name, the enum' name (its parent) \
 * it value, hasAncestor and hasGrandchild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchEnumMember](http://vsc-base.org/#tsMatchEnumMember)
 * @vscType ts
 * @oneLineEx const enumMemberNode = vsc.tsMatchEnumMember(node, options)
 * @ex
const enumMemberNode = vsc.tsMatchEnumMember(node, { name: /^myCaller$/ })
 * @returns ts.EnumMember | undefined
 */
export declare const tsMatchEnumMember: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    enumName?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.EnumMember | undefined;
/** vsc-base method
 * @description
 * Test is a node is a call expression (node: ts.CallExpression) \
 * and optional test for its name, and arguments.\
 * it's value, hasAncestor and hasGrandchild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsMatchCall](http://vsc-base.org/#tsMatchCall)
 * @vscType ts
 * @oneLineEx const callNode = vsc.tsMatchCall(node, options)
 * @ex
const callNode = vsc.tsMatchCall(node, { name: /^myCaller$/ })
 * @returns ts.CallExpression | undefined
 */
export declare const tsMatchCall: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasArgument?: (parent: ts.Node) => boolean;
    hasArguments?: ((parent: ts.Node) => boolean)[];
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.CallExpression | undefined;
/** vsc-base method
 * @description
 * Test is a node is a call expression (node: ts.CallExpression) \
 * and optional test for its name, and arguments.\
 * it's value, hasAncestor and hasGrandchild \
 * See [tsIsNode](http://vsc-base.org/#tsIsNode) \
 * @see [tsIsCall](http://vsc-base.org/#tsIsCall)
 * @vscType ts
 * @oneLineEx const isCall = vsc.tsIsCall(node, options)
 * @ex
const isCall = vsc.tsMatchCall(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsCall: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasArgument?: (parent: ts.Node) => boolean;
    hasArguments?: ((parent: ts.Node) => boolean)[];
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is an import declaration (node: ts.ImportDeclaration) \
 * and optional test for its default ímport name ( import x from '' )
 * hasSpecifiers ( import names in brakes: import &#123; x &#125; from '').\
 * or nameSpace import name: ( import * as namespace from '' ) \
 * or path for matching the source path. \
 * or direct import which has no import names ( import form '' )
 * Note: An alias in a specifier is its name: ( import &#123; some as x &#125; from '' ).
 * @see [tsMatchImport](http://vsc-base.org/#tsMatchImport)
 * @vscType ts
 * @oneLineEx const _import = vsc.tsMatchCall(node, options)
 * @ex
const aReactImport = vsc.tsMatchImport(node, { path: /react/ })
 * @returns ts.ImportDeclaration | undefined
 */
export declare const tsMatchImport: (node: ts.Node | undefined, options?: {
    path?: RegExp | string;
    direct?: boolean;
    defaultName?: RegExp | string;
    nameSpace?: RegExp | string;
    hasSpecifiersName?: RegExp | string;
    hasSpecifiers?: (elements: ts.NodeArray<ts.ImportSpecifier>) => boolean;
}) => ts.ImportDeclaration | undefined;
/** vsc-base method
 * @description
 * Test is a node is an import declaration (node: ts.ImportDeclaration) \
 * and optional test for its default ímport name ( import x from '' )
 * hasSpecifiers ( import names in brakes: import &#123; x &#125; from '').\
 * or nameSpace import name: ( import * as namespace from '' ) \
 * or path for matching the source path. \
 * or direct import which has no import names ( import form '' )
 * Note: An alias in a specifier is its name: ( import &#123; some as x &#125; from '' ).
 * See also [tsMatchImport](http://vsc-base.org/#tsMatchImport)
 * @see [tsIsImport](http://vsc-base.org/#tsIsImport)
 * @vscType ts
 * @oneLineEx const isImport = vsc.tsIsImport(node, options)
 * @ex
const isImport = vsc.tsIsImport(node, { path: /react/ })
 * @returns boolean
 */
export declare const tsIsImport: (node: ts.Node | undefined, options?: {
    path?: RegExp | string;
    direct: boolean;
    defaultName?: RegExp | string;
    nameSpace?: RegExp | string;
    hasSpecifiersName?: RegExp | string;
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is a object property (node: ts.PropertyAssignment) \
 * Uses [tsMatchObjectProperty](http://vsc-base.org/#tsMatchObjectProperty)
 * @see [tsIsObjectProperty](http://vsc-base.org/#tsIsObjectProperty)
 * @vscType ts
 * @oneLineEx const isObjNode = vsc.tsIsObjectProperty(node, options)
 * @ex
const isObjNode = vsc.tsIsObjectProperty(node, { name: /^keyName$/ })
 * @returns boolean
 */
export declare const tsIsObjectProperty: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    variableName?: RegExp | string;
    parentObjectPropertyName?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test if a node is a function \
 * (node: ts.isArrowFunction, ts.isFunctionExpression or ts.isFunctionDeclaration) \
 * Uses [tsMatchFunction](http://vsc-base.org/#tsMatchFunction)
 * @see [tsIsFunction](http://vsc-base.org/#tsIsFunction)
 * @vscType ts
 * @oneLineEx const isFunctionNone = vsc.tsIsFunction(node, options)
 * @ex
const isFunctionNone = vsc.tsIsFunction(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsFunction: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is a variable declaration (node: ts.VariableDeclaration) \
 * Uses [tsMatchVariable](http://vsc-base.org/#tsMatchVariable)
 * @see [tsIsVariable](http://vsc-base.org/#tsIsVariable)
 * @vscType ts
 * @oneLineEx const isVariableNode = vsc.tsIsVariable(node, options)
 * @ex
const isVariableNode = vsc.tsIsVariable(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsVariable: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    isConst?: boolean;
    isLet?: boolean;
    isVar?: boolean;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is a variable declaration (node: ts.VariableDeclaration) \
 * Uses [tsMatchIdentifier](http://vsc-base.org/#tsMatchIdentifier)
 * @see [tsIsIdentifier](http://vsc-base.org/#tsIsIdentifier)
 * @vscType ts
 * @oneLineEx const isIdentifierNode = vsc.tsIsIdentifier(node, options)
 * @ex
const isIdentifierNode = vsc.tsIsIdentifier(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsIdentifier: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is an interface (node: ts.InterfaceDeclaration) \
 * Uses [tsMatchInterface](http://vsc-base.org/#tsMatchInterface)
 * @see [tsIsEnum](http://vsc-base.org/#tsIsEnum)
 * @vscType ts
 * @oneLineEx const isInterfaceNode = vsc.tsIsInterface(node, options)
 * @ex
const isInterfaceNode = vsc.tsIsInterface(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsInterface: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is an type reference (node: ts.TypeReferenceNode) \
 * Uses [tsMatchTypeRef](http://vsc-base.org/#tsMatchTypeRef)
 * @see [tsIsEnum](http://vsc-base.org/#tsIsEnum)
 * @vscType ts
 * @oneLineEx const isTypeRefNode = vsc.tsIsTypeRef(node, options)
 * @ex
const isTypeRefNode = vsc.tsIsTypeRef(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsTypeRef: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is an enum  declaration (node: ts.EnumDeclaration) \
 * Uses [tsMatchEnum](http://vsc-base.org/#tsMatchEnum)
 * @see [tsIsEnum](http://vsc-base.org/#tsIsEnum)
 * @vscType ts
 * @oneLineEx const isEnumNode = vsc.tsIsEnum(node, options)
 * @ex
const isEnumNode = vsc.tsIsEnum(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsEnum: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test is a node is a enum member (node: ts.EnumMember) \
 * Uses [tsMatchEnumMember](http://vsc-base.org/#tsMatchEnumMember)
 * @see [tsIsEnumMember](http://vsc-base.org/#tsIsEnumMember)
 * @vscType ts
 * @oneLineEx const isEnumMember = vsc.tsIsEnumMember(node, options)
 * @ex
const isEnumMember = vsc.tsIsEnumMember(node, { name: /^myCaller$/ })
 * @returns boolean
 */
export declare const tsIsEnumMember: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    enumName?: RegExp | string;
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Base test for node properties. \
 * Optional test for its name with a string or regexp. \
 * (return false for node that don't have name property)\
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsHasAncestor](http://vsc-base.org/#tsHasAncestor), [tsHasAncestors](http://vsc-base.org/#tsHasAncestors), [hasGrandChild](http://vsc-base.org/#hasGrandChild) and [hasGrandChildren](http://vsc-base.org/#hasGrandChildren) \
 * Optional value can be tested against a string, a number (with a string, number or regexp). \
 * (return false for node that don't have initializer)\
 * See [tsIsValue](http://vsc-base.org/#tsIsValue) \
 * @see [tsIsNode](http://vsc-base.org/#tsIsNode)
 * @vscType ts
 * @oneLineEx const found = vsc.tsIsNode(node, options)
 * @ex
const found = vsc.tsIsNode(node, { name: /^keyName$/ })
 * @returns boolean
 */
export declare const tsIsNode: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Test if node is an value: string expression, number expression or boolean (true or false) \
 * and match the value: true, false, a number, a string, \
 * A RegExp can be applied for string/number search. \
 * Optional test hasAncestor. \
 * See [tsHasAncestor](http://vsc-base.org/#tsHasAncestor) and [tsHasAncestors](http://vsc-base.org/#tsHasAncestors)
 * @see [tsIsValue](http://vsc-base.org/#tsIsValue)
 * @vscType ts
 * @oneLineEx const found = vsc.tsIsValue(node, value)
 * @ex
// Found a NumberExpression with value 12
const foundNumberExpression = vsc.tsIsValue(node, 12)
// Found a NumberExpression with value 12, with a parent EnumValue
const foundNumberExpression = vsc.tsIsValue(node, 12, {
   hasParent: parent => vsc.matchEnum(parent)
})
 * @returns boolean
 */
export declare const tsIsValue: (node: ts.Node | undefined, value: (RegExp | string | number | boolean | null), options?: {
    hasParent: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
}) => boolean;
/** vsc-base method
 * @description
 * Base test for node properties. \
 * Optional test for its name with a string or regexp. \
 * (return false for node that don't have name property)\
 * Optional test for tsHasAncestor and hasGrandChild \
 * See [tsHasAncestor](http://vsc-base.org/#tsHasAncestor), [tsHasAncestors](http://vsc-base.org/#tsHasAncestors), [hasGrandChild](http://vsc-base.org/#hasGrandChild) and [hasGrandChildren](http://vsc-base.org/#hasGrandChildren) \
 * Optional value can be tested against a string, a number (with a string, number or regexp). \
 * (return false for node that don't have initializer)\
 * See [tsIsValue](http://vsc-base.org/#tsIsValue) \
 * @see [tsMatchNode](http://vsc-base.org/#tsMatchNode)
 * @vscType ts
 * @oneLineEx const foundNode = vsc.tsMatchNode(node, options)
 * @ex
const foundNode = vsc.tsMatchNode(node, { name: /^keyName$/ })
 * @returns s.Node | undefined
 */
export declare const tsMatchNode: (node: ts.Node | undefined, options?: {
    name?: RegExp | string;
    value?: (RegExp | string | number | boolean | null);
    hasParent?: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
    hasGrandChild?: (child: ts.Node, depth: number) => boolean;
    hasGrandChildren?: ((child: ts.Node, depth: number) => boolean)[];
}) => ts.Node | undefined;
/** vsc-base method
 * @description
 * Test if node is an value: string expression, number expression or boolean (true or false) \
 * and match the value: true, false, a number, a string, \
 * A RegExp can be applied for string/number search. \
 * Optional test hasAncestor. \
 * See [tsHasAncestor](http://vsc-base.org/#tsHasAncestor) and [tsHasAncestors](http://vsc-base.org/#tsHasAncestors)
 * @see [tsMatchValueNode](http://vsc-base.org/#tsMatchValueNode)
 * @vscType ts
 * @oneLineEx const foundNode = vsc.tsMatchValueNode(node, value)
 * @ex
// Found a NumberExpression with value 12
const foundNode = vsc.tsMatchValueNode(node, 12)
// Found a NumberExpression with value 12, with a parent EnumValue
const foundNode = vsc.tsMatchValueNode(node, 12, {
   hasParent: parent => vsc.matchEnum(parent)
})
 * @returns s.Node | undefined
 */
export declare const tsMatchValueNode: (node: ts.Node | undefined, value: (RegExp | string | number | boolean | null), options?: {
    hasParent: (parent: ts.Node) => boolean;
    hasAncestor?: (parent: ts.Node, depth: number) => boolean;
    hasAncestors?: ((parent: ts.Node, depth: number) => boolean)[];
}) => ts.Node | undefined;
import * as ts from 'typescript'
import * as vsc from 'vsc-base'

type Imports = {
	node: ts.Node;
	pos: vsc.VscodePosition;
	path: string;
	fullString?: string,
	fullStart?: number,
	fullEnd?: number
}[]

export async function run(path: string) {
	const dir = vsc.getDir(path)
	const content = vsc.getDocumentContent()
	if (!content) { return }
	const [dependencies, devDependencies] = await vsc.getPackageDependencies()
	const dependencyNames = Object.keys({ ...dependencies, ...devDependencies })
	const [node, firstPos] = vsc.tsFindNodePositionFromContent(content,
		node => !ts.isSourceFile(node) && !ts.isImportDeclaration(node)
	)
	// All imports before first statement, mapped with import path
	let imports: Imports = vsc.tsFindAllNodePositionsFromContent(content,
		node => ts.isImportDeclaration(node) && (!firstPos || node.end < firstPos.start)
	)
		.map(([node, pos]) => ({
			node,
			pos,
			path: (node as ts.ImportDeclaration).moduleSpecifier.getText().replace(/^['"]|['"]$/g, '')
		})
		)
	imports.reduce((all, next, index) => {
		const last = all[index - 1]
		const lastPos = (!last) ? next.pos.start : last.pos.end + 1
		all.push({
			...next,
			fullString: content.substring(lastPos, next.pos.end),
			fullStart: lastPos,
			fullEnd: next.pos.end
		})
		return all;
	}, imports)
	if (!imports) { return }
	// Add full string version includeing comments and format:


	//find last inport
	const lastImport = imports.sort((a, b) => b.pos.end - a.pos.end)[0]
	//sort
	imports.sort((a, b) => a.path.localeCompare(b.path))
	//split into global / local
	const globalImports: Imports = []
	const localImports: Imports = []
	imports.forEach(_import => {
		const global = !!dependencyNames.find(name => {
			return name.indexOf(_import.path) === 0
		})
		if (global) {
			globalImports.push(_import)
		} else {
			localImports.push(_import)
		}
	})
	const newImportContent =
		globalImports.map(i => i.node.getText()).join('\n')
		+ (globalImports.length > 0 && localImports.length > 0 ? '\n\n' : '')
		+ localImports.map(i => i.node.getText()).join('\n')
	//await vsc.setSelectionFromRange(lastImport.pos.range)
	await vsc.insertAt(newImportContent, 0, lastImport.pos.end)
}

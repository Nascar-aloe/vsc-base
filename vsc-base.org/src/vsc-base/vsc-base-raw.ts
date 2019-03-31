/**
 * Transform an absolute path from root, to a sub-relative path.
 * @param path
 * @param rootPath
 * @param absolutePathFromRoot
 */
const absolutePathFromRootToSubRelative = (path: string, absolutePathFromRoot: string, rootPath: string): string => {
   const [sourceDirPath] = vsc.splitPath(path)
   let sourceDirPathFromRoot = vsc.subtractPath(sourceDirPath, rootPath)
   sourceDirPathFromRoot = sourceDirPathFromRoot + '/'
   let absolutePathFromSourceDir = vsc.subtractPath(absolutePathFromRoot, sourceDirPathFromRoot)
   if (absolutePathFromSourceDir !== absolutePathFromRoot) {
      absolutePathFromSourceDir = vsc.addLeadingLocalDash(absolutePathFromSourceDir)
   }
   return absolutePathFromSourceDir
}

/**
 * Add './' to start of path
 * @param path
 */
const addLeadingLocalDash = (path: string): string => {
   return './' + path
}

/**
 * Format a string from camel-case to kebab-case. Commonly used to define css class names. (SomeName => some-name)
 * ( test passed √ )
 * @param str
 */
const camalcaseToKebabcase = (str: string): string =>
   str[0].toLowerCase() + str.substr(1).replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

/**
 * Get clean path. folder/../folder/file => folder/file, folder/./file => file
 * ( test passed √ )
 * @param path
 */
const cleanPath = (path: string): string => {
   path = path.replace(/\/.\//g, '/')
   const reg = /\/\w+\/\.\.\//
   while (reg.test(path)) {
      path = path.replace(reg, '/')
   }
   return path
}

/**
 * Get part of a json object.
 * ( test passed √ )
 * @param json
 * @param keyPath Ex sub.sub.name >> {sub:{sub:{name:'Foo'}}} >> Foo
 */
const getJsonParts = (json: { [name: string]: any }, keyPath: string): any => {
   let current: any = json
   const keySplit = keyPath.split(/\./)
   for (let i = 0; i < keySplit.length; i++) {
      const key = keySplit[i]
      if (current[key] === undefined) {
         return undefined
      }
      current = current[key]
   }
   return current
}

/**
 * Does path start with charactor [a-zA-Z@] (not '/' or './' or '../')
 * @param path
 * @param startWithRegExp? If your project defines another definition of absolute path then overwrite this.
 */
const isAbsolutePath = (path: string, startWithRegExp = /^[a-zA-Z@]/): boolean => {
   return startWithRegExp.test(path)
}

/**
 * Does subpath start with parentPath
 * ( test passed √ )
 * @param path
 * @param parentPath
 */
const isSubPath = (subPath: string, parentPath: string): boolean => {
   parentPath = vsc.trimDashes(parentPath)
   const result = subPath.indexOf(parentPath + '/') === 0
   return result
}

/**
 * Reaplve all '\\'  with '/'
 * @param path
 */
const pathAsUnix = (path: string): string => {
   return path.replace(/\\/g, '/')
}

/**
 * Generate relative path between two paths.
 * @param fromPath
 * @param toPath
 */
const relatrivePath = (fromPath: string, toPath: string): string => {
   const sharedPath = vsc.sharedPath(fromPath, toPath)
   const [fromDir] = vsc.splitPath(fromPath)
   const [toDir] = vsc.splitPath(toPath)
   const fromPathDownToShared = vsc.subtractPath(fromDir, sharedPath)
   let toPathDownToShared = vsc.subtractPath(toDir, sharedPath)
   const backPath = fromPathDownToShared
      .split(/\//)
      .map(_ => '../')
      .join('')
   const relativePath = backPath + toPathDownToShared
   return relativePath
}

/**
 * Transform a relative path to an abspolute path.
 * ( test passed √ )
 * dependensies: { cleanPath, trimLeadingDash, subtractPath, getDirFromPath, trimLeadingLocalDash}
 * @param path File from where the relative path begins
 * @param pathRelatriveToPath The relative path
 * @param rootPath The root path
 * @param realPathTest Test if the real  The root path
 */
const relatrivePathToAbsolutePath = (path: string, pathRelatriveToPath: string, rootPath: string): string => {
   if (vsc.isAbsolutePath(pathRelatriveToPath)) {
      return pathRelatriveToPath
   }
   let [dir] = vsc.splitPath(path)
   dir += '/'
   const relativePath = dir + pathRelatriveToPath
   let cleanRelativePath = vsc.cleanPath(relativePath)
   let absolutePathToRelative = vsc.subtractPath(cleanRelativePath, rootPath)
   absolutePathToRelative = vsc.trimLeadingDash(absolutePathToRelative)
   return absolutePathToRelative
}

/**
 * Return the path that are shared. (Return '' if no path are shared).
 * @param path1
 * @param path2
 */
const sharedPath = (path1: string, path2: string) => {
   const path1Parts = path1.split(/\//)
   const path2Parts = path2.split(/\//)
   const shared = []
   for (let i = 0; i < path1Parts.length; i++) {
      if (!path2Parts[i] || path1Parts[i] !== path2Parts[i]) {
         break
      }
      shared.push(path1Parts[i])
   }
   const finalShared = shared.join('/')
   return finalShared
}

/**
 * await wrap for setTimeout. Mostly used for debug asyc.
 * @param ms
 */
const sleep = async (ms: number): Promise<void> => {
   return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Get the folder path from a file path
 * ( test passed √ )
 * dependensies: { methods.getDirFromPath }
 * @param path string
 */
const splitPath = (path: string): [string, string] => {
   path = vsc.pathAsUnix(path)
   const splits = path.split('/')
   const name = splits.pop() || ''
   const dir = splits.join('/')
   return [dir, name]
}

/**
 * Remove parent-path from a path
 * @param path
 * @param parentPath
 * @param trimDashes default true
 */
const subtractPath = (path: string, parentPath: string, trimDashes = true): string => {
   const regexp = new RegExp(`^${parentPath}`)
   let newPath = path.replace(regexp, '')
   if (trimDashes) {
      newPath = vsc.trimDashes(newPath)
   }
   return newPath
}

/**
 * Format a string to camal-case. Commonly used to define js/ts variable names.
 * (Some-Name => someName, some_name => someName, some.name => someName )
 * All non word seperators will be removed and the word charector after will be transforms to upper case
 * ( test passed √ )
 * @param str
 */
const toCamelcase = (str: string): string =>
   str[0].toLowerCase() + str.substr(1).replace(/[^a-zA-Z]+(.)/g, (_match, chr) => chr.toUpperCase())

/**
 * Remove '/' from start and end of path
 * @param path
 */
const trimDashes = (path: string): string => {
   return path.replace(/(^\/|\/$)/g, '')
}

/**
 * Remove '/' from start of path
 * @param path
 */
const trimLeadingDash = (path: string): string => {
   return path.replace(/^\//, '')
}

/**
 * export methods
 */
const vsc /* IVscBase */ = {
   absolutePathToSubRalative: absolutePathFromRootToSubRelative,
   addLeadingLocalDash,
   camalcaseToKebabcase,
   cleanPath,
   getJsonParts,
   isAbsolutePath,
   isSubPath,
   relatrivePath,
   pathAsUnix,
   relatrivePathToAbsolutePath,
   sharedPath,
   sleep,
   splitPath,
   subtractPath,
   toCamelcase,
   trimDashes,
   trimLeadingDash
}
export default vsc

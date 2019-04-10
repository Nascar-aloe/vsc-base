import React from 'react'
import AnnotatedCode from 'components/AnnotatedCode/AnnotatedCode'


import * as vsc from '../vsc-base-raw'

import MethodTest from 'components/MethodTest/MethodTest'


const GetRelativePathAnnotatedCode = () => {
   return (
      <AnnotatedCode
         id={'getRelativePath'}
         title={'getRelativePath'}
         annotation={
            <>
               <p>
                  Generate relative path between two paths.
               </p>
            </>
         }
         
      test={
         <MethodTest
            initialArgs={ { 
    fromPath: 'c:/somefolder/sub1/sub2/someFile.js',
    toPath: 'c:/somefolder/other/someFile.js'
 }}
            onClickCall={(args, printResult) => {
   const relativePath = vsc.getRelativePath(args.fromPath, args.toPath)
   printResult(relativePath)
}}
         />
      }
      
         codeOneLineEx={`const relativePath = vsc.getRelativePath(fromPath, toPath)`}
         codeEx={``}
         code={`/**
 * Generate relative path between two paths.
 * @see http://vsc-base.org/#relatrivePath
 * @param fromPath
 * @param toPath
 * @vscType Raw
 * @oneLineEx const relativePath = vsc.getRelativePath(fromPath, toPath)
 * @testPrinterArgument
 \{ 
    fromPath: 'c:/somefolder/sub1/sub2/someFile.js',
    toPath: 'c:/somefolder/other/someFile.js'
 }
 * @testPrinter (args, printResult) => \{
   const relativePath = vsc.getRelativePath(args.fromPath, args.toPath)
   printResult(relativePath)
}
 * @dependencyInternal sharedPath, splitPath, subtractPath
 * @returns string
 */
export const getRelativePath = (fromPath: string, toPath: string): string => \{
   const _sharedPath = vsc.sharedPath(fromPath, toPath)
   const [fromDir] = vsc.splitPath(fromPath)
   const [toDir] = vsc.splitPath(toPath)
   const fromPathDownToShared = vsc.subtractPath(fromDir, _sharedPath)
   let toPathDownToShared = vsc.subtractPath(toDir, _sharedPath)
   const backPath = fromPathDownToShared
      .split(/\\//)
      .map(_ => '../')
      .join('')
   const relativePath = backPath + toPathDownToShared
   return relativePath
}
`}
      />
   )
}

export default GetRelativePathAnnotatedCode

import React from 'react'
import AnnotatedCode from 'components/AnnotatedCode/AnnotatedCode'



const GetActiveDocumentAnnotatedCode = () => {
   return (
      <AnnotatedCode
         id={'getActiveDocument'}
         title={'getActiveDocument'}
         annotation={
            <>
               <p>
                  Get open vscode.TextDocument
               </p>
            </>
         }
         
         codeOneLineEx={`const document = vsc.getActiveDocument()`}
         codeEx={``}
         code={`/**
 * Get open vscode.TextDocument
 * @see http://vsc-base.org/#getActiveDocument
 * @dependencyExternal vscode
 * @oneLineEx const document = vsc.getActiveDocument()
 * @returns vscode.TextDocument | undefined
 */
export const getActiveDocument = (): vscode.TextDocument | undefined => {
   const activeEditor = vsc.getActiveEditor()
   const document = activeEditor && activeEditor.document
   return document
}
`}
      />
   )
}

export default GetActiveDocumentAnnotatedCode


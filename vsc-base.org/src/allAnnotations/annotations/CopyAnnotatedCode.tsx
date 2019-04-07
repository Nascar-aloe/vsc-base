import React from 'react'
import AnnotatedCode from 'components/AnnotatedCode/AnnotatedCode'



const CopyAnnotatedCode = () => {
   return (
      <AnnotatedCode
         id={'copy'}
         title={'copy'}
         annotation={
            <>
               <p>
                  Copy file/fodler
               </p>
            </>
         }
         
         codeOneLineEx={`await vsc.copy(oldPath, newPath)`}
         codeEx={``}
         code={`/**
 * Copy file/fodler
 * @see http://vsc-base.org/#copy
 * @param path
 * @param newPathstring
 * @oneLineEx await vsc.copy(oldPath, newPath)
 * @dependencyExternal fs
 * @returns Promise<void>
 */
export const copy = async (path: string, newPath: string): Promise<void> => {
   await fs.copy(path, newPath)
}

`}
      />
   )
}

export default CopyAnnotatedCode


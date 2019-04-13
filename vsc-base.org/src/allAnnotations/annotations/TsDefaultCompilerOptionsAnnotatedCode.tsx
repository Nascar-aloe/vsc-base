import React from 'react'
import AnnotatedCode from 'components/AnnotatedCode/AnnotatedCode'



const TsDefaultCompilerOptionsAnnotatedCode = () => {
   return (
      <AnnotatedCode
         id={'TsDefaultCompilerOptions'}
         title={'TsDefaultCompilerOptions'}
         annotation={
            <>
               <p>
                  
 vsc-base's internal default ts compiler options
               </p>
            </>
         }
         
         codeOneLineEx={`const compilerOptions = vsc.TsDefaultCompilerOptions`}
         codeEx={``}
         code={`/**
 * @description 
 * vsc-base's internal default ts compiler options
 * @see http://vsc-base.org/#TsDefaultCompilerOptions
 * @internal
 * @experimental This method can easily change, because ts api is in experimental state.
 * @vscType ts
 * @oneLineEx const compilerOptions = vsc.TsDefaultCompilerOptions
 */
export const TsDefaultCompilerOptions: Readonly<ts.CompilerOptions> = (\{
   module: ts.ModuleKind.CommonJS,
   target: ts.ScriptTarget.ES2015,
   libs: ['es6']
})

`}
      />
   )
}

export default TsDefaultCompilerOptionsAnnotatedCode

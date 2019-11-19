import React from 'react'
import AnnotatedCode from 'components/AnnotatedCode/AnnotatedCode'



const StartWebviewAnnotatedCode = ({ open = false }: {open?: boolean}) => {
   return (
      <AnnotatedCode
         id={'startWebview'}
         title={'startWebview'}
         open={open}
         annotation={
            <>
               <p>
                  
Start up a webview with message passing between it and the extension. 
               </p>
               <p>
               * It uses <a href='http://vsc-base.org/#setupWebviewConnection'>setupWebviewConnection</a> together with <a href='http://vsc-base.org/#initWebview'>initWebview</a> and <a href='http://vsc-base.org/#WebviewHTMLTemplate'>WebviewHTMLTemplate</a> 
               </p>
               <p>
               * to create an easy model for using webview in an extension or script. 
               </p>
               <p>
               * WebviewHTMLTemplate will setup a global &#039;postMessage&#039; that can be used directly in the applied body html or in the onWebviewMessage.
               </p>
            </>
         }
         
         codeOneLineEx={`* const [postMessage, onMessage] = vsc.startWebview(context, \{*    title: "Rename",
*    body: \`
*        <div class='container'>
*            <h2>Test 1: Search for file path with glob</h2>
*           <div class="row">
*              <button onClick="postMessage(\{command:'show',value:'1'})">Show '1'</button>
*              <button onClick="postMessage(\{command:'end'})">END</button><br/>
*           </div>
*           <br><br>
*           Search: <input type='text' id='s' onkeyup="postMessage(\{command:'search',value:this.value})" >
*           <br><br>
*           <div id='info'>info</div>
*        </div>
*     \`,
*    onWebviewMessage: (message: any) => \{
*      switch (message.command) \{
*        case "info":
*        case "find":
*          document.getElementById("info")!.innerHTML = message.content;
*          break;
*      }
*    }
*  });
*  await onMessage(async (message, dispose) => \{
*    switch (message.command) \{
*      case "show":
*        vsc.showMessage(message.value);
*        break;
*      case "end":
*        dispose();
*        break;
*      case "search":
*        const files = await vsc.findFilePaths(message.value);
*        postMessage(\{ command: "find", content: files.length });
*        break;
*    }
*  });
*  vsc.showMessage('Done!')`}
         codeEx={``}
         code={`/**
 * @internal internal
 * @vscType webview
 * @returns returns
 */
export const startWebview = (context: vscode.ExtensionContext, startOptions: vsc.IStartWebviewOptions): vsc.WebviewConnectionReturnType => \{
   const webviewPanel = vsc.initWebview(startOptions);
   const [sendMessage, createdOnMessage] = vsc.setupWebviewConnection(context, webviewPanel)
   return [sendMessage, createdOnMessage]
}
export interface IStartWebviewOptions \{
   viewType?: string,
   title?: string,
   html?: string,
   body?: string,
   style?: string,
   onWebviewMessage?: string | ((message: any) => void),
   webviewCommands?: any,
   htmlTemplateMethod?: (body?: string, script?: string, style?: string) => string,
   showOptions?: vscode.ViewColumn | \{
      viewColumn: vscode.ViewColumn;
      preserveFocus?: boolean | undefined;
   },
   options?: vscode.WebviewPanelOptions & vscode.WebviewOptions
}

export type WebviewConnectionReturnType = [(message: any) => Promise<boolean>, (callback: (message: any, dispose: () => void) => void) => Promise<void>]`}
      />
   )
}

export default StartWebviewAnnotatedCode


import React, { useContext, useEffect, useState } from "react";
import WebView from "react-native-webview";
import { QuizStyles } from "../style";


export function EbaWebView({ url, style, setCookie, setState }) {


   const getCookiesJS = "ReactNativeWebView.postMessage(document.cookie)";

   return (
      <WebView
         onMessage={event => { setCookie(event.nativeEvent.data) }}
         injectedJavaScript={getCookiesJS}
         onNavigationStateChange={(state) => {
            if(setState){
               setState(state.url)
            }
         }}
         key={"quiz"} source={{ uri: url }} style={style} />
   )
}
import React, { useState, useEffect } from "react";
import * as API from './utils/api';


function App() {
    const result = API.FetchAPI(API.URLS.HELLOWORLD);
    return (
        <div>{result.data}</div>
    );
}

export default App;
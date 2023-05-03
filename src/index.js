import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './assets/css/tailwind.output.css'

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persister } from './store';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider>
            <PersistGate loading={null} persistor={persister}>
            <Suspense fallback={(<div>Loading</div>)}>
                <App />
            </Suspense>
            </PersistGate>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();

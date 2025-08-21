import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DockLayout} from 'rc-dock'
import LoadingComponent from './Loading';
import LayeredContainers from './SampleNestedComponent';

// Lazy load the components
const SampleForm = React.lazy(() => import('./SampleForm'));

let layout = {
  dockbox: {
    mode: 'horizontal',
    children: [
      {
        mode: 'vertical',
        size: 250,
        children: [
          {
            tabs: [{
              id: 't3',
              title: 'Sample Form',
              cached: true,
              content: (
               <h5>Hello World</h5>
              ), minWidth: 250, minHeight: 250,
            },
            ],
          },
        ]
      },
      {
        size: 500,
        mode: "vertical",
        panelLock: {panelStyle: 'main'},
        children: [
          {
            tabs: [{
              id: 'sample-nested-component',
              cached: true,
              title: 'Sample nested component',
              closable: true,
              content:
                <React.Suspense fallback={<LoadingComponent />}>
                  <LayeredContainers />
                </React.Suspense>

            }],
          },
          {
            tabs: [{
              id: 'sample-mui-form',
              cached: true,
              title: 'Sample MUI Form',
              closable: true,
              content:
                <React.Suspense fallback={<LoadingComponent />}>
                  <SampleForm />
                </React.Suspense>
            }]
          },
        ]
      },
    ]
  },
}


export default function App() {
    console.log("its rendered");
  return (
    <DockLayout defaultLayout={layout} style={{position: 'absolute', left: 10, top: 10, right: 10, bottom: 10}} />
  );
}
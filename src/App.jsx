import { Contact } from './components/Contact';
import { Menu } from './components/Menu';
import { Companies } from './components/Companies';
import { WhatIsGPT3 } from './components/WhatIsGPT3';
import { FeatureText } from './components/FeatureText';
import { FeatureApps } from './components/FeatureApps';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Contact />
      <Companies />
      <WhatIsGPT3 />
      <FeatureText />
      <FeatureApps />
    </div>
  );
}

export default App;

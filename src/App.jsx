import { Contact } from './components/Contact';
import { Menu } from './components/Menu';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Contact />
    </div>
  );
}

export default App;

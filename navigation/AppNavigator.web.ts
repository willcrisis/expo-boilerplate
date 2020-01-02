import { createBrowserApp } from '@react-navigation/web';
import MainNavigation from './MainNavigation';

MainNavigation.path = '';

const BrowserApp = createBrowserApp(MainNavigation, { history: 'hash' });

export default BrowserApp;

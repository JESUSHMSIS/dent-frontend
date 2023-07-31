
import { getEnvVariables } from './';

const { VITE_API_URL } = getEnvVariables()

export const getMenuItems = () => {
    return [
      { icon: 'settings-outline', title: 'Settings', path : 'otro' },
      { icon: 'people-outline', title: 'Users', path : 'users' },
      { icon: 'people-circle-outline', title: 'Accounts', path : 'accounts' },
      // { icon: 'chatbubble-outline', title: 'Messages', path : 'accounts' },
      // { icon: 'help-outline', title: 'Help', path : 'accounts' },
      // { icon: 'settings-outline', title: 'Settings', path : 'accounts' },
      // { icon: 'lock-closed-outline', title: 'Password', path : 'accounts' },
      { icon: 'log-out-outline', title: 'Sign Out', path : `${VITE_API_URL}/home/login` },
    ]
}


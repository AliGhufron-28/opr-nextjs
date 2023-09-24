// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import Laptop from 'mdi-material-ui/Laptop'
import HandCoinOutline from 'mdi-material-ui/HandCoinOutline'
import MessageProcessing from 'mdi-material-ui/MessageProcessing'
import AccountStar from 'mdi-material-ui/AccountStar'
import Cogs from 'mdi-material-ui/Cogs'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Users Data',
      icon: AccountGroup,
      children: [
        {
          title: 'Account User',
          path:'/account-user'
        },
        {
          title: 'Customer',
          path:'/customer'
        },
        {
          title: 'Driver',
          path:'/driver'
        },
        {
          title: 'Partner',
          path:'/partner'
        },
      ]
    },
    {
      title: 'Tracking',
      icon: Laptop,
      path: '/tracking'
    },
    {
      title: 'Finance',
      icon: HandCoinOutline,
      path: '/finance'
    },
    {
      title: 'Notification',
      icon: MessageProcessing,
      path: '/notification'
    },
    {
      title: 'Feedback',
      icon: AccountStar,
      path: '/feedback'
    },
    {
      title: 'Settings',
      icon: Cogs,
      path: '/settings'
    },
    
  ]
}

export default navigation

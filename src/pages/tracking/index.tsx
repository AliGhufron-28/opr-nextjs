

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'




// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import TableTracking from 'src/views/tracking/TableTracking'


const trackingView = () => {

  return (
    <Card>
      <Box>
        <TableTracking/>
      </Box>
    </Card>
  )
}

export default trackingView

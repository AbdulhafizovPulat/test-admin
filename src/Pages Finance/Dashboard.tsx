import { Card, CardContent, CardHeader } from "@mui/material";


export const Dashboard = () => ( 
  
  <Card  sx={{
    mt: 5,
    width: 1450,
    mr: 50,
    backgroundColor: "#17BF02",
    color: "#F1F1F9",
  }}>
    <CardHeader  title="Welcome to the react-admin" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}/>
    <CardContent sx={{width:750, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to   your computer, and will reset each time you reload.
    </CardContent>
    
  </Card>


);
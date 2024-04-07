import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import NewProjectForm from '../new-project-form';

// ----------------------------------------------------------------------

export default function NewProjectView() {
	const navigate = useNavigate();

  return (
    <Container className='flex flex-col h-full'>
      <div className='flex justify-between mb-5'>
				<Typography variant="h4">Create Project</Typography>
				<Button variant="contained" color="inherit" onClick={()=> {navigate('/projects')} }>
					Back
				</Button>
      </div>
			<NewProjectForm />
    </Container>
  );
}

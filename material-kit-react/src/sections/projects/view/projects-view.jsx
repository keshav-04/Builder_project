import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';
import { projects as  projects_data } from 'src/_mock/projects';

import ProjectCard from '../projects-card';
import ProjectSort from '../project-sort';
// ----------------------------------------------------------------------

export default function ProjectsView() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(projects_data);

  return (
    <Container className='flex flex-col'>
      <div className='flex justify-between mb-5'>
        <Typography variant="h4">Projects</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={()=> {navigate('/project/new')} }>
          New Project
        </Button>
      </div>
      <div className='flex justify-end mb-2'>
        <ProjectSort 
          projects={projects} 
          setProjects={setProjects}
        />
      </div>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

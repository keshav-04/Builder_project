import * as React from 'react';

import PropTypes from 'prop-types';

import { red } from '@mui/material/colors';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import LinearProgress from '@mui/material/LinearProgress';

export default function ProjectCard({ project }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="project" variant='rounded'>
              PR
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={project.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        {project.status === 'Active' &&
          <div className='flex flex-row'>
            <LinearProgress className='mx-4 h-2 w-full rounded self-center' variant="determinate" value={project.percentage} color='success'/>
            <Typography variant="body2" color="text.secondary" className='mr-4'>{project.percentage}%</Typography>
          </div>
        }

        <CardActions className='flex justify-between px-3.5'>
          <Chip 
            label={project.status}
            className={project.status === 'Completed' ? 'bg-green-100 text-green-600' : project.status === 'Inactive' ? 'bg-blue-100 text-blue-600' : project.status === 'Cancelled'? '' : 'bg-orange-100 text-orange-600'}
          />
          <Avatar key={project.manager} alt={project.manager} src={`/src/_mock/img/${project.manager}.jpg`} />
          {/* <AvatarGroup max={3}>
            {project.employees.map((employee, index) => (
              <Avatar key={index} alt={employee} src={`/src/_mock/img/${employee}.jpg`} />
            ))}
          </AvatarGroup> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object
}
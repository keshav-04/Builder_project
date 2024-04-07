import { useState } from 'react';

import PropTypes from 'prop-types';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { listClasses } from '@mui/material/List';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { projects as projects_data } from 'src/_mock/projects';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
	{ value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
];

export default function ProjectSort({ setProjects}) {
  const [open, setOpen] = useState(null);
	const [option, setOption] = useState(SORT_OPTIONS[0]);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleOptionChange = (event, val) => {
		setOption(val);
    setOpen(null);
  };

	const handleClose = () => {
		setOpen(null);
	};

	const filterData = (value) => {
		// console.log(value);
		// console.log(projects_data);
		const filteredData = projects_data.filter((project) => {
			if (value === 'All') {
				return project;
			} else {
				return project.status === value;
			}
		});
		// console.log(filteredData);
		setProjects(filteredData);
	}

	const handleSearch = (event, val) => {
		filterData(val.label);
	};		

  return (
    <div>
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {option.label}
        </Typography>
      </Button>

      <Menu
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              [`& .${listClasses.root}`]: {
                p: 0,
              },
            },
          },
        }}
      >
        {SORT_OPTIONS.map((option_) => (
          <MenuItem 
						key={option_.value} 
						selected={option_.value === 'newest'} 
						onClick={(e)=>{
							handleOptionChange(e, option_);
							handleSearch(e, option_);
						}}
					>
            {option_.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

ProjectSort.propTypes = {
  setProjects: PropTypes.func
}
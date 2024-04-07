import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function NewProjectForm() {
	const [formData, setFormData] = useState({
		id: '1',
		title: '',
		duration: '',
		description: '',
		employees: [],
		status: '',
	});

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
			...formData,
			employees: value,
		});
		console.log(formData.employees);
  };

  return (
    <Box className='flex-1' sx={{ minWidth: 275 }} >
      <Card variant="outlined" className='flex flex-col'>
				<CardContent className='mt-4'>
					<form className="flex flex-wrap gap-6">
						<div className="grid md:grid-cols-2 gap-y-8 gap-x-4 w-full md:px-16">
							<div className="flex-col md:flex md:flex-row items-center justify-around p-1">
								<div className="flex mr-4 w-full md:w-72 justify-end">
									<label htmlFor="projectName">
										Project Name <span className="text-red-800">*</span>:
									</label>
								</div>
								<TextField
									id="projectName"
									size="small"
									label="Project Name"
									className='w-full'
									value={formData.title}
									onChange={(e) => setFormData({...formData, title: e.target.value})}
								/>
							</div>
							<div className="flex-col md:flex md:flex-row items-center justify-around p-1">
								<div className="flex mr-4 w-full md:w-72 justify-end">
									<label htmlFor="manager">
										Manager <span className="text-red-800">*</span>:
									</label>
								</div>
								<TextField
									id="manager"
									size="small"
									label="Manager"
									className='w-full'
									value={formData.manager}
									onChange={(e) => setFormData({...formData, manager: e.target.value})}
								/>
							</div>
							<div className="flex-col md:flex md:flex-row items-center justify-around p-1">
								<div className="flex mr-4 w-full md:w-72 justify-end">
									<label htmlFor="duration">
										Duration (months) <span className="text-red-800">*</span>:
									</label>
								</div>
								<TextField
									id="duration"
									size="small"
									label="Duration"
									className='w-full'
									value={formData.duration}
									onChange={(e) => setFormData({...formData, duration: e.target.value})}
								/>
							</div>
							<div className="flex-col md:flex md:flex-row items-center justify-around p-1">
								<div className="flex mr-4 w-full md:w-72 justify-end">
									<label htmlFor="status">
										Status <span className="text-red-800">*</span>:
									</label>
								</div>
								<TextField
									select
									id="status"
									size="small"
									label="Status"
									className='w-full'
									value={formData.status}
									onChange={(e) => setFormData({...formData, status: e.target.value})}
								>
									<MenuItem value='Active'>Active</MenuItem>
									<MenuItem value='Completed'>Completed</MenuItem>
									<MenuItem value='Inactive'>Inactive</MenuItem>
									<MenuItem value='Cancelled'>Cancelled</MenuItem>
								</TextField>
							</div>
						</div>
						<div className="flex-col md:flex md:flex-row items-center justify-around p-1 md:px-16 w-full">
							<div className="flex mr-4 w-full md:w-48 justify-end align-top md:h-full">
								<label htmlFor="description">
									Description <span className="text-red-800">*</span>:
								</label>
							</div>
							<TextField
								multiline
								rows={3}
								id="description"
								label="Description"
								className='w-full'
								value={formData.description}
								onChange={(e) => setFormData({...formData, description: e.target.value})}
							/>
						</div>
						<div className="flex-col md:flex md:flex-row items-center justify-around p-1 md:px-16 w-full">
							<div className="flex mr-4 w-full md:w-48 justify-end">
								<label htmlFor="employees">
									Employees <span className="text-red-800">*</span>:
								</label>
							</div>
							<FormControl className='w-full'>
								<InputLabel id="employees-label">Employees</InputLabel>
								<Select
									labelId="employees-label"
									id="employees"
									className='w-full'
									multiple
									value={formData.employees}
									onChange={handleChange}
									input={<OutlinedInput label="Employees" />}
									renderValue={(selected) => selected.join(', ')}
								>
									{names.map((name) => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={formData.employees.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</form>		
				</CardContent>
				<CardActions className='flex justify-end px-3 md:px-14 my-2'>
				<Button variant='outlined'>Save</Button>
				</CardActions>
			</Card>
    </Box>
  );
}

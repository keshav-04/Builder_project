import { faker } from '@faker-js/faker';
import { Title } from '@mui/icons-material';

const PROJECT_NAME = [
  'Project 1',
  'Project 2',
  'Project 3',
  'Project 4',
  'Project 5',
  'Project 6',
  'Project 7',
  'Project 8',
  'Project 9',
  'Project 10',
];

const PROJECT_STATUS = [
  'Active',
  'Completed',
  'Inactive',
  'Active',
  'Active',
  'Completed',
  'Cancelled',
  'Active',
  'Inactive',
  'Cancelled',
];

const EMPLOYEE_NAME = ['1', '2', '3', '4', '5'];

const PROJECT_COLOR = [
  'orange',
  'green',
  'red',
  'blue',
  'purple',
  'yellow',
  'cyan',
  'pink',
  'indigo',
  'teal',
];

export const projects = [...Array(10)].map((_, index) => {
  const setIndex = index + 1;
  const employees_ = [];
  for(let i=0; i<4; i++) {
		employees_.push(
			Math.floor(Math.random() * 5)
		);
	}



  return {
    id: faker.string.uuid(),
    // cover: `/src/_mock/img/${setIndex}.jpg`,
    title: PROJECT_NAME[index],
    color: PROJECT_COLOR[index],
    status: PROJECT_STATUS[index],
    employees: employees_,
    percentage: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
  };
});

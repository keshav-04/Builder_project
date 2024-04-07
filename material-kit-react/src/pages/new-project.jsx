import { Helmet } from 'react-helmet-async';

import { NewProjectView } from 'src/sections/new-project/view';

// ----------------------------------------------------------------------

export default function NewProjectPage() {
  return (
    <>
      <Helmet>
        <title> New Project </title>
      </Helmet>

      <NewProjectView />
    </>
  );
}

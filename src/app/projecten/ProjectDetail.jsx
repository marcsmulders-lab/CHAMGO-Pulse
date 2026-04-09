import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  // Placeholder for fetching project details by id
  return (
    <div>
      <h2>Project Detail Pagina</h2>
      <p>Project ID: {id}</p>
      {/* Add more project details here */}
    </div>
  );
}

import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="mb-8 text-[36px] font-medium">404 - Page Not Found</h1>
      <button className="w-[180px]" onClick={() => navigate('/', { replace: true })}>
        Back Home
      </button>
    </div>
  );
}

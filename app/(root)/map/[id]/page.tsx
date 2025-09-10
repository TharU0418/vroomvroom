import Location from '@/components/Location';

interface PageProps {
  params: {
    id: string;
  };
}

// ✅ Capitalized function name and typed server component
export default function Page({ params }: PageProps) {
  return <Location params={params} />;
}

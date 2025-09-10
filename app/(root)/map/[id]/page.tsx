// import Location from '@/components/Location';

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// // ✅ Capitalized function name and typed server component
// export default function Page({ params }: PageProps) {
//   return <Location params={params} />;
// }

import { type Metadata } from 'next';
import Location from '@/components/Location';

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return <Location params={params} />;
}

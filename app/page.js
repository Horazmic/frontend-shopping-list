'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/list-list');
  }, [router]);

  return <div className="flex min-h-screen bg-gray-100"></div>;   
}

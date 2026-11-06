import { useEffect } from 'react';

export default function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}

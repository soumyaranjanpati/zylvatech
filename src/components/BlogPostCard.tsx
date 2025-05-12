import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, UserCircle } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  author?: string;
  date?: string;
  dataAiHint?: string;
}

export default function BlogPostCard({ title, summary, imageSrc, imageAlt, link, author = "Cobee Team", date = "Recently", dataAiHint }: BlogPostCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <Link href={link} className="block">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
          data-ai-hint={dataAiHint}
        />
      </Link>
      <CardHeader>
        <Link href={link}>
          <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">{title}</CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-1">
            <UserCircle className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4 line-clamp-3">{summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={link}>Read Full Article &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

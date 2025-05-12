import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  link: string; // Assuming each case study might have a dedicated page or section
  dataAiHint?: string;
}

export default function CaseStudyCard({ title, summary, imageSrc, imageAlt, link, dataAiHint }: CaseStudyCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
        data-ai-hint={dataAiHint}
      />
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{summary}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={link}>Read More &rarr;</Link>
        </Button>
      </div>
    </Card>
  );
}

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
}

export default function ServiceCard({ icon, title, description, imageSrc, imageAlt, dataAiHint }: ServiceCardProps) {
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
      <CardHeader className="flex flex-row items-start gap-4 pt-6">
        <div className="p-3 bg-primary/10 rounded-full mt-1">
          {icon}
        </div>
        <div>
          <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-md">{description}</p>
      </CardContent>
    </Card>
  );
}

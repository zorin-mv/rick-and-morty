import { Banner } from 'widgets/banner';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => (
  <div className={className}>
    <Banner title="Page Not Found 404" />
  </div>
);

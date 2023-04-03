import { Input } from 'shared/ui/input';
import { Banner } from 'widgets/banner';

export const CharacterListPage = () => {
  return (
    <div>
      <Banner title="Rick And Morty Characters" />
      <div className="container">
        <Input placeholder="Search" disabled />
      </div>
    </div>
  );
};

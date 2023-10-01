interface Page {
  name: string;
  path: string;
}

interface Props {
  page1: Page;
  page2: Page;
  page3: Page;
  module: string;
  component: React.ReactElement;
}

export const ModuleContainer = (props: Props) => {
  const { page1, page2, page3, module, component } = props;
  return (
    <>
      <nav className="mb-2" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href={page1.path}>{page1.name}</a>
          </li>
          <li className="breadcrumb-item">
            <a href={page2.path}>{page2.name}</a>
          </li>
          <li className="breadcrumb-item active">{page3.name}</li>
        </ol>
      </nav>
      <div className="mb-2">
        <div className="row g-2 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">{module}</h2>
          </div>
        </div>
        {component}
      </div>
    </>
  );
};

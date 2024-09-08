import './styles.scss';

interface IVerticalLayoutProps {
  collapse?: boolean;
}

export function VerticalLayout({ collapse }: IVerticalLayoutProps) {
  return (
    <div className="vertical-layout-container">
      <div
        className={`vertical-layout-left-content ${collapse ? 'collapse' : ''}`}
      >
        <div className="vertical-layout-avatar" />
        <div className="vertical-layout-line" />
        <div className="vertical-layout-line" />
      </div>

      <div className="vertical-layout-right-content">
        <div className="vertical-layout-content" />
      </div>
    </div>
  );
}

import './styles.scss';

export function HorizontalLayout() {
  return (
    <div className="horizontal-layout-container">
      <div className="horizontal-layout-top-content">
        <div className="horizontal-layout-avatar" />
        <div className="horizontal-layout-line" />
        <div className="horizontal-layout-line" />
      </div>

      <div className="horizontal-layout-bottom-content">
        <div className="horizontal-layout-content" />
      </div>
    </div>
  );
}
